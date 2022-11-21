/*
Criar uma var do tipo array com os seguintes valores - lista:
Arroz,Feijão,Carne,Leite
Mostrar as saídas:
Todos os valores e mostrar um de cada vez, um em cada linha.
*/
const saida=document.querySelector(".saida");
//              0       1        2       3 
const lista=["Arroz","Feijão","Carne","Leite"];

lista[3]+=" com Miojo";//mudei o valor da posição 3 do array
lista[4]="Salada";//adicionei um novo valor no array

saida.innerHTML=`${lista}<hr>`;//imprime todos os valores do array
saida.innerHTML+=`${lista[0]}<br>`;
saida.innerHTML+=`${lista[1]}<br>`;
saida.innerHTML+=`${lista[2]}<br>`;
saida.innerHTML+=`${lista[3]}<br>`;
saida.innerHTML+=`${lista[4]}<br>`;