import pandas as pd


data = {
    "vuelta":[],
    "lista previa":[],
    "lista actual": [],
    }
lista = [3, 5, 6, 10, 1, 8]
#variable de control ciclo while
desordenada = True
ciclo_while = 1
while desordenada:
    desordenada = False
    print("Ciclo While ejecutado: ",ciclo_while)
    print("vuelta          lista previa          comparacion                           lista actual")    
    for n in range(len(lista)-1):
        print(n," "*10,end='')
        print(lista,end='     ')
        print(f"{lista[n]} > {lista[n+1]}? {lista[n]>lista[n+1]}, ",end='')
        if lista[n] > lista[n+1]:            
            print("Intercambia valores "," "*3,end='') 
            desordenada = True
            temporal = lista[n]
            lista[n]=lista[n+1]
            lista[n+1]=temporal
        else:
            print("Dejar igual "," "*9,end='')
        print(lista)
    ciclo_while +=1
