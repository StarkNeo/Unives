agenda ={
    "Jesus Hernandez":["525512345678","523398765432"],
    "Angel Martinez":["528123456789"],
    "Sendy Mata":["525587654321"],
    "Rebeca Hernandez":["523356781234"],
    "Eduardo Rodriguez":["523312345678"]
}

#funcion para buscar el nombre de un contacto en la agenda
def buscar_contacto(nombre):
    if agenda.get(nombre):
        return True
    return False
#funcion para buscar el telefono en la agenda
def buscar_telefono(nombre,telefono):
    if telefono in agenda[nombre]:
        return True
    return False

#funcion para validar el formato de telefono
def valida_telefono(telefono):
    if len(telefono) !=12:
        return False
    return True
    
def agregar():
    nombre = input("Nombre del contacto: ")
    telefono = input("Numero de telefono: ")
    contacto_encontrado = buscar_contacto(nombre)
    telefono_valido = valida_telefono(telefono)
    
    while not telefono_valido:
        print("El numero debe contener 12 posiciones")
        telefono = input("Numero de telefono: ")
    try:
        if contacto_encontrado:
            try:
                agenda[nombre].append(telefono)
                print("Numero agregado")
            except TypeError as e:
                print(f"Error al agregar el numero: {e}")
        else:
            agenda[nombre]=[telefono]
            print("Un nuevo contacto con telefono fue agregado")
        
    except ValueError as e:
        print(ValueError)
    
def actualizar():
    nombre = input("Nombre del contacto: ")
    contacto_encontrado = buscar_contacto(nombre)
    if contacto_encontrado:
        telefono = input("Numero telefonico que desea actualizar: ")
        while not valida_telefono(telefono):
            print("El numero debe contener 12 posiciones")
            telefono = input("Numero telefonico que desea actualizar: ")
        if telefono in agenda[nombre]:
            posicion = agenda[nombre].index(telefono)
            nuevo_telefono = input("Numero telefonico nuevo: ")
            while not valida_telefono(nuevo_telefono):
                print("El numero debe contener 12 posiciones")
                nuevo_telefono = input("Numero telefonico nuevo: ")
            print("Se actualizo un registro telefonico")
            print("Registro anterior: ",agenda[nombre])            
            agenda[nombre][posicion]=nuevo_telefono
            print("Registro actual: ",agenda[nombre])
        else:
            print("El telefono que desea actualizar no existe")
                                                
    else:
         print("El contacto no existe")   

        
def eliminar():
    telefono = input("Numero telefonico que desea eliminar?: ")
    mensaje = 'Numero no localizado'
    while len(telefono)!=12:
        print("El numero debe contener 12 posiciones")
        telefono = input("Numero de telefono: ")
        
    try:
        for key, value in agenda.items():
            if telefono in value:
                agenda[key].remove(telefono)
                mensaje = "Numero eliminado con exito"
                break
        print(mensaje)    
        
            
    except ValueError:
        print(ValueError)
        
def consultar():
    print("-"*10,"Directorio Telefonico","-"*10)
    print("-"*43)
    print("Nombre             |","Telefono")
    print("-"*43)
    for key in agenda.keys():
        for value in agenda[key]:
            print(key,end=" "*int(22-len(key)))
            print(value)

      

def main():
    consultar()
    while True:
        print("\n1. Añadir")
        print("2. Actualizar")
        print("3. Eliminar")
        print("4. Consultar agenda")
        print("5. Salir")
        eleccion = input("Seleccione una opcion(1-4): ")
        if eleccion == "1":
            agregar()
        elif eleccion == "2":
            actualizar()                        
        elif eleccion == "3":
            eliminar()
        elif eleccion == "4":
            consultar()
        elif eleccion == "5":
            print("Programa terminado")
            return
        else:
            print("Eleccion invalida")


# Don't run the main function unless we directly execute this file
if __name__ == "__main__":
    main()

