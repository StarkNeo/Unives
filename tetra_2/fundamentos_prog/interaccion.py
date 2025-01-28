import tkinter as tk
from tkinter.messagebox import showerror
import re

# Configuración de la pantalla interfaz
frame = tk.Tk()
frame.title("Buscador de Caracteres")
frame.geometry('500x500')

subtitulo = tk.Label(frame, text="Busca una palabra o caracter en este texto",font=("Helvetica",15))
subtitulo.pack()
# Cadena de texto donde se desea buscar el caracter, palabra o subcadena
cadena = tk.Label(frame, text="""Podrá nublarse el sol eternamente;
Podrá secarse en un instante el mar;
Podrá romperse el eje de la tierra como un débil cristal.
¡Todo sucederá! Podrá la muerte cubrirme con su fúnebre crespón;
Pero jamás en mí podrá apagarse la llama de tu amor.""" )
cadena.pack()

# Función que buscará la palabra usando la librería re
def buscar():
    inp = inputtxt.get(1.0, "end-1c")
    try:
        match = re.search(f"{inp}", cadena.cget("text"), re.IGNORECASE)
        print(match)
        if(match == None):
            lbl.config(text=f"El patrón {inp} no fue localizado")
        else:
            patron = match.group()
            print(patron)
            posicion = match.span()
            output = f"""se encuentra en:
            posición {posicion[0]}
            hasta {posicion[1]}"""
            lbl.config(text=f"El patrón {patron}: " + output)
    except ValueError as error:
        showerror(title='Error', message=error)

# TextBox para capturar la palabra o caracter que se desea buscar
inputtxt = tk.Text(frame, height=1, width=20)
inputtxt.pack()

# Botón buscar ejecutará la función buscar() al hacer clic
boton_buscar = tk.Button(frame, text="Buscar", command=buscar)
boton_buscar.pack()

# Salida resultado
lbl = tk.Label(frame, text="")
lbl.pack()

frame.mainloop()
