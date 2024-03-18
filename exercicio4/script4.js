// O custo de um carro novo ao consumidor é a soma do custo de
// fábrica com a porcentagem do distribuidor e dos impostos
// (aplicados ao custo de fábrica). Supondo que o percentual do
// distribuidor seja de 28% e os impostos de 45%, escrever um
// algoritmo para ler o custo de fábrica de um carro,calcular e escrever
// o custo final ao consumidor.

const custoDistribuidor =  0.28;

const imposto = 0.45;

let precoCarro = parseFloat(prompt("Digite o preço do carro: "));

let calculoToral = precoCarro * ( 1 + custoDistribuidor + imposto );

document.write(`O preço com o imposto sai: ${calculoToral.toFixed(2)}`);