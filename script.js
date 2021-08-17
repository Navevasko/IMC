const calcular = document.getElementById("calcular")


function imc () {
    const txtNome = document.getElementById("nome").value
    const txtAltura = document.getElementById("altura").value
    const txtPeso = document.getElementById("peso").value
    const resultado = document.getElementById("resultado")
    
        const valorIMC = (txtPeso / (txtAltura * txtAltura)).toFixed(1) // Execução do cálculo usando .toFixed() para controlar as casas deciamis.
        
        let classificacao = '' 
        
        if (valorIMC < 18.5) {
            classificacao = 'abaixo do peso'
        } else if (valorIMC < 24.9) {
            classificacao = 'com peso ideal. Parabéns!!!'
        } else if (valorIMC < 29.9) {
            classificacao = 'acima do peso'
        } else if (valorIMC < 34.9) {
            classificacao = 'com obesidade grau I'
        } else if (valorIMC < 40) {
            classificacao = 'com obesidade grau II'
        } else {
            classificacao = 'com obesidade grau III. Cuidado!!!'
        }
        
        resultado.textContent = `${txtNome} seu IMC é ${valorIMC} você está ${classificacao}`  
    
}

calcular.addEventListener('click', imc) 