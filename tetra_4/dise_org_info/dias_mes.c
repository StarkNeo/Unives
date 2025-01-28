/*****************************************************************/
/* AUTOR: Jesus Hernandez								   		 */
/*																 */		
/* PROPOSITO: El siguiente programa lee un numero entero positivo*/
/* entre 1 y 12 que representa el numero de mes del año	   		 */
/* calendario devolviendo el numero de dias del mes capturado	 */
/*																 */
/*****************************************************************/


#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <ctype.h>


/* Funcion que valida si la entrada es un numero entero en un rango de 1-12, 
 devolviendo falso o verdadero.*/
 
int esValido(const char* input, int entrada){
	//Recorre los caracteres de la cadena de texto y valida si son digitos
	int i;
	for(i=0; i < strlen(input); i++){
		if(!isdigit(input[i])){
			return 0; //Retorna 0 si algun caracter no es numerico.
		};
	};
	//Convierte la cadena a un entero
	entrada = atoi(input);
	//Valida si el numero se encuentra en el rango de 1 a 12
	if(entrada < 1 || entrada > 12){
		return 0;
	}
	//Retorna true si la entrada es valida
	return 1;
}

int main(){
	//variable que almacenara la entrada de usuario
	char numero[100];
	//variable que almacenara el numero del mes validado.
	int mes;
	//Solicita al usuario la captura del numero de mes
	printf("Capture el numero del mes(1-12): ");
	scanf("%s", &numero);
	//Verifica si la entrada es valida invocando a la funcion esValido
	int entero = esValido(numero, mes);
	//Ciclo que se repetira hasta que el usuario ingrese de manera correcta el numero solicitado
	while(!entero){
		//Si la entrada no es valida, mostrar mensaje de error y solicitar de nuevo el numero
		printf("Numero invalido, se espera un numero entero positivo\n");
		printf("Capture el numero del mes: ");
		scanf("%s",&numero);
		entero = esValido(numero, mes);
	};
	//Convierte la cadena de texto a numero y almacena en mes para evaluar
	mes = atoi(numero);
	//En base al numero de mes se elige uno de los mensajes que se mostrara en pantalla
	switch(mes){
		case 1:
			printf("Dias de Enero = 31");
			break;
		case 2:
			printf("Dias de Febrero = 28");
			break;
		case 3:
			printf("Dias de Marzo = 31");
			break;
		case 4:
			printf("Dias de Abril = 30");
			break;
		case 5:
			printf( "Dias de Mayo = 31");
			break;
		case 6:
			printf( "Dias de Junio = 30");
			break;
		case 7:
			printf( "Dias de Julio = 31");
			break;
		case 8:
			printf( "Dias de Agosto = 31");
			break;
		case 9:
			printf( "Dias de Septiembre = 30");
			break;
		case 10:
			printf( "Dias de Octubre = 31");
			break;
		case 11:
			printf( "Dias de Noviembre = 30");
			break;
		case 12:
			printf( "Dias de Diciembre = 31");
			break;
	};
	//Termina el programa
	return 0; 
}
