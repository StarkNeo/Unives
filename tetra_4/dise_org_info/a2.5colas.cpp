#include <cstdlib>
#include <iostream>
#include <iomanip>
#include <string>

#define MaxTamC 6

using namespace std;

typedef int enteros;  // Definimos un alias para el tipo de datos 'int'.

// Definición de la clase Cola para manejar una cola circular.
class Cola {
    protected:
        int frente, final;  // Indices para la parte frontal y final de la cola.
        enteros A[MaxTamC]; // Arreglo para almacenar los elementos de la cola.

    public:
        Cola();  // Constructor
        ~Cola(); // Destructor
        void VaciaC();  // Inicializa la cola como vacia.
        bool AgregaC(enteros e);  // Agrega un elemento a la cola.
        void BorraC();  // Elimina un elemento de la cola.
        void MostrarListaC();  // Muestra los elementos de la cola.
        enteros PrimeroC();  // Devuelve el primer elemento de la cola.
        bool EsVaciaC();  // Verifica si la cola esta vacia.
        void ColaConNegativos(Cola& negativos);  // Crea una nueva cola con los elementos de la cola actual en forma negativa.

    private:
        bool EstaLlenaC();  // Verifica si la cola esta llena.
};

// Implementacion del constructor, inicializa la cola vacia.
Cola::Cola() {
    VaciaC();
}

// Implementación del destructor. Solo se necesita si se usan estructuras dinamicas.
Cola::~Cola() {
    // Implementar solo en caso de estructura dinamica.
}

// Inicializa la cola como vacia.
void Cola::VaciaC() {
    frente = 0;
    final = 0;
}

// Agrega un elemento a la cola y devuelve true si es exitoso, devuelve false si la cola esta llena.
bool Cola::AgregaC(enteros e) {
    if (EstaLlenaC()) {
        cout << "desbordamiento cola" << endl;
        return false;
    }
    final = (final + 1) % MaxTamC;
    A[final] = e;
    return true;
}

// Muestra todos los elementos de la cola.
void Cola::MostrarListaC() {
    if (EsVaciaC()) {
        cout << "La lista no contiene elementos" << endl;
        return;// Regresa al menu principal en caso de cola vacia.
    }
    int i = (frente + 1) % MaxTamC;
    while (i != (final + 1) % MaxTamC) {
        cout << A[i] << endl;
        i = (i + 1) % MaxTamC;
    }
}

// Devuelve el primer elemento de la cola.
enteros Cola::PrimeroC() {
    if (EsVaciaC()) {
        cout << "Elemento frente de una cola vacia";
        return 0;  // Regresa al menu principal en caso de cola vacia.
    }
    return (A[(frente + 1) % MaxTamC]);
}

// Verifica si la cola esta vacia.
bool Cola::EsVaciaC() {
    return (frente == final);
}

// Verifica si la cola esta llena.
bool Cola::EstaLlenaC() {
    return (frente == (final + 1) % MaxTamC);
}

// Elimina un elemento de la cola.
void Cola::BorraC() {
    int removido;
    if (EsVaciaC()) {
        cout << "Eliminacion de una cola vacia" << endl;
        return;
    }
    removido = A[frente + 1];
    frente = (frente + 1) % MaxTamC;
    cout << "El elemento: " << removido << " fue removido" << endl;
    MostrarListaC();
}

// Crea una nueva cola con los elementos de la cola actual en forma negativa.
void Cola::ColaConNegativos(Cola& negativos) {
    if (this->EsVaciaC()) {
        cout << "La lista no contiene elementos" << endl;
        return;// Regresa al menu principal en caso de cola vacia.
    }

    int i = (frente + 1) % MaxTamC;
    while (i != (final + 1) % MaxTamC) {
        negativos.AgregaC(-A[i]);
        i = (i + 1) % MaxTamC;
    }
}

// Muestra el menu de opciones.
void Menu() {
    string servicios[6] = {"Crear Cola", "Agregar elementos(Encolar)", "Remover elementos(Desencolar)", "Mostrar elementos", "Crear cola con negativos", "Salir"};
    cout << "\nPrograma para la captura de 5 numeros enteros:\n";
    cout << left << setw(10) << "Opcion" << setw(10) << "Accion" << endl;
    cout << "----------------------------------------" << endl;
    for (int j = 0; j < 6; j++) {
        cout << left << setw(10) << j + 1 << setw(5) << servicios[j] << endl;
    }
    cout << "----------------------------------------" << endl;
}

// Funcion principal del programa.
int main() {
    Cola cola;
    Cola negativos;
    int opcion, valor;
    bool validar;

    do {
        Menu();
        cout << "Capture su opcion: ";
        cin >> opcion;

        switch (opcion) {
            case 1:
                cola.EsVaciaC();  // Verifica si la cola esta vacia.
                cout << "Cola creada" << endl;
                break;
            case 2:
                cout << "Ingrese el valor a encolar: ";
                cin >> valor;
                validar = cola.AgregaC(valor);
                if (validar) {
                    cout << "Valor encolado" << endl;
                } else {
                    cout << "No se agrego el elemento" << endl;
                }
                break;
            case 3:
                cola.BorraC();
                cout << "Valor desencolado" << endl;
                break;
            case 4:
                cout << "Elementos en la cola: " << endl;
                cola.MostrarListaC();
                break;
            case 5:
                negativos.VaciaC();
                cola.ColaConNegativos(negativos);
                cout << "Nueva cola con negativos creada: " << endl;
                negativos.MostrarListaC();
                break;
            case 6:
                cout << "Saliendo..." << endl;
                break;
            default:
                cout << "Opcion no valida" << endl;
        }
    } while (opcion != 6);

    return 0;
}

