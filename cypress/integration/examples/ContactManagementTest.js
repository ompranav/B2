import ContactManagementPage from '../../support/PageObject/ContactManagementPage'

describe('AM Contact tests',function(){
    before('visit website',() =>{
        cy.visit('http://b2prospect.bamboobox.in/')
        
        cy.fixture('ContactData').then((data)  => {
            this.data=data
        })
    })

    it('AM Contact Creation',() => {
        const CM = new ContactManagementPage();
        CM.ClickToggle()
        CM.FillCompanyWebsite(this.data.C1.websiteName)
        CM.FillCompanyName(this.data.C1.companyName)
        CM.FillFirstName(this.data.C1.FirstName)
        CM.FillLastName(this.data.C1.LastName)
        CM.FillOfficialEmail(this.data.C1.OfficialEmail)
        CM.CreateContact()
        cy.wait(4000)
        cy.contains('has been added/edited successfully!')
        cy.contains(this.data.C1.OfficialEmail).should('exist')
        
    })
    
    
    it('AM Contact Creation',() => {
        const CM = new ContactManagementPage();
        
        CM.FillCompanyWebsite(this.data.C2.websiteName)
        CM.FillCompanyName(this.data.C2.companyName)
        CM.FillFirstName(this.data.C2.FirstName)
        CM.FillLastName(this.data.C2.LastName)
        CM.FillLinkedinURL(this.data.C2.LinkedinURL)
        CM.CreateContact()
        cy.wait(6000)
        cy.contains('has been added/edited successfully!')
        cy.contains(this.data.C2.LinkedinURL).should('exist')
        
    }) 

    it("Doesn't allow Duplicate account creation", () =>{
        const CM = new ContactManagementPage();

        CM.ClickToggle()
        CM.FillCompanyWebsite(this.data.C2.websiteName)
        CM.FillCompanyName(this.data.C2.companyName)
        CM.FillFirstName(this.data.C2.FirstName)
        CM.FillLastName(this.data.C2.LastName)
        CM.FillLinkedinURL(this.data.C2.LinkedinURL)
        CM.CreateContact()


        
        cy.on('window:alert', (str) => {
            expect(str).to.equal(`Entered Contact is already present in the grid.`)
          })
        CM.ClearInput()
    })
    it('Mandatory Fields Error Message Displayed Correctly',()=>{
        const CM = new ContactManagementPage();

        CM.ClickToggle()
        CM.FillCompanyWebsite(this.data.C2.websiteName)
        CM.FillCompanyName(this.data.C2.companyName)
        CM.FillFirstName(this.data.C2.FirstName)
    
        CM.CreateContact()


        
        cy.on('window:alert', (str) => {
            expect(str).to.equal(`No Mandatory fields passed`)
          })
        CM.ClearInput()
    })
  


})