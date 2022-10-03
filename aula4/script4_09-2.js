const saida1 = document.querySelector("#saida1");//id="saida1"
const saida2 = document.querySelector(".saida2");//class="saida2"
const h1 = document.querySelector("h1");//tag <h1>
const body = document.querySelector("body");//tag <body>
let cor = prompt("Digite uma cor em inglês");

body.style.backgroundColor = cor;

h1.innerHTML += " - Aula de hoje";
h1.innerHTML += " "+cor;

h1.style.color = "white";//cor do texto
h1.style.backgroundColor = "blue";//cor do fundo

saida1.innerHTML ="Um primeiro teste<br>";
saida1.innerHTML +="Outro teste<br>";

saida2.innerHTML = "Mais um teste<br>";
/*
Desafio1
criar uma constante saida2 para a classe "saida2"
Direcionar o texto "Mais um teste<br>" para a classe saida2

Desafio2
Criar uma constante h1
Mudar o texto da tag <h1> Para "Aula de hoje"

Desafio3
Incluir o texto " - Aula de hoje" na tag <h1>

Desafio4
Solicitar ao usuário um nome de cor em inglês prompt("Digite uma cor")
Com essa cor mudar a cor de fundo da página (<body>)
*/