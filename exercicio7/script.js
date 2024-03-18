// Faça um algoritmo que simule um caixa eletrônico. Nesse algoritmo
// a conta do usuário deve ser criada já com um saldo positivo. O
// usuário precisa informar a quantidade de dinheiro que deseja
// retirar, esse valor deve ser um número positivo, múltiplo de 5 e
// menor do que o saldo. Cada saque eletrônico cobra uma taxa de
// R$4.50. Ao final deve ser informado o saldo da conta caso dê tudo
// certo com o saque, e se o usuário informar um valor maior que o
// saldo deve ser informado ao usuário que o mesmo não tem dinheiro
// suficiente em conta para realizar o saque.
// OBS: Na verificação se o valor do saque é maior que o saldo deve
// ser considerado e também contabilizado o valor da taxa a ser
// cobrada pelo saque. Ou seja, o valor a ser sacado somado ao valor
// da taxa do saque não pode ser maior que o saldo disponível.

let saldoConta = 2000;

let valorSaque = parseInt(prompt('Digite o valor que deseja sacar:  '));



if (valorSaque % 5 === 0 && valorSaque <= saldoConta) {
    let totalSaque = valorSaque + 4.50;

    
    if (totalSaque <= saldoConta) {
        saldoConta -= totalSaque;
        console.log(`Saque de R$${valorSaque} realizado com sucesso.`);
        console.log(`Taxa de saque: R$4.50`);
        console.log(`Saldo atual da conta: R$${saldoConta}`);
    } else {
        console.log(`Saldo insuficiente para realizar o saque de R$${valorSaque}.`);
    }
} else {
    console.log(`Seu saldo vai ficar negativo.`);
}