function testVar(){
    console.log(hola);
    hola=30;
    console.log(hola);
    if(hola) {
        hola=80;
    console.log(hola);
    }
}

function testLet(){
    console.log(hello);
    let hello=30;
    console.log(hello);
    if(hello) {
        hello=80;
    console.log(hello);
    }
}

function salir(){
    location.replace("https://w3schools.com");
}

/* let variable2= 5; */
let resul = prompt("indica un número"); 
console.log(typeof resul);
/* let resul = variable1 + variable2; */
if(resul > 20){
console.log(`Resultado mayor que 20`);
} else if(resul < 20){
console.log(`Resultado menor que 20`);
}
else if(resul===20){
    console.log(`Resultado es igual a 20`);
}
else{
    console.log(`No puedo averiguarlo`);
}
let recarga=confirm("¿Quieres volver a cargar el documento?");
if(recarga){
    location.reload(true);
}
/* else{
    salir();
} */