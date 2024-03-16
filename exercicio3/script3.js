// Crie um programa que peça um número e verifique se ele é positivo,
// negativo ou zero.

let numero = Number(prompt("Digite um número qualquer:"));

if (numero >= 1) {
    document.write("Positivo")
} else if (numero == 0) {
    document.write("Zero")
} else  {
    document.write("Negativo")
}