// Desvendando as Funções gets e print dos Desafios de Código.

// O GET pega uma leitura como se fosse um input de alguém digitando, e o PRiNT é como se fosse um console.log imprime a mensagem.

/*
function gets() {
    return 10;
}

function print(texto) {
    console.log(texto);
}

module.exports = {gets, print,};
*/

const entradas = [10, 5, 50, 10, 98, 23, 33, 44, 100, 1, 7];
let i = 0;

function gets() {
    const valor = entradas[i];
    i++;
    return valor;
}

function print(texto) {
    console.log(texto);
}

module.exports = {gets, print,};