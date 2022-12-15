/* La finalitat d'aquest codi és mostrar el dia de la setmana que l'usuari ha introduït per a després mostrar-lo mitjançant una finestra i quedi escrit a la pàgina */
let dia = prompt(`Quin dia de la setmana és? `);
let Dia = dia.toUpperCase();
let result;

switch( Dia ){ 
  case `DILLUNS`:
    result = 1;
  break; 
  case `DIMARTS`:
    result = 2;
  break; 
  case `DIMECRES`:
    result = 3;
  break; 
  case `DIJOUS`:
    result = 4;
  break; 
  case `DIVENDRES`:
    result = 5;
  break; 
  case `DISSABTE`:
    result = 6;
  break; 
  case `DIUMENGE`:
    result = 7;
  break; 
  default:
    result = `No s'ha escrit un valor vàlid`;
}
alert(`Dia de la setmana ${result}`);

setmana = document.getElementById("setmana")
setmana.innerHTML = `Dia de la setmana ${result}`;