public class Rectangulo {
    protected int altura;
    protected int base;

    public Rectangulo(int base, int altura){
        this.base = base;
        this.altura = altura;
    }

    public double getArea(){
        return this.altura*this.base/2;
    }

    public static void main(String[] args){
        Rectangulo rectangulo1= new Rectangulo(5,10);
        System.out.println(rectangulo1.getArea());
    }
}
