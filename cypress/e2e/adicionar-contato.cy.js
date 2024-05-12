describe('Deverá adicionar um contato', () => {
  beforeEach(() => {
    cy.visit('https://agenda-contatos-react.vercel.app/')
  })

  it('Deverá preencher o formulário', () => {
    cy.get('[type="text"]').type('Daniela')
    cy.get('[type="email"]').type('teste@teste.com')
    cy.get('[type="tel"]').type('11 123456789')
  })

  it('Deverá enviar o formulário', () => {
    cy.get('[type="text"]').type('Daniela')
    cy.get('[type="email"]').type('teste@teste.com')
    cy.get('[type="tel"]').type('11 123456789')
    cy.get('.adicionar').click()
  })
})