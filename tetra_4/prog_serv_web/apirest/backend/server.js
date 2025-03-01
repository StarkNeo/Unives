// Importación de librerías y módulos necesarios.
const express = require('express'); // Framework para crear un servidor web.
const xml = require('xml'); // Librería para manejar datos en formato XML.
const app = express(); // Crear una instancia de Express.
const cors = require('cors'); // Middleware para manejar políticas CORS.
const { buildPedido, buildClient, buildProduct } = require('./services.js'); // Importar funciones desde 'services.js'.

/**
 * Middleware para recibir las peticiones en formato texto con tipo 'application/xml'.
 */
app.use(express.text({
    type: 'application/xml'
}));

/**
 * Levantar el servidor en el puerto 3000.
 */
app.listen(3000, () => {
    console.log("Servidor escuchando en puerto 3000");
});

/**
 * Middleware para permitir peticiones de diferentes orígenes (CORS).
 */
app.use(cors());

/**
 * Middleware para manejar datos JSON en las peticiones entrantes.
 */
app.use(express.json());

/**
 * Endpoint para responder con un XML que contiene la estructura de un pedido específico.
 * @param {number} id - ID del pedido pasado como parámetro en la URL.
 * @returns {XML} - Estructura XML del pedido solicitado.
 */
app.get('/pedidos/:id', (req, res) => {
    console.log(req.params); // Log de los parámetros recibidos en la petición.
    const pedidoId = parseInt(req.params.id); // Convertir el parámetro 'id' a un entero.
    let pedido = buildPedido(pedidoId); // Construir el XML del pedido usando la función importada.
    res.send(xml(pedido)); // Enviar el XML como respuesta.
});

/**
 * Endpoint para responder con un XML que contiene la estructura de un cliente específico.
 * @param {number} id - ID del cliente pasado como parámetro en la URL.
 * @returns {XML} - Estructura XML del cliente solicitado.
 */
app.get('/clientes/:id', (req, res) => {
    let clienteId = parseInt(req.params.id); // Convertir el parámetro 'id' a un entero.
    let cliente = buildClient(clienteId); // Construir el XML del cliente usando la función importada.
    res.send(xml(cliente)); // Enviar el XML como respuesta.
});

/**
 * Endpoint para responder con un XML que contiene la estructura de un producto específico.
 * @param {number} id - ID del producto pasado como parámetro en la URL.
 * @returns {XML} - Estructura XML del producto solicitado.
 */
app.get("/productos/:id", (req, res) => {
    let productId = parseInt(req.params.id); // Convertir el parámetro 'id' a un entero.
    let producto = buildProduct(productId); // Construir el XML del producto usando la función importada.
    res.send(xml(producto)); // Enviar el XML como respuesta.
});
