/* alert("PopUp lanzado desde un javascript externo a mi html"); */

/* let nombre=prompt("Dime tu nombre");
console.log(nombre);
alert(nombre);
document.write(nombre);
document.getElementById("mostra").innerHTML=`<p style=
"font-size: 2rem">Tu nombre es: ${nombre}`; */
/* function dameNombre(){
    let nombre = prompt("Dime tu nombre")
    console.log(nombre);
    alert(nombre);
    document.getElementById("mostra").innerHTML=`<p style=
"font-size: 2rem">Tu nombre es: ${nombre}`;
}
document.getElementById("nombre").onclick= dameNombre; */

const btn = document.getElementById("nombre");

const dameNombre = () => {

    let nombre = prompt ("Dime tu nombre");
    console.log(nombre);
    document.getElementById("mostra").innerHTML=`<p style=
"font-size: 2rem">Tu nombre es: ${nombre}`;
}

btn.onclick=dameNombre