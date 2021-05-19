class LoginPage{
    visit() {
        cy.visit("http://login.bamboobox.in/#/")
        
    }

    FillEmail(emailValue) {
        const emailfield =cy.get([id="identifierId"])
        emailfield.type(emailValue)
        return this
    }

    FillPassword(passwordValue) {
        const passwordfield = cy.get([id="passwordId"])
        passwordfield.type(passwordValue)
        return this
    }

    login() {
        const loginButton =cy.get([type='submit'])
        loginButton.click()
    }
}

export default LoginPage