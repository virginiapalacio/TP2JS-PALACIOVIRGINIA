// Objeto Simulador
const Simulador = {
    impuestos: [
        { rango: 1000, porcentaje: 0.1 },
        { rango: 2000, porcentaje: 0.15 },
        { rango: 3000, porcentaje: 0.2 },
        { rango: Infinity, porcentaje: 0.25 }
    ],
    calcularImpuestos: function(salario) {
        let impuestoTotal = 0;
        for (const impuesto of this.impuestos) {
            if (salario <= impuesto.rango) {
                impuestoTotal += salario * impuesto.porcentaje;
                break;
            } else {
                impuestoTotal += impuesto.rango * impuesto.porcentaje;
                salario -= impuesto.rango;
            }
        }
        return impuestoTotal;
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
