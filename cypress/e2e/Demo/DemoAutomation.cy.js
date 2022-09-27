
describe('test demo automation', function () {
    it('Demo automation register', function () {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.visit('https://demo.automationtesting.in/Register.html')
        cy.get('[ng-model="FirstName"]').type(Cypress.env('userName'), {log: false})
        cy.get('[ng-model="LastName"]').type(Cypress.env('password'), {log: false})

        cy.log(Cypress.env('firstName'))
        cy.log(Cypress.env('lastName'))
        cy.log(Cypress.env('userName'))
        cy.log(Cypress.env('password'))
        cy.screenshot({capture:'runner'})
    })
})