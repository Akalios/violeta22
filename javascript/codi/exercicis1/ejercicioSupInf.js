let numero1 = parseInt(prompt(`Dame un número: `));
let numero2 = parseInt(prompt(`Dame otro número: `));

if(numero1 > numero2){
    alert(`${numero1} es mayor que ${numero2}`);
} else if(numero1 == numero2){
    alert(`${numero1} es igual a ${numero2}`);
}
else {
    alert(`${numero2} es mayor que ${numero1}`);
}