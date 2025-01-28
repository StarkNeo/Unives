import java.io.IOException;
import java.io.ObjectInputStream;
import java.io.ObjectOutputStream;
import java.net.ServerSocket;
import java.net.Socket;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

public class Servidor {
    private Socket socket;
    private ServerSocket serverSocket;
    private String nombreUsuarioConectado;
    private ArrayList<HiloServidor> hilosServidor = new ArrayList<HiloServidor>();
    private Map<String,HiloServidor> clientesConectados = new HashMap<>();

    public void iniciarServidor() {
        try {
            this.serverSocket = new ServerSocket(5000);
            int contador = 1;
            while (true) {
                System.out.println("Esperando nueva conexión");
                this.socket = serverSocket.accept();
                System.out.println("Conexión " + contador +
                        " desde: " + socket.getInetAddress().getHostName() + " IP: "
                        + socket.getInetAddress().getHostAddress());
                contador++;
                ObjectOutputStream output = new ObjectOutputStream(this.socket.getOutputStream());
                ObjectInputStream input = new ObjectInputStream(this.socket.getInputStream());
                
                //Pedir nombre de usuario
                //output.writeObject("Introduce nombre de usuario: ");
                //String nombreUsuario = (String) input.readObject();
                this.nombreUsuarioConectado = (String) input.readObject();
                System.out.println(this.nombreUsuarioConectado + " se ha conectado");
                //HiloServidor hiloServidor = new HiloServidor(nombreUsuario, clientesConectados.put(nombreUsuario, hiloServidor));
                HiloServidor hiloServidor = new HiloServidor(this.nombreUsuarioConectado, input, output, this);
                hiloServidor.start();
                this.hilosServidor.add(hiloServidor);
                this.enviarClienteConectado();
            }
        } catch (IOException | ClassNotFoundException e) {
            e.printStackTrace();
        }
    }

    public void enviarClienteConectado()
    {
        for(HiloServidor hilo : this.hilosServidor)
        {   
          hilo.enviar(this.nombreUsuarioConectado+" se ha conectado");  
       }
    }

    public void enviarMensaje(String mensaje)
    {
        for(HiloServidor hilo : this.hilosServidor)
        {   
            hilo.enviar(mensaje);   
        }
     }

     public synchronized void enviarMensajePrivado(String mensaje, String destinatario) { HiloServidor cliente = clientesConectados.get(destinatario); if (cliente != null) { cliente.enviar(mensaje); } else { System.out.println("Cliente " + destinatario + " no encontrado."); } }

    public static void main(String[] args) 
    {
        Servidor servidor = new Servidor();
        servidor.iniciarServidor();
    }
}
