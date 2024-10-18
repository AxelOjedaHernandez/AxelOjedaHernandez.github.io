function checkLeapYear() {
    let inputYear = parseInt(document.getElementById('inputYear').value);
    let result = '';

    if (isNaN(inputYear)) {
        result = "Por favor, ingresa un número válido.";
    } else {
        if ((inputYear % 4 === 0 && inputYear % 100 !== 0) || (inputYear % 400 === 0)) {
            result = `${inputYear} es un año bisiesto.`;
        } else {
            result = `${inputYear} no es un año bisiesto.`;
        }
    }

    document.getElementById('result').innerText = result;
}

function goBack() {
    window.history.back(); // Simula un botón de regresar
}
