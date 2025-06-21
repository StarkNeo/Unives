// Implementamos la notificación por Email.
public class EmailService : INotificacionService {
    public void EnviarMensaje(string mensaje) {
        Console.WriteLine($"Enviando Email: {mensaje}");
    }
}