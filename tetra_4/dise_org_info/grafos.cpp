#include <iostream>
#include <vector>
#include <map>
#include <climits>
#include <algorithm>
using namespace std;

string encontrarNodoIndice(const map<string, int>& nodeIndex, int index) {
    for (map<string, int>::const_iterator it = nodeIndex.begin(); it != nodeIndex.end(); ++it) {
        if (it->second == index) {
            return it->first; 
        }
    }
    return ""; 

}

class Graph {
    int V; // Número de nodos en el grafo
    map<string, int> nodeIndex; // Map para asignar índices a las letras y guardarlos en el array nodeIndex
    vector<vector<int> > adjMatriz; // Matriz de adyacencia

public:
    Graph(vector<string> nodes) {
        V = nodes.size(); //Calcula el tamaño del vector de letras, es decir la cantidad de letras(nodos) en el grafo {a,b,c,...}
        //Define un vector de vectores, matriz bidimensional
        //Definimos una fila de tamaño V, es decir numero de nodos o elementos y se inicializa con cada nodo con valor INT_MAX
		vector<int> fila(V,INT_MAX);
		//Crear la matriz con V filas y cada una fila es un vector "fila"
		adjMatriz = vector<vector<int> >(V, fila);
		
		//El ciclo recorrera los nodos
        for (int i = 0; i < V; ++i) {
            //cout << nodes[i] <<"\t"<<endl;
			nodeIndex[nodes[i]] = i; // Asignando par de clave-valor al contenedor
            //nodeIndex[i];
            cout << nodes[i]<<":"<<nodeIndex[nodes[i]]<<endl;
            adjMatriz[i][i] = 0; // Se asigna la distancia de un nodo a sí mismo, es 0 A->A, B->B,..etc
        }
        
    }
    //Agregar nodos
	void agregarNodo(const string& node) {
		//Asignar indice al nodo
		nodeIndex[node] = V;
		//Incrementar el numero de nodos
		V++;		
	    // Ampliar la matriz de adyacencia		
	    for (size_t i = 0; i < adjMatriz.size(); ++i) {
	        adjMatriz[i].resize(V, INT_MAX);
	    }
	    adjMatriz.push_back(vector<int>(V,INT_MAX));
	    //Se asigna la distancia de un nodo a si mismo
	    adjMatriz[V-1][V-1]=0;
	}
	
	//Agrega aristas(conexiones entre nodos)
    void agregarArista(string u, string v, int peso) {
        if (nodeIndex.find(u) != nodeIndex.end() && nodeIndex.find(v) != nodeIndex.end()) {
            int uIndex = nodeIndex[u];
            int vIndex = nodeIndex[v];
            adjMatriz[uIndex][vIndex] = peso;
        } else {
            cout << "Error: uno o ambos nodos no existen." << endl;
        }
    }
	//Algoritmo Dijkstra
    void dijkstra(string origen, vector<int>& dist, vector<int>& prev) {
        dist.assign(V,INT_MAX);
        prev.assign(V,-1);
		//Controla nodos visitados, se inician en false
		vector<bool> visited(V, false);

        int indiceOrigen = nodeIndex[origen];//Indice que representa al nodo origen
        dist[indiceOrigen] = 0;//Establece la distancia inicial desde el nodo origen a si mismo

        for (int i = 0; i < V - 1; ++i) {
            int u = -1;

            for (int j = 0; j < V; ++j)
                if (!visited[j] && (u == -1 || dist[j] < dist[u]))
                    u = j;

            visited[u] = true;

            for (int v = 0; v < V; ++v) {
                if (!visited[v] && adjMatriz[u][v] != INT_MAX && dist[u] + adjMatriz[u][v] < dist[v]) {
                    dist[v] = dist[u] + adjMatriz[u][v];
                    prev[v] = u;
                }
            }
        }
    }
    
    
	//Funcion para calcular la ruta mas corta
    void calcularMejorRuta(string origen, string destino) {
        vector<int> distancia(V, INT_MAX);
        vector<int> prev(V, -1);

        dijkstra(origen, distancia, prev);

        int indiceOrigen = nodeIndex[origen];
        int indiceDestino = nodeIndex[destino];

        if (distancia[indiceDestino] == INT_MAX) {
            cout << "No existe camino entre el nodo " << origen << " y el nodo " << destino << "." << endl;
            return;
        }

        // Reconstruir el camino más corto
        vector<int> path;
        for (int at = indiceDestino; at != -1; at = prev[at])
            path.push_back(at);
        reverse(path.begin(), path.end());

        // Mostrar el camino más corto y su distancia
        cout << "Camino mas corto desde el nodo " << origen << " al nodo " << destino << " es: ";
        for (int i = 0; i < path.size(); ++i) {
    		cout << encontrarNodoIndice(nodeIndex, path[i]) << " ";
		}
		cout << "\nDistancia: " << distancia[indiceDestino] << endl;

    }   
};

int main() {
	
    // Crear un grafo con nodos representados por letras
    vector<string> nodes;
    Graph grafo(nodes);
	grafo.agregarNodo("A");
	grafo.agregarNodo("B");
	grafo.agregarNodo("C");
	grafo.agregarNodo("D");
	grafo.agregarNodo("E");
	grafo.agregarArista("A","B",1);
	grafo.agregarArista("A","C",3);
	grafo.agregarArista("B","C",5);
	grafo.agregarArista("B","D",10);
	grafo.agregarArista("C","D",9);
	grafo.agregarArista("C","E",7);
	grafo.calcularMejorRuta("A","D");
    grafo.calcularMejorRuta("A","E");
	return 0;
}

