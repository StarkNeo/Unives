#include <iostream>
#include <string>
#include <limits> // Para std::numeric_limits

using namespace std;

// Definición del tipo enumerado TOrden para especificar el orden (ASCendente o DESCendente)
enum TOrden { ASC, DESC };

// Estructura para representar un pasajero con nombre y boleto
struct pasajero {
    string nombre;
    int boleto;
};

// Estructura para representar un nodo en la lista doblemente enlazada
struct nodo {
    pasajero dato;
    nodo* sig; // Puntero al siguiente nodo
    nodo* ant; // Puntero al nodo anterior
};

nodo* inicio = NULL; // Puntero al inicio de la lista

// Función para insertar un nuevo pasajero al final de la lista
void insertaFinal(string nombre, int boleto) {
    nodo* nuevo = new nodo; // Crear un nuevo nodo
    nuevo->dato.nombre = nombre; // Asignar el nombre al dato del nodo
    nuevo->dato.boleto = boleto; // Asignar el boleto al dato del nodo
    nuevo->sig = NULL; // El siguiente nodo es NULL porque será el último nodo
    nuevo->ant = NULL; // El nodo anterior es NULL, se actualizará si no es el primer nodo

    if (inicio == NULL) {
        inicio = nuevo; // Si la lista está vacía, el nuevo nodo es el inicio
    } else {
        nodo* temp = inicio;
        while (temp->sig != NULL) {
            temp = temp->sig; // Avanzar al último nodo
        }
        temp->sig = nuevo; // El último nodo apunta al nuevo nodo
        nuevo->ant = temp; // El nuevo nodo apunta al nodo anterior
    }
}

// Función para ordenar la lista por nombre
void ordenarLista(TOrden orden) {
    nodo* head = inicio;
    if (inicio == NULL || inicio->sig == NULL) return; // Si la lista está vacía o tiene un solo elemento, no hay nada que ordenar

    bool swapped;
    nodo* iterador;
    nodo* posicionAct = NULL;

    do {
        swapped = false;
        iterador = inicio;

        while (iterador->sig != posicionAct) {
            if ((orden == ASC && iterador->dato.nombre > iterador->sig->dato.nombre) ||
                (orden == DESC && iterador->dato.nombre < iterador->sig->dato.nombre)) {
                swap(iterador->dato, iterador->sig->dato); // Intercambiar los datos si no están en el orden correcto
                swapped = true;
            }
            iterador = iterador->sig;
        }
        posicionAct = iterador; // Actualizar la posición actual
    } while (swapped);

    while (head != NULL) {
        cout << "Nombre: " << head->dato.nombre << " Boleto: " << head->dato.boleto << endl;
        head = head->sig;
    }
}

// Función para ordenar la lista por número de boleto
void ordenarBoleto(TOrden orden) {
    nodo* head = inicio;
    if (inicio == NULL || inicio->sig == NULL) return;

    bool swapped;
    nodo* iterador;
    nodo* posicionAct = NULL;

    do {
        swapped = false;
        iterador = inicio;

        while (iterador->sig != posicionAct) {
            if ((orden == ASC && iterador->dato.boleto > iterador->sig->dato.boleto) ||
                (orden == DESC && iterador->dato.boleto < iterador->sig->dato.boleto)) {
                swap(iterador->dato, iterador->sig->dato);
                swapped = true;
            }
            iterador = iterador->sig;
        }
        posicionAct = iterador;
    } while (swapped);

    while (head != NULL) {
        cout << "Nombre: " << head->dato.nombre << " Boleto: " << head->dato.boleto << endl;
        head = head->sig;
    }
}

// Función para mostrar la lista de pasajeros
void mostrarLista(nodo* head) {
    if (head == NULL) {
        cout << "La lista no contiene elementos" << endl;
        return;
    }
    while (head != NULL) {
        cout << "Nombre: " << head->dato.nombre << " Boleto: " << head->dato.boleto << endl;
        head = head->sig;
    }
}

// Función para borrar un pasajero de la lista
void borrarPasajero(string nombre) {
    nodo* temp = inicio;

    if (temp == NULL) {
        cout << "La lista esta vacia" << endl;
        return;
    }

    if (temp->sig == NULL && temp->dato.nombre == nombre) {
        delete temp;
        inicio = NULL;
        cout << "Se ha borrado el registro" << endl;
        return;
    }

    if (temp->dato.nombre == nombre) {
        inicio = temp->sig;
        if (inicio != NULL) {
            inicio->ant = NULL;
        }
        delete temp;
        cout << "Nodo removido" << endl;
        return;
    }

    while (temp != NULL) {
        if (temp->dato.nombre == nombre) {
            if (temp->ant != NULL) {
                temp->ant->sig = temp->sig;
            }
            if (temp->sig != NULL) {
                temp->sig->ant = temp->ant;
            }
            delete temp;
            cout << "Node with name " << nombre << " removed." << endl;
            return;
        }
        temp = temp->sig;
    }

    cout << "Node with name " << nombre << " not found." << endl;
}

// Función para mostrar el menú y manejar las elecciones del usuario
void menu() {
    int choice;
    string nombre;
    int boleto;
    TOrden orden;

    do {
        cout << "\nMenu:\n";
        cout << "1. Agregar Pasajero\n";
        cout << "2. Mostrar lista\n";
        cout << "3. Borrar pasajero\n";
        cout << "4. Ordenar lista por nombre (Ascendente)\n";
        cout << "5. Ordenar lista por nombre (Descendente)\n";
        cout << "6. Ordenar lista por boleto (Ascendente)\n";
        cout << "7. Ordenar lista por boleto (Descendente)\n";
        cout << "0. Salir\n";
        cout << "Ingrese su eleccion: ";
        cin >> choice;

        switch (choice) {
            case 1:
                cin.ignore(numeric_limits<streamsize>::max(), '\n'); // Limpiar el búfer de entrada
                cout << "Ingrese el nombre del pasajero: " << endl;
                getline(cin, nombre);
                cout << "Ingrese el numero del boleto: " << endl;
                while (!(cin >> boleto)) {
                    cin.clear();
                    cin.ignore(numeric_limits<streamsize>::max(), '\n'); // Limpiar el búfer de entrada
                    cout << "Ingrese un numero de boleto valido: ";
                }
                insertaFinal(nombre, boleto);
                break;
            case 2:
                mostrarLista(inicio);
                break;
            case 3:
                if (inicio == NULL) {
                    cout << "No existen elementos en la lista" << endl;
                    break;
                }
                cout << "Ingrese el nombre del pasajero a borrar: ";
                cin >> nombre;
                borrarPasajero(nombre);
                break;
            case 4:
                cout << "Lista ordenada en forma ascendente.\n";
                ordenarLista(ASC);
                break;
            case 5:
                cout << "Lista ordenada en forma descendente.\n";
                ordenarLista(DESC);
                break;
            case 6:
                cout << "Lista ordenada en forma ascendente. \n";
                ordenarBoleto(ASC);
                break;
            case 7:
                cout << "Lista ordenada en forma descendente. \n";
                ordenarBoleto(DESC);
                break;
            case 0:
                cout << "Saliendo del programa.\n";
                break;
            default:
                cout << "Opcion invalida. Intente de nuevo.\n";
        }
    } while (choice != 0);
}

int main() {
    menu(); // Llamar a la función del menú
    return 0;
}

