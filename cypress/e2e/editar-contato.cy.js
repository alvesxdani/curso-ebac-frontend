describe('Deverá editar um contato', () => {
  beforeEach(() => {
    cy.visit('https://agenda-contatos-react.vercel.app/')
  })

  it('Deverá clicar no botão de editar', () => {
    cy.get('.sc-gueYoa > .edit').first().click()
  })

  it('Deverá editar os dados do contato', () => {
    cy.get('.sc-gueYoa > .edit').first().click()
    cy.get('input[type="text"]').clear().type('Dani')
    cy.get('input[type="email"]').clear().type('test@test.com')
    cy.get('input[type="tel"]').clear().type('11 123456789')
    cy.get('.alterar').click()
  })
})