import random

#crear una lista de 10 numeros al azar
lista  = [random.randint(1,10) for x in range(10)]
#crear una lista vacia
lista_unica = []
#filtrar valores unicos de la lista y guardarlos en lista_unica
[lista_unica.append(x) for x in lista if x not in lista_unica]
print(lista_unica)
#variable de control para el ciclo while, se define como verdadera
#para entrar al ciclo
desordenada = True
while desordenada:
    #definimos la variable a falso para que el ciclo se interrumpa
    desordenada = False
    #como el metodo burbuja realiza la evaluacion en pares "[n] > [n+1]"
    #el ciclo debe repetirse n-1 elementos para evitar error de rango
    for n in range(len(lista_unica)-1):
        if lista_unica[n] > lista_unica[n+1]:
            #mientras existan pares desordenados la variable tomara el valor
            #verdadero para que al terminar el ciclo for la condicion while
            #se siga ejecutando
            desordenada = True
            lista_unica[n],lista_unica[n+1]= lista_unica[n+1],lista_unica[n]

print(lista_unica)        
            
        
