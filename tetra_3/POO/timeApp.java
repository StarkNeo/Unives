
//Librerias para crear intefaces de usuario
import javax.swing.*;
import java.awt.*;
//Libreria para manipular fechas y horas
import java.util.Calendar;

//Librerias para establecer intervalos de ejecucion de tareas o repeticiones a intervalos de tiempo
import java.util.Timer;
import java.util.TimerTask;

//El applet crea un contenedor de tipo ventana como interface de usuario con la clase JFrame
public class timeApp extends JFrame {
    //Crear un espacio donde se desplegara la hora con la clase JLabel
    private JLabel timeLabel;
    private JLabel dateLabel;

    public timeApp() {
        // Configuracion de ventana
        //Titulo en la ventana
        setTitle("Fecha y hora Applet");
        //Tamaño de la ventana
        setSize(300, 200);
        //Al cerrar la ventana terminar la aplicacion
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setLayout(new FlowLayout());

        // Crear una etiqueta donde aparecera la hora y la fecha
        timeLabel = new JLabel();
        dateLabel = new JLabel();
        //Establecer tipo de fuente y tamaño
        timeLabel.setFont(new Font("SansSerif", Font.BOLD, 24));
        dateLabel.setFont(new Font("SansSerif", Font.BOLD, 24));
        add(timeLabel);
        add(dateLabel);

        // Crear un nuevo objeto de tiempo y guardarlo en la variable timer
        Timer timer = new Timer();      
        
        // Configurar una tarea para que se repita cada 1000 milisegundos(1s)
        timer.scheduleAtFixedRate(new TimerTask() {
            @Override
            public void run() {
                // Obtener la hora con la libreria Calendar y almacenarla en la variable calendar
                Calendar calendar = Calendar.getInstance();
                //Extraer el año
                int year = calendar.get(Calendar.YEAR);
                //Extraer el mes
                int month = calendar.get(Calendar.MONTH);
                //Extraer el dia
                int day= calendar.get(Calendar.DAY_OF_MONTH);
                // Extraer la hora de la variable calendar
                int hour = calendar.get(Calendar.HOUR_OF_DAY);
                //Extraer el minuto de la variable calendar
                int minute = calendar.get(Calendar.MINUTE);
                //Extraer los segundo de la variable calendar
                int second = calendar.get(Calendar.SECOND);                
                // Mostrar la hora actual en la etiqueta timeLabel y la fecha en su dateLabel
                timeLabel.setText(String.format("Hora: %02d:%02d:%02d", hour, minute, second));
                dateLabel.setText(String.format("Fecha: %02d-%02d-%02d", year, month, day));
            }
        }, 0, 1000);

        // Mostrar la ventana
        setVisible(true);
    }
    //Ejecutar la aplicacion timeApp
    public static void main(String[] args) {        
        SwingUtilities.invokeLater(() -> new timeApp());
    }
}
