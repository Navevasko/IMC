const calcular = document.getElementById("calcular")


function imc () {
    const txtNome = document.getElementById("nome").value
    const txtAltura = document.getElementById("altura").value
    const txtPeso = document.getElementById("peso").value
    const resultado = document.getElementById("resultado")
    
    if (txtNome !== '' && txtAltura !== '' && txtPeso !== '') {
        const valorIMC = (txtPeso / (txtAltura * txtAltura)).toFixed(1)
        
        let classificacao = '' 
        
        if (valorIMC < 18.5 ) {
            classificacao = 'abaixo do peso'
        } else if (valorIMC < 24.9 && valorIMC >= 18.5) {
            classificacao = 'com peso ideal. Parabéns!!!'
        } else if (valorIMC < 29.9 && valorIMC >= 25.0) {
            classificacao = 'acima do peso'
        } else if (valorIMC < 34.9 && valorIMC >= 30.0) {
            classificacao = 'com obesidade grau I'
        } else if (valorIMC < 40) {
            classificacao = 'com obesidade grau II'
        } else if(valorIMC > 40) {
            classificacao = 'com obesidade grau III.'
        }
        
        resultado.textContent = `${txtNome} seu IMC é ${valorIMC} você está ${classificacao}`  
    
    }else {
        resultado.textContent = 'É obrigatório preencher todos os campos'
    }
}

calcular.addEventListener('click', imc) 