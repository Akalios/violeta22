let num_1 = Number(prompt("Introduce un número entre el 10 y el 30, ambos incluidos"));
let result;
let mostra=document.getElementById("mostra");
switch( num_1 ){ 
case 10:
  result = `${num_1} vale 10`;
break; 
case 20:
    result = `${num_1} vale 20`;
break; 
case 30:
    result = `${num_1} vale 30`;
break; 
default:
    result = `${num_1} No es igual a 10, 20 o 30`;
}
console.log(result);

mostra.innerHTML=result;