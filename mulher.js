const express = require("express");
const router = express.Router();


const app = express();
const porta = 3333;

const mulheres=[
    {
        nome: 'Ananda Krishina',
        imagem: 'https://i.pinimg.com/474x/01/98/f2/0198f2682f0ca70f29c70812633f5052.jpg',
        minibio: 'desenvolvedora de sistemas'
    },
    {

        nome: 'Simara Conceição',
        imagem: 'https://bit.ly/3LJIyOF',
        minibio: 'Desenvolvedora e instrutora',
      },
      {
        nome: 'Iana Chan',
        imagem: 'https://bit.ly/3JCXBqP',
        minibio: 'CEO & Founder da PrograMaria',
      },
      {
        nome: 'Luana Pimentel',
        imagem: 'https://bit.ly/3FKpFaz',
        minibio: 'Senior Staff Software Engineer',
      }
]

function mostraMulher(request,response){
    response.json(mulheres)
}




function  mostraPorta(){
    console.log('Servidor criado e rodando na porta',porta);
}

app.use(router.get('/mulher', mostraMulher));

app.listen(porta, mostraPorta);


