const saida=document.querySelector('.saida');
const estudante=['Astrogildo','Belarmina','Pafuncia','Alberto'];

//for(let var_simples of var_tipo_array)
//for of, serve para pegar todos os valores do array, onde
// o foco será nos valores.

for (let n of estudante){
    saida.innerHTML+=`${n}<br>`;
}
/*
n='Astrogildo';saida.innerHTML=n;
n='Belarmina';saida.innerHTML=n;
*/