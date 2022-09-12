let a,b;
a=prompt("Digite um número");//a="10.5"
a=parseInt(a);//a=10
//a=parseFloat(a);//a=10.5
b=parseInt(prompt("Digite outro número"));//7.9 //7
document.write (`soma: ${(a+b)} <br>`);
document.write ("subtração: "+ (a-b)+"<br>");//+ serve para juntar(concatenar)
document.write (`O resultado da multiplicação de ${a} * ${b} = ${(a*b)} <br>`);
/*
Desafio 1:
Mostrar a seguinte saída para o browser
O resultado da multiplicação de 3 * 2 = 6
O número 3 tem que vir da variável a
O número 2 tem que vir da variável b
O número 6 tem que vir da multiplicação a*b

Desafio 2:
Completar com os operadores aritméticos que estão faltando
/ 
% 
**
*/