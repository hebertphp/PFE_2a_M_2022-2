let num,calc;
const saida=document.querySelector(".saida");

num=parseInt(prompt("Digite um número inteiro"));
calc=num%2;

if(calc == 1){
    saida.innerHTML=`${num} é impar`;
}
else{
    saida.innerHTML=`${num} é par`;
}

//saida.innerHTML=`num = ${num}  calc = ${calc}`;