/*****************************************************************/
/* AUTOR: Jesus Hernandez								   		 */
/*																 */		
/* PROPOSITO: El siguiente programa es una calculadora de 		 */
/* del impuestos al valor agregado(IVA) en Mexico a tasa 15%,	 */
/* sobre una lista de articulos registrados	 					 */
/*																 */
/*****************************************************************/

#include <iostream>
#include <string>
#include <iomanip>
using namespace std;

int main(){
	//Definimos una variable para controlar el numero de articulos que seran registrados. 
	int cantidad;
	//Capturamo el numero de articulos que seran registrados y almacenamos en la variable cantidad
	cout << "Cuantos articulos desea registrar?: ";
	cin >> cantidad;
	
	//Definimos un arreglo para almacenar nombres de producto, precio e impuesto al valor agregado respectivamente
	string carrito_nombres[cantidad];
	float carrito_precios[cantidad];
	float carrito_impuestos[cantidad];
	//Definimos las variable que almacenara el nombre del articulo
	string nombre;
	/*
	Definimos las variables que almacenara el precio del articulo, ademas de las variables donde se guardara la sumatoria de los precios y los impuestos
	almacenados en los arreglos, asi como el subtotal y total de los articulos registrados.	
	*/
	float precio, subtotal, total_iva, total = 0;
	
	//Ciclo que se repetira tantas veces como se haya definido la cantidad de articulos a ingresar.
	for(int i=0;i<cantidad;i++){
		cin.ignore();
		cout << "Capture el nombre del producto: ";//Solicitar entrada de nombre de producto
		getline(cin,nombre);//Almacenar en variable nombre
		cout << "Capture el precio: ";//Solicitar entrada del precio del producto
		cin >> precio;//Almacenar en variable precio
		carrito_nombres[i]=nombre;//Almacenar en arreglo nombres
		carrito_precios[i]=precio;//Almacenar en arreglo precios
		carrito_impuestos[i]=precio*0.15;//Almacenar en arreglo impuestos
		subtotal= subtotal+carrito_precios[i]; //Calcular subtotal y acumular en variable subtotal
		total_iva = total_iva + carrito_impuestos[i];//Calcular y acumular en variable total_iva
	};
	//Imprimir resultados en forma de tabla
	cout << "\nCarrito:\n";
	cout << left << setw(20) << "Producto" << setw(10) << "Precio" << setw(10) << "IVA" << endl; 
	cout << "----------------------------------------" << endl;
	for(int j=0; j<cantidad;j++){
		cout << left << setw(20) << carrito_nombres[j] << setw(5) << "$" << setw(5) << carrito_precios[j] << setw(5) << "$"<< setw(5) << carrito_impuestos[j] << endl;		
	};
	cout << "----------------------------------------" << endl;
	cout << setw(10) << "Subtotal" << setw(5) << "$" << setw(5) << subtotal << endl;
	cout << setw(10) << "IVA" << setw(5) << "$" << setw(5) << total_iva <<endl;
	cout << setw(10) << "Total" << setw(5) << "$" << setw(5) << subtotal+total_iva;
	return 0;
	
}  

