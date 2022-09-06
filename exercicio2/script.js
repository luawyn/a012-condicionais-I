const nome = prompt('Digite seu nome: ')
let idade = parseInt(prompt('Digite sua idade: '))
let terminouEnsinoMedio = confirm('Terminou o ensino médio?')
let isCursandoFaculdade = confirm('Cursando alguma faculdade?')

if (idade >= 18) {
  console.log(nome + ', você é maior de idade!')
} else {
  console.log(nome + ', você é menor de idade!')
}
if (terminouEnsinoMedio === true) {
  console.log(nome + ', você terminou o ensino médio!')
} else {
  console.log(nome + ', você não terminou o ensino médio!')
}
if (isCursandoFaculdade === true) {
  console.log(nome + ', você está cursando uma faculdade!')
} else {
  console.log(nome + ', você não está cursando uma faculdade!')
}

// # Exercício 2

// Escreva um código que receba três valores. Uma idade, um booleano que responda se a pessoa terminou ou não o ensino médio, e um booleano que responda se a pessoa está cursando alguma faculdade.

// Crie um `if` para cada variável, checando as seguintes afirmacões:
// - Se a pessoa tem 18 anos ou mais;
// - Se a pessoa terminou o ensino médio;
// - Se a pessoa NÃO está cursando alguma faculdade;

// Crie um `if` que imprima que a afirmacão é verdadeira, e um `else` para imprimir que a afirmacão não é verdadeira.

// <details>

// <summary>Exemplo</summary>

// Caso a primeira pessoa tenha idade >=18:

// <b>"A pessoa é maior de idade"</b>

// e caso não seja:

// <b>"A pessoa é menor de idade"</b>

// </details>
