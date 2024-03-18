// Escreva um programa que pergunte a velocidade de um carro. Caso
// ultrapasse 80Km/h, exiba uma mensagem dizendo que o usuário foi
// multado. Nesse caso, exiba o valor da multa, cobrando R$5 por cada
// km acima da velocidade permitida.

let velocidade = parseFloat(prompt("Digite a velocidade do carro: "));

if (velocidade > 80) {
    let velocidadeAcima = velocidade - 80;
    let multa = velocidadeAcima * 5;

    console.log(`Você foi multado! A velocidade permitida é 80km/h.`);
    console.log(`Você ultrapassou ${velocidadeAcima} km/h e a multa é de R$${multa.toFixed(2)}`);
} else {
    console.log(`Velocidade dentro do limite`);
}