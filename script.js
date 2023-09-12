// 1- Print Hello World!
alert("Hello World!")

// 2- Soma de 2 variáveis
alert('Iremos fazer a soma de 2 números')
let soma1 = Number(prompt('Digite um número:'))
let soma2 = Number(prompt('Digite outro número:'))

const somaTotal = soma1 + soma2
alert('A soma dos dois números é ' + somaTotal)

// 3- Verificando se um number
let number = prompt('Digite um número:')

if (number == Number(number)) {
    alert('Você digitou o número ' + number)
} else {
    alert('Isso não e um número')
}

// 4- Verificando se é uma string
let string = prompt('Digite o seu nome')

if (string != Number(string)) {
    alert('Você digitou uma string')
} else {
    alert('Isso não é uma string')
}

// 6- Subtração de 2 variáveis
alert('Vamos fazer a subtração de 2 números')
let sub1 = Number(prompt('Digite um número:'))
let sub2 = Number(prompt('Digite outro número:'))

const subTotal = sub1 - sub2
alert('A subtração dos dois números é ' + subTotal)

// 7- Multiplicação de 2 variáveis
alert('Vamos fazer a multiplicação de 2 números')
let mult1 = Number(prompt('Digite um número:'))
let mult2 = Number(prompt('Digite outro número:'))

const multTotal = mult1 * mult2
alert('A multiplicação dos dois números é ' + multTotal)

// 8- Divisão de 2 variáveis
alert('Vamos fazer a divisão de 2 números')
let div1 = Number(prompt('Digite um número:'))
let div2 = Number(prompt('Digite outro número:'))

const divTotal = div1 / div2
alert('A divisão dos dois números é ' + divTotal)

// 9- Verificando se o num é par
let par = prompt('Digite um número par:')
let parTer = par % 2 === 0 ? `${par} É um número par` : `${par} Não é um número par`;

alert(parTer)

// 10- Verificando se o num é impar
let impar = prompt('Digite um número impar:')
let imparTer = impar % 2 !== 0 ? `${impar} É um número impar` : `${impar} Não é um número impar`;

alert(imparTer)

// 5- Verificando se é boolean
const checkInBoolean = [
  'banana',
  false,
  123, 
  true,
]

for(check of checkInBoolean) {
  if(typeof check === 'boolean') {
    alert('Você digitou um Booleano!')
  } else {
    alert('Valor não Booleano.')
  }
}

console.log(check)