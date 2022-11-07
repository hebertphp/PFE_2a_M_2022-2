let i;
const saida=document.querySelector(".saida");
i=0; //valor inicial
while (i <= 5) {//condição
    saida.innerHTML+=i + " ";
    i++;//contador
}
saida.innerHTML+="<hr>";
/*
Saída: 0 1 2 3 4 5

i   i<=5 saída   contador:i++
0   T   0       1
1   T   1       2
2   T   2       3
3   T   3       4
4   T   4       5
5   T   5       6
6   F
*/
/*
Desafio1: Mostrar a saída: 9 10 11 12
*/
i=9; //valor inicial

while (i < 13) {//condição i<13 ou i<=12
    saida.innerHTML+=i + " ";
    i++;//contador
}
saida.innerHTML+="<hr>";
/*
Desafio2: Mostrar a saída: 3 2 1 0
*/
i=3;
while(i>=0){
    saida.innerHTML+=i + " ";
    i--;//contador
}
saida.innerHTML+="<hr>";
/*
Desafio3: Mostrar a saída: 0 2 4 6 8 10
*/
i=0;
while(i<=10){
    saida.innerHTML+=i + " ";
    //i++;//contador //i=i+1  //i+=1
    i+=2;
}
saida.innerHTML+="<hr>";
/*
Desafio4: Mostrar a saída: 0 4 8 
*/
i=0;
while(i<=10){
    saida.innerHTML+=i + " ";
    //i++;//contador //i=i+1  //i+=1
    i+=4;//i=i+4
}
saida.innerHTML+="<hr>";