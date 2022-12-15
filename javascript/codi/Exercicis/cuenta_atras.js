let numero = parseInt(prompt(`Dime un número: `));
let cont = numero; 
while(cont > 0){
    console.log(`Cuenta atrás: ${cont}`);
    cont--; 
}
console.log(`Cuenta finalizada: ${cont}`);

for( cont = numero; cont > 0; cont--){
    console.log(`Cuenta atrás: ${cont}`);
}
console.log(`Cuenta finalizada: ${cont}`);

do{
    console.log(`Cuenta atrás: ${cont}`);
    cont--;
}while(cont>0);
console.log(`Cuenta finalizada: ${cont}`);