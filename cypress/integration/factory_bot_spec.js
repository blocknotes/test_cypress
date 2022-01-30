describe('Using Factory bot', () => {
  beforeEach(() => {
    cy.app('clean') // => cypress/app_commands/clean.rb
  })

  it('single factory', () => {
    cy.appFactories([
      ['create', 'message', { author: 'Bob', content: 'First message!' }]
    ])
    cy.visit('/')
    cy.get('.messages').should(($messages) => {
      expect($messages).not.to.contain('Second message!!')
      expect($messages).to.contain('First message!')
    })
  })

  it('multiple factories', () => {
    cy.appFactories([
      ['create_list', 'message', 10],
      ['create', 'message', { author: 'Mat', content: 'Second message!!' }]
    ])
    cy.visit('/')
    cy.get('.messages').should(($messages) => {
      expect($messages).to.contain('Second message!!')
      expect($messages).not.to.contain('First message!')
    })
  })
})
