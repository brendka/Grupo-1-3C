const caixaprincipal = document.querySelector('.caixa-principal');
const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPerguntas = document.querySelector('.caixa-perguntas');
const caixaAlternativas = document.querySelector('.caixa-alternativas');
const caixaResultado = document.querySelector('.caixa-resultado');
const textoResultado = document.querySelector('.texto- resultado');
const lista = [item, item2]
const perguntas = [
{
    enunciado: "insira o enunciadoda pergunta",
    alternativa: ["alternativa1","alternativa2"]
},
{
enunciado:"insira o enunciado da Pergunta2",
alternativa: ["alternativa1","alternativa2"],
},
{
    enunciado:"insira o enunciado da pergunta3",
    alternativa: ["alternativa1","alternativa2"]
}
];
let atual = 0;
let perguntaAtual;
function mostraPerguntas(){
    perguntaAtual = perguntas[atual];
}
const caixaPergunta = document.querySelector(".caixa-perguntas");
function mostraPerguntas(){
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
}