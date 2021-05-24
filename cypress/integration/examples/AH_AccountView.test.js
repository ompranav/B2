import AHAccountViewPage from '../../support/PageObject/AHAccountViewPage'

describe('Account Hub tests',function(){
    before('visit website',() =>{
        cy.visit('http://login.bamboobox.in/#/home')
    })

    it('Account Hub view test',() => {
        const AV = new AHAccountViewPage()
        AV.view()
    })
 
})