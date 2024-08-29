import express from "express";

const app = express();

app.get('/', (req, res) => {
    res.send(`<h1 style='text-align: center; color: blue;'>Hello World!</h1>`);
})
app.get('/pt', (req, res) => {
    res.send(`<h1 style='text-align: center; color: blue;'>Olá Mundo!</h1>`);
})

app.listen(3000, () => {
    console.log("Servidor localhost Escutando Na porta 3000")
})