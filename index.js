let nombre = prompt("Escribe tu nombre")
let apellido = prompt("Escribe un apellido")
let edad = prompt("Escribe tu edad");

if (edad >= 18) {
    document.write(`Hola, ${nombre} ${apellido}`);
} else {
    document.write("Lo siento no eres mayor de edad");
}
