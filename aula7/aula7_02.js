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


function boas_vindas(){//construção da função
    saida.innerHTML+="Seja bem vindo!<br>";
}
function calcmedia(){
/* como calcular a media entre av1 e av2? */
    saida.innerHTML=`Nome: ${nome.value}<br>`;
    saida.innerHTML+=`AV1:  ${av1.value}<br>`;
    saida.innerHTML+=`AV2:  ${av2.value}<br>`;

}