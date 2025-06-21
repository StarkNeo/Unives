const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())
app.use(express.json())

app.listen(3000,()=>{
    console.log("server listening on port 3000")
})

app.get("/hola",(request, response)=>{
    response.status(200).send({message: "Hola mundo"})
})

