class AHAccountViewPage {

   view(){
      cy.contains('Account Hub').click().then(()=>{
         cy.contains('Unified Account Profile').should('exist')
         cy.contains('Account List view').should('exist')
      })
      cy.contains('Unified Account Profile').click().then(()=>{
         cy.url().should('equal','http://login.bamboobox.in/#/unified-account-profile')
      })
   }
}

export default AHAccountViewPage