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
function boas_vindas(){//construção da função
    saida.innerHTML+="Seja bem vindo!<br>";
}