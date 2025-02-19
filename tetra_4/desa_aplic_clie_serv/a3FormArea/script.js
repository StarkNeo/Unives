//Script para hacer dinamicos elementos del DOM
//Activa inputs para calculo del area dependiendo de la opcion seleccionada
let elementos = document.getElementsByName("area");
let base = document.getElementById('sec-base');
let altura = document.getElementById('sec-altura');
let radio = document.getElementById("sec-radio");

elementos.forEach(element => {
    element.addEventListener('click', () => {
        if (element.id == 'circulo') {
            radio.style.display='flex';
            base.style.display='none';
            altura.style.display='none';
            
        } else {
            radio.style.display='none';
            base.style.display = 'flex';
            altura.style.display='flex';
            
        }

    })
});
