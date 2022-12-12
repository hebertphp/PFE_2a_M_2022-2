/*
Criar 3 campos de formulário:
Nome
Nota AV1
Nota AV2

Depois criar uma função para calcular a média entre AV1 e AV2 
e mostrar os dados na div class="saida":
Nome
Nota AV1
Nota AV2
Média final
*/
const saida=document.querySelector(".saida");
const nome=document.querySelector("#nome");
const av1=document.querySelector("#av1");
const av2=document.querySelector("#av2");
const btn1=document.querySelector(".btn1");
const btn2=document.querySelector(".btn2");
/*
executar as duas funções nos botões btn1 e btn2
*/
btn1.onclick=calcmedia;
btn1.onclick=boas_vindas;

btn2.addEventListener("click", calcmedia);
btn2.addEventListener("click", boas_vindas);

function boas_vindas(){//construção da função
    saida.innerHTML+="Seja bem vindo!<br>";
}
function calcmedia(){
    let media=(parseFloat(av1.value)+parseFloat(av2.value))/2;
    saida.innerHTML=`Nome: ${nome.value}<br>`;
    saida.innerHTML+=`AV1:  ${av1.value}<br>`;
    saida.innerHTML+=`AV2:  ${av2.value}<br>`;
    saida.innerHTML+=`Média:  ${media}<br>`;
}