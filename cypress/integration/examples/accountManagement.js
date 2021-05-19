import LoginPage from '../PageObject/LoginPage'

describe('TestSuite',function(){
    it('validLoginTest', function(){

        const lp = new LoginPage();
        lp.visit();
        lp.FillEmail('ompranav@bamboobox.ai')
        lp.FillPassword('$$$$$$$$$$')
        lp.login()

        lp.title().should('be.equal','homePage')
    })

})