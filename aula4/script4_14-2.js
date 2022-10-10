const saida1 = document.querySelector("#saida1");
let usuario="aluno";
let senha="1234";
let usuario_entrada = prompt("Digite o usuário");
let senha_entrada = prompt("Digite a senha");
let msg = (usuario_entrada==usuario)&&(senha_entrada==senha) ? "Bem vindo aluno!" : "Acesso negado!";
saida1.innerHTML = msg;
/*
Desafio:
usuario="aluno"
senha="1234"

Solicitar uma entrada para usuario
Solicitar uma entrada para senha

Comparar o usuario digitado com o usuario cadastrado
Comparar a senha digitada com o senha cadastrada

Mostrar uma das mensagens
"Bem vindo aluno"
"Acesso negado!"
*/