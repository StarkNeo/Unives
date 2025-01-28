class Sobrecarga {
    
    // Método sin parámetros
    void demoSobrec() {
        System.out.println("Sin parámetros");
    }
    
    // Método con un parámetro int
    void demoSobrec(int a) {
        System.out.println("Un parámetro: " + a);
    }
    
    // Método con dos parámetros int
    void demoSobrec(int a, int b) {
        System.out.println("Dos parámetros: " + a + ", " + b);
        System.out.println("Resultado de demoSobrec(" + a + "," + b + ") es: " + (a + b));
    }
    
    // Método con dos parámetros double
    void demoSobrec(double a, double b) {
        System.out.println("Dos parámetros tipo double: " + a + ", " + b);
        System.out.println("Resultado de demoSobrec(" + a + "," + b + ") es: " + (a + b));
    }

    public static void main(String[] args) {
        // Crear una instancia de DemoSobrecarga
        Sobrecarga obj = new Sobrecarga();

        // Llamar a los métodos sobrecargados
        obj.demoSobrec();
        obj.demoSobrec(2);
        obj.demoSobrec(4, 6);
        obj.demoSobrec(1.1, 2.2);
    }
}
