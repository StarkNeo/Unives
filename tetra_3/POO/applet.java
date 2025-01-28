class Nodo {
    int data;
    Nodo next;

    Nodo(int data) {
        this.data = data;
        this.next = null;
    }
}

class ListaEnlazada {
    Nodo head;

    public void agregar(int data) {
        Nodo nuevoNodo = new Nodo(data);
        if (head == null) {
            head = nuevoNodo;
        } else {
            Nodo actual = head;
            while (actual.next != null) {
                actual = actual.next;
            }
            actual.next = nuevoNodo;
        }
    }

    public void imprimir() {
        Nodo actual = head;
        while (actual != null) {
            System.out.print(actual.data + " ");
            actual = actual.next;
        }
        System.out.println();
    }

    public static void main(String[] args) {
        ListaEnlazada lista = new ListaEnlazada();
        lista.agregar(1);
        lista.agregar(2);
        lista.agregar(3);
        lista.imprimir(); // Salida: 1 2 3
    }
}
