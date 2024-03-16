// Escreva um algoritmo para ler uma temperatura em graus Celsius,
// calcular e escrever o valor correspondente em graus Fahrenheit.

let grausC = Number(prompt("Digite a temperatura em Celsius: "));

let calculo = (grausC * 9/5 + 32);

document.write(`${calculo} Graus Fahrenheit`);