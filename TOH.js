let Vareta1 = ["1", "3", "5"];
let Vareta2 = ["2", "4"];
let Vareta3 = ["0"];

console.log("Bienvenido al juego.");

function mou() {
from = prompt("Escribe de que vara quieres mover el anillo. ");
console.log(from)
let to = prompt("Escribe a que vara quieres mover el anillo. ");
console.log(to); 
}

console.log(mou())

function status() {
console.log(Vareta1);
console.log(Vareta2);
console.log(Vareta3);
}

console.log(status())

function error_movimiento() {
console.error("Mensaje prohibido")
}