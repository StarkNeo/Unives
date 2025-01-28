numeros = [] #Lista que almacenara los numeros capturados por el usuario
suma = 0 #variable que realizara la suma de los numeros en la lista
promedio = 0 #variable que calculara el promedio
#variable que captura la cantidad de numeros que el usuario introducira
cantidad = int(input("Cuantos numeros desea introducir?: "))
#contador que se utlizara en el ciclo while para controlar
#el inicio y fin del ciclo
contador = 0
while contador < cantidad:
    #numero introducidor por el usuario
    numero = int(input("Capture un numero: "))
    #almacenar el numero en la lista
    numeros.append(numero)
    #sumar el numero
    suma+=numero
    #incrementar el contador en 1
    contador+=1

promedio = suma/cantidad
print(f"""
Los numeros capturados fueron: {numeros}
La suma es: {suma}
El promedio es: {promedio}
""")
