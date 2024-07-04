const botoes = document.querySelectorAll(".botao");
const conteudo = document.querySelectorAll(".aba-conteudo");
const contador = document.querySelectorAll(".contador");
const tempoObjetivo1 = new Date (2024,6,5,12,35)
const tempoObjetivo2 = new Date (2024,6,15,00,28)
const tempoObjetivo3 = new Date (2024,6,30,20,35)
const tempoObjetivo4 = new Date (2024,11,13,12,35)

function calcularTempo(tempoObjetivo){
const agora = new Date()
let segundos
let minutos
let horas
let dias
segundos = (tempoObjetivo - agora)/1000;
minutos = segundos/60;
horas = minutos/60;
dias = horas/24;
segundos = Math.floor (segundos);
minutos = Math.floor (minutos);
horas = Math.floor (horas);
dias = Math.floor (dias);

segundos = segundos%60
minutos = minutos%60
horas = horas%24
return [dias,horas,minutos,segundos]
}
let contadorPrimeiro = calcularTempo(tempoObjetivo1)
contador[0].textContent = `Faltam ${contadorPrimeiro [0]} dias, Fatam ${contadorPrimeiro [1]} horas, Fatam ${contadorPrimeiro [2]} minutos, Fatam ${contadorPrimeiro [3]} segundos`
let contadorSegundo = calcularTempo(tempoObjetivo2)
contador[1].textContent = `Faltam ${contadorSegundo [0]} dias, Fatam ${contadorSegundo [1]} horas, Fatam ${contadorSegundo [2]} minutos, Fatam ${contadorSegundo [3]} segundos`
let contadorTerceiro = calcularTempo(tempoObjetivo3)
contador[2].textContent = `Faltam ${contadorTerceiro [0]} dias, Fatam ${contadorTerceiro [1]} horas, Fatam ${contadorTerceiro [2]} minutos, Fatam ${contadorTerceiro [3]} segundos`
let contadorQuarto = calcularTempo(tempoObjetivo4)
contador[3].textContent = `Faltam ${contadorQuarto [0]} dias, Fatam ${contadorQuarto [1]} horas, Fatam ${contadorQuarto [2]} minutos, Fatam ${contadorQuarto [3]} segundos`


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
