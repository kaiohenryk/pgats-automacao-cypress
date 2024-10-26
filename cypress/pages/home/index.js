class Home {

    fazerInscricao(email) {
        cy.get('input#susbscribe_email').scrollIntoView().type(email);
        cy.get('button#subscribe').click();
    }

    adicionarAoCarrinho() {
        cy.contains("Add to cart").click()
    }

    verCarrinho() {
        cy.contains("View Cart").click()
    }

    verificarUsuarioLogado(nome) {
        cy.get('i.fa-user').parent().should('contain', nome);
    }
}

export default new Home();