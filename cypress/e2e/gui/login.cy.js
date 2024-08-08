describe('Funcionalidade de Login', () => {

  it('Realizar login na aplicação com sucesso', () => {
    cy.login()

    cy.get('.qa-user-avatar')
      .should('be.visible')
  })
})