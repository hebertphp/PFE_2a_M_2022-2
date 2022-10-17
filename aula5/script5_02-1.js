let a,b;
const saida=document.querySelector(".saida");
a = 5;//5 int
b = 5;//5 int
saida.innerHTML=`a = ${a}, b = ${b}<br>`;//linha 1
if (a == b) {
  saida.innerHTML+="A variável a é igual a variável b";
}
else {
  saida.innerHTML+="A variável a não é igual a variável b";//linha 2
}
a=10;//10
saida.innerHTML+=`<br>a = ${a}, b = ${b}<br>`;//linha 3