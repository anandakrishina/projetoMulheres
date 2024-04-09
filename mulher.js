const express = require("express"); //inicia o express
const router = express.Router(); //configura a primeira parte da rota
cosnt cors = require('cors'); //pacote cors que permite consumir essa api no front
const conectaBancoDeDados = require('./bancoDeDados');
conectaBancoDeDados();

const Mulher = require('./mulherModel');


const app = express(); //inicia o app
app.use(express.json())
app.use(cors())

const porta = 3333; //cria variavel da porta




//GET
async function mostraMulher(request,response){
  try{
    const mulheresVindasDoBancoDeDados = await Mulher.find()
 
    response.json(mulheresVindasDoBancoDeDados)
  } catch(erro){
    console.log(erro)
  }
}

//POST
async function criaMulher(request,response){
  const novaMulher= new Mulher({
      nome: request.body.nome,
      imagem:request.body.imagem,
      minibio:request.body.minibio,
      citacao:request.body.citacao
    })

    try {
      const mulherCriada = await novaMulher.save()
      response.status(201).json(mulherCriada)
    } catch(erro){
      console.log(erro)
    }
}

//PATCH
async function corrigeMulher(request,response){
  try{
    const mulherEncontrada = await Mulher.findById(request.params.id)

    if(request.body.nome){
      mulherEncontrada.nome = request.body.nome;
    }
    if(request.body.minibio){
      mulherEncontrada.minibio = request.body.minibio;
    }
    if(request.body.imagem){
      mulherEncontrada.imagem = request.body.imagem;
    }
    if(request.body.citacao){
      mulherEncontrada.citacao = request.body.citacao;
    }
    const mulherAtualizadaNoBD = await mulherEncontrada.save()
    response.json(mulherAtualizadaNoBD)

  }catch(erro){
    console.log(erro)
  }
}

//DELETE
async function deletaMulher(request,response){
  try {
    await Mulher.findByIdAndDelete(request.params.id)
    response.json({messagem: 'Mulher deletada com sucesso!'})
  } catch (error) {
    console.log(error)
  }
}

//Porta
function  mostraPorta(){
    console.log('Servidor criado e rodando na porta',porta);
}

app.use(router.get('/mulher', mostraMulher)); //configura rota GET/mulher
app.use(router.post('/mulher', criaMulher)); //configura rota POST/mulher
app.use(router.patch('/mulher/:id', corrigeMulher)); //configura rota PATCH/mulher/:id
app.use(router.delete('/mulher/:id', deletaMulher)); //configura rora DELETE/mulher/:id 
app.listen(porta, mostraPorta); //servidor ouvindo a porta


