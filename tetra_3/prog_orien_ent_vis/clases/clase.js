class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    
    saludar() {
        console.log(`Hola, me llamo ${this.nombre} y tengo ${this.edad} años.`);
    }
    
    cumplirAnos() {
        this.edad += 1;
        console.log(`¡Feliz cumpleaños ${this.nombre}! Ahora tienes ${this.edad} años.`);
    }
}

module.exports= {Persona}