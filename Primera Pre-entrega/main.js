
function login() {
    let intentos = 1;
    let identificar = true;
    
    do {
        let usuario = prompt("Ingrese su usuario");
        if (usuario === null) {
            return null;
        }
        if (usuario.toLowerCase() === "joaquin valle" && intentos <= 3) {
            alert("Bienvenido Joaquin");
            return true;
        } else {
            alert("No reconozco el usuario");
            intentos++;
            if (intentos > 3) {
                alert("Usted superó los 3 intentos de inicio");
                return false;
            }
        }
    } while (identificar);
}

const interes = 1.30;

function CalcularInteres(importe) {       
    if (parseFloat(importe)) {
        let resultado = importe * interes;
        alert("El importe más el interés a pagar es de: " + resultado);
    } else {
        alert("Ingrese un número válido");
    }
}

function CalcularPrecioFinal() {
    let PrecioDelProducto = prompt("Ingresa el importe total del préstamo solicitado(sin puntos y sin comas)");
    CalcularInteres(PrecioDelProducto);
}

if (login()) {
    CalcularPrecioFinal();
}