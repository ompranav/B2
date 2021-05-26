class ContactManagementPage {

    ClickToggle() {
        cy.get('.jss6').click()
    }

    FillCompanyWebsite(CompanyWebsiteValue) {
        cy.get('[data-row-index="1"]').siblings('div.rgt-cell.rgt-row-1.rgt-row-odd.rgt-row-edit.rgt-cell-companyWebsite.rgt-row-selectable').type(CompanyWebsiteValue)
    }

    FillCompanyName(CompanyNameValue) {
        cy.get('[data-row-index="1"]').siblings('div.rgt-cell.rgt-row-1.rgt-row-odd.rgt-row-edit.rgt-cell-companyName.rgt-row-selectable').type(CompanyNameValue)
    }

    FillFirstName(FitrstNameValue) {
        cy.get('[data-row-index="1"]').siblings('div.rgt-cell.rgt-row-1.rgt-row-odd.rgt-row-edit.rgt-cell-contactFirstName.rgt-row-selectable').type(FitrstNameValue)
    }

    FillLastName(LastNameValue) {
        cy.get('[data-row-index="1"]').siblings('div.rgt-cell.rgt-row-1.rgt-row-odd.rgt-row-edit.rgt-cell-contactLastName.rgt-row-selectable').type(LastNameValue)
    }

    FillOfficialEmail(OfficialEmailValue) {
        cy.get('[data-row-index="1"]').siblings('div.rgt-cell.rgt-row-1.rgt-row-odd.rgt-row-edit.rgt-cell-contactEmail.rgt-row-selectable').type(OfficialEmailValue)
    }

    FillLinkedinURL(LinkedinURLValue) {
        cy.get('[data-row-index="1"]').siblings('div.rgt-cell.rgt-row-1.rgt-row-odd.rgt-row-edit.rgt-cell-contactLinkedin.rgt-row-selectable').type(LinkedinURLValue)
    }

    CreateContact() {
        cy.get('[title="Save"] > svg').click()
    }

    Save() {
        cy.get('[title="Save"] > svg').click()
    }
    Edit() {
        cy.get('[title="Edit"] > svg').click()
    }
    
    ClearInput(){
        cy.wait(1000)
        cy.get('[data-row-index="1"]').siblings('div.rgt-cell.rgt-row-1.rgt-row-odd.rgt-row-edit.rgt-cell-contactFirstName.rgt-row-selectable')
            .clear()
        cy.wait(1000)
        cy.get('[data-row-index="1"]').siblings('div.rgt-cell.rgt-row-1.rgt-row-odd.rgt-row-edit.rgt-cell-contactLastName.rgt-row-selectable')
            .clear()
        cy.wait(1000)
        cy.get('[data-row-index="1"]').siblings('div.rgt-cell.rgt-row-1.rgt-row-odd.rgt-row-edit.rgt-cell-contactEmail.rgt-row-selectable')
            .clear()
        cy.wait(1000)
        cy.get('[data-row-index="1"]').siblings('div.rgt-cell.rgt-row-1.rgt-row-odd.rgt-row-edit.rgt-cell-contactLinkedin.rgt-row-selectable')
            .clear()
        cy.wait(1000)
        cy.get('[data-row-index="1"]').siblings('div.rgt-cell.rgt-row-1.rgt-row-odd.rgt-row-edit.rgt-cell-companyWebsite.rgt-row-selectable')
                .clear()
        cy.wait(1000)
        cy.get('[data-row-index="1"]').siblings('div.rgt-cell.rgt-row-1.rgt-row-odd.rgt-row-edit.rgt-cell-companyName.rgt-row-selectable')
                .clear()
        
    }

}

export default ContactManagementPage