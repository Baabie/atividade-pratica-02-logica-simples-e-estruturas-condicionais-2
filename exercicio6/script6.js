// Escreva um algoritmo que solicite 2 números e uma operação
// matemática. O algoritmo deve realizar o cálculo com os 2 números
// digitados conforme a operação informada.

let num1 = parseInt(prompt('Digite o primeiro número:  '));
let num2 = parseInt(prompt('Digite o segundo número:  '));
let condicao = prompt('Escolha entre soma, subtraçao, divisao ou multiplicaçao: ').toLowerCase();

switch (condicao) {
    case 'soma':
        console.log(num1 + num2)
    break;
    case 'subtraçao':
        console.log(num1 - num2)
    break;
    case 'divisao':
        console.log(num1 / num2)
    break;
    case 'multiplicaçao':
        console.log(num1 * num2)
    break;
}