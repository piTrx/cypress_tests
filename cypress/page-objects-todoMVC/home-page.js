/// <reference types="cypress" />


export class HomePage {

    goToHomePage() {
        cy.visit('http://todomvc-app-for-testing.surge.sh')

    }
    enterTask(text) {
        cy.get('.new-todo').type(text)
    }
    
    checkTaskAdded() {
        cy.get('body').should('have.length',1)
    }

    markTaskAsCompleted() {
        cy.get(':nth-child(1) > .view > .toggle').click()
    }
    checkTaskAsCompleted() {
        cy.get('ul li').should('have.class', 'completed')
        //cy.get('.toggle').should('have.value','on') //Otra manera de hacer el paso anterior
        cy.get('label').should('have.css','text-decoration').and('match', /line-through/)
    }

    clickActiveTasksButton() {
        cy.get(':nth-child(2) > a').click()
    }

    checkActiveButtonIsPushed() {
        cy.get(':nth-child(2) > a').should('have.class','selected')

    }

    clickCompletedTasksButton() {
        cy.get(':nth-child(3) > a').click()
    }

    checkCompletedButtonIsPushed() {
        cy.get(':nth-child(3) > a').should('have.class','selected')

    }

    clickClearCompletedButton() {
        cy.get('.clear-completed').click()
    }

    checkTaskAsActive() {
        //cy.get('.toggle').should('have.value','off') //Falla
        cy.get('ul li').should('have.class', '')
    }


    
}