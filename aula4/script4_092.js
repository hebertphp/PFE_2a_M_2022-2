const saida1 = document.querySelector("#saida1");
let a,b;
a=10;   //10 int
b="10"; //10 string
saida1.innerHTML=`Igualdade = ${(a==b)}<br>`;
saida1.innerHTML+=`Idêntico = ${(a===b)}<br>`;
saida1.innerHTML+=`Não igual = ${(a!=b)}<br>`;
saida1.innerHTML+=`Não idêntico = ${(a!==b)}<br>`;
// document.write("Não igual = "+(a!=b)+"<br>");
// document.write("Não Idêntico = "+(a!==b)+"<br>");
/*

=   atribuir/receber
==  igualdade
=== idênticos

*/
