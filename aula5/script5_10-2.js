/*
Desafio 1 - for:
Gerar as saída de <h1> até <h6> usando looping for
<h1>Título 1</h1>
<h2>Título 2</h2>
...
<h6>Título 6</h6>

<h1>Título 1</h1>
i=6
`<h${i}>Título ${i}</h${i}>`
*/
let i;
const saida=document.querySelector(".saida");
for(i=1;i<=6;i++){
    saida.innerHTML+=`<h${i}>Título ${i}</h${i}>`;
}
