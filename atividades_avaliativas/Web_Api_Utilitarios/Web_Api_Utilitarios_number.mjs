import express from "express";
import morgan from 'morgan';
import { findMin, findMax } from './utils/numbers.mjs'

const app = express();
const port = 3000;
app.use(express.json())
app.use(morgan('combined'));


app.post('/number/:action/', (req, res) => {
    const { action } = req.params;
    const  input  = req.query.input;
    let results; 
    const list = input.split(',');

    switch (action){
        case "minimum":
            results = {'OUTPUT': findMin(list)};
            break;
        case "maximum":
            results = {
                'OUTPUT': findMax(list)
            };
            break;
    }   
    
    res.send(results);
})
app.listen(port, () => {
    console.log(`rodando servidor http://locahost:${port}`)
})