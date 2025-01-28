import java.io.ObjectInputStream;
import java.io.ObjectOutputStream;
import java.net.Socket;
import javax.swing.JTextArea;

public class Cliente {
    private Socket socket;
    private ObjectOutputStream output;
    private ObjectInputStream input;
    private JTextArea textMensajes;

    public Cliente(FCliente fCliente) {
        this.textMensajes = fCliente.getTextMensajes();
    }

    public boolean conectar(String ip, String nombreUsuario) {
        try {
            this.socket = new Socket(ip, 5000);
            this.output = new ObjectOutputStream(socket.getOutputStream());
            this.input = new ObjectInputStream(socket.getInputStream());
            this.output.writeObject(nombreUsuario);
            
            // Iniciar un thread para escuchar mensajes
            new Thread(() -> {
                try {
                    while (true) {
                        String mensajeRecibido = (String) input.readObject();
                        textMensajes.append(mensajeRecibido + "\n");
                    }
                } catch (Exception e) {
                    e.printStackTrace();
                }
            }).start();
            
            return true;
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }

    public void enviar(String mensaje) {
        try {
            this.output.writeObject(mensaje);
            this.output.flush();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
