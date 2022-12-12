const saida=document.querySelector('.saida');
let notas=[10,9,8];
let outras_notas=[4,3,2,1];
saida.innerHTML=notas+"<hr>";//10,9,8
let novas_notas=notas.concat(7,6,5);
saida.innerHTML+=novas_notas+"<hr>";//10,9,8,7,6,5
let junta_tudo=novas_notas.concat(outras_notas);
saida.innerHTML+=junta_tudo+"<hr>";//10,9,8,7,6,5,4,3,2,1