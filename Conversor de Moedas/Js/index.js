/* SELECIONAR ELEMENTOS */
// selecionar input com o numero digitado
let valorDigitado = document.querySelector('#valorEmReal');

// selecionar os elementos radios (criar um array deles)
let moedaSelecionada = document.getElementsByName('moedaEstrangeira');

let aviso = document.querySelector('#aviso');

// selecionar os botoes
let btnConverter = document.querySelector('#btnConverter');
let btnLimpar    = document.querySelector('#btnLimpar');

// COTACOES DO DIA 04/04/2023   
let valorDoDolar   = 5.07;      
let valorDoEuro    = 5.52;      
let valorDaLibra   = 6.32;       
let valorDoBitcoin = 143378.71;  
let valorEmReal    = 0;

let moedaEstrangeira = '';
let moedaConvertida  = 0.00;

// MENSAGEM FORMATADA PARA EXIBIR VALORES MONETARIOS
function mensagemFormatada(moedaConvertida) {
    isNaN(valorEmReal) ? valorEmReal = 0 : '';
    console.log("Moeda Convertida " + moedaConvertida);
    aviso.textContent = moedaConvertida;
}

/* VERIFICAR SE FOI DIGITADO ALGUM VALOR PARA PODER CONVERTER */
function bloquearBotao() {
    if(valorDigitado.value == 0 || valorDigitado == '' || valorDigitado == null) {
        btnConverter.setAttribute('disabled', 'disabled');
        btnConverter.style.background = '#ccc';
        btnConverter.style.cursor = 'not-allowed';
    }
}

// REATIVAR BOTAO
function ativarBotao() {
    if(valorDigitado.value > 0) {
        btnConverter.removeAttribute('disabled');
        btnConverter.style.background = '#ffc107';
        btnConverter.style.cursor = 'pointer';
    } else {
        console.log('Nao ativou');
    }
}

// VERIFICAR QUAL BOTAO RADIO ESTA MARCADO checked ou checked == true
// vincular a verificacao a um evento, click no botao Converter
btnConverter.addEventListener('click', function() {
    // FAZER o parseFloat dos valores monetarios (converter String para Float)
    valorEmReal = parseFloat(valorDigitado.value);

    console.log('Escolhe a moeda estrangeira');
    for(let i = 0; i < moedaSelecionada.length; i++) {
        if(moedaSelecionada[i].checked) {
            moedaEstrangeira = moedaSelecionada[i].value;
            console.log(moedaEstrangeira);
        }
    }

    /*
    Use uma estrutura escolha caso para escolher
    qual e a moeda estrangeira que foi selecionada
    */

// CONVERSAO DE MOEDAS
// Operacao basica pegar moedaEstrangeira e dividir pelo valorEmReal
    switch(moedaEstrangeira) {
        
        case 'Dólar':
            moedaConvertida = valorEmReal / valorDoDolar;
            mensagemFormatada(moedaConvertida.toLocaleString('en-US', { style: 'currency', currency: 'USD' }));
        break

        case 'Euro':
            moedaConvertida = valorEmReal / valorDoEuro;
            mensagemFormatada(moedaConvertida.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' }));
        break

        case 'Libra':
            moedaConvertida = valorEmReal / valorDaLibra;
            mensagemFormatada(moedaConvertida.toLocaleString('en-GB', { style: 'currency', currency: 'GBP' }));
        break

        case 'Bitcoins':
            moedaConvertida = valorEmReal / valorDoBitcoin;
            mensagemFormatada(parseFloat(moedaConvertida).toFixed(5));
        break
    
        default:
            aviso.textContent = 'Escolha uma moeda estrangeira';
    }
    isNaN(moedaConvertida) ? moedaConvertida = 0 : '';
})

btnLimpar.addEventListener('click', function() {
    valorDigitado.focus();
    valorDigitado.value = '';
    bloquearBotao();
    aviso.textContent = 'Digite o valor, escolha a moeda e converte.';
    moedaSelecionada[0].checked = false;
    moedaSelecionada[1].checked = false;
    moedaSelecionada[2].checked = false;
    moedaSelecionada[3].checked = false;
})