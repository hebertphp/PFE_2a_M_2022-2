/*
desafio 3 - for:
https://www.w3schools.com/charsets/ref_emoji.asp
Mostrar os emojis de 9800 até 9811, como exemplo:

9800 - ♈
...

9811 - ♓
*/
let i;
const saida=document.querySelector(".saida");
for(i=9800;i<=9811;i++){
// for(i=127761;i<=127768;i++){    
    saida.innerHTML+=`${i} - &#${i};<br>`;
}