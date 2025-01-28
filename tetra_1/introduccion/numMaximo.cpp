#include <iostream>
#include <conio.h>

using namespace std;

//prototipo de la funcion
int encontrarMax(int x, int y);

int main(){
	int n1,n2;
	int mayor;
	cout<<"El programa calculara el mayor de dos numeros dados\n";
	cout<<"Capture el primer numero: ";
	cin>>n1;
	cout<<"Capture el segundo numero: ";
	cin>>n2;
	mayor = encontrarMax(n1,n2);
	cout<<"El mayor de los numeros es "<<mayor<<endl;
	getch();
	return 0;
}

//definicion de la funcion
int encontrarMax(int x, int y){
	int numMax;
	if(x > y)
		numMax = x;
	else
		numMax = y;
	return numMax;
}
