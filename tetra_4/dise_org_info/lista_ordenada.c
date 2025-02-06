/*******************************************************************/
/* AUTOR: Jesus Hernandez								   		   */
/*																   */		
/* PROPOSITO: Programa que lee una secuencia de numeros de tamaño n*/
/* desde el teclado. los muestra en orden directo, orden ascedente */
/* y orden descendente.											   /*
/*******************************************************************/

#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <ctype.h>

#define MAX 100 //Definimos el numero de elementos de la pila
//Definimos la estructura de la pila
typedef struct{
	int top;//Nodo de la cima
	int pila[MAX];//Pila que contendra un maximo de 100 elementos
} Stack;
//Inicializa la pila
void initStack(Stack *s){
	s->top =-1;
};
//Creamos el metodo para agregar elementos a la pila
int push(Stack *s, int x){
	if(s->top >= (MAX-1)){
		printf("La pila excede el numero de elementos permitidos\n");
		return 0;
	} else{
		s->pila[++(s->top)]=x;
		printf("Elemento %d agregado a la pila\n",x);
		return 1;
	}
	
};
//Metodo para eliminar el ultimo elemento de la pila
int pop(Stack *s){
	if(s->top<0){
		printf("La pila esta vacia");
		return 0;
	} else{
		int x=s->pila[(s->top)--];
		return x;		
	}
};
//Imprime los numeros ordenados en forma ascendente
int sortAsc(Stack *s){
	int i;
	int ordenada = 0;
	while(!ordenada){
		ordenada = 1;
		for(i=0;i < s->top;i++){
			if(s->pila[i] > s->pila[i+1]){
				ordenada = 0;
				int temp = s->pila[i];
				s->pila[i]=s->pila[i+1];
				s->pila[++i]=temp; 
			}
			
			
		}	
	}
	for(i=0; i <= s->top;i++){
		printf("%d\n",s->pila[i]);
	}
	
	
}
//Imprime los numeros ordenados en forma descendente
int sortDec(Stack *s){
	int i;
	int ordenada=0;
	while(!ordenada){
		ordenada = 1;
		for(i=0; i < s->top; i++){
			if(s->pila[i] < s->pila[i+1]){
				ordenada = 0;
				int temp = s->pila[i];
				s->pila[i] = s->pila[i+1];
				s->pila[i+1] = temp;
			}
		}
	}
	for(i=0; i <= s->top ; i++){
		printf("%d\n",s->pila[i]);
	}
}
//Obtiene todos los elementos apilados
int getStack(Stack *s){
	if(s->top<0){
		printf("La pila esta vacia");
		return 0;
	}
	else{
		int i;
		for(i=0;i<=s->top;i++){
			printf("%d \n",s->pila[i]);
		}
	}
}


//Funcion que valida si la entrada de usuario es un numero y que no exceda del limite de elementos en la pila
int overFlow(const char* input){
	//Recorre los caracteres de la cadenas de texto y valida si son digitos
	int i;
	int numero;
	for(i=0; i< strlen(input);i++){
		if(!isdigit(input[i])){
			printf("Solos se permiten numeros\n");
			return 0; //Retorna 0 si algun caracter no es numerico.
		};
	};
	numero = atoi(input);
	if(numero>MAX){
		printf("La cantidad excede el limite de la pila: %d\n",MAX);
		return 0;
	}
	//Retorna true si la entrada es valida
	return 1;
}



int main(){
	char entrada[100];//variable que almacenara la entrada de usuario
	//"numero", variable que almacenara el numero que a su vez sera apilado
	//"iteraciones", variable que almacenara el numero de veces que se solicitara un numero
	//"i", Contador de control para el ciclo for
	int numero, iteraciones, i;	
	Stack pila;//Definimos la variable pila como tipo estructura Stack(pila)
	initStack(&pila);//Inicializar la estructura de acuerdo al modelo definido al inicio del programa
	printf("Cuantos numeros desea capturar?: ");//Solicitar al usuario la cantidad de numeros que almacenara en la pila
	scanf("%s",&entrada);//Almacena la captura del usuario en iteraciones
	int valido = overFlow(entrada);
	while(!valido){
		//Si la entrada no es valida, mostrar mensaje de error y solicitar de nuevo el numero
		printf("Cuantos numeros desea capturar?: ");
		scanf("%s",&entrada);
		valido = overFlow(entrada);
	};
	//Convierte la cadena de texto a numero y lo almacena en la pila
	iteraciones = atoi(entrada);
	for(i=0; i<iteraciones;i++){
		printf("Capture un numero: ");//Solicitar captura de numero al usuario
		scanf("%s",&entrada);//Almacenar valor en la variable entrada
		//Verifica si la entrada es valida invocando a la funcion esValido
		int entero = overFlow(entrada);
		//Ciclo que se repetira hasta que el usuario ingrese de manera correcta el numero solicitado
		while(!entero){
		//Si la entrada no es valida, mostrar mensaje de error y solicitar de nuevo el numero
			printf("Numero invalido, se espera un numero entero positivo\n");
			printf("Capture un numero: ");
			scanf("%s",&entrada);
			entero = overFlow(entrada);
		}
		//Convierte la cadena de texto a numero y lo almacena en la pila
		numero = atoi(entrada);
		push(&pila,numero);
		
	}
	printf("----------Numeros en la pila------------\n");
	getStack(&pila);//Obtener los elementos guardados en la pila
	printf("----------Orden Ascendente--------------\n");
	sortAsc(&pila);//Imprime pila ordenada en ascendente
	printf("----------Orden Descendente-------------\n");
	sortDec(&pila);	//Imprime pila ordenada en descendente
}
