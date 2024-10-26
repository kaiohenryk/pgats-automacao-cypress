class Contact {

    verificarSeEntrarEmContatoEstaVisivel() {
        cy.get(`.contact-form h2`).should('be.visible').and('have.text', 'Get In Touch')
    }

    preencherFormulario(nome, email, assunto, mensagem) {
        cy.get('[data-qa="name"]').type(nome);
        cy.get('[data-qa="email"]').type(email);
        cy.get('[data-qa="subject"]').type(assunto);
        cy.get('[data-qa="message"]').type(mensagem);
    };

    anexarArquivo() {
        cy.fixture('contactus.png').as('arquivo');
        cy.get('input[name="upload_file"]').selectFile('@arquivo');
    };

    enviarMensagem() {
        cy.get('[data-qa="submit-button"]').click()
    }
}

export default new Contact()