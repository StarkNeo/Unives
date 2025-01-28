try:
    archivo = open('mipresentacion.txt','r',encoding='utf-8')
    for linea in archivo:
        if linea[-1]=='\n':
            linea=linea[:-1]
        print(linea)
    archivo.close()
except IOError:
    print("No existe el archivo")