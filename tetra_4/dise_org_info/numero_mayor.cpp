/*****************************************************************/
/* AUTOR: Jesus Hernandez								   		 */
/*																 */		
/* PROPOSITO: El siguiente programa recibe dos numeros enteros 	 */
/* positivos y realiza una comparacion imprimiendo por consola	 */
/* el resultado.   							 					 */
/*																 */
/*****************************************************************/



//Importacion de las librerias necesarias para trabajar con cadenas, numeros y conversion de tipo
#include <iostream>
#include <limits>
#include <string>
#include <sstream>
#include <stdlib.h>

using namespace std;

// Función para verificar si una cadena contiene solo dígitos
bool esEntero(const string& input) {
    for (int i=0; i < input.size(); i++) {
        if (!isdigit(input[i])) {
        	return false;//Retorna false si encuentra un caracter no numerico
        };
    };
    return true;//Retorna true si todos los caracteres son digitos
}

int main() {
    char* entrada;//variable para capturar la entrada de usuario
    cout << "Capture el primer numero entero positivo: ";
    cin >> entrada;
    bool entero = esEntero(entrada);//verifica si la entrada es un numero entero invocando a la funcion esEntero
	//ciclo que se mantiene en espera de la entrada correcta por parte del usuario, en caso de que no se capture un numero entero
	while(!entero){
		cout << "Numero no valido"<<endl;
		cout << "Capture el primer numero entero positivo sin decimales: ";
		cin >> entrada;
		entero = esEntero(entrada);	//verifica la entrada para saber si debe continuar en el ciclo o salir de el.	
	}
	int a = atoi(entrada);//convierte la cadena a numero entero
	//ciclo que valida que el numero sea positivo
    while (a <= 0) {
        cout << "Solo se permiten numeros enteros positivos" << endl; 
		cin.clear();
		cin.ignore(numeric_limits<streamsize>::max(),'\n');
		cout << "Capture el primer numero entero positivo: "; 
		cin >> a;
    }

    cout << "Capture el segundo numero entero positivo: ";
    cin >> entrada;
    entero = esEntero(entrada);
    while(!entero){
		cout << "Numero no valido"<<endl;
		cout << "Capture el segundo numero entero positivo sin decimales: ";
		cin >> entrada;
		entero = esEntero(entrada);		
	}
	int b = atoi(entrada);
	
	while (b <= 0) {
        cout << "Solo se polermiten numeros enteros positivos" << endl; 
		cin.clear();
		cin.ignore(numeric_limits<streamsize>::max(),'\n');
		cout << "Capture el segundo numero entero positivo: "; 
		cin >> b;
    }
	//Compara los numeros e imprime resultado
    if (a > b) {
        cout << "El numero: " << a << " es mayor que " << b;
    } else if (a == b) {
        cout << "Los numeros " << a << " y " << b << " son iguales";
    } else {
        cout << "El numero: " << a << " es menor que " << b;
    }
	
    return 0;//termina el programa
}

