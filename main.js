// Definimos un objeto 
const Simulador = {
    calcularImpuestos: function(salario) {
        const impuesto = salario * 0.15; // Supongamos un impuesto fijo del 15%
        return impuesto;
    }
};

// Función para manejar el clic del botón
function calcularImpuestos() {
    const salarioInput = document.getElementById('salaryInput');
    const salario = parseFloat(salarioInput.value);

    if (isNaN(salario)) {
        mostrarMensajeError('Por favor, ingrese un salario válido.');
        return;
    }

    const impuestoCalculado = Simulador.calcularImpuestos(salario);
    mostrarResultado(impuestoCalculado);
}

// Función para mostrar el resultado
function mostrarResultado(impuesto) {
    const resultadoDiv = document.getElementById('result');
    resultadoDiv.innerHTML = `<p>El impuesto calculado es: ${impuesto}</p>`;
}

// Función para mostrar mensajes de error
function mostrarMensajeError(mensaje) {
    const resultadoDiv = document.getElementById('result');
    resultadoDiv.innerHTML = `<p style="color: red;">${mensaje}</p>`;
}
