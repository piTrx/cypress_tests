/// <reference types="cypress" />

import { HomePage } from "../../page-objects/home-page";
import { LoginPage } from "../../page-objects/login-page";
import { SecurePage } from "../../page-objects/secure-page";

describe('test de login', () =>{
    const homePage = new HomePage()
    const loginPage = new LoginPage()
    const securePage = new SecurePage()

    
    it('valid user can login', ()=>{
        homePage.goToHomePage()
        homePage.clickLogin()
        loginPage.enterUsername("tomsmith")
        loginPage.enterPassword("SuperSecretPassword!")
        loginPage.clickLoginButton()
        securePage.checkMessage("You logged into a secure area!")
    })

    it('invalid user cannot login', ()=>{
        homePage.goToHomePage()
        homePage.clickLogin()
        loginPage.enterUsername("invalid")
        loginPage.enterPassword("SuperSecretPassword!")
        loginPage.clickLoginButton()
        loginPage.checkErrorMessage("Your username is invalid!")
    })

    it('wrong password cannot login', ()=>{
        homePage.goToHomePage()
        homePage.clickLogin()
        loginPage.enterUsername("tomsmith")
        loginPage.enterPassword("invalid")
        loginPage.clickLoginButton()
        loginPage.checkErrorMessage("Your password is invalid!")
    })
})