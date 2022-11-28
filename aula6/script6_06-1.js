const saida=document.querySelector('.saida');
const semana = ["DOMINGO", "SEGUNDA", "TERÇA", "QUARTA", "QUINTA", "SEXTA", "SÁBADO"];
for (let i = 0; i < 7; i++){
    saida.innerHTML+=`${semana[i]}  é o ${i+1}º dia da semana!<br>`;
    /*
    [alt]no teclado numérico[167] -> º
    */
}