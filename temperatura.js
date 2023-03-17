/**
 * 
 * ### Celsius em fahrenheit
 * 
 * crie uma função que receba uma string em celsius ou fahrenheit e faça
 * a transformação de uma unidade para outra
 * 
 * Ex: convertTemperature(50F) returns 10C
 * 
 * C = (F - 32) * 5/9
 * 
 * F = C * 9/5 + 32
 */

const verifyUnityType = (value) => {
    return Array.from(value).at(-1);
}

const getNumber = (value) => {
    return Number(value.slice(0, -1))
}

const convertTemperature = (value) => {

    const valueType = verifyUnityType(value);
    const number = getNumber(value);

    return valueType === 'F' 
        ? ((number-32) * (5/9)) + 'C' 
        : (number * 9/5 + 32 ) + 'F';
}

console.log(convertTemperature('10C')); // 50F
console.log(convertTemperature('50F')); // 10C