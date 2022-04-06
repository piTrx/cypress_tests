/// <reference types="cypress" />

describe('test de login', () =>{

    beforeEach(() => {

        cy.visit('https://the-internet.herokuapp.com/login')
    })


it.skip('valid user can login', ()=>{

    cy.get('#username').type("tomsmith")
    cy.get('#password').type("SuperSecretPassword!")
    cy.get('.fa').click()
    cy.get('#flash').contains("You logged into a secure area!")


} )

it('wrong password cannot login', ()=>{

    cy.get('#username').type("tomsmith")
    cy.get('#password').type("invalidPassword!")
    cy.get('.fa').click()
    cy.get('#flash').contains("Your password is invalid!")


} )

it('not valid user cannot login', ()=>{

    cy.get('#username').type("invaliduser")
    cy.get('#password').type("SuperSecrekktPassword!")
    cy.get('.fa').click()
    cy.get('#flash').contains("Your username is invalid!")


} )
})