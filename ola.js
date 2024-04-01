const express = require("express")

const app = express();
const porta = 3338;

function  mostraPorta(){
    console.log('Servidor criado e rodando na porta',porta);
}

app.listen(porta, mostraPorta)

const router = express.Router();
app.use(router.get('/ola', mostraOla));


function mostraOla(request,response){
    response.send('Ola, mundo!')
}

