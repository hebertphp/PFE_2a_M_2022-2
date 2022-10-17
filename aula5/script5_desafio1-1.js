/*
const saida = document.querySelector(".saida");
let num;
num = 7.8898;

saida.innerHTML=num.toFixed(2);

Solicitar a entrada de duas notas (av1 e av2)
Calcular a média entre av1 e av2 ==> media = (av1+av2)/2
Mostrar uma das mensagens
Qual a condição para mostrar uma das mensagens abaixo? >=6 
"Aprovado"
"Reprovado"
*/
//LUCAS ARAUJO DOS SANTOS
let av1 = parseFloat(prompt("Av1 nota"));
let av2 = parseFloat(prompt("AV2 nota"));
let media = (av1 + av2) / 2;
const saida=document.querySelector(".saida");
msg = media >=6 ?"Aprovado":"Reprovado";
saida.innerHTML=`Nota Av1:${av1}<br> Nota Av2:${av2} <br>${media} - ${msg}`;