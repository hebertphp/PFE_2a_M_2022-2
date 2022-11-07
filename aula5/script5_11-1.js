let i,j;
const saida=document.querySelector(".saida");
for (i=0; i<3; i++) {//externo //horas
 for (j=0; j<4; j++) {//interno //minutos
   saida.innerHTML+=`${i} ${j}<br>`;
 }
}
/*
i   j
0   1
0   2
0   3
1   0
1   1
1   2
1   3
2   0
2   1
2   2
2   3
*/
