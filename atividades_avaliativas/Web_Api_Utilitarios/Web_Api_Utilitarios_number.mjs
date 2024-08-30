import express from "express";

const app = express();

app.use(express.json());

app.get('/number/:action', (req, res) => {
    const { action } = req.params;
    
})