let num;
const saida=document.querySelector(".saida");

num=parseInt(prompt("Digite um número inteiro"));

if(num%2 == 1){
    saida.innerHTML=`${num} é impar!`;
}
else{
    saida.innerHTML=`${num} é par!`;
}
