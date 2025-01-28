/*****************************************************************/
/* AUTOR: Jesus Hernandez								   		 */
/*																 */		
/* PROPOSITO: El siguiente programa recibe dos numeros enteros 	 */
/* positivos y realiza una comparacion imprimiendo por consola	 */
/* el resultado.   							 					 */
/*																 */
/*****************************************************************/


#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <ctype.h>

/* 
Funcion para verificar si una cadena contiene solo digitos, detectando entradas no deseadas
ademas valida si el numero capturado es un entero positivo devolviendo 1 en caso de ser correcto
y 0 si la entrada es invalida.
*/
int esValido(const char* input) {
	int i, numero;
	for(i = 0; i < strlen(input); i++) {
        if (!isdigit(input[i])) {
            return 0; // Retorna 0  si encuentra un caracter no numerico
        };
    };
    //Convierte la cadena a un entero
	numero = atoi(input);
	//Valida si el numero es entero positivo
	if(numero < 0){
		return 0;
	}
	return 1;//Retorna 1 si la entrada es valida
};
//Funcion que compara los numeros enteros ingresados y determina cual es mayor, menor o si son iguales
int comparar(int a, int b){
	// Compara los números e imprime el resultado
    if (a > b) {
        printf("El numero: %d es mayor que %d\n", a, b);
    } else if (a == b) {
        printf("Los numeros %d y %d son iguales\n", a, b);
    } else {
        printf("El numero: %d es menor que %d\n", a, b);
    }
};

int main() {
    char entrada[100]; // Variable para capturar la entrada del usuario

    // Solicita el primer numero entero positivo
    printf("Capture el primer numero entero positivo: ");
    scanf("%s", entrada);
    // Verifica si la entrada es un numero entero invocando a la funcion esEntero
	int entero = esValido(entrada); 

    // Ciclo que se mantiene en espera de la entrada correcta por parte del usuario
    while (!entero) {
        printf("Numero no valido\n");
        printf("Capture el primer numero entero positivo sin decimales: ");
        scanf("%s", entrada);
        entero = esValido(entrada); // Verifica la entrada para saber si debe continuar en el ciclo o salir de el
    }
    int a = atoi(entrada); // Convierte la cadena a numero entero

    // Solicita el segundo número entero positivo
    printf("Capture el segundo numero entero positivo: ");
    scanf("%s", entrada);
    entero = esValido(entrada);
    while (!entero) {
        printf("Numero no valido\n");
        printf("Capture el segundo numero entero positivo sin decimales: ");
        scanf("%s", entrada);
        entero = esValido(entrada);
    }
    int b = atoi(entrada);
	comparar(a,b);
	
    return 0; // Termina el programa
}

