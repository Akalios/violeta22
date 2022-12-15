let n = parseInt(prompt(`Dame un número: `));
let n2 = 1;
if(n<0){
    while(n<0){
        n=prompt("El valor del número introducido debe ser mayor que 0");
    }
}
while (n>1){
    n2=n*n2;
    n=n-1;
}
console.log("El factorial es: "+n2);