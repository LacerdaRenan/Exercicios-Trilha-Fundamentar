/**
 * 
 * ### Sistema de gastos familiar
 * 
 * Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
 *  receitas: []
 *  despesas: []
 * 
 * Agora, crie uma função que irá calcular o total de receitas e desepesas e
 * irá mostrar uma mensagem se a familia está com saldo positivo ou negativo,
 * seguindo o valor do saldo
 *
 * 
 */


const saldoFamiliar = (gastos) => {

    const receitaTotal = gastos.receitas.reduce((acc, current) => acc + current);
    const despesaTotal = gastos.despesas.reduce((acc, current) => acc + current);

    return ((receitaTotal - despesaTotal) >= 0? 'Saldo Positivo': 'Saldo Negativo');
}

const gastos1 = {
    receitas: [10, 20, 30],
    despesas: [40, 50, 60]
}
console.log(saldoFamiliar(gastos1)); // Saldo Negativo


const gastos2 = {
    receitas: [70, 80, 90],
    despesas: [40, 50, 60]
}
console.log(saldoFamiliar(gastos2)); // Saldo Positivo


const gastos3 = {
    receitas: [70, 80, 90],
    despesas: [70, 80, 90]
}
console.log(saldoFamiliar(gastos3)); // Saldo Positivo

const gastos4 = {
    receitas: [70, 80],
    despesas: [70, 80, 90]
}
console.log(saldoFamiliar(gastos4)); // Saldo Negativo


