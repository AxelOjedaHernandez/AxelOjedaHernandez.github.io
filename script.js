function convertToFahrenheit() {
    let inputValue = parseFloat(document.getElementById('inputValue').value);
    if (isNaN(inputValue)) {
        document.getElementById('result').innerText = "Por favor, ingresa un número válido";
    } else {
        let fahrenheit = (inputValue * 9/5) + 32;
        document.getElementById('result').innerText = `${inputValue} C es igual a ${fahrenheit.toFixed(2)} F`;
    }
}

function convertToCelsius() {
    let inputValue = parseFloat(document.getElementById('inputValue').value);
    if (isNaN(inputValue)) {
        document.getElementById('result').innerText = "Por favor, ingresa un número válido";
    } else {
        let celsius = (inputValue - 32) * 5/9;
        document.getElementById('result').innerText = `${inputValue} F es igual a ${celsius.toFixed(2)} C`;
    }
}

function goBack() {
    window.history.back(); // Simula un botón de regresar
}
