public class Cuadrado {
    protected int lado;

    public Cuadrado(int lado) {
        this.lado = lado;
    }
    
    public double getArea() {
        return Math.pow(this.lado,2);
    }

   
    public static void main(String[] args) {
        Cuadrado cuadrado = new Cuadrado(10);
        System.out.println(cuadrado.getArea());
    }
}
