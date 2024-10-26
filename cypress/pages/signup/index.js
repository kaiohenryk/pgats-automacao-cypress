class Signup {

    preencherFormulario() {
        cy.get('input[type=radio]#id_gender1').check();
        cy.get('[data-qa="password"]').type('12345Testeweb0408', { log: false });
        cy.get('[data-qa="days"]').select('5');
        cy.get('[data-qa="months"]').select('November');
        cy.get('[data-qa="years"]').select('1993');
        cy.get('input[type=checkbox]#newsletter').check();
        cy.get('input[type=checkbox]#optin').check();
        cy.get('[data-qa="first_name"]').type('Cristiano');
        cy.get('[data-qa="last_name"]').type('Ronaldo');
        cy.get('[data-qa="company"]').type('Tigrinho Tabajara');
        cy.get('[data-qa="address"]').type('rua treze, n 14');
        cy.get('[data-qa="country"]').select('United States');
        cy.get('[data-qa="state"]').type('Califórnia');
        cy.get('[data-qa="city"]').type('Los Angeles');
        cy.get('[data-qa="zipcode"]').type('90001');
        cy.get('[data-qa="mobile_number"]').type('111 222 333');
        cy.get('[data-qa="create-account"]').click();
        cy.url().should('includes', 'account_created');
        cy.get('[data-qa="account-created"]').should('be.visible');
        cy.get('[data-qa="continue-button"]').click();
    }
}

export default new Signup()