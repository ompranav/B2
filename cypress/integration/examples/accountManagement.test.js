import AccountManagementPage from '../../support/PageObject/AccountManagementPage'

describe('AM tests',function(){
    before('visit website',() =>{
        cy.visit('http://b2prospect.bamboobox.in/')
        cy.fixture('AMData').then((data)  => {
            this.data=data
        })
    })
    it('AM Account Creation',() => {
        const AM = new AccountManagementPage();
        AM.FillCompanyName(this.data.C1.companyName)
        AM.FillCompanyWebsite(this.data.C1.websiteName)
        AM.CreateAccount()
        cy.contains('has been added/edited successfully!')
        cy.contains(this.data.C1.companyName).should('exist')
    })
    it("Doesn't allow Duplicate account creation", () =>{
        const AM = new AccountManagementPage();
        AM.FillCompanyName(this.data.C1.companyName)
        AM.FillCompanyWebsite(this.data.C1.websiteName)
        AM.CreateAccount()
        cy.on('window:alert', (str) => {
            expect(str).to.equal(`Entered Company Website is already present in the grid.`)
          })
        AM.ClearInput()
    })
    it('Mandatory Fields Error Message Displayed Correctly',()=>{
        const AM = new AccountManagementPage();
        AM.FillCompanyName(this.data.C2.companyName)
        AM.CreateAccount()
        cy.on('window:alert', (str) => {
            expect(str).to.equal(`No Mandatory fields passed`)
          })
        AM.ClearInput()
    })
})