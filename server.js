const express = require('express');
const app = express();
const port = 3000;

app.get("/" , (req, res) => {res.send("opa")})

const clientes = [];

app.get("/cliente",(req, res) => {res.send(clientes);});

app.get("/cliente/:id" , (req, res) => {
    const id = req.params.id;
    const cliente = clientes.find(cliente => cliente.id == id);
    res.send(cliente);
})

app.post("/cliente", express.json() ,(req, res)  => {
let cliente = req.body;
cliente.id = clientes.length + 1;
clientes.push(req.body);
res.send("cliente cadastrado com sucesso");
});

app.put("/cliente/:id", (req, res) => {
const id = req.params.id;
for (let index = 0; index < clientes.length; index++) {
   if(clientes[index].id == id){
    let cliente = req.body;
    cliente.id = id;
    clientes[index] = cliente;
   };
}
res.send("cliente com id" + id + " atualizado com sucessu")
})

app.listen(port, () => {console.log("servidor rodando a http://localhost:3000/"); });