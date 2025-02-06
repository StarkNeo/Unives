/*****************************************************************/
/* AUTOR: Jesus Hernandez								   		 */
/*																 */		
/* PROPOSITO: Calcular la media aritmetica de 20 numeros leidos  */
/* desde el teclado.                                             */
/* 																 */
/*																 */
/*****************************************************************/

#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <ctype.h>

#define MAX 100 //Definimos el numero de elementos de la pila

//Definimos la estructura de la pila
typedef struct{
	int top;//Nodo de la cima
	int pila[MAX]; //Pila que contendra un maximo de 100 elementos
	int floor;//Nodo de la base
} Stack;

//Inicializa la pila
void initStack(Stack *s){
	s->top = -1;//Nodo de la cima iniciado
	s->floor = 0;//Nodo en la base de la pila
}

//Creamos el metodo para agregar elementos a la pila
int push(Stack *s, int x){
	if(s->top >= (MAX-1)){
		printf("La pila excede el numero de elementos permitidos\n");
		return 0;
	}
	else{
		s->pila[++(s->top)]= x;
		printf("%d agregado a la pila\n",x);
		return 1;
	}
}
//Metodo para eliminar el ultimo elemento de la pila
int pop(Stack *s){
	if(s->top < 0){
		printf("La pila no contiene elementos por remover\n");
		return 0;
	}
	else{
		int x = s->pila[(s->top)--];
		return x;
	}
}
//Metodo para mostrar el elemento en la cima de la pila
int peek(Stack *s){
	if(s->top <0){
		printf("La pila esta vacia\n");
		return 0;
	}
	else{
		int x = s->pila[s->top];
		printf("El elemento en la cima es: %d\n",x);
		return x;
	}
}

//Muestra el primer elemento de la pila
int getFloor(Stack *s){
	if(s->top<0){
		printf("La pila esta vacia\n");
		return 0;
	}
	else{
		int x = s->pila[s->floor];
		printf("El elemento en la base de la pila es: %d\n",x);
		return x;
	}
}
//Revisa si la pila esta vacia
int isEmpty(Stack *s){
	return (s->top<0);
}
//Devuelve el tamaño de la pila(numero de elementos apilados)
int size(Stack *s){
	return s->top+1;
}
//Obtiene todos los elementos apilados
void getStack(Stack *s){
	int i;
	if(s->top <0){
		printf("Pila vacia\n");
		return;
	}
	else{
		printf("Elementos apilados:\n");
		for(i=0; i<=s->top; i++){
			printf("%d \n",s->pila[i]);
		
		}
	}
}

/* Funcion que valida si la entrada es un numero, 
 devolviendo falso o verdadero.*/
 
int esValido(const char* input){
	//Recorre los caracteres de la cadena de texto y valida si son digitos
	int i;
	
	for(i=0; i < strlen(input); i++){
		if(!isdigit(input[i])){
			return 0; //Retorna 0 si algun caracter no es numerico.
		};
	};
	//Retorna true si la entrada es valida
	return 1;
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
	int numero;//Variable que almacenara el numero que a su vez sera apilado
	int iteraciones;//Variable que almacenara el numero de veces que se solicitara un numero
	int suma=0;//Almacenara la suma de los numeros capturados
	int i;//Contador de control para el ciclo for
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
	//El ciclo iterara la cantidad de veces que el usuario haya capturado
	for(i=0; i<iteraciones;i++){
		printf("Capture un numero: ");//Solicitar captura de numero al usuario
		scanf("%s",&entrada);//Almacenar valor en la variable entrada
		//Verifica si la entrada es valida invocando a la funcion esValido
		int entero = esValido(entrada);
		//Ciclo que se repetira hasta que el usuario ingrese de manera correcta el numero solicitado
		while(!entero){
		//Si la entrada no es valida, mostrar mensaje de error y solicitar de nuevo el numero
			printf("Numero invalido, se espera un numero entero positivo\n");
			printf("Capture un numero: ");
			scanf("%s",&entrada);
			entero = esValido(entrada);
		}
		//Convierte la cadena de texto a numero y lo almacena en la pila
		numero = atoi(entrada);
		push(&pila,numero);
		//Incrementa la suma con el numero almacenado
		suma+=numero;
	}
	getStack(&pila);//Obtener los elementos guardados en la pila
	
	peek(&pila);//Obtener el ultimo elemento guardado en la pila
	//printf("\n");
	getFloor(&pila);
	//printf("\n");
	printf("La media es: %d\n",(suma/size(&pila)));
	
	return 0;
}
