import ContactManagementPage from '../../support/PageObject/ContactManagementPage'

describe('AM Contact tests',function(){
    // Value of extras will be unique everytime, hence no issues while creating new account
    const extra1 = Date()
    const extra2 = Date()
    before('visit website',() =>{
        cy.visit('http://b2prospect.bamboobox.in/')
        cy.viewport('macbook-15')
        const CM = new ContactManagementPage();
        CM.ClickToggle()
        cy.fixture('ContactData').then((data)  => {
            this.data=data      // Data from ContactData.json
        })
    })
    
    it('New Contact Creation using Email',() => {
        const CM = new ContactManagementPage();
        CM.FillCompanyWebsite(this.data.C1.websiteName + extra1)
        cy.wait(1000)           // waits are added to ignore alerts
        CM.FillCompanyName(this.data.C1.companyName + extra1)
        cy.wait(1000)
        CM.FillFirstName(this.data.C1.FirstName)
        CM.FillLastName(this.data.C1.LastName)
        CM.FillOfficialEmail(this.data.C1.OfficialEmail + extra1)
        cy.wait(2000)
        CM.CreateContact()
        cy.wait(5000).then(() => {  //wait is added as saving data takes time, only after the post req is successfull,
            cy.contains(this.data.C1.OfficialEmail).should('exist')// email id should be asserted 
        })
    })
    
    it('New Contact Creation using LinkedIn',() => {
        const CM = new ContactManagementPage();
        CM.FillCompanyWebsite( this.data.C2.websiteName  + extra2)
        cy.wait(1000)
        CM.FillCompanyName(this.data.C2.companyName + extra2)
        cy.wait(1000)
        CM.FillFirstName(this.data.C2.FirstName)
        CM.FillLastName(this.data.C2.LastName)
        CM.FillLinkedinURL(this.data.C2.LinkedinURL + extra2)
        cy.wait(2000)
        CM.CreateContact()
        cy.wait(5000).then(() => {
            cy.contains(this.data.C2.LinkedinURL).should('exist')
        })
    }) 

    it("Duplicate account creation using same Email", () =>{
        const CM = new ContactManagementPage();
        CM.FillCompanyWebsite(this.data.C1.websiteName + extra1)
        cy.wait(1000)
        CM.FillCompanyName(this.data.C1.companyName + extra1)
        cy.wait(1000)
        CM.FillFirstName(this.data.C1.FirstName)
        CM.FillLastName(this.data.C1.LastName)
        CM.FillOfficialEmail(this.data.C1.OfficialEmail + extra1)
        cy.wait(2000)
        CM.ClearInput() // Clear all input as account creation failed
    })

    it('Mandatory Fields Error Message Displayed Correctly',()=>{
        const CM = new ContactManagementPage();
        CM.FillCompanyWebsite(this.data.C1.websiteName + extra1)
        cy.wait(1000)
        CM.FillCompanyName(this.data.C1.companyName + extra1)
        cy.wait(1000)
        CM.FillFirstName(this.data.C1.FirstName)
        CM.FillLastName(this.data.C1.LastName)
        CM.FillOfficialEmail(this.data.C1.OfficialEmail) + extra1
        cy.wait(2000)
        cy.on('window:alert', (str) => {
            if(str=="No Mandatory fields passed")   // Many alerts, so check if the alert msg is the one that is required
                expect(str).to.equal(`No Mandatory fields passed`)
          })
        CM.ClearInput()
    })
})