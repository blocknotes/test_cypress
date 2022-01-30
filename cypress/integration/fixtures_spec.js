describe('Using fixtures', function() {
  beforeEach(() => {
    cy.app('clean') // have a look at cypress/app_commands/clean.rb
  })

  it('loading all fixtures', function() {
    cy.appFixtures({ fixtures_dir: '../server/spec/fixtures' })
    // cy.appFixtures({fixtures: ['posts']}) // load only some fixtures

    cy.visit('/')

    cy.get('.messages li').should(($messages) => {
      expect($messages).to.have.length(3)
    })
  })
})

