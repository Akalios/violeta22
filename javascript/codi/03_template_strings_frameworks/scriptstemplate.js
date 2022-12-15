/* const NOMBRE="Juan";
const PI=3.141516; */
const nombre="Juan";
const apellido="Ham";
const saludo=`<h3>Bienvenido</h3> ${nombre} ${apellido} <p>a nuestra aplicación</p>`;
/* const saludo="<h3>Bienvenido<h3>" +nombre+ "" +apellido+ "<p>a nuestra aplicación</p>"; */
const lista = document.getElementById("lista");
const abrir = document.getElementById("abrir");
const cerrar = document.getElementById("cerrar");
let estaciones = ``;
const mostra = document.getElementById("mostra");
mostra.innerHTML=saludo;

const primavera="Primavera";
const verano="Verano";
const otoño="Otoño";
const invierno="Invierno";

function listaEstaciones(){
    estaciones += `<ul>
    <li>${primavera}</li>
    <li>${verano}</li>
    <li>${otoño}</li>
    <li>${invierno}</li>
</ul>`;
lista.innerHTML=estaciones;
}
function borrarEstaciones(){
    estaciones = ``;
lista.innerHTML=estaciones;
}
/* const estaciones= `<ul>
    <li>${primavera}</li>
    <li>${verano}</li>
    <li>${otoño}</li>
    <li>${invierno}</li>
</ul>` */

abrir.onclick=listaEstaciones;
cerrar.onclick=borrarEstaciones;