/*
Desafio 2 - for
Tabuada de qualquer valor, exemplo tabuada do 2, ou do 3, etc..
tabuada=2;
2 x 0 = 0
2 x 1 = 2
2 x 2 = 4
......
2 x 10 = 20
*/
let i,tabuada;
const saida=document.querySelector(".saida");
tabuada=2;
for(i=0;i<=10;i++){
    saida.innerHTML+=`${tabuada} x ${i} = ${tabuada*i}<br>`;
}
/*
desafio 3:
https://www.w3schools.com/charsets/ref_emoji.asp
Mostrar os emojis de 9800 até 9811, como exemplo:

9800 - ♈
...

9811 - ♓
*/