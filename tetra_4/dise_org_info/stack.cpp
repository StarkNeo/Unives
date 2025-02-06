#include <iostream>
using namespace std;

#define MAX 1000

class Stack {
    int cima;

public:
    int pila[MAX]; // Maximum size of Stack

    Stack() { cima = -1; }
    bool push(int x);
    int pop();
    int peek();
    bool isEmpty();
    int getSize();
    void getStack();
};

bool Stack::push(int x) {
    if (cima >= (MAX - 1)) {
        cout << "Stack Overflow";
        return false;
    } else {
        pila[++cima] = x;
        cout << x << " pushed into stack\n";
        return true;
    }
}

int Stack::pop() {
    if (cima < 0) {
        cout << "Stack Underflow";
        return 0;
    } else {
        int x = pila[cima--];
        return x;
    }
}

int Stack::peek() {
    if (cima < 0) {
        cout << "Stack is Empty";
        return 0;
    } else {
        int x = pila[cima];
        return x;
    }
}

bool Stack::isEmpty() {
    return (cima < 0);
}

int Stack::getSize(){
	return cima+1;
}

void Stack::getStack(){
	if(cima<0){
		cout << "Stack is Empty";
		return;
	} else {
		for(int i=0; i <=cima;i++){
			cout << pila[i] << " ";
			cout << "\n";
		}
	}
}



int main() {
    Stack s;
    s.push(10);
    s.push(20);
    s.push(30);
    cout << s.pop() << " popped from stack\n";
    cout << "Current stack size: " << s.getSize() << "\n";
    s.getStack();
    return 0;
}

