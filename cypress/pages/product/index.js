class Product {

    verificarSeEstaNaPaginaDeProdutos() {
        cy.url().should('contain', 'products');
        cy.get('.title').should('be.visible').and('contain', 'All Products');
    }

    verificarSeListaDeProdutosEstaVisivel() {
        return cy.get('.single-products').should('be.visible').and('have.length.at.least', 1);
    }

    escolherPrimeiroProdutoDaLista() {
        this.verificarSeListaDeProdutosEstaVisivel().first()
            .parent()
            .contains('View Product')
            .click();
    }

    pesquisarProduto(nomeDoProduto) {
        cy.get('input#search_product').type(nomeDoProduto);
        cy.get('button#submit_search').click();
    }
}

export default new Product();