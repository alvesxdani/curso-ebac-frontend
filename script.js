const dados = [
  {
    nome: 'Maria',
    nota: 8.5,
  },
  {
    nome: 'Pedro',
    nota: 4.5,
  },
  {
    nome: 'João',
    nota: 7.0,
  },
  {
    nome: 'Gabriela',
    nota: 5.6,
  },
]

dados.filter((item) => {
  item.nota >= 6 ? console.log(`${item.nome} está Aprovado!`) : console.log(`${item.nome} está Reprovado!`);
});