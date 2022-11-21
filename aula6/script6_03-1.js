//        0   1   2
const x=[2020,2,"Hoje"];
const saida=document.querySelector('.saida');

saida.innerHTML=`x = ${x}<hr>`;//mostrar todos os valores

x[0]++;//2021, pegou o valor 2020 e somou 1
x[1]=x[0]%2;//x[0]=2021  //x[1]=2021 % 2 //x[1]=1
x[2]+=" em dia";//Hoje em dia

saida.innerHTML+=`x[0] = ${x[0]}<br>`;//2021
saida.innerHTML+=`x[1] = ${x[1]}<br>`;//1
saida.innerHTML+=`x[2] = ${x[2]}<br>`;//Hoje em dia