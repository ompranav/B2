class AccountManagementPage {

    FillCompanyName(CompanyNameValue) {
       const CompanyNameField = cy.get('.react-autosuggest__input')
       CompanyNameField.type(CompanyNameValue)
       return this

    }

    FillCompanyWebsite(CompanyWebsiteValue) {
        const CompanyWebsiteField = cy.get('.rgt-cell-companyWebsite > .rgt-cell-inner > .rgt-cell-editor-inner > .rgt-cell-editor-input')
        CompanyNameField.type(CompanyWebsiteValue)
        return this
 
     }

     CreateAccount() {
        cy.get('[title="Save"] > svg').click()

     }


}

export default AccountManagementPage