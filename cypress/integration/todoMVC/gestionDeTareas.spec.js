/// <reference types="cypress" />

import { HomePage } from "../../page-objects-todoMVC/home-page"; 

describe('test de todoMVC', () =>{
    const homePage = new HomePage()
    
    beforeEach(() => {

        homePage.goToHomePage()
    })

    it('Add 1 task and check if it is added to the list', ()=>{
        
        homePage.enterTask("Añadir 1 tarea{enter}")
        homePage.checkTaskAdded()
        
    })

    it('Mark 1 task as completed, check the button is toggled and the task is lined through', ()=>{
        homePage.enterTask("Añadir 1 tarea para completar{enter}")
        homePage.markTaskAsCompleted()
        homePage.checkTaskAsCompleted()
    })

    it('Add 2 tasks, mark 1 as completed and check active tasks. "Active" button should appear toggled', ()=>{
        
        homePage.enterTask("Tarea que quedará activa{enter}")
        homePage.enterTask("Tarea que completaré{enter}")
        homePage.markTaskAsCompleted()
        homePage.clickActiveTasksButton()
        homePage.checkActiveButtonIsPushed()
    })

    it('See completed tasks', () =>{

        homePage.enterTask("Tarea que quedará activa{enter}")
        homePage.enterTask("Tarea que completaré{enter}")
        homePage.markTaskAsCompleted()
        homePage.clickCompletedTasksButton()
        homePage.checkCompletedButtonIsPushed()
        homePage.checkTaskAsCompleted()

    })

    it('Delete completed tasks', () =>{

        homePage.enterTask("Tarea que quedará activa{enter}")
        homePage.enterTask("Tarea que completaré{enter}")
        homePage.markTaskAsCompleted()
        homePage.clickClearCompletedButton()
        homePage.checkTaskAsActive()
    }) 

})