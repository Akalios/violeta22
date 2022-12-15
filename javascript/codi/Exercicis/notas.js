let nota = Number(prompt(`Cual es la nota del alumno? `));

if(nota < 5){
    alert(`La nota es: ${nota}, Suspenso`);
    console.log(`El alumno con un ${nota} ha suspendido`);
}else if(nota 6 <= 5){
    alert(`La nota es: ${nota}, Aprobado`);
    console.log(`El alumno con un ${nota} ha aprobado`);
}
else if(nota >6 <= 7){
    alert(`La nota es: ${nota}, Bien`);
    console.log(`El alumno con un ${nota} ha sacado un bien`);
}
else if(nota > 7 <= 9){
    alert(`La nota es: ${nota}, Notable`);
    console.log(`El alumno con un ${nota} ha sacado un notable`);
}
else if(nota > 9 <= 10){
    alert(`La nota es: ${nota}, Aprobado`);
    console.log(`El alumno con un ${nota} ha aprobado`);
}
else{
    alert(`No ha introducido un valor válido`);
}