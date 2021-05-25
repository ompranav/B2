import ContactManagementPage from '../../support/PageObject/ContactManagementPage'

describe('AM Contact tests',function(){
    before('visit website',() =>{
        cy.visit('http://b2prospect.bamboobox.in/')
        const CM = new ContactManagementPage();
        CM.ClickToggle()
        cy.fixture('ContactData').then((data)  => {
            this.data=data
        })
        cy.viewport('macbook-15')
    })
    

    it('New Contact Creation using Email',() => {
        const CM = new ContactManagementPage();
        // change value of extra everytime
        const extra="c12"
        CM.FillCompanyWebsite(extra + this.data.C1.websiteName)
        cy.wait(1000)
        CM.FillCompanyName(extra + this.data.C1.companyName)
        cy.wait(1000)
        CM.FillFirstName(this.data.C1.FirstName)
        CM.FillLastName(this.data.C1.LastName)
        CM.FillOfficialEmail(extra + this.data.C1.OfficialEmail)
        cy.wait(2000)
        CM.CreateContact()
        cy.wait(8000).then(() => {
            cy.contains(extra + this.data.C1.OfficialEmail).should('exist')
        })
    })
    
    
    it('New Contact Creation using LinkedIn',() => {
        const CM = new ContactManagementPage();
        // change value of extra everytime
        const extra="d12"
        CM.FillCompanyWebsite(extra + this.data.C2.websiteName)
        cy.wait(1000)
        CM.FillCompanyName(extra + this.data.C2.companyName)
        cy.wait(1000)
        CM.FillFirstName(this.data.C2.FirstName)
        CM.FillLastName(this.data.C2.LastName)
        CM.FillLinkedinURL(extra + this.data.C2.LinkedinURL)
        cy.wait(2000)
        CM.CreateContact()
        cy.wait(8000).then(() => {
            cy.contains(extra + this.data.C2.LinkedinURL).should('exist')
        })
    }) 

    it("Duplicate account creation using same Email", () =>{
        const CM = new ContactManagementPage();
        // change value of extra everytime
        const extra="c12"
        CM.FillCompanyWebsite(extra + this.data.C1.websiteName)
        cy.wait(1000)
        CM.FillCompanyName(extra + this.data.C1.companyName)
        cy.wait(1000)
        CM.FillFirstName(this.data.C1.FirstName)
        CM.FillLastName(this.data.C1.LastName)
        CM.FillOfficialEmail(extra + this.data.C1.OfficialEmail)
        cy.wait(2000)
        CM.ClearInput()
    })
    it('Mandatory Fields Error Message Displayed Correctly',()=>{
        const CM = new ContactManagementPage();
        // change value of extra everytime
        const extra="c12"
        CM.FillCompanyWebsite(extra + this.data.C1.websiteName)
        cy.wait(1000)
        CM.FillCompanyName(extra + this.data.C1.companyName)
        cy.wait(1000)
        CM.FillFirstName(this.data.C1.FirstName)
        CM.FillLastName(this.data.C1.LastName)
        CM.FillOfficialEmail(extra + this.data.C1.OfficialEmail)
        cy.wait(2000)
        cy.on('window:alert', (str) => {
            if(str=="No Mandatory fields passed")
                expect(str).to.equal(`No Mandatory fields passed`)
          })
        CM.ClearInput()
    })
  


})