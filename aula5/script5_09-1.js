let i;
const saida=document.querySelector(".saida");
saida.innerHTML="<h2>do while</h2>";
i=8;//valor inicial
do{
    saida.innerHTML+=i + "<br>";
    i++;//contador
}while (i < 3);//condição

saida.innerHTML+="<h2>while</h2>";
i=8;//valor inicial
while(i < 3){//condição
    saida.innerHTML+=i + "<br>";
    i++;//contador
}