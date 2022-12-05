const saida=document.querySelector('.saida');
//          0 1  2  3  4 
const num=[10,20,30,40,50,23,54,3,2,4,5,6,34,3,546,7,7,65,56,56,56,71];
//quantidade de valores: 5 num.length
saida.innerHTML=`Todos os valores de num: ${num}<hr>`;
saida.innerHTML+=`num possui ${num.length} valores<hr>`;
saida.innerHTML+=`Valor da primeira posição de num: ${num[0]} <hr>`;
saida.innerHTML+=`Valor da última posição de num: ${num[num.length-1]} <hr>`;