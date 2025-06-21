// Usando el SDK de MongoDB
const { MongoClient } = require('mongodb');
const uri = "mongodb://localhost:27017";

async function consultarDatos() {
  const cliente = new MongoClient(uri);

  try {
    await cliente.connect();
    let baseDeDatos = cliente.db("nosqlpracticas");
    let coleccion = baseDeDatos.collection("usuarios");
    let resultado =  await coleccion.find({age:{$gt:40}}).toArray();
    console.log("Usuarios mayores de 40 años:", resultado);
  } finally {
    await cliente.close();
  }
}

consultarDatos().catch(console.error);