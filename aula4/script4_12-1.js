let a,b,c,d;
const saida1 = document.querySelector("#saida1");
a=50;
b=120;
c=200;
saida1.innerHTML=`a = ${a}, b = ${b}, c = ${c} <br>`;
d=(a<=b) && !(a>=c);//d=(V)&&!(F)//d=(V)&&(V)//d=V
/*
d=(a<=b) && (a>=c);//F
d=(a<=b) && !(a>=c);//V
d=!(a<=b) && (a>=c);//F
d=!(a<=b) && !(a>=c);//F
d=!((a<=b) && (a>=c));//V
*/
saida1.innerHTML+="(a<=b) && !(a>=c) = "+d;