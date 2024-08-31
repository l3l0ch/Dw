import express from "express";

const app = express();
const port = 3000;

app.use(express.json());

const url = '/text/:action'


app.post(url, (req, res) => {
    
    const { input } = req.body; 
    const { action } = req.params;
    console.log(action)
    console.log(req.body)

    let result;

    if (action === "lowercase") {
        result = {
                "action": `${action}`,
                "output": `${input.toLowerCase()}`
            };
        }
    else if (action === "uppercase") {
        result = {
            "action": `${action}`,
            "output": `${input.toUpperCase()}`
        };
    }
    res.json(result);
})

app.listen(port, () => {
    console.log(`Escutando na porta ${port}`);
})
