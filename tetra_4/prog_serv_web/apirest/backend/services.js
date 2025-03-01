// Importar estructuras de almacenamiento desde el archivo 'data.js'.
const { pedidos, clientes, productos } = require('./data');

/**
 * Construir un XML de un pedido específico utilizando su ID.
 * @param {string} pedidoId - ID del pedido solicitado.
 * @returns {object} - Estructura XML del pedido.
 * @throws {Error} - Lanza error si no se encuentra el pedido.
 */
function buildPedido(pedidoId) {
    // Buscar el pedido en la estructura de datos.
    let pedido = pedidos.find(p => p.orden_id === pedidoId);
    if (!pedido) {
        throw new Error('No se encontró el pedido');
    }

    // Buscar el cliente relacionado al pedido.
    let cliente = clientes.find(c => c.id === pedido.cliente_id);

    // Mapear y estructurar los productos relacionados al pedido.
    let productosData = pedido.productos.map(p => {
        let producto = productos.find(prod => prod.id === p.id_prod);
        return {
            Producto: [
                { link: { _attr: { rel: 'self', href: `http://localhost:3000/productos/${producto.id}` } } },
                { ProductoID: `${producto.id}` },
                { Nombre: producto.nombre },
                { Precio: producto.precio },
                { Cantidad: p.cantidad }
            ]
        };
    });

    // Estructura completa del pedido en formato XML.
    return {
        Pedido: [
            { _attr: { PedidoID: pedidoId } },
            { link: { _attr: { rel: 'self', href: `http://localhost:3000/pedidos/${pedidoId}` } } },
            { Fecha: '2025-02-19' },
            {
                Cliente: [
                    { link: { _attr: { rel: 'self', href: `http://localhost:3000/clientes/${cliente.id}` } } },
                    { ClienteID: `${cliente.id}` },
                    { Nombre: cliente.nombre },
                    {
                        Direccion: [
                            { Calle: cliente.direccion.calle },
                            { Ciudad: cliente.direccion.ciudad },
                            { Estado: cliente.direccion.estado },
                            { CodigoPostal: cliente.direccion.codigoPostal }
                        ]
                    }
                ]
            },
            { Productos: productosData }
        ]
    };
}

/**
 * Construir un XML del cliente solicitado utilizando su ID.
 * @param {string} clientId - ID del cliente solicitado.
 * @returns {object} - Estructura XML del cliente.
 * @throws {Error} - Lanza error si no existe el cliente.
 */
let buildClient = (clientId) => {
    let client = clientes.find(cliente => cliente.id === clientId);
    try {
        if (client) {
            return {
                Cliente: [
                    { ClienteID: `${client.id}` },
                    { Nombre: client.nombre },
                    {
                        Direccion: [
                            { Calle: client.direccion.calle },
                            { Ciudad: client.direccion.ciudad },
                            { Estado: client.direccion.estado },
                            { CodigoPostal: client.direccion.codigoPostal }
                        ]
                    }
                ]
            }
        } else {
            throw new Error("No existe el cliente");
        }
    } catch (error) {
        console.log(error);
    }
};

/**
 * Construir un XML de un producto solicitado utilizando su ID.
 * @param {string} productId - ID del producto solicitado.
 * @returns {object} - Estructura XML del producto.
 */
let buildProduct = (productId) => {
    let product = productos.find(producto => producto.id === productId);
    try {
        if (product) {
            return {
                Producto: [
                    { ProductoID: `${product.id}` },
                    { Nombre: `${product.nombre}` },
                    { Descripcion: `${product.descripcion}` },
                    { Precio: `${product.precio}` }
                ]
            }
        }
    } catch (error) {
        console.log(error); // Mostrar error en consola si ocurre.
    }
};

// Exportar las funciones para uso en otros archivos.
module.exports = { buildPedido, buildClient, buildProduct };
