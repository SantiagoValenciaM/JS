let nombre = prompt("Escribe tu nombre")
let apellido = prompt("Escribe un apellido")
let edad = prompt("Escribe tu edad");

if (edad >= 18) {
    document.write(`Hola, ${nombre} ${apellido}`);
} else {
    document.write("Lo siento no eres mayor de edad");
}

// Solicitar las 3 calificaciones de un usuario, a traves de un formulario
// con 3 inputs y un botón que diga enviar y sacar un promedio, si es mayor a 8,
// mostrarle en la pantalla ¡Felicidades, lo lograstes!, si no
// ¡Lo siento, tienes ordinario!

function calcularPromedio() {
    let num1 = document.getElementById("calificacion1").value;
    let num2 = document.getElementById("calificacion2").value;
    let num3 = document.getElementById("calificacion3").value;

    let prom = (parseFloat(num1)+parseFloat(num2)+parseFloat(num3))/3;

    document.getElementById("texto-promedio").innerHTML = prom;


    if (prom>=8) {
        document.getElementById("texto-resultado").innerHTML = "¡Felicidades, lo lograstes!";
    } else {
        document.getElementById("texto-resultado").innerHTML = "¡Lo siento, tienes ordinario!";
    }
}