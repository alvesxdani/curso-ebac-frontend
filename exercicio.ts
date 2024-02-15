// - Utilizando o TypeScript e a tipagem escreva duas funções: uma função de multiplicação que deverá receber como argumentos dois números e retornar a multiplicação deles
// - Uma função de saudação que deverá receber um nome e retornar a concatenação “Olá “ + nome;

type MultiplicacaoT = {
  a: number
  b: number
}

function mult({a, b}: MultiplicacaoT) {
  const result = a * b
  return result
}

type MsgT = {
  name: string
}

function saudacao({name}: MsgT) {
  const greetings = `Olá ${name}`
  return greetings
}