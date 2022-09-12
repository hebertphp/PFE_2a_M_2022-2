let x, y, z, txt;
y=3;
z=5;
x = 2 * (y + z);//x=2*(3+5)//x=2*8//x=16
txt="O valor de x é igual: " + x + "<br>";
document.write ("x = " , x , "<br>");//separado por ,
document.write ("x = " + x + "<br>");//concatenação, juntando
document.write (`x = ${x}<br>`);
document.write (`O valor de y é igual a ${y} <br>`);
document.write (txt);