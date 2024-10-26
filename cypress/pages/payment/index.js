class Payment {

    inserirDadosDoCartao(nomeNoCartao, numeroDoCartao, cvc, mesDeVencimento, anoDeVencimento) {
        cy.get('[data-qa="name-on-card"]').type(nomeNoCartao)
        cy.get('[data-qa="card-number"]').type(numeroDoCartao)
        cy.get('[data-qa="cvc"]').type(cvc)
        cy.get('[data-qa="expiry-month"]').type(mesDeVencimento)
        cy.get('[data-qa="expiry-year"]').type(anoDeVencimento)
    }

    PagarEConfirmarPedido() {
        cy.get('[data-qa="pay-button"]').click()
    }
}

export default new Payment();