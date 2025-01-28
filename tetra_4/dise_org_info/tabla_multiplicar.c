#include <stdio.h>
#include <ctype.h>
#include <string.h>

int esNumero(char entrada[]){
	int i;
	for(i=0;i<strlen(entrada);i++){
		if(!isdigit(entrada[i])){
			return 0;//No es número
		}
	};
	return 1;//Es número
}

int main(){
	char entrada[100];//Variable que almacenara la entrada de usuario
	int numero,i;
	// Solicitar al usuario que ingrese un número entero positivo o cadena de texto
	printf("Capture un numero entero positivo: ");
	scanf("%s",&entrada);
	
	/*
	Ciclo que valida si la entrada es número, se repetira en caso de que el usuario capture
	entradas invalidas
	*/
	while(!esNumero(entrada)){
		printf("Entrada invalida, capture un numero entero positivo: ");
		scanf("%s",&entrada);
	};
	//Convierte la entrada a número
	numero = atoi(entrada);
	//Imprime la tabla de multiplicar
	printf("----------------------------------\n");
	printf("Tabla de Multiplicar del numero %d \n",numero);
	printf("----------------------------------\n");
	for(i=1;i<11;i++){
		printf("%d x %d = %d \n",numero,i,(numero*i));
	};
	
	return 0;	
}
