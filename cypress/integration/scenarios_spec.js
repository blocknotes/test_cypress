describe('Using scenarios', function() {
  beforeEach(() => {
    cy.app('clean') // have a look at cypress/app_commands/clean.rb
  })

  it('loads "basic" scenario', function() {
    cy.appScenario('basic')

    cy.visit('/')

    cy.get('.messages li').should(($messages) => {
      expect($messages).to.have.length(3)
      expect($messages[0]).to.contain('Third message')
      expect($messages[1]).to.contain('Second message')
      expect($messages[2]).to.contain('First message')
    })
  })
})
