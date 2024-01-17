/*
const funcoes = require('./funcoes-auxiliares');

// console.log(funcoes.gets());

const pessoa = {
    nome: 'lika'
};

const { nome } = pessoa;

// const nome = pessoa.nome; // São códigos equivalentes com a mesma função só muda a forma de chamar a função.
*/



// O mesmo código acima, só que de uma forma mais avançada de fazer mais código com pouca linha digamos assim.

/*const { gets, print } = require('./funcoes-auxiliares');

print(gets());
*/



/*
// Uma sala contém 5 alunos e para cada aluno foi sorteado um número de 1 - 100. Faça um programa que receba os 5 números sorteados para os alunos e mostre o maior número sorteado.

Dados de entrada:
5
50
10
98
23

Saida:
98

const { gets, print } = require('./funcoes-auxiliares');

const numerosSorteados = [];

for (let i = 0; i < 5; i++) {
    const numeroSorteado = gets();
    numerosSorteados.push(numeroSorteado);
    
}

let maiorValorEncontrado = 0;

for (let i = 0; i < numerosSorteados.length; i++) {
    const numeroSorteado = numerosSorteados[i];
    if (numeroSorteado > maiorValorEncontrado) {
        maiorValorEncontrado = numeroSorteado;
    }
}

print(maiorValorEncontrado);
*/



// O mesmo código anterior de uma forma simplificada.

const { gets, print } = require('./funcoes-auxiliares');

const quantidadeDeAlunos = gets();
let maiorValorEncontrado = 0;

for (let i = 0; i < quantidadeDeAlunos; i++) {
    const numeroSorteado = gets();
    if (numeroSorteado > maiorValorEncontrado) {
        maiorValorEncontrado = numeroSorteado;
    }
    
}

print(maiorValorEncontrado);