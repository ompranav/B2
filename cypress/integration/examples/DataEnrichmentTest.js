import DataEnrichmentPage from '../../support/PageObject/DataEnrichmentPage'
import ContactManagementPage from '../../support/PageObject/ContactManagementPage'

describe('Data Enrichment tests',function(){
    before('visit website',() =>{
        cy.visit('http://login.bamboobox.in/#/enrichment-queue')
        
    })


    
    it('ListDSP ',() => {
        const CM = new ContactManagementPage ()
        CM.ClickToggle()
        const DE = new DataEnrichmentPage();
        DE.ListDSP()
        cy.contains('Adapt IO').should('exist')
        cy.contains('MOCK API').should('exist')
        
    })

    it('ListDSP ',() => {
        const CM = new ContactManagementPage ()
        CM.ClickToggle()
        const DE = new DataEnrichmentPage();
        
        DE.SelectContact()
        DE.ListDSP()
        cy.contains('MOCK API').click();
        
    })

})
        