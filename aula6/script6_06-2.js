const saida=document.querySelector('.saida');

const produto = ["teclado","monitor","mouse","café"];
const cor=["azul","cinza","amarelo","black"];

for(let i=0;i<produto.length;i++){
    saida.innerHTML+=`${i} - ${produto[i]} - ${cor[i]} <br>`;
}
saida.innerHTML+=`<hr>`;
saida.innerHTML+=produto.length;//quantidade de valores do array