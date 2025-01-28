/*****************************************************************/
/* AUTOR: Jesus Hernandez								   		 */
/*																 */		
/* PROPOSITO: El programa calcula el factorial de un numero dado */
/*																 */
/*****************************************************************/


#include <stdio.h>

int main(){
	int numero, i;
	int factorial = 1;
	// Solicitar al usuario que ingrese un n�mero entero positivo
	printf("Capture un numero entero positivo: ");
	// Leer el n�mero ingresado por el usuario
	scanf("%d",&numero);
	// Calcular el factorial del n�mero ingresado
	for(i=1;i<(numero+1);i++){
		factorial*=i;
	}
	// Imprimir el resultado del factorial
	printf("El factorial de %d es: %d",numero,factorial);
	
	return 0;	
}
