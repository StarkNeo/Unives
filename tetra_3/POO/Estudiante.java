public class Estudiante extends Persona {
    private String matricula;

    public Estudiante(String nombre, int edad, String matricula) {
        super(nombre, edad);
        this.matricula = matricula;
    }
   
    @Override
    public void mostrarInformacion() {
        super.mostrarInformacion();
        System.out.println("Matrícula: " + matricula);
    }

    public static void main(String[] args) {
        Estudiante estudiante = new Estudiante("Jesus Hernandez", 43, "A123456");
        estudiante.mostrarInformacion();
    }
}



