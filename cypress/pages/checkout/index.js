class Checkout {

    verificarDetalhesDoEndereco() {
        cy.get('.heading').first().should('have.text', 'Address Details')
    }

    revisarPedido() {
        cy.get('.heading').last().should('have.text', 'Review Your Order')
    }

    inserirComentario(comentario) {
        cy.get('.form-control').type(comentario)
    }

    fazerEncomenda() {
        cy.get('.btn-default.check_out').click()
    }
}

export default new Checkout();