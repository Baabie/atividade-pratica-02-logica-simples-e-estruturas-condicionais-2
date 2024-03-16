// Desenvolva um algoritmo que faça o cálculo do índice de massa
// corporal de uma pessoa. Esse algoritmo deve solicitar ao usuário
// que digite sua altura, em seguida solicitar que digite seu peso e que
// lhe exiba o status. O status vai variar da seguinte forma:
// a. Se o IMC for menor que 18,5 o status a ser mostrado deve ser
// “Você está abaixo da faixa de peso ideal”;
// b. Se o IMC estiver acima de 24,99 o status a ser mostrado será
// “Você está acima da faixa de peso ideal”;

// c. Se o IMC for igual ou maior que 18,5 e igual ou menor que
// 24,99, o status a ser mostrado será “Você está dentro da faixa
// de peso ideal”.

let peso = parseFloat(prompt('Digite seu peso: '));
let altura = parseFloat(prompt('Digite sua altura: '));
let categoria;

let calculo = (peso) / (altura ** 2);

if (calculo < 18.5) {
    categoria = 'abaixo';
} else if (calculo >= 18.5 && calculo <= 24.99) {
    categoria = 'noPeso';
} else {
    categoria = 'acima';
}

switch (categoria) {
    case 'abaixo':
        document.write('Você está abaixo da faixa de peso ideal. ');
        break;
    case 'noPeso':
        document.write('Você está dentro da faixa de peso ideal. ');
        break;
    case 'acima':
        document.write('Você está acima da faixa de peso ideal. ');
        break;
}

document.write(`Seu índice de massa corporal é: ${calculo.toFixed(2)}.`);