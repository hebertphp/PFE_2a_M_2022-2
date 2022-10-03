const saida1 = document.querySelector("#saida1");
let a,b;

a=10;
b="10";

saida1.innerHTML="Igualdade = "+(a==b)+"<br>";
saida1.innerHTML+="Idêntico = "+(a===b)+"<br>";
saida1.innerHTML+="Não igual = "+(a!=b)+"<br>";
saida1.innerHTML+="Não Idêntico = "+(a!==b)+"<br>";

/*
Mudar o códido, de document.write para innerHTML, direcionado para saida1
*/
// document.write("Igualdade = "+(a==b)+"<br>");
// document.write("Idêntico = "+(a===b)+"<br>");
// document.write("Não igual = "+(a!=b)+"<br>");
// document.write("Não Idêntico = "+(a!==b)+"<br>");