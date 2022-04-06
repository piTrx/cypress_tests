/// <reference types="cypress" />

it('check if there are 5 buttons at the bottom of the page', ()=>{

    cy.visit('https://the-internet.herokuapp.com/shifting_content/menu')
    cy.get('ul li').should('have.length', 5)
    
} )