//FUNCION COMPLEMENTO 1
// Función para filtrar texto en un elemento
function filtrarTexto(elemento,palabrasProhibidas) {
    let texto = elemento.text();
    palabrasProhibidas.forEach(function (palabra) {
        let regex = new RegExp('\\b' + palabra + '\\b', 'gi');
        texto = texto.replace(regex, '<b>Contenido Bloqueado</b>');
    });
    //Sustituye el elemento html con una nuevo que contiene la etiqueta <b> de negrita
    elemento.html(texto);
}

//FUNCION COMPLEMENTO 2
// Función recursiva para filtrar elementos hijos
function filtrarElementosHijos(elemento,palabrasProhibidas) {
    //Integra en un array todos los nodos hijos de este nodo
    let nodosHijos = Array.from(elemento.childNodes);

    //Por cada nodo hijo busca su nodo texto
    nodosHijos.forEach(function (child){
        //Si el nodo hijo es de tipo texto
        if (child.nodeType === Node.TEXT_NODE) {
            //Obten el texto y guardalo en la variable
            let texto = child.textContent;
            //Recorre el arreglo de palabras prohibidas
            palabrasProhibidas.forEach(function (palabra){
                //crea un molde para buscar la palabra completa en cualquier parte del texto
                let regex = new RegExp('\\b'+palabra+'\\b','gi');
                //reemplaza la palabra
                texto = texto.replace(regex,'<b>Contenido Bloqueado</b>');
            });
            //crear un nuevo elemento hijo para reemplazar al que no tiene negritas
            let nuevoHijo = document.createElement('span');
            nuevoHijo.innerHTML = texto;
            //agrega el texto al nodo hijo
            elemento.replaceChild(nuevoHijo, child);
        } else {
            //si el nodo no es de tipo texto, recurre a esta misma funcion hasta encontrar o descartar
            filtrarElementosHijos(child,palabrasProhibidas)
        }
    })
}

//FUNCION PRINCIPAL
function bloquearContenido(palabrasProhibidas) {
    // palabrasProhibidas es una lista de palabras en un array que la función tomará y filtrará

    // Selecciona todos los elementos en el body
    let bodyElements = $('body *');

    // Iterar sobre cada elemento en el body
    bodyElements.each(function () {
        let elemento = $(this);
        // si el elemento  no tiene hijos, filtra el texto de ese elemento
        if (elemento.children().length === 0) {
            filtrarTexto(elemento,palabrasProhibidas);
        } 
        // si el elemento tiene hijos, itera sobre cada nodo hijo 
        else {
            filtrarElementosHijos(this,palabrasProhibidas);
        }
    });
    
}


// EJECUTAR FUNCION AL CARGAR EL DOM
$(document).ready(function () {
    let palabrasCensuradas = ['sexo'];
    bloquearContenido(palabrasCensuradas);
});


