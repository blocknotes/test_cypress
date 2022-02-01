describe('Basic', () => {
  it('loads the home page', () => {
    cy.visit('/')

    cy.get('h1').should(($title) => {
      expect($title).to.contain('Messages')
    })
  })
})
