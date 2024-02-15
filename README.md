# Exemplo de código orientado a objetos em JavaScript

Este é um exemplo simples de código JavaScript que demonstra a utilização de conceitos de programação orientada a objetos (POO). O código inclui a definição de uma classe abstrata, classes que herdam dessa classe abstrata e a criação de instâncias dessas classes.

## Estrutura do código

O código é dividido em três partes principais:

1. **Definição da classe abstrata `Veiculo`:**
   - Esta classe contém propriedades e métodos comuns a todos os veículos, como `marca`, `modelo`, `acelerar` e `frear`. Esta classe é utilizada como base para as classes que herdam dela.

2. **Definição das classes `Carro` e `Moto`, que herdam de `Veiculo`:**
   - `Carro`: Esta classe herda de `Veiculo` e adiciona uma propriedade `numPortas` e um método `abrirPortas`.
   - `Moto`: Esta classe também herda de `Veiculo` e adiciona uma propriedade `cilindrada` e um método `ligar`.

3. **Criação de instâncias de objetos:**
   - São criadas três instâncias de objetos, duas do tipo `Carro` e uma do tipo `Moto`. Cada uma delas é inicializada com valores específicos para as propriedades `marca`, `modelo` e as propriedades adicionais de suas respectivas classes.

## Como executar

Para executar o código, basta copiar o código JavaScript em um arquivo `.js` e executá-lo em um ambiente que suporte JavaScript, como um navegador ou Node.js.