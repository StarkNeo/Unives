// Implementamos la notificacion por SMS.
public class SMSService : INotificacionService {
    public void EnviarMensaje(string mensaje) {
        Console.WriteLine($"Enviando SMS: {mensaje}");
    }
}
