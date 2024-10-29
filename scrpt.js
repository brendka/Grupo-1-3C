const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPerguntas = document.querySelector('.caixa-perguntas');
const caixaAlternativas = document.querySelector('.caixa-alternativas');
const caixaResultado = document.querySelector('.caixa-resultado');
const textoResultado = document.querySelector('.texto- resultado');
const lista = [item, item2]
const perguntas = [
{
    enunciado: "Probabilidade de ganhar no tigrinho",
    alternativa: ["10%","100%"]
},
{
enunciado:"Probabilidade de se viciar em cassino online",
alternativa: ["100%","100%"],
},
{
    enunciado:"Probabilidade de sair do vicio",
    alternativa: ["0%","0%"]
}
];
let atual = 0;
let perguntaAtual;
function mostraPerguntas(){
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraPerguntas();
}
function mostraPerguntas() {
    for (const alternativa of perguntaAtual.alternativa){
        const botaoaAternativa = document.createElement("button")
        botaoaAternativa.textContent = alternativa;
        botaoaAternativa.append(botaoaAternativa);

    }
}

mostraPerguntas();