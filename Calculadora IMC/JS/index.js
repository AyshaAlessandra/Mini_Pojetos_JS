let cxPeso = document.querySelector('#peso');
let cxAltura = document.querySelector('#altura');
let aviso = document.querySelector('#aviso');
let erro2 = document.querySelector('#erro2');
let erro1 = document.querySelector('#erro1');
let cxImc = document.querySelector('#resultadoImc');

let btnCalcular = document.querySelector('#btnCalcular');
let btnLimpar = document.querySelector('#btnLimpar');

btnCalcular.addEventListener('click', function (e) {
    let peso = cxPeso.value;
    let altura = cxAltura.value;
    let imc = (peso / (altura * altura)).toFixed(1);

    if (!peso || !altura) {
        aviso.textContent = 'Informe seu Peso ou Altura.'
    }
    else {
        cxImc.value = imc
        let sit = situacaoDoPeso(imc)
        aviso.textContent = sit
    }

    // previnir o comportamento padrao de refresh
    e.preventDefault()
})

function situacaoDoPeso(imc) {
    let situacao = ''
    if (imc < 18.5) {
        situacao = 'Baixo peso'
    } else if (imc >= 18.5 && imc <= 24.9) {
        situacao = 'Peso normal'
    } else if (imc >= 25 && imc <= 29.9) {
        situacao = 'Sobrepeso'
    } else if (imc >= 30 && imc <= 34.9) {
        situacao = 'Obesidade I'
    } else if (imc >= 35 && imc <= 39.9) {
        situacao = 'Obesidade II'
    } else if (imc >= 40) {
        situacao = 'Obesidade III'
    } else {
        situacao = 'Informe seu peso corretamente.'
    }
    return situacao
}

function validarNumero() {
    let altura = cxAltura.value;
    let peso = cxPeso.value;

    if ( peso > 600 || peso < 0 ) {
        formulario.reset() // limpar form
        erro1.textContent = 'Peso maior que 600 ou menor que 0.'
        erro1.classList.add('alerta');
    }
    else if (altura > 2.70 || altura < 0) {
        formulario.reset() // limpar form
        erro2.textContent = 'Altura maior que 2.70 ou  menor que 0.'
        erro2.classList.add('alerta');
    }
    else {
        erro1.textContent = '';
        erro1.classList.remove('alerta');

        erro2.textContent = '';
        erro2.classList.remove('alerta');
    }
}

btnLimpar.addEventListener('click', function (e) {
    erro1.textContent = '';
    erro2.textContent = '';
    aviso.textContent = '';
})