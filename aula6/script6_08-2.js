/*
desafio simples🙄
Criar uma var do tipo array nome produto com 3 valores
"monitor"
"teclado"
"mouse"

A saída deverá ser:
<h1>monitor</h1>
<h2>teclado</h2>
<h3>mouse</h3>

Utilizar for in

*/
const saida=document.querySelector('.saida');
const produto=["monitor","teclado","mouse"];
let i=0;
for(let j in produto){
    i++;
    //j=parseInt(j);
    //i=j+1;
    saida.innerHTML+=`<h${i}>${produto[j]}</h${i}>`;
    //saida.innerHTML+=`${j}<br>`;
}
