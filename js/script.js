let display = document.querySelector('.display');

// Objeto para armazenar os valores numéricos
const valores = {
    '0': 0,
    '1': 1,
    '2': 2,
    '3': 3,
    '4': 4,
    '5': 5,
    '6': 6,
    '7': 7,
    '8': 8,
    '9': 9,
    'mais': '+',
    'menos': '-',
    'multiplicar': '*',
    'divisao': '/',
    'ponto': '.',
    
};

// Objeto para armazenar os elementos DOM
const elementos = {};
Object.keys(valores).forEach(id => {
    elementos[id] = document.getElementById(id); // Associa o elemento HTML ao seu ID
});




Object.keys(elementos).forEach(id => {
    elementos[id].addEventListener('click', () => {
        const atualBotao = `${valores[id]}`; // Valor do botão clicado
        const atualDisplay = display.innerHTML; // Expressão atual no display

        if (podeAdicionar(atualDisplay, atualBotao)){
            display.innerHTML += atualBotao;
        }else{
            console.log('entrada invalida', atualBotao)
        }
        
    });

    
    

});

function podeAdicionar(atualDisplay, atualBotao) {
    const ultimoCaractere = atualDisplay.slice(-1);
    const operadores = ['+', '-', '*', '/'];

    // Se o display está vazio, só permite números ou negativo (-)
    if (atualDisplay === '') {
        return !isNaN(atualBotao) || atualBotao === '-';
    }

    // Se o caractere é um operador
    if (operadores.includes(atualBotao)) {
        // Não permite dois operadores seguidos
        return !operadores.includes(ultimoCaractere);
    }

    // Se o caractere é um ponto decimal
    if (atualBotao === '.') {
        // Não permite dois pontos no mesmo número
        const partes = atualDisplay.split(/[\+\-\*\/]/); // Divide pelos operadores
        return !partes[partes.length - 1].includes('.'); // Verifica o último número
    }

    // Para números, sempre permite
    return true;
}

const igual = document.querySelector('#igual').addEventListener('click', ()=>{
    let expressao = display.innerHTML;  // Ex: '3+5-2*4'
    let resultado = eval(expressao);    // Calcula o resultado da expressão
    display.innerHTML = resultado;      // Exibe o resultado no display
})
const reset = document.querySelector('#reset').addEventListener('click', ()=>{
    display.innerHTML = '';
});
 const deletar = document.querySelector('#deletar').addEventListener('click', ()=>{
    display.innerHTML = display.innerHTML.slice(0, -1); // Remove o último caractere
});

// Selecionar os elementos necessários
const tema1 = document.getElementById("tema1");
const tema2 = document.getElementById("tema2");
const tema3 = document.getElementById("tema3");
const section = document.querySelector("section");

// Função para alterar o tema
function alterarTema(tema) {
    // Remove todas as classes de tema
    section.classList.remove("theme1", "theme2", "theme3");
    
    // Adiciona a nova classe de tema
    section.classList.add(tema);
}

// Adicionar eventos de clique nos botões de rádio
tema1.addEventListener("change", () => alterarTema("theme1"));
tema2.addEventListener("change", () => alterarTema("theme2"));
tema3.addEventListener("change", () => alterarTema("theme3"));
