#include <iostream>
using namespace std;

enum TOrden{ASC,DESC};

struct pasajero{
	string nombre;
	int boleto;
};

struct nodo{
	pasajero dato;
	nodo *sig;
	nodo *ant;
};

nodo *inicio = NULL;

void insertaInicio(string nombre, int boleto){
	nodo *nuevo = new nodo;
	nuevo->dato.nombre = nombre;
	nuevo->dato.boleto = boleto;
	nuevo->sig = inicio;
	nuevo->ant = NULL;
	
	if(inicio != NULL){
		inicio->ant = nuevo;
	}
	inicio = nuevo;
}

void insertaFinal(string nombre, int boleto){
	nodo *nuevo = new nodo;
	nuevo->dato.nombre = nombre;
	nuevo->dato.boleto = boleto;
	nuevo->sig = NULL;
	nuevo->ant = NULL;
	
	if(inicio == NULL){
		inicio = nuevo;
	}
	else{
		nodo *temp = inicio;
		while(temp->sig != NULL){
			temp = temp->sig;
		}
		temp->sig = nuevo;
		nuevo->ant = temp;
	}
};
//Funcion invocada en mostrarLista, su proposito es ordenar los elementos de la lista
void ordenarLista(TOrden orden) {
	//Revisar si la lista esta vacia o si es el unico elemento
    if (inicio == NULL || inicio->sig == NULL) return;

    bool swapped;//true si esta ordenada, false si esta desordenada, se valida en cada iteracion
    nodo *iterador;//recorrera la lista
    nodo *posicionAct = NULL;//posicion actual, control de posicion del iterador

    do {
        swapped = false;//La lista esta desordenda, se inicializa asi para entrar al ciclo
        iterador = inicio;//comienza por el inicio de la lista
		
		
        while (iterador->sig != posicionAct) {
            if ((orden == ASC && iterador->dato.boleto > iterador->sig->dato.boleto) || 
                (orden == DESC && iterador->dato.boleto < iterador->sig->dato.boleto)) 
			{
                swap(iterador->dato, iterador->sig->dato);
                swapped = true;
            }
            if((orden == ASC && iterador->dato.nombre > iterador->sig->dato.nombre) || 
                (orden == DESC && iterador->dato.nombre < iterador->sig->dato.nombre))
				{
                	swap(iterador->dato, iterador->sig->dato);
                	swapped = true;
				}
            iterador = iterador->sig;
        }
        posicionAct = iterador;
    } while (swapped);
};

void ordenarBoleto(nodo *head,TOrden orden){
	if(inicio == NULL || inicio->sig == NULL) return;
	
	bool swapped;
	nodo *iterador;
	nodo *posicionAct = NULL;
	
	do {
		swapped = false;
		iterador = inicio;
		
		while(iterador->sig != posicionAct){
			if((orden == ASC && iterador->dato.boleto > iterador->sig->dato.boleto) ||
			(orden == DESC && iterador->dato.boleto < iterador->sig->dato.boleto)){
				swap(iterador->dato, iterador->sig->dato);
				swapped = true;
			}
			iterador = iterador->sig;
		}
		posicionAct = iterador;
	} while(swapped);
	
	while(head != NULL){
		cout << "Nombre: "<< head->dato.nombre << " Boleto: "<<head->dato.boleto<<endl;
		head = head->sig;
	}
}
//Muestra una lista ordenada por nombre y numero, en orden ascendente o descendente segun se elija
void mostrarLista(nodo *head, TOrden orden){	
	
	while(head != NULL){
		ordenarLista(orden);
		cout << "Nombre: "<< head->dato.nombre << " Boleto: "<<head->dato.boleto<<endl;
		head = head->sig;
	}
};


void borrarPasajero(string nombre){
	nodo *temp = inicio;
	
	if(temp == NULL){
		cout << "La lista esta vacia" <<endl;
		return;
	}
	
	//Si el nodo es el unico de la lista
		
	if(temp->sig == NULL && temp->dato.nombre == nombre){
		delete temp;
		inicio = NULL;
		cout << "Se ha borrado el registro"<<endl;
		return;
	}
	
	//Si el nodo es el primer nodo de la lista y contiene el nombre buscado
	if(temp->dato.nombre == nombre){
		inicio = temp->sig;
		if(inicio != NULL){
			inicio->ant = NULL;
		}
		delete temp;
		cout << "Nodo removido"<<endl;
		return;
			
	}
	// Find the node to be deleted
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

void menu(){
	int choice;
	string nombre;
	int boleto;
	TOrden orden;
	
	do {
        cout << "\nMenu:\n";
        cout << "1. Insertar al inicio\n";
        cout << "2. Insertar al final\n";
        cout << "3. Mostrar lista\n";
        cout << "4. Borrar pasajero\n";
        cout << "5. Ordenar lista (Ascendente)\n";
        cout << "6. Ordenar lista (Descendente)\n";
        cout << "0. Salir\n";
        cout << "Ingrese su eleccion: ";
        cin >> choice;

        switch (choice) {
            case 1:
                cout << "Ingrese el nombre: ";
                cin >> nombre;
                cout << "Ingrese el numero de boleto: ";
                cin >> boleto;
                insertaInicio(nombre, boleto);
                break;
            case 2:
                cout << "Ingrese el nombre: ";
                cin >> nombre;
                cout << "Ingrese el numero de boleto: ";
                cin >> boleto;
                insertaFinal(nombre, boleto);
                break;
            case 3:
                mostrarLista(inicio, ASC);
                break;
            case 4:
                cout << "Ingrese el nombre del pasajero a borrar: ";
                cin >> nombre;
                borrarPasajero(nombre);
                break;
            case 5:
                //mostrarLista(inicio, ASC);
                cout << "Lista ordenada en forma ascendente.\n";
                mostrarLista(inicio, ASC);
                break;
            case 6:
                //mostrarLista(inicio, DESC);
                cout << "Lista ordenada en forma descendente.\n";
                mostrarLista(inicio,DESC);
                break;
            case 0:
                cout << "Saliendo del programa.\n";
                break;
            default:
                cout << "Opcion invalida. Intente de nuevo.\n";
        }
    } while (choice != 0);
}
int main(){
	menu();
	return 0;
	/*insertaInicio("Jesus Hernandez", 1500);
	insertaFinal("Javier Jimenez",800);
	insertaFinal("Joel Osteen",1000);
    insertaFinal("Maria Rodriguez", 2000);
    insertaInicio("Carlos Martinez", 2500);
	mostrarLista(inicio,ASC);
	borrarPasajero("Maria Rodriguez");
	mostrarLista(inicio,ASC);
	mostrarLista(inicio,DESC);
	ordenarBoleto(inicio,ASC);
	cin.get();*/
	return 0;
}

