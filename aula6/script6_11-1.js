const saida=document.querySelector('.saida');
let x = [05,12,2022];
let novaLista = x.join('/');
saida.innerHTML=novaLista+"<br>";
saida.innerHTML+=`${x[0]}/${x[1]}/${x[2]}`;