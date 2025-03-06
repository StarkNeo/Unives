// Servicio SOAP
const service = {
    StockService: {
        StockServiceSoapPort: {
            GetStockPrice: function(args, callback) {
                const stockPrices = {
                    IBM: 120.50,
                    AAPL: 150.25,
                    MSFT: 200.75
                };
                const price = stockPrices[args.stockName] || "El valor de la accion es 0 o no existe, favor de verificar";
                callback({ price: price });
            }
        }
    }
};

module.exports={service}