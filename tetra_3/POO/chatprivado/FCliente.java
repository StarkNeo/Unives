import java.awt.BorderLayout;
import java.awt.FlowLayout;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import javax.swing.JButton;
import javax.swing.JLabel;
import javax.swing.JOptionPane;
import javax.swing.JPanel;
import javax.swing.JTextArea;
import javax.swing.JTextField;
import javax.swing.WindowConstants;

public class FCliente extends javax.swing.JFrame {
    private JPanel panelConexion;
    private JTextField textIP;
    private JTextField textNombre;
    private JTextField textDestinatario;
    private JButton buttonEnviar;
    private JTextField textMensaje;
    private JButton buttonConectar;
    private JLabel labelNombre;
    private JLabel labelIP;
    private JLabel labelDestinatario;
    private JLabel labelMensaje;
    private JTextArea textMensajes;
    private JPanel panelMensaje;
    private Cliente cliente;

    public static void main(String[] args) {
        FCliente frame = new FCliente();
        frame.setVisible(true);
    }

    public FCliente() {
        initGUI();
        this.cliente = new Cliente(this);
    }

    public JTextArea getTextMensajes() {
        return this.textMensajes;
    }

    private void initGUI() {
        setDefaultCloseOperation(WindowConstants.DISPOSE_ON_CLOSE);
        setTitle("Mini Chat Cliente");
        getContentPane().setLayout(new BorderLayout());
        {
            panelConexion = new JPanel();
            panelConexion.setLayout(new FlowLayout());
            getContentPane().add(panelConexion, BorderLayout.NORTH);
            {
                labelIP = new JLabel();
                panelConexion.add(labelIP);
                labelIP.setText("IP:");
            }
            {
                textIP = new JTextField();
                panelConexion.add(textIP);
                textIP.setText("127.0.0.1");
            }
            {
                labelNombre = new JLabel();
                panelConexion.add(labelNombre);
                labelNombre.setText("Nombre de Usuario");
            }
            {
                textNombre = new JTextField();
                panelConexion.add(textNombre);
                textNombre.setPreferredSize(new java.awt.Dimension(100, 20));
               
            }
            {
                buttonConectar = new JButton();
                panelConexion.add(buttonConectar);
                buttonConectar.setText("Conectar");
                buttonConectar.addActionListener(new ActionListener() {
                    public void actionPerformed(ActionEvent evt) {
                        BConectarActionPerformed(evt);
                    }
                });
            }
          
        }
        {
            panelMensaje = new JPanel();
            panelMensaje.setLayout(new FlowLayout());
            getContentPane().add(panelMensaje, BorderLayout.SOUTH);
            {
                labelDestinatario = new JLabel();
                panelMensaje.add(labelDestinatario);
                labelDestinatario.setText("Destinatario");
            }
            {
                textDestinatario = new JTextField();
                panelMensaje.add(textDestinatario);
                textDestinatario.setPreferredSize(new java.awt.Dimension(100, 20));
                textDestinatario.setEnabled(false);
            }
            {
                labelMensaje = new JLabel();
                panelMensaje.add(labelMensaje);
                labelMensaje.setText("Mensaje");
            }
            {
                textMensaje = new JTextField();
                panelMensaje.add(textMensaje);
                textMensaje.setEnabled(false);
                textMensaje.setPreferredSize(new java.awt.Dimension(80, 50));
            }
            {
                buttonEnviar = new JButton();
                panelMensaje.add(buttonEnviar, BorderLayout.EAST);
                buttonEnviar.setText("Enviar");
                buttonEnviar.addActionListener(new ActionListener() {
                    public void actionPerformed(ActionEvent evt) {
                        buttonEnviarActionPerformed(evt);
                    }
                });
                buttonEnviar.setEnabled(false);
            }
        }
        {
            textMensajes = new JTextArea();
            getContentPane().add(textMensajes, BorderLayout.CENTER);
        }
        setSize(800, 300);
    }

    private void BConectarActionPerformed(ActionEvent evt) {
        if (!this.textNombre.getText().equals("")) {
            if (this.cliente.conectar(this.textIP.getText(), this.textNombre.getText())) {
                this.buttonConectar.setEnabled(false);
                this.textNombre.setEnabled(false);
                this.textIP.setEnabled(false);
                this.textMensaje.setEnabled(true);
                this.textDestinatario.setEnabled(true);
                this.buttonEnviar.setEnabled(true);
            } else {
                JOptionPane.showMessageDialog(this, "Error de servidor", "Error", JOptionPane.ERROR_MESSAGE);
            }
        } else {
            JOptionPane.showMessageDialog(this, "Inserte Nombre", "Error", JOptionPane.ERROR_MESSAGE);
        }
    }

    private void buttonEnviarActionPerformed(ActionEvent evt) {
        String destinatario = this.textDestinatario.getText();
        if (!destinatario.equals("")) {
            String mensaje = destinatario + ": " + this.textMensaje.getText();
            this.cliente.enviar(mensaje);
            this.textMensaje.setText("");
        } else {
            JOptionPane.showMessageDialog(this, "Inserte Destinatario", "Error", JOptionPane.ERROR_MESSAGE);
        }
    }
}
