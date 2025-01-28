/*****************************************************************/
/* AUTOR: Jesus Hernandez								   		 */
/*																 */		
/* PROPOSITO: El siguiente programa lee un numero entero positivo*/
/* entre 1 y 12 que representa el numero de mes del año	   		 */
/* calendario devolviendo el numero de dias del mes capturado	 */
/*																 */
/*****************************************************************/


#include <iostream>
#include <sstream>
#include <string>
#include <stdlib.h>

using namespace std;
// Funcion que valida si la entrada es un numero entero en un rango de 1-12, devolviendo falso o verdadero.
bool esValido(const string& input, int& entrada){
	//Recorre los caracteres de la cadena de texto y valida si son digitos
	for(int i=0; i < input.size(); i++){
		if(!isdigit(input[i])){
			return false; //Retorna falso si algun caracter no es numerico.
		};
	};
	//Convierte la cadena a un entero
	stringstream ss(input);
	ss >> entrada;
	//Valida si el numero se encuentra en el rango de 1 a 12
	if(entrada < 1 || entrada > 12){
		return false;
	}
	return true;//Retorna true si la entrada es valida
}

int main(){
	string numero;//variable que almacenara la entrada de usuario
	int mes;//variable que almacenara el numero del mes validado.
	cout << "Capture el numero del mes(1-12): ";//Solicita al usuario la captura del numero de mes
	cin >> numero;
	//Verifica si la entrada es valida invocando a la funcion esValido
	bool entero = esValido(numero, mes);
	//Ciclo que se repetira hasta que el usuario ingrese de manera correcta el numero solicitado
	while(!entero){
		//Si la entrada no es valida, mostrar mensaje de error y solicitar de nuevo el numero
		cout << "Numero invalido, se espera un numero entero positivo"<<endl;
		cout << "Capture el numero del mes: ";
		cin >> numero;
		entero = esValido(numero, mes);
	};
	//En base al numero de mes se elige uno de los mensajes que se mostrara en pantalla
	switch(mes){
		case 1:
			cout << "Dias de Enero = 31" << endl;
			break;
		case 2:
			cout << "Dias de Febrero = 28" << endl;
			break;
		case 3:
			cout << "Dias de Marzo = 31" << endl;
			break;
		case 4:
			cout << "Dias de Abril = 30" << endl;
			break;
		case 5:
			cout << "Dias de Mayo = 31" << endl;
			break;
		case 6:
			cout << "Dias de Junio = 30" << endl;
			break;
		case 7:
			cout << "Dias de Julio = 31" << endl;
			break;
		case 8:
			cout << "Dias de Agosto = 31" << endl;
			break;
		case 9:
			cout << "Dias de Septiembre = 30" << endl;
			break;
		case 10:
			cout << "Dias de Octubre = 31" << endl;
			break;
		case 11:
			cout << "Dias de Noviembre = 30" << endl;
			break;
		case 12:
			cout << "Dias de Diciembre = 31" << endl;
			break;
	};
	return 0; //Termina el programa
}
