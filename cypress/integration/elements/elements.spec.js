/// <reference types="cypress" />

it('check if there are 5 buttons at the bottom of the page', ()=>{

    cy.visit('https://the-internet.herokuapp.com')
    cy.get(':nth-child(39) > a').click()
    cy.get('[href="/shifting_content/menu"]').click()
    cy.get('ul li').should('have.length', 5)
    
} )