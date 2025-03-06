//Importacion de librerias necesarias
const express = require('express');
const soap = require('soap');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const xml2js = require('xml2js');
const {service} = require('./soapService');

const app = express();//Instancia de la libreria express
const port = 8000;//Puerto local donde correra el servidor

// Middleware para parsear solicitudes en formato JSON and XML
app.use(bodyParser.json());
app.use(bodyParser.text({ type: 'text/xml' }));
app.use(cors());

// Ruta del archivo WSDL
const wsdlPath = path.resolve(__dirname, 'stock.wsdl');

// Iniciar servidor
app.listen(port, () => {
    console.log(`Express server running on http://localhost:${port}`);
});

// Middleware que maneja las solicitudes SOAP del cliente
app.post('/stocks/prices', (req, res) => {
    const xml = req.body;

    // Parsear la solicitud XML
    xml2js.parseString(xml, (err, result) => {
        if (err) {
            res.status(500).send('Error parsing XML');
            return;
        }

        // Extraer el valor del nombre del stock recibido en la solicitud XML
        const stockName = result['soapenv:Envelope']['soapenv:Body'][0]['stock:GetStockPrice'][0]['stockName'][0];

        //Llamar a la funcion GetStockPrice del servicio SOAP
        service.StockService.StockServiceSoapPort.GetStockPrice({ stockName }, (response) => {
            // Crear una respuesta SOAP xml
            const responseXml = `
                <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/">
                    <soapenv:Body>
                        <stock:GetStockPriceResponse xmlns:stock="http://www.example.org/StockService/">
                            <price>${response.price}</price>
                        </stock:GetStockPriceResponse>
                    </soapenv:Body>
                </soapenv:Envelope>
            `;

            // Enviar la respuesta al cliente
            res.set('Content-Type', 'text/xml');
            res.send(responseXml);
        });
    });
});
/*
CREA UN SERVIDOR SOAP QUE ESCUCHA SOBRE LA RUTA ESPECIFICADA Y PROVEE SERVICIOS
**DOCUMENTACION DE LIBRERIA "soap"** 
server (Object): A http server or Express framework based server.(app)
path (string)('/stocks/prices')
options (Object): An object containing server options and WSDL Options
    services (Object) IMPORTADO DEL ARCHIVO soapService.js
    
wsdl (string): An XML string that defines the service. RUTA DEL ARCHIVO "wsdl"
callback (Function): A function to run after the server has been initialized.
Returns: Server

*/

soap.listen(app, '/stocks/prices', service, wsdlPath, () => {
    console.log(`SOAP server running on http://localhost:${port}/stocks/prices`);
});

