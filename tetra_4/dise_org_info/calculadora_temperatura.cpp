/*****************************************************************/
/* AUTOR: Jesus Hernandez								   		 */
/*																 */		
/* PROPOSITO: El siguiente programa es una calculadora de 		 */
/* temperaturas que convierte grados celsius a grados fahrenheit */
/* y a grados kelvin											 */
/*																 */
/*****************************************************************/

#include <iostream>
using namespace std;

int main(){
	//declararemos un arreglo para almacenar las constantes de las formulas de conversion
	float constantes[]={32,273.15};
	//Definimos la variable celsius para almacenar la temperatura en esta medida de tipo numerico entero
	int celsius;
	//Definimos las variables donde almacenaremos las temperaturas en fahrenheit y kelvin
	float fahr, kelvin;
	//Solicitamos la entrada de datos al usuario y la almacenamos en la variable celsius
	cout << "Introduzca la temperatura en grados celsius: ";
	cin >> celsius;
	//Calculamos las temperaturas en grados Fahrenheit y grados Kelvin y las almacenamos en sus respectivas variables
	fahr = 9/5*celsius+constantes[0];
	kelvin = celsius+constantes[1];
	//Imprimimos en pantalla los resultados
	cout << "La temperatura en Fahrenheit es: "<< fahr << endl;
	cout << "La temperatura en Kelvin es: "<< kelvin;
	return 0;
	
}  

