const botoes = document.querySelectorAll(".botao");
const conteudo = document.querySelectorAll(".aba-conteudo");
const contador = document.querySelectorAll(".contador");
const tempoObjetivo1 = new Date (2024,6,5,12,35)
const tempoObjetivo2 = new Date (2024,6,15,00,28)
const tempoObjetivo3 = new Date (2024,6,30,20,35)
const tempoObjetivo4 = new Date (2024,11,13,12,35)

let agora = new Date();
contador[0].textContent=tempoObjetivo1 -"agora"
contador[1].textContent=tempoObjetivo2 -"agora"
contador[2].textContent=tempoObjetivo3 -"agora"
contador[3].textContent=tempoObjetivo4 -"agora"

for (let i = 0; i < botoes.length; i++){
    botoes[i].onclick = function(){
        for (let j = 0; j < botoes.length; j++){
            botoes[j].classList.remove("ativo")
            conteudo[j].classList.remove("ativo")
        }
        botoes[i].classList.add("ativo")
        conteudo[i].classList.add("ativo")
    }
}