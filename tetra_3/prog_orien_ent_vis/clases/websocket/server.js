// importamos la libreria ws
const WebSocket = require('ws');

//creamos la instancia y la almacenamos en una variable
const server = new WebSocket.Server({ port: 8080 });

//Establecemos la respuesta del servidor

server.on('connection', (ws) => {
    //Mensaje que se mostrara en la terminal o log de procesos del servidor 
    console.log('Se abrio una conexion con el cliente');

    // Enviar un mensaje al cliente cada dos segundos para probar que la conexion sigue abierta
    const sendMessages = setInterval(() => {
        ws.send('Hola cliente, te enviare este mensaje cada 2s para probar que nuestra conexion sigue abierta!');
    }, 2000);

    // Escuchar mensajes del cliente
    ws.on('message', (message) => {
        console.log(`Recibe un mensaje tuyo: ${message}`);
    });
    //Error de conexion
    ws.on('error', (error) => {
        window.send("Servidor caido")
        console.error

    })

    // Cerrar la conexion
    ws.on('close', () => {
        console.log('Cliente desconectado');
        ws.send("Hola cliente debo cerrar la conexion por seguridad")
        clearInterval(sendMessages);
    });
});

console.log('El servidor de websockets esta corriendo en ws://localhost:8080');
