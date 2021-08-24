function calcularIMC(peso, altura) {
    return peso / (altura ** 2)
}

function capturarEnter (evento) {
    if (evento.key == "Enter") {
        exibirResultado()
    }
}

function camposValidos () {
    return document.querySelector("form").reportValidity()
}

function classificar(imc) {
    let categoria

    if (imc <= 18.5) {
        categoria = "Abaixo do peso"
    }
    else if (imc < 25) {
        categoria = "Peso Ideal, <span class='azul'> parabéns!! </span>"
    }
    else if (imc < 30) {
        categproa = "Levemente acima do peso"
    }
    else if (imc < 35) {
        categoria = "Obesidade grau I"
    }
    else if ( imc < 40) {
        categoria = "Obesidade grau II"
    }
    else {
        categoria = "Obesidade grau III. <span class='vermelho'> Cuidado!!! </span>"
    }

    return categoria
}

function exibirResultado () {
    const resultado = document.getElementById("resultado")
    const nome = document.getElementById("nome").value
    const peso = document.getElementById("peso").value.replace("," , ".")
    const altura = document.getElementById("altura").value.replace("," , ".")

    if (camposValidos()) {

    const imc = calcularIMC (peso, altura)
    const classificacao = classificar(imc)

    resultado.innerHTML  = `${nome} seu IMC é ${imc.toFixed(1)} e sua classificação é: ${classificacao}`
    }
    else {
        resultado.textContent = "Preencha todos os campos"
    }
}


// Eventos
document.getElementById("calcular").addEventListener("click", exibirResultado)
document.querySelector("form").addEventListener("keypress", capturarEnter)