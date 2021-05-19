class AccountManagementPage {

    FillCompanyName(CompanyNameValue) {
       cy.get('.react-autosuggest__input')
       .type(CompanyNameValue)
      //return this
    }

    FillCompanyWebsite(CompanyWebsiteValue) {
        cy.get('.rgt-cell-companyWebsite > .rgt-cell-inner > .rgt-cell-editor-inner > .rgt-cell-editor-input')
         .type(CompanyWebsiteValue)
      //return this 
     }

     CreateAccount() {
        cy.get('[title="Save"] > svg').click()
     }

     ClearInput(){
      cy.get('.react-autosuggest__input').clear()
      cy.get('.rgt-cell-companyWebsite > .rgt-cell-inner > .rgt-cell-editor-inner > .rgt-cell-editor-input').clear()
     }
}

export default AccountManagementPage