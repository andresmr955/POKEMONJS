const express = require("express")

const app = express()

app.get("/", (req, res) => {
    res.send("Hola Andres")
})

app.listen(8080, () => {
    console.log("Servidor funcionando")
})
