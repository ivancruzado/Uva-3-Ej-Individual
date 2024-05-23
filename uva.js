

let nombre = "Juan";
let apellido = "Pérez";
let edad = 22;

const mensajeBienvenida = `¡Bienvenido, ${nombre} ${apellido}! Tienes ${edad} años.`;


const añoActual = new Date().getFullYear();
const añoNacimiento = añoActual - edad;
let diasVividos = (añoActual - añoNacimiento) * 365;
//console.log(diasVividos)
document.getElementById("dias").textContent = `Has vivido aproximadamente ${diasVividos} días.`;

document.getElementById("saludo").textContent = mensajeBienvenida;

let nombreInput = document.getElementById("nombre");
let apellidoInput = document.getElementById("apellido");
let edadInput = document.getElementById("edad");

document.querySelector("button").addEventListener("click", () => {
    nombre = nombreInput.value;
    apellido = apellidoInput.value;
    edad = edadInput.value;
    diasVividos = edad * 365;
    document.getElementById("saludo").textContent = `¡Bienvenido, ${nombre} ${apellido}! Tienes ${edad} años.`;
    document.getElementById("dias").textContent = `Has vivido aproximadamente ${diasVividos} días.`;
});