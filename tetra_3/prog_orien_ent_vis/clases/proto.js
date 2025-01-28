/*// Función constructora
function Coches(m) {
    this.modelo = m;
}

// Añadir propiedades y métodos al prototipo
Coches.prototype.marca = "Fordcar";
Coches.prototype.ficha = function() {
    console.log(this.marca + " " + this.modelo);
};

let miCoche = new Coches("basic");
console.log(miCoche.modelo);  // "basic"
console.log(miCoche.marca);   // "Fordcar"
miCoche.ficha();              // "Fordcar basic"*/



/// Clase ES6
class Coches {
    constructor(m) {
        this.modelo = m;
    }
    // Los métodos aquí son automáticamente añadidos al prototipo
    ficha() {
        console.log(this.marca + " " + this.modelo);
    }
}

// Añadir una propiedad al prototipo
Coches.prototype.marca = "Fordcar";

let miCoche = new Coches("basic");
let suCoche = new Coches("sport");
console.log(miCoche.modelo); //basic
console.log(miCoche.marca); //Fordcar



