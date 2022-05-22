/*

1. Faça um programa que receba três inteiros e diga qual deles é o maior e qual o menor?

2. Para doar sangue é necessário ter entre 18 e 67 anos. Faça um algoritimo que pergunte a 
idade de uma pessoa e diga se ela pode doar sangue ou não. Use alguns dos operadores lógicos OU (||) e E (&&)

3. Faça um programa que peça um valor e mostre na tela se o valor é positivo ou negativo

4. Faça um programa para a leitura de duas notas de um aluno.  
    A mensagem “Aprovado”, se a média alcançada for maior ou igual a 7;
    A mensagem “Aprovado com Distinção”, se a média for igual a 10;
    A mensagem “Reprovado” se a média for menor de do que 7;

*/

// Exercicio I

function showDosNumeros (a, b, c) {
    return `o maior número é o ${Math.max (a , b, c)} e o menor número é o ${Math.min (a , b, c)}`
}    

console.log (showDosNumeros(22, 32, 118))

// Exercicio II

function podeDoarSange ( idade ) {
    if ( idade >= 18 && idade <= 67) {
        return `pode doar`
    } else {
        return `não pode doar`
    }
}

console.log (podeDoarSange (14))

// Exercicio III

function positivoNegativo ( valor ) {
    if (( Math.sign ( valor )) >= 0) {
        return `${ valor } é positivo` 
    } else {
        return `${ valor } é negativo`
    }
}    

console.log (positivoNegativo (1))

// Exercicio IV

function calcMedia ( nota1, nota2 ){
    let media = (nota1 + nota2)/2
    if ( media >= 7 && media < 10){
        return "Aprovado"
    } else if ( media == 10) {
        return "Aprovado com Distinçãõ"
    } else {
        return "Reprovado"
    }
}

console.log (calcMedia (4, 10))
