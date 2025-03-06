const axios = require('axios');
const xml2js = require('xml2js');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function getStockPrice() {
    let stockName;
    rl.question('Capture el nombre de una accion: ', (input) => {
        // Regex valida que la entrada contenga solo letras
        const regex = /^[A-Za-z\s]+$/;
        stockName = input.trim();
        if (stockName === '') {
            console.log('La entrada no puede estar vacia. Intente de nuevo.');
            getStockPrice(); // Repeat the process
        }
        else if (!regex.test(stockName)) {
            console.log("Capture solo letras. Intente de nuevo. ");
            getStockPrice();
        }
        else {
            console.log(`Se solicitara el precio de: ${input}`);
            rl.close();
            serverRequest(stockName);
        }
    });
    //return stockName;

}


async function serverRequest(stockName) {


    //Estructura XML SOAP que se envia al servidor
    let soapRequest = `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:stock="http://www.example.org/StockService/">
       <soapenv:Header/>
       <soapenv:Body>
          <stock:GetStockPrice>
             <stockName>${stockName}</stockName>
          </stock:GetStockPrice>
       </soapenv:Body>
    </soapenv:Envelope>
`;
    //Metodo post enviado al servidor
    axios.post('http://localhost:8000/stocks/prices', soapRequest, {
        headers: {
            'Content-Type': 'text/xml',
            'SOAPAction': 'http://www.example.org/StockService/GetStockPrice'
        },

    })
        .then(response => {
            //Parsea la respuesta a formato XML
            let parser = new xml2js.Parser();
            parser.parseString(response.data, (err, result) => {
                if (err) {
                    console.error('Ocurrio un error al parsear la respuesta: ', err);
                    return;
                }
                //Extraer el valor precio de la respuesta
                let price = result['soapenv:Envelope']['soapenv:Body'][0]['stock:GetStockPriceResponse'][0]['price'][0];
                console.log(`El precio de ${stockName} stock es: ${price}`);
            });
        })
        .catch(err => {
            console.error('Error al crear la solicitud SOAP:', err);
        });


}

getStockPrice();


/*
//Solicitud SOAP

let stockName = 'AAPL';//Parametro que se incluye en la estructura XML SOAP
//Estructura XML SOAP que se envia al servidor
let soapRequest = `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:stock="http://www.example.org/StockService/">
       <soapenv:Header/>
       <soapenv:Body>
          <stock:GetStockPrice>
             <stockName>${stockName}</stockName>
          </stock:GetStockPrice>
       </soapenv:Body>
    </soapenv:Envelope>
`;
//Metodo post enviado al servidor
axios.post('http://localhost:8000/stocks/prices', soapRequest, {
    headers: {
        'Content-Type': 'text/xml',
        'SOAPAction': 'http://www.example.org/StockService/GetStockPrice'
    },

})
    .then(response => {
        //Parsea la respuesta a formato XML
        let parser = new xml2js.Parser();
        parser.parseString(response.data, (err, result) => {
            if (err) {
                console.error('Ocurrio un error al parsear la respuesta: ', err);
                return;
            }
            //Extraer el valor precio de la respuesta
            let price = result['soapenv:Envelope']['soapenv:Body'][0]['stock:GetStockPriceResponse'][0]['price'][0];
            console.log(`El precio de ${stockName} stock es: ${price}`);
        });
    })
    .catch(err => {
        console.error('Error al crear la solicitud SOAP:', err);
    });



*/