Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function(){
    cy.get ('#firstName').type('Milena')
    cy.get ('#lastName').type('Martiniano')
    cy.get ('#email').type('milena@exemplo.com')
    cy.get('#open-text-area').type('teste')
    cy.contains('button', 'Enviar').click()
  
})