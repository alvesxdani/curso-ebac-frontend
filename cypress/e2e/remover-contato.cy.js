describe('Deverá remover contato', () => {
  beforeEach(() => {
    cy.visit('https://agenda-contatos-react.vercel.app/')
  })

  it('Deverá remover o contato', () => {
    cy.get('.sc-gueYoa > .delete').first().click()
  })
})
