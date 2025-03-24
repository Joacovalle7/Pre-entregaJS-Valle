


function calcularPrestamo() {
    let monto = parseFloat(document.getElementById("monto").value);
    let plazo = parseInt(document.getElementById("plazo").value);
    let tipoTasa = document.getElementById("tipoTasa").value; 

    if (isNaN(monto) || isNaN(plazo) || monto <= 0 || plazo <= 0) {
        alert("Por favor, ingrese valores numéricos válidos.");
        return;
    }

    const tasaAnual = obtenerTasa(tipoTasa);
    let tasaMensual = tasaAnual / 100 / 12;

    let factor = 1 - (1 / ((1 + tasaMensual) ** plazo));
    let pagoMensual = (monto * tasaMensual) / factor;
    let totalPagar = pagoMensual * plazo;
    let interesTotal = totalPagar - monto;

    pagoMensual = Math.round(pagoMensual * 100) / 100;
    interesTotal = Math.round(interesTotal * 100) / 100;
    totalPagar = Math.round(totalPagar * 100) / 100;

    document.getElementById("pagoMensual").textContent = pagoMensual.toFixed(2);
    document.getElementById("interesTotal").textContent = interesTotal.toFixed(2);
    document.getElementById("totalPagar").textContent = totalPagar.toFixed(2);

    document.getElementById("resultado").style.display = "block";
}

const tasasInteres = [
    { nombre: "Básica", tasa: 12 },
    { nombre: "Media", tasa: 15 },
    { nombre: "Alta", tasa: 18 }
];

const obtenerTasa = (nombreTasa) => {
    const tasa = tasasInteres.find(tasa => tasa.nombre === nombreTasa);
    return tasa ? tasa.tasa : 12;
};

document.querySelector(".boton-calcular").addEventListener("click", calcularPrestamo);
