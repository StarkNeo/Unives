import java.io.IOException;
import java.io.ObjectInputStream;
import java.io.ObjectOutputStream;
import java.net.ServerSocket;
import java.net.Socket;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

public class Servidor {
    private ServerSocket serverSocket;
    private ArrayList<HiloServidor> hilosServidor = new ArrayList<>();
    private Map<String, HiloServidor> clientesConectados = new HashMap<>();

    public void iniciarServidor() {
        try {
            this.serverSocket = new ServerSocket(5000);
            int contador = 1;
            while (true) {
                System.out.println("Esperando nueva conexión");
                Socket socket = serverSocket.accept();
                System.out.println("Conexión " + contador +
                        " desde: " + socket.getInetAddress().getHostName() + " IP: "
                        + socket.getInetAddress().getHostAddress());
                contador++;

                ObjectOutputStream output = new ObjectOutputStream(socket.getOutputStream());
                ObjectInputStream input = new ObjectInputStream(socket.getInputStream());

                // Pedir nombre de usuario
                //output.writeObject("Introduce nombre de usuario: ");
                String nombreUsuario = (String) input.readObject();
                if (clientesConectados.containsKey(nombreUsuario)) { 
                    output.writeObject("Nombre de usuario ya en uso. Conexión rechazada."); 
                    socket.close(); 
                    continue; 
                }
                
                System.out.println(nombreUsuario+" se ha conectado");

                // Crear y empezar hilo para el cliente
                HiloServidor hiloServidor = new HiloServidor(nombreUsuario, input, output, this);
                clientesConectados.put(nombreUsuario, hiloServidor);
                hilosServidor.add(hiloServidor);
                hiloServidor.start();
                
                // Enviar lista de usuarios conectados al nuevo cliente
                String connectedUsers = getAllConnectedUsers();
                output.writeObject("Usuarios conectados:\n" + connectedUsers);

                enviarClienteConectado(nombreUsuario);
            }
        } catch (IOException | ClassNotFoundException e) {
            e.printStackTrace();
        }
    }

    public synchronized String getAllConnectedUsers() {
        StringBuilder usersList = new StringBuilder();
        for (String username : clientesConectados.keySet()) {
            usersList.append(username).append("\n");
        }
        return usersList.toString();
    }

    public void enviarClienteConectado(String nombreUsuarioConectado) {
        for (HiloServidor hilo : hilosServidor) {
            hilo.enviar("Bienvenido "+nombreUsuarioConectado);
        }
    }

    public void enviarMensaje(String mensaje) {
        for (HiloServidor hilo : hilosServidor) {
            hilo.enviar(mensaje);
        }
    }

    public synchronized void enviarMensajePrivado(String mensaje, String destinatario) {
        HiloServidor cliente = clientesConectados.get(destinatario);
        if (cliente != null) {
            cliente.enviar(mensaje);
        } else {
            System.out.println("Cliente " + destinatario + " no encontrado.");
        }
    }

    public static void main(String[] args) {
        Servidor servidor = new Servidor();
        servidor.iniciarServidor();
    }
}
