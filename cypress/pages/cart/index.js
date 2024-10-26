class Cart {

    vefiricarSeEstaNaPaginaDoCarrinhoDeCompras() {
        cy.url().should('contain', 'view_cart');
        cy.get('#cart_items').should('be.visible').and('contain', 'Shopping Cart');
    }

    fazerCheckOut() {
        cy.get('.btn-default.check_out').click();
    }
}

export default new Cart();