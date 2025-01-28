import java.io.IOException;
import java.io.ObjectInputStream;
import java.io.ObjectOutputStream;

public class HiloServidor extends Thread {
    private ObjectOutputStream output;
    private ObjectInputStream input;
    private Servidor servidor;
    private boolean activo = true;
    private String nombreUsuario;

    public HiloServidor(String nombreUsuario, ObjectInputStream input, ObjectOutputStream output, Servidor servidor) {
        super(nombreUsuario);
        this.nombreUsuario = nombreUsuario;
        this.input = input;
        this.output = output;
        this.servidor = servidor;
    }
    
    public void run() {
        while (this.activo) {
            try {
                String mensaje = (String) this.input.readObject();
                // Asume que el mensaje tiene el formato "destinatario: mensaje"
                String[] partes = mensaje.split(": ", 2);
                if (partes.length == 2) {
                    String destinatario = partes[0].trim();
                    String mensajeReal = partes[1].trim();
                    servidor.enviarMensajePrivado(nombreUsuario + " dice: " + mensajeReal, destinatario);
                } else {
                    this.output.writeObject("Formato incorrecto. Usa 'destinatario: mensaje'.");
                }
            } catch (IOException | ClassNotFoundException e) {
                this.activo = false;
                e.printStackTrace();
            }
        }
        servidor.enviarMensaje(nombreUsuario + " se ha desconectado");
        try {
            input.close();
            output.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
    


    public void enviar(String mensaje) {
        try {
            this.output.writeObject(mensaje);
            this.output.flush();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
