import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import AccountManagementPage from '../../support/PageObject/AccountManagementPage'

const AM=new AccountManagementPage();
before('AM Tests',() => {
    cy.visit('http://b2prospect.bamboobox.in/')
})
//test steps
Given('I create a new Account', () => {
    cy.log("Enter Details")
})
Given('I enter a Account name', () => {
    cy.fixture('AMData').then((data)  => {
        const db = data
        AM.FillCompanyName(db.C1.companyName)
        AM.FillCompanyWebsite(db.C1.websiteName)   //Right now the website is allowing same acc name, 
                                                //and website name should be unique
    })
})
When('I enter all the mandatory and other Account data', () => {
    cy.fixture('AMData').then((data)  => {
        const db = data
    AM.FillCompanyName(db.C1.companyName)
    AM.FillCompanyWebsite(db.C1.websiteName)
    })
})
When('I do not enter account name and account URL', () => {
    cy.fixture('AMData').then((data)  => {
        const db = data
        AM.FillCompanyName(db.C2.companyName)
    })
})
When('the Account already exists',() => {
    AM.CreateAccount()
    cy.on('window:alert', (str) => {
        expect(str).to.equal(`Entered Company Website is already present in the grid.`)
    })
})
Then('Account should be created', () => {
    cy.fixture('AMData').then((data)  => {
        const db = data
        AM.CreateAccount()
        AM.verify(db.C1.companyName)
    })
})
Then('I should be alerted to enter account name and account URL', () => {
    AM.CreateAccount()
    cy.on('window:alert', (str) => {
        expect(str).to.equal(`No Mandatory fields passed`)
    })
})
Then('I should not be allowed to create duplicate account',() => {
    AM.ClearInput()
})
And('I should not be allowed to create the account', () =>{
    AM.ClearInput()
})