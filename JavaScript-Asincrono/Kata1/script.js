
const num1Input = document.getElementById('num1');
const num2Input = document.getElementById('num2');
const zoneResult = document.getElementById('zoneResult');
const form = document.getElementById("formulario");

document.getElementById('reset')
    .addEventListener('click', () => {

        num1Input.value = "";
        num2Input.value = "";
        zoneResult.innerText = "";

    });

document.getElementById('operarSuma')
    .addEventListener('click', () => {

        const num1 = parseInt(num1Input.value);
        const num2 = parseInt(num2Input.value);

        Sumar(num1, num2, (result) => {
            zoneResult.innerHTML = "<h2>Resultado de la suma: </h2><br/><p>" + result + "</p>";
        });

    });

document.getElementById('operarResta')
    .addEventListener('click', () => {

        const num1 = parseInt(num1Input.value);
        const num2 = parseInt(num2Input.value);

        Resta(num1, num2, (result) => {
            zoneResult.innerHTML = "<h2>Resultado de la resta: </h2><br/><p>" + result + "</p>";
        });

    });

document.getElementById('operarMulti')
    .addEventListener('click', () => {

        const num1 = parseInt(num1Input.value);
        const num2 = parseInt(num2Input.value);

        Multiplicar(num1, num2, (result) => {
            zoneResult.innerHTML = "<h2>Resultado de la multiplicación: </h2><br/><p>" + result + "</p>";
        });

    });

document.getElementById('operarDivi')
    .addEventListener('click', () => {

        const num1 = parseInt(num1Input.value);
        const num2 = parseInt(num2Input.value);

        Dividir(num1, num2, (result) => {
            zoneResult.innerHTML = "<h2>Resultado de la division: </h2><br/><p>" + result + "</p>";
        });

    });


const Sumar = (a, b, cb) => {

    const result = a + b;

    cb(result);
}

const Resta = (a, b, cb) => {

    const result = a - b;

    cb(result);
}

const Multiplicar = (a, b, cb) => {

    const result = a * b;

    cb(result);
}

const Dividir = (a, b, cb) => {

    const result = a / b;

    cb(result);
}