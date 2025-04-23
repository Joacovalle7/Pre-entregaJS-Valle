

let historialSimulaciones = [];

let tasasInteres = [];

fetch('tasas.json')
  .then(res => res.json())
  .then(data => {
    tasasInteres = data;
  })
  .catch(err => {
    console.error("Error al cargar tasas:", err);
    Swal.fire({
      icon: "error",
      title: "Error al cargar tasas",
      text: "No se pudieron obtener las tasas desde el archivo JSON.",
    });
  });

document.querySelector(".boton-calcular").addEventListener("click", () => {
  const nombre = document.getElementById("nombre").value;
  const apellido = document.getElementById("apellido").value;
  const email = document.getElementById("email").value;
  const monto = parseFloat(document.getElementById("monto").value);
  const plazo = parseInt(document.getElementById("plazo").value);
  const tipoTasa = document.getElementById("tipoTasa").value;

  if (isNaN(monto) || isNaN(plazo) || monto <= 0 || plazo <= 0 || !nombre || !apellido || !email) {
    Swal.fire({
      icon: "warning",
      title: "Datos inválidos",
      text: "Por favor, ingresa todos los datos correctamente.",
    });
    return;
  }

  const tasaObj = tasasInteres.find(t => t.nombre === tipoTasa);
  if (!tasaObj) return;

  const tasaMensual = (tasaObj.tasa / 100) / 12;
  const factor = 1 - (1 / Math.pow((1 + tasaMensual), plazo));
  const pagoMensual = +(monto * tasaMensual / factor).toFixed(2);
  const totalPagar = +(pagoMensual * plazo).toFixed(2);
  const interesTotal = +(totalPagar - monto).toFixed(2);

  mostrarResultado(pagoMensual, interesTotal, totalPagar);

  const simulacion = {
    fecha: new Date().toLocaleString(),
    nombre,
    apellido,
    email,
    monto,
    plazo,
    tipoTasa,
    pagoMensual,
    totalPagar,
    interesTotal
  };

  historialSimulaciones.push(simulacion);
  renderizarHistorial();
});

function mostrarResultado(pago, interes, total) {
  document.getElementById("pagoMensual").textContent = pago.toFixed(2);
  document.getElementById("interesTotal").textContent = interes.toFixed(2);
  document.getElementById("totalPagar").textContent = total.toFixed(2);
  document.getElementById("resultado").style.display = "block";
}

function renderizarHistorial() {
  let contenedor = document.getElementById("historial");
  if (!contenedor) {
    contenedor = document.createElement("div");
    contenedor.id = "historial";
    contenedor.className = "resultado";
    document.querySelector(".simulador-container").appendChild(contenedor);
  }

  contenedor.innerHTML = "<h2>Historial de Simulaciones</h2>";

  historialSimulaciones.slice().reverse().forEach(sim => {
    const item = document.createElement("p");
    item.innerHTML = `
      <strong>${sim.fecha}</strong> - ${sim.nombre} ${sim.apellido} (${sim.email})<br>
      Monto: $${sim.monto}, Plazo: ${sim.plazo} meses, 
      Tasa: ${sim.tipoTasa}, 
      Mensual: $${sim.pagoMensual}, Total: $${sim.totalPagar}
    `;
    contenedor.appendChild(item);
  });
}
