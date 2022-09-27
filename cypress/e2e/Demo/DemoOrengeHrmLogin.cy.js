describe('Demo orange HRM practice',function(){
    it('Login in to orange HRM demo site',function(){
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('[name="username"]').type(Cypress.env('userName'), {log:false})
        cy.get('[name="password"]').type(Cypress.env('password'), {log:false})
        cy.screenshot({capture:'runner'})
        cy.get('button.orangehrm-login-button').click()
        
    })
})