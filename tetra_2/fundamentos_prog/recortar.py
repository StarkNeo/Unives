"""
Realiza una función llamada recortar (numero, minimo, maximo) que reciba
tres parámetros.
El primero es el número a recortar,
el segundo es el límite inferior y el
tercero el límite superior. La función tendrá que cumplir lo siguiente:

Devolver el límite inferior si el número es menor que éste.
Devolver el límite superior si el número es mayor que éste.
Devolver el número sin cambios si no se supera ningún límite.
Comprueba el resultado de recortar 15 entre los límites 0 y 10.
Explicar con tus palabras el funcionamiento de la función.
"""
def recortar(numero,minimo,maximo):
    if numero<minimo:
        #Devolver el límite inferior si el número es menor que éste.
        return minimo
    elif numero>maximo:
        #Devolver el límite superior si el número es mayor que éste.
        return maximo
    else:
        #Devolver el número sin cambios si no se supera ningún límite.
        return numero
resultado = recortar(15,0,10)
print(resultado)
print(recortar(8,0,10))
print(recortar(-1,0,10))
