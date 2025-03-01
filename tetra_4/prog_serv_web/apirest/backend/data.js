//Almacen de datos, simula informacion almacenada en una base de datos
//Clientes, arreglo que contiene 3 clientes registrados con su informacion 
let clientes = [
    {
        id: 1,
        nombre: 'Jesus Hernandez',
        direccion: {
            calle: '4a ave cumbres 1ser sector',
            ciudad: 'Monterrey',
            estado: 'NL',
            codigoPostal: '64000'
        }
    },
    {
        id: 2,
        nombre: 'Angel Martinez',
        direccion: {
            calle: 'Agave 1000 col. mirador',
            ciudad: 'San Nicolas de los Garza',
            estado: 'NL',
            codigoPostal: '66000'
        }
    }
]

//Productos, arreglo que contiene 2 productos disponibles en el catalogo
let productos = [
    {
        id: 1,
        nombre: 'Producto 1',
        descripcion: 'Descripcion 1',
        precio: 15.8,
    },
    {
        id: 2,
        nombre: 'Producto 2',
        descripcion: 'Descripcion 2',
        precio: 20
    }
]

//Pedidos, arreglo que contiene el registro de los pedidos realizados por clientes.

let pedidos = [
    {
        orden_id: 1,
        cliente_id: 2,
        productos: [
            {
                id_prod: 2,
                cantidad: 6
            },
            {
                id_prod: 1,
                cantidad: 4
            }
        ]
    },
    {
        orden_id:2,
        cliente_id:2,
        productos:[
            {
                id_prod:1,
                cantidad:2
            },
            {
                id_prod:2,
                cantidad:4
            }
        ]
    },
    {
        orden_id:3,
        cliente_id:1,
        productos:[
            {
                id_prod:1,
                cantidad:2
            },
            {
                id_prod:2,
                cantidad:4
            }
        ]
    }
]
//Exportar estructuras para ser utilizadas en otro archivo
module.exports={pedidos,clientes,productos}