class DataEnrichmentPage {

    ListDSP() {
        cy.get('body').click()

    }

    SelectContact() {
        cy.get('.rgt-clickable').click()

    }



}

export default DataEnrichmentPage