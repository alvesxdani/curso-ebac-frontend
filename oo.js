// Definição da classe abstrata
class Veiculo {
  constructor(marca, modelo) {
    this.marca = marca
    this.modelo = modelo
  }

  acelerar() {
    console.log(`${this.modelo} da marca ${this.marca} está acelerando.`)
  }

  frear() {
    console.log(`${this.modelo} da marca ${this.marca} está freando.`)
  }
}

// Definição das classes que herdam de Veiculo
class Carro extends Veiculo {
  constructor(marca, modelo, numPortas) {
    super(marca, modelo)
    this.numPortas = numPortas
  }

  abrirPortas() {
    console.log(`Abrindo as ${this.numPortas} portas do ${this.modelo}.`)
  }
}

class Moto extends Veiculo {
  constructor(marca, modelo, cilindrada) {
    super(marca, modelo)
    this.cilindrada = cilindrada
  }

  ligar() {
    console.log(`Ligando a ${this.modelo} da marca ${this.marca}.`)
  }
}

// Criando instâncias de objetos
const carro1 = new Carro('Toyota', 'Corolla', 4)
const moto1 = new Moto('Honda', 'CBR600RR', '600cc')
const carro2 = new Carro('Ford', 'Mustang', 2)

// Testando os métodos
carro1.acelerar()
moto1.frear()
carro2.abrirPortas()
