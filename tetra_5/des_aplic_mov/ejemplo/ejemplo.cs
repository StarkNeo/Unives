//Definimos la interfaz que representa el servicio de notificacion.
public interface INotificacionService {
    void EnviarMensaje(string mensaje);
}

//Implementamos la notificacion por Email.
public class EmailService : INotificacionService {
    public void EnviarMensaje(string mensaje) {
        Console.WriteLine($"Enviando Email: {mensaje}");
    }
}

//Implementamos la notificacion por SMS.
public class SMSService : INotificacionService {
    public void EnviarMensaje(string mensaje) {
        Console.WriteLine($"Enviando SMS: {mensaje}");
    }
}

//La clase Notificador depende de INotificacionService.
public class Notificador {
    private readonly INotificacionService _servicioNotificacion;

    public Notificador(INotificacionService servicioNotificacion) {
        _servicioNotificacion = servicioNotificacion;
    }

    public void Notificar(string mensaje) {
        _servicioNotificacion.EnviarMensaje(mensaje);
    }
}

//En el programa principal, inyectamos la dependencia en tiempo de ejecucion.
class Program {
    static void Main() {
        INotificacionService servicio = new EmailService(); // Se puede cambiar a SMSService sin modificar Notificador.
        Notificador notificador = new Notificador(servicio);

        notificador.Notificar("Hola, este es un mensaje de prueba.");
    }
}