describe('Functional Test Automation with Cypress', () => {
  it('Verify increment button functionality', () => {
    cy.visit('localhost:3000')
    cy.contains('CounterApp')
    cy.get('h2').should('contain.text', '10')
    cy.get('button').first().click()
    cy.get('h2').should('contain.text', '11')
  })

  it('Verify decrement button functionality', () => {
    cy.visit('localhost:3000')
    cy.contains('CounterApp')
    cy.get('h2').should('contain.text', '10')
    cy.get('button').last().click()
    cy.get('h2').should('contain.text', '9')
  })

  it('Verify reset button functionality', () => {
    cy.visit('localhost:3000')
    cy.contains('CounterApp')
    cy.get('h2').should('contain.text', '10')
    for (let i = 0; i < 10; i++) {
      cy.get('button').last().click()
    }
    cy.get('h2').should('contain.text', '0')
    cy.contains('Reset').click()
    cy.get('h2').should('contain.text', '10')
  })
})