import AMDetailedContactPage from '../../support/PageObject/AMDetailedContactPage'

describe('AM Detailed View Contact tests',function(){
    before('visit website',() =>{
        cy.visit('http://login.bamboobox.in/#/home')
        cy.viewport('macbook-15')
        cy.fixture('DetailedContactData').then((data)  => {
            this.data=data                  // Data from DetailedContactData.json
        })
    })
    
    it('Land on Detailed View Contacts',() => {
        cy.contains("Account Hub").click()  //Change to Account Management later
        cy.contains("Account List view").click()
        cy.url().then((url) => {
            expect(url).to.equal('http://login.bamboobox.in/#/account-list-view')
        })
        cy.wait(3000)
    })

    it('View the contacts of an account', () => {
        // To sort
        //cy.iframe().xpath('/html/body/div/div/div/div[4]/div[2]/div[3]').click()

        // To select first account
        //cy.iframe().xpath('/html/body/div/div/div/div[4]/div[2]/div[129]/a').click()

        // For trying
        cy.iframe().contains('abcd').click()
    })

    it('User Adds a Contact to selected account', () => {
        cy.wait(5000)
        cy.iframe().xpath('/html/body/div/div[2]/div[2]/div/div[1]/div[2]/button[1]/span[1]').click()
        const AM = new AMDetailedContactPage()
        AM.FillFirstName(this.data.C1.FirstName)
        AM.FillLastName(this.data.C1.LastName)
        AM.FillOfficialEmail(this.data.C1.OfficialEmail)
        AM.Confirm()
    })

    it('User Edits the Contact Details', () => {
        cy.wait(3000)
        const AM = new AMDetailedContactPage()
        cy.iframe().xpath('/html/body/div[1]/div[2]/div[2]/div/div[2]/div[2]/div[124]/div/button[1]').click()
        AM.EditOfficialEmail(this.data.C1.NewOfficicalEmail)
        AM.ConfirmEdit()
    })

    it('User Deletes the Contact, confirmation asked', () => {
        cy.iframe().xpath('/html/body/div[1]/div[2]/div[2]/div/div[2]/div[2]/div[124]/div/button[2]')
            .click()
        cy.iframe().contains('Are you sure you want to delete?').should('exist')
        // Not working
        // Finding the YES button is giving errors
        // cy.iframe().xpath('/html/body/div[2]/div[3]/div/div[3]/button[2]')
    })
})