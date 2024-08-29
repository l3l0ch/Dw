import express from "express";

const app = express();
const port = 3000;

app.use(express.json());

const url = '/'

app.post(url, (req, res) => {
    
    const { action, input } = req.body; 
    console.log(req.body)

    if (action === "lowercase" || action === "UpperCase") {
        let result;
        switch (action) {
            case "lowercase":
                result = {
                    "action": `${action}`,
                    "input": `${input}`,
                    "output": `${input.toLowerCase()}`
                };
                break;
            case "UpperCase":
                result = {
                    "action": `${action}`,
                    "input": `${input}`,
                    "output": `${input.toUpperCase()}`
                };
                break;
    
        }
        res.send(result);    
    }
    else{
        console.log(`Error: Action - ${action} deve ser {lowercase ou UpperCase}`)
    }
});

app.listen(port, () => {
    console.log(`Escutando na porta ${port}`);
})