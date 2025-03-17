// Funcion para calcular el préstamo
function calcularPrestamo() {
    let monto = parseFloat(document.querySelector(".monto").value);
    let plazo = parseInt(document.querySelector(".plazo").value);

    // Validar que los datos sean correctos
    if (isNaN(monto) || isNaN(plazo) || monto <= 0 || plazo <= 0) {
        alert("Por favor, ingrese todos los datos correctamente.");
        return;
    }

    // Esto para definir la tasa de interés anual fija
    let tasaAnual = 12;
    let tasaMensual = tasaAnual / 100 / 12;


    let factor = 1 - (1 / ((1 + tasaMensual) ** plazo));

    let pagoMensual = (monto * tasaMensual) / factor; 

    // esto para calcular el total a pagar
    let totalPagar = pagoMensual * plazo;

    // esto para calcular el interés total
    let interesTotal = totalPagar - monto;

    // esto para que el valor quede con numero con coma
    pagoMensual = Math.round(pagoMensual * 100) / 100;
    interesTotal = Math.round(interesTotal * 100) / 100;
    totalPagar = Math.round(totalPagar * 100) / 100;

    // y el alert para que indique los resultados
    alert(`Resultado del préstamo:
    Pago mensual: $${pagoMensual}
    Interés total: $${interesTotal}
    Total a pagar: $${totalPagar}`);
}

document.querySelector(".boton-calcular").addEventListener("click", calcularPrestamo);
