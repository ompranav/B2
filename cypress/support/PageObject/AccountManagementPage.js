class AccountManagementPage {

   FillCompanyName(CompanyNameValue) {
      cy.get('.react-autosuggest__input')
        .type(CompanyNameValue)
   }

   FillCompanyWebsite(CompanyWebsiteValue) {
      cy.get('.rgt-cell-companyWebsite > .rgt-cell-inner > .rgt-cell-editor-inner > .rgt-cell-editor-input')
        .type(CompanyWebsiteValue)
   }

   CreateAccount() {
      cy.get('[title="Save"] > svg').click()
   }
   
   verify(companyName){
      cy.contains('has been added/edited successfully!')
      cy.contains(companyName).should('exist')
   }
   
   ClearInput(){
      cy.get('.react-autosuggest__input').clear()
      cy.get('.rgt-cell-companyWebsite > .rgt-cell-inner > .rgt-cell-editor-inner > .rgt-cell-editor-input').clear()
   }
}

export default AccountManagementPage