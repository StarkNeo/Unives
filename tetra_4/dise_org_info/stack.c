#include <stdio.h>
#include <stdlib.h>

#define MAX 1000

typedef struct {
	int top;
	int pila[MAX]; //Tamaño maximo de la pila
} Stack;

void initStack(Stack *s){
	s->top = -1;
}

int push(Stack *s, int x){
	if(s->top >= (MAX -1)){
		printf("Pila excede el numero de elementos\n");
		return 0;
	} else{
		s->pila[++(s->top)] = x;
		printf("%d elemento agregado\n",x);
		return 1;
	}
}

int pop(Stack *s){
	if(s->top < 0){
		printf("La pila no contiene elementos");
		return 0;
	} else {
		int x = s->pila[(s-top)--];
		return x;
	}
}

int peek(Stack *s){
	if(s->top < 0){
		printf("La pila esta vacia\n");
		return 0;
	} else {
		int x= s->pila[s->top];
		return x;
	}
}

int isEmpty(Stack *s){
	return(s->top<0);
}

int size(Stack *s){
	return s->top+1;
}

void getStack(Stack *s){
	if(s->top <0){
		printf("La pila esta vacia");
		return;
	} else{
		for (int i=0; i<= s->top; i++){
			print("%d ",s->pila[i]);
		}
	}
}


