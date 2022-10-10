let a,b,c,d,e;
const saida1 = document.querySelector("#saida1");
a=50;
b=120;
c=200;
d=(a<=b) ? "Verdadeiro" : "Falso";//d="Verdadeiro"
e=(a>=c) ? "Verdadeiro" : "Falso";//e="Falso"
saida1.innerHTML=`d = ${d}<br>`;
saida1.innerHTML+=`e = ${e}<br>`;
/*
Desafio:
usuario="aluno"
senha="1234"

Solicitar uma entrada para usuario
Solicitar uma entrada para senha

Comparar o usuario digitado com o usaurio cadastrado
Comparar a senha digitada com o senha cadastrada

Mostrar uma das mensagens
"Bem vindo aluno"
"Acesso negado!"
*/