const elementoAno = document.getElementById("currentyear");
if (elementoAno) {
    elementoAno.textContent = new Date().getFullYear();

}

const elementomodificacao = document.getElementById("lastModified");
if (elementomodificacao) {
    elementomodificacao.textContent = `Última modificação: ${document.lastModified}`;

}


const temperatura = 24;
const velocidadeVento = 10;

function calcularSensacaoTermica(temp, vento) {
    return 13.12 + (0.6215 * temp) - (11.37 * Math.pow(vento, 0.16)) + (0.3965 * temp * Math.pow(vento, 0.16));

}

const elementoSensacao = document.getElementById("wind-chill");

if (elementoSensacao) {
    if (temperatura <= 10 && velocidadeVento > 4.8) {
        const resultado = calcularSensacaoTermica(temperatura, velocidadeVento);
        elementoSensacao.textContent = `${resultado} °C`;

    } else {
        elementoSensacao.textContent = "N/A";
    }

}