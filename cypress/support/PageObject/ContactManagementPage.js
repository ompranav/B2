class ContactManagementPage {

    ClickToggle() {
        cy.get('.jss6').click()
    }

    FillCompanyWebsite(CompanyWebsiteValue) {
        cy.get('.rgt-cell-companyWebsite').type(CompanyWebsiteValue)
    }

    FillCompanyName(CompanyNameValue) {
        cy.get('.rgt-cell-companyName > .rgt-cell-inner > .rgt-cell-editor-inner > .rgt-cell-editor-input').type(CompanyNameValue)
    }

    FillFirstName(FitrstNameValue) {
        cy.get('.rgt-cell-contactFirstName').type(FitrstNameValue)
    }

    FillLastName(LastNameValue) {
        cy.get('.rgt-cell-contactLastName > .rgt-cell-inner > .rgt-cell-editor-inner > .rgt-cell-editor-input').type(LastNameValue)
    }

    FillOfficialEmail(OfficialEmailValue) {
        cy.get('.rgt-cell-contactEmail').type(OfficialEmailValue)
    }

    FillLinkedinURL(LinkedinURLValue) {
        cy.get('.rgt-cell-contactLinkedin').type(LinkedinURLValue)
    }

    CreateContact() {
        cy.get('[title="Save"] > svg').click()
    }

    

}

export default ContactManagementPage