describe('Executing commands', () => {
  beforeEach(() => {
    cy.app('clean') // => cypress/app_commands/clean.rb
  })

  it('fetch the messages', () => {
    cy.task('log', '  > Execute some server side commands')
    cy.appCommands([
      { name: 'eval', options: "Message.create(author: 'Me', content: 'First message')" },
      { name: 'eval', options: "Message.create(author: 'Me', content: 'Second message')" },
      { name: 'eval', options: "Message.create(author: 'Me', content: 'Third message')" },
    ])

    cy.visit('/')

    cy.get('.messages li').should(($messages) => {
      expect($messages).to.have.length(3)
      expect($messages[0]).to.contain('Third message')
      expect($messages[1]).to.contain('Second message')
      expect($messages[2]).to.contain('First message')
    })
  })

  it('creates a new message', () => {
    cy.visit('/')

    // Server side check
    cy.appEval('Message.count').then((result) => {
      expect(result).to.eq(0)
    })

    // Client side checks
    cy.get('#formData_author').type('Some author')
    cy.get('#formData_content').type('Some content')
    cy.contains('Submit').click()

    cy.get('.messages li').should(($messages) => {
      expect($messages).to.have.length(1)
      expect($messages[0]).to.contain('Some content')
    })

    // Server side check
    cy.appEval('Message.where(content: "Some content").count').then((result) => {
      expect(result).to.eq(1)
    })
  })
})
