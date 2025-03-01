/**
 * Crear un elemento de descarga con un archivo XML.
 * @param {string} file - Contenido del archivo a descargar.
 */
const crearDescargable = (file) => {
    let container = document.getElementById('downloads'); // Contenedor donde se añadirán los enlaces de descarga.
    let blob = new Blob([file], { type: 'application/xml' }); // Crear un archivo Blob con contenido XML.
    let urlObj = window.URL.createObjectURL(blob); // Generar una URL para el archivo.
    let link = document.createElement('a'); // Crear un enlace.
    link.href = urlObj; // Asignar la URL generada al enlace.
    link.download = 'descargar.xml'; // Nombrar el archivo descargable.
    container.appendChild(link); // Añadir el enlace al contenedor.
    link.textContent = `descargar`; // Mostrar el texto "descargar" en el enlace.
};

/**
 * Validar la entrada de texto, eliminando caracteres no permitidos y verificando el formato.
 * @param {string} input - Texto a validar.
 * @returns {boolean} - True si la entrada es válida, False si no.
 */
const validarEntrada = (input) => {
    if (input.trim() === "") {
        return false; // Retorna falso si la entrada está vacía.
    } else {
        let removeChars = input.replace(/[\\"'<>]/g, '\\$&'); // Escapar caracteres especiales.
        let regex = /^[a-zA-Z0-9]*$/; // Expresión regular para aceptar solo letras y números.
        let validation = regex.test(removeChars); // Validar contra la expresión regular.
        return validation; // Retorna el resultado de la validación.
    }
};

/**
 * Manejar solicitudes a un URL y renderizar su contenido XML en el contenedor principal.
 * @param {string} url - Dirección del recurso a solicitar.
 */
const handleRequest = async (url) => {
    try {
        let response = await fetch(url, { headers: { 'Accept': 'application/xml' } });
        let text = await response.text();
        crearDescargable(text); // Crear archivo descargable con el contenido.
        let parsed = new DOMParser();
        let xmlDoc = parsed.parseFromString(text, 'application/xml');
        let container = document.getElementById('output-container');
        container.innerHTML = ''; // Limpiar contenido anterior.
        renderXML(xmlDoc.documentElement, container); // Renderizar el contenido XML.
    } catch (error) {
        console.log(error); // Mostrar el error en la consola.
    }
};

/**
 * Mostrar un pop-up con contenido XML solicitado de un URL específico.
 * @param {string} url - Dirección del recurso a solicitar.
 */
const handlePop = async (url) => {
    try {
        let response = await fetch(url, { headers: { 'Accept': 'application/xml' } });
        let text = await response.text();
        crearDescargable(text); // Crear archivo descargable con el contenido.
        let parsed = new DOMParser();
        let xmlDoc = parsed.parseFromString(text, 'application/xml');
        let container = document.getElementById('popup'); // Contenedor del pop-up.
        let popData = document.getElementById('data-area'); // Área para mostrar los datos.
        popData.innerHTML = ''; // Limpiar contenido anterior.
        let output = document.getElementById('output-container');
        container.style.display = 'flex'; // Mostrar el pop-up.
        output.style.display = 'none'; // Ocultar el contenedor principal.
        renderXML(xmlDoc.documentElement, popData); // Renderizar el contenido XML.
    } catch (error) {
        console.log(error); // Mostrar el error en la consola.
    }
};

/**
 * Cerrar el pop-up y mostrar el contenedor principal.
 */
const handleClose = () => {
    let container = document.getElementById('popup');
    let output = document.getElementById('output-container');
    container.style.display = 'none'; // Ocultar el pop-up.
    output.style.display = 'flex'; // Mostrar el contenedor principal.
};

/**
 * Solicitar datos de un URL predeterminado o específico, validando entradas si es necesario.
 * @param {string} [url='http://localhost:3000/pedidos/'] - URL del recurso.
 */
const requestData = async (url = 'http://localhost:3000/pedidos/') => {
    if (url === "http://localhost:3000/pedidos/") {
        let id = document.getElementById('numero-pedido').value;
        if (validarEntrada(id)) {
            console.log(`${url}${id}`);
            handleRequest(`${url}${id}`); // Realizar solicitud con el ID.
        } else {
            alert("error de entrada"); // Mostrar alerta si la entrada no es válida.
        }
    } else {
        console.log(url);
        handlePop(url); // Mostrar pop-up con datos de un URL específico.
    }
};

/**
 * Renderizar elementos XML de forma jerárquica y estilizada en un contenedor.
 * @param {Node} xmlNode - Nodo XML a renderizar.
 * @param {HTMLElement} container - Contenedor donde se renderizará el XML.
 */
const renderXML = (xmlNode, container) => {
    if (xmlNode.nodeType === 1) { // Tipo 1: Nodo ELEMENTO.
        let element = document.createElement('div');
        element.classList.add('xml-element'); // Añadir clase para estilos.

        if (xmlNode.nodeName === 'link') {
            let enlace = document.createElement('a');
            enlace.href = "#";
            let url = xmlNode.getAttribute('href');
            if (url.search("pedidos") === -1) {
                enlace.addEventListener('click', (e) => {
                    e.preventDefault();
                    requestData(url); // Realizar nueva solicitud al hacer clic.
                });
                enlace.textContent = xmlNode.nodeName + ':';
                element.appendChild(enlace);
                let textNode = document.createTextNode(xmlNode.getAttribute('href'));
                xmlNode.appendChild(textNode);
            } else {
                let nameLabel = document.createElement('strong');
                nameLabel.textContent = xmlNode.nodeName + ': ';
                element.appendChild(nameLabel);
                let textNode = document.createTextNode(xmlNode.getAttribute('href'));
                xmlNode.appendChild(textNode);
            }
        } else {
            let nameLabel = document.createElement('strong');
            nameLabel.textContent = xmlNode.nodeName + ': ';
            element.appendChild(nameLabel);
        }

        Array.from(xmlNode.childNodes).forEach(childNode => {
            renderXML(childNode, element); // Renderizar hijos de forma recursiva.
        });

        container.appendChild(element);
    } else if (xmlNode.nodeType === 3) { // Tipo 3: Nodo TEXTO.
        let textNode = document.createTextNode(xmlNode.nodeValue.trim());
        if (textNode.nodeValue) {
            container.appendChild(textNode);
        }
    }
};


