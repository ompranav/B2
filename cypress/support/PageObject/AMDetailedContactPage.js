class AMDetailedContactPage{

    FillFirstName(FirstNameValue) {
        cy.iframe().xpath('/html/body/div[1]/div[2]/div[2]/div/div[2]/div[2]/div[64]')
        .type(FirstNameValue)
    }
    FillLastName(LastNameValue) {
        cy.iframe().xpath('/html/body/div[1]/div[2]/div[2]/div/div[2]/div[2]/div[65]')
        .type(LastNameValue)
    }
    FillOfficialEmail(OfficialEmailValue) {
        cy.iframe().xpath('/html/body/div[1]/div[2]/div[2]/div/div[2]/div[2]/div[66]')
        .type(OfficialEmailValue)
    }
    EditOfficialEmail(NewEmailValue){
        cy.iframe().xpath('/html/body/div/div[2]/div[2]/div/div[2]/div[2]/div[97]')
        .clear()
        .type(NewEmailValue)
    }
    FillLinkedInURL(LinkedInURLValue) {
        cy.iframe().xpath('/html/body/div[1]/div[2]/div[2]/div/div[2]/div[2]/div[76]')
        .type(LinkedInURLValue)
    }
    Confirm(){
        cy.iframe().xpath('/html/body/div[1]/div[2]/div[2]/div/div[2]/div[2]/div[93]/div/button[2]').click()
    }
    ConfirmEdit(){
        cy.iframe().xpath('/html/body/div/div[2]/div[2]/div/div[2]/div[2]/div[124]/div/button[1]').click()
    }
    Delete(){

    }
}

export default AMDetailedContactPage