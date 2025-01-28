"""def profile(nombre="Jesus", edad=43, email="jesushdzusa@gmail.com"):
    print(f"Nombre: {nombre}\nEdad: {edad}\nemail: {email}")


print("***Omitiendo argumentos predeterminados***")
profile(43)
print("***Asignando valores a los argumentos***")
profile("Angel",43)
profile("Angel",44,"jesus@gmail")
            


def sumatoria(*numbers):
    total = 0
    for number in numbers:
        total +=number
    print("The total is: ",total)

print("Sin argumentos")
sumatoria()
print("Con argumentos")
sumatoria(5,6,9,1,3)
sumatoria(1,3)
sumatoria(1)
sumatoria(6.5,9.8)
"""

"""
def imprime_datos(nombre, **datos):
    print("Datos de "+nombre)
    for clave in datos:
        print(clave,":",datos[clave])

imprime_datos("Jesus",edad=43, estado_civil="casado",nacionalidad="Mexicano")
"""



def mi_funcion(): 
    return "Hola Mundo" 

def saludar(nombre, mensaje='Hola'): 
    print (mensaje, nombre) 
    print (mi_funcion())

saludar("Jesus")
