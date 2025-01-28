

def funcion():
    return "Hola Mundo"


def llamada_de_retorno(func=""): 
    """Llamada de retorno a nivel global"""
    return globals()[func]()

print (llamada_de_retorno("funcion"))

            
def suma(numero1,numero2):
    return numero1+numero2

if 'suma' in locals():
    if callable(locals()['suma']):
        print(locals()['suma'](5,6))
    else:
        print("La funcion no puede ser invocada")
else:
    print("La funcion no existe")
            
