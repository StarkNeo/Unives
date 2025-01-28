
import os, re


elecciones =["1","2","3"]                 
archivo_config=('r','w','utf-8')
menu = {
    "leer": "1. Leer archivo",
    "editar": "2. Editar visitas",
    "salir": "3. Salir",
}

'''
la funcion validar_archivo, validara que:
-La primera linea del archivo solo contenga numeros
-Que se agreguen ceros a la izquierda
-Que no este vacio

'''
def validar_archivo(nombre_archivo):
    if os.path.exists(nombre_archivo):
        archivo = open(nombre_archivo,archivo_config[0],encoding=archivo_config[2])
        linea = archivo.readline()
        archivo.close()
        #Validar la longitud de la primera linea,si la longitud es cero el archivo esta vacio ha sido corrompido
        longitud = len(linea)# 
        #Validar que solo numeros existan en la primera linea del archivo, si existen otros caracteres el archivo ha sido corrompido
        validar_cadena =re.search("[^0-9]",linea)
        #Validar que no se altere el numero con ceros a las izquierda
        repite_zeros =re.search("^0[0-9]",linea)
        
        if longitud<1:
            print("Archivo vacio, es posible que este corrompido")
            eliminar = input("Desea eliminarlo? Y/N: ")
            if eliminar == 'Y':os.remove('./contador.txt')                       
        elif validar_cadena !=None:
            print("Archivo corrupto")
        elif repite_zeros !=None:
            print("Archivo corrupto")
        else:
            print("Archivo seguro")
            return True
        return False
    
def crear_archivoTxt():
    archivo = open('contador.txt',archivo_config[1],encoding=archivo_config[2])
    archivo.write('0')
    print("Se ha creado el archivo contador.txt")
    archivo.close()

def leer():
    if os.path.exists('contador.txt'):        
        if validar_archivo('contador.txt'):
            print("*"*50)
            print("Bienvenido al contador de visitas")
            print("*"*50)
            archivo = open('contador.txt',archivo_config[0],encoding=archivo_config[2])
            print("Visitas registradas: ",archivo.read())
        else:
            print("Por seguridad, no es posible abrir el archivo")
            return
    else:
        crear_archivoTxt()

def escribir():
    if os.path.exists('contador.txt'):
        if validar_archivo('contador.txt'):            
            print("Bienvenido al contador de visitas")
            archivo= open('contador.txt',archivo_config[0],encoding=archivo_config[2])
            contador_actual = int(archivo.read())
            archivo.close
            print(contador_actual)
            print("opciones 'inc' para incrementar 'dec' para reducir")
            accion = input("Que desea realizar en el archivo?: ")
            if accion =='inc':
                archivo = open('contador.txt',archivo_config[1],encoding=archivo_config[2])
                contador_actual+=1
                archivo.write(str(contador_actual))
                print("Se incremento el numero de visitas: ",contador_actual)
            elif accion == 'dec':
                archivo = open('contador.txt',archivo_config[1],encoding=archivo_config[2])
                mensaje = "Disminuyo el numero de visitas: " if contador_actual > 0 else "No es posible disminuir visitas"
                contador_actual= contador_actual-1 if contador_actual > 0 else contador_actual
                archivo.write(str(contador_actual))
                print(mensaje,contador_actual)
            else:
                print("Visitas registradas: ",contador_actual)             
             
            archivo.close()    
        else:
            print("Por seguridad, no es posible abrir el archivo")
            return
    else:
        crear_archivoTxt()    
        

def main():
    while True:
        print(f"\n{menu['leer']}")
        print(menu["editar"])
        print(menu["salir"])
        eleccion = input("Seleccione una opcion(1-4): ")
        if eleccion == elecciones[0]:
            leer()
        elif eleccion == elecciones[1]:
            escribir()
        elif eleccion == elecciones[2]:
            break                                    
        else:
            print("Eleccion invalida")


# Don't run the main function unless we directly execute this file
if __name__ == "__main__":
    main()

