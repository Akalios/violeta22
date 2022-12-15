let i=0
let numero;

do{
    numero=prompt(`Dame un número`);
    i = i + 1;
}
while(numero<50){}

if(numero>=50){
    alert(`¡El número introducido es mayor a 50!`);
}

alert(`Has introducido: ${i} números menores que 50`);