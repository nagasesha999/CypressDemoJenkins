
describe('test demo automation', function () {
    it('Demo automation register', function () {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.visit('https://demo.automationtesting.in/Register.html')
        cy.get('[ng-model="FirstName"]').type(Cypress.env('firstName'))
        cy.get('[ng-model="LastName"]').type(Cypress.env('lastName'))

        cy.log(Cypress.env('firstName'))
        cy.log(Cypress.env('lastName'))
        cy.screenshot({capture:'runner'})
    })
})