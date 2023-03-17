/**
 *  ### Transformar notas escolares
 * 
 * 
 * Crie um algoritmo que transforme as notas do sistema numerico para sistemas 
 * de notas em caracteres tipo A B C
 * 
 * de 90 pra cima: A
 * entre 80 - 89:  B
 * entre 70 - 79:  C
 * entre 60 - 69:  D
 * menor que 60:   F
 * 
 */

const converteNota = (nota) => {
    let notaParaCaratere = {
        A: 'A',
        B: 'B',
        C: 'C',
        D: 'D',
        F: 'F',
        INVALIDA: 'Nota Invalida'
    }

    return nota >= 90 && nota <= 100 ? notaParaCaratere[A] :
    nota >= 80 && nota <= 89 ? notaParaCaratere[B]:
    nota >= 70 && nota <= 79 ? notaParaCaratere[C]:
    nota >= 60 && nota <= 69 ? notaParaCaratere[D]:
    nota >= 0 && nota < 60 ? notaParaCaratere[F]:
    notaParaCaratere[INVALIDA];

}

console.log(converteNota(100)); // A
console.log(converteNota(95));  // A
console.log(converteNota(75));  // C
console.log(converteNota(85));  // B
console.log(converteNota(65));  // D
console.log(converteNota(55));  // F
console.log(converteNota(80));  // B
console.log(converteNota(60));  // D
console.log(converteNota(15));  // F
console.log(converteNota(-1));  // Nota Invalida
console.log(converteNota(110)); // Nota Invalida