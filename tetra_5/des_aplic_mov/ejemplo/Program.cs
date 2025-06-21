//En el programa principal, inyectamos la dependencia en tiempo de ejecucion.
class Program {
    static void Main() {
        INotificacionService servicio = new EmailService(); // Se puede cambiar a SMSService sin modificar Notificador.
        Notificador notificador = new Notificador(servicio);

        notificador.Notificar("Hola, este es un mensaje de prueba.");
    }
}