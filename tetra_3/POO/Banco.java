public class Banco {
    // Atributo estático
    private static int numeroDeCuentas = 0;

    // Atributos de instancia
    @SuppressWarnings("unused")
    private String titular;
    private double saldo;

    // Constructor
    public Banco(String titular, double saldoInicial) {
        this.titular = titular;
        this.saldo = saldoInicial;
        numeroDeCuentas++;  // Incrementa el contador cada vez que se crea una cuenta
    }

    // Método estático
    public static int getNumeroDeCuentas() {
        return numeroDeCuentas;
    }

    // Método de instancia
    public void depositar(double monto) {
        saldo += monto;
    }

    public double getSaldo() {
        return saldo;
    }

    public static void main(String[] args) {
        Banco cuenta1 = new Banco("Steve Rogers", 1000);
        Banco cuenta2 = new Banco("Wanda Maximov", 1500);
        Banco cuenta3 = new Banco("Tony Stark", 1500);
        
        System.out.println("Número de cuentas: " + Banco.getNumeroDeCuentas());
        System.out.println("Saldo de la cuenta de Steve Rogers: " + cuenta1.getSaldo());
        System.out.println("Saldo de la cuenta de Wanda Maximov: " + cuenta2.getSaldo());
        System.out.println("Saldo de la cuenta de Tony Stark: " + cuenta3.getSaldo());
    }
}
