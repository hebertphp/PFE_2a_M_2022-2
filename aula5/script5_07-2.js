/*
desafio:

converter o código script5_07.js
de switch-case para if, else if, else
*/
let destino,msg;
const saida=document.querySelector(".saida");
destino=prompt("Digite seu destino: ");
destino=destino.toUpperCase();//transforma o texto em letras maiúsculas

if(destino == "SÃO PAULO"){
    saida.innerHTML=`Seja bem vindo a cidade que nunca para!`;
 }
 else if (destino == "NEW YORK"){
     saida.innerHTML=`Seja bem vindo a Big Apple!`;
 }
 else{
     saida.innerHTML=`Não encontramos seu destino`;
 }