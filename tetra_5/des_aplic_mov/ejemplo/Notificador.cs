//La clase Notificador depende de INotificacionService (abstraccion).
public class Notificador {
    private readonly INotificacionService _servicioNotificacion;

    public Notificador(INotificacionService servicioNotificacion) {
        _servicioNotificacion = servicioNotificacion;
    }

    public void Notificar(string mensaje) {
        _servicioNotificacion.EnviarMensaje(mensaje);
    }
}
