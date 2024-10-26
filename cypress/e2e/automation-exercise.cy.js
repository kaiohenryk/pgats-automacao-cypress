import signup from "../pages/signup/index.js";
import menu from "../pages/menu";
import login from "../pages/login";
import contact from "../pages/contact";
import product from "../pages/product";
import home from "../pages/home";
import cart from "../pages/cart";
import checkout from "../pages/checkout";
import payment from "../pages/payment/index.js";

describe('Automation Exercise', () => {

    beforeEach(() => {
        cy.visit('/');
    });

    it('Test Case 1: Register User', () => {

        const timestamp = new Date().getTime();
        const nome = 'Caio QA';
        const email = `tester-${timestamp}@mail.com`;
        const menuCadastroOuLogin = 'Signup / Login';

        menu.irPara(menuCadastroOuLogin);
        login.registrarNovoUsuario(nome, email);
        signup.preencherFormulario();

        cy.get('i.fa-user').parent().should('contain', nome);
    });

    it('Test Case 2: Login User with correct email and password', () => {

        const menuCadastroOuLogin = 'Signup / Login';
        const email = 'caiotester0408QAweb@gmail.com';
        const senha = '12345Testeweb0408';

        menu.irPara(menuCadastroOuLogin);
        login.fazerLogin(email, senha);

        cy.get('i.fa-user').parent().should('contain', 'Caio QA');
        cy.contains(" Delete Account").should("be.visible");
    });

    it('Test Case 3: Login User with incorrect email and password', () => {

        const menuCadastroOuLogin = 'Signup / Login';
        const email = 'trabalhoautomacaoweb@mail.com';
        const senha = 'automacaoweb';

        menu.irPara(menuCadastroOuLogin);
        login.fazerLogin(email, senha);

        cy.url().should('contain', 'login');
        cy.get('.login-form form p').should('contain', 'Your email or password is incorrect!');
    });

    it('Test Case 4: Logout User', () => {

        const menuCadastroOuLogin = 'Signup / Login';
        const email = 'caiotester0408QAweb@gmail.com';
        const senha = '12345Testeweb0408';
        const sair = 'Logout';

        menu.irPara(menuCadastroOuLogin);
        login.fazerLogin(email, senha);
        menu.irPara(sair);

        cy.url().should('contain', 'login');
        cy.contains("Login to your account").should("be.visible");
    });

    it('Test Case 5: Register User with existing email', () => {

        const menuCadastroOuLogin = 'Signup / Login';
        const nome = 'Trabalho Web';
        const email = 'caiotester0408QAweb@gmail.com';

        menu.irPara(menuCadastroOuLogin);
        login.registrarNovoUsuario(nome, email);

        cy.url().should('contain', 'signup');
        cy.get(`.signup-form form p`).should('be.visible').and('contain', 'Email Address already exist!');
    });

    it('Test Case 6: Contact Us Form', () => {

        const menuContateNos = 'Contact us';
        const nome = 'Testar QA';
        const email = 'projetoweb-qa@mail.com';
        const assunto = 'Projeto de automação web';
        const mensagem = 'Praticando automação de testes web';

        menu.irPara(menuContateNos);
        contact.verificarSeEntrarEmContatoEstaVisivel();
        contact.preencherFormulario(nome, email, assunto, mensagem);
        contact.anexarArquivo();
        contact.enviarMensagem();

        cy.url().should('contain', 'contact_us');
        cy.get('.status').should('have.text', 'Success! Your details have been submitted successfully.');
    });

    it('Test Case 8: Verify All Products and product detail page', () => {

        const menuProdutos = 'Products';

        menu.irPara(menuProdutos);
        product.verificarSeEstaNaPaginaDeProdutos();
        product.escolherPrimeiroProdutoDaLista();

        cy.get('.product-information > h2').should('be.visible');
        cy.get('.product-information p').should('be.visible').and('have.length', 4);
        cy.get('.product-information span span').should('be.visible');
    });

    it('Test Case 9: Search Product', () => {

        const menuProdutos = 'Products';
        const nomeDoProduto = 'shirt';

        menu.irPara(menuProdutos);
        product.verificarSeEstaNaPaginaDeProdutos();
        product.pesquisarProduto(nomeDoProduto);

        cy.get('.title').should('be.visible').and('contain', 'Searched Products');
        cy.get('.single-products').should('be.visible').and('have.length.at.least', 1);
    });

    it('Test Case 10: Verify Subscription in home page', () => {

        const email = 'testewebqa@gmail.com';

        home.fazerInscricao(email);

        cy.contains('You have been successfully subscribed!').should('be.visible');
    });

    it('Test Case 15: Place Order: Register before Checkout', () => {

        const timestamp = new Date().getTime();
        const menuCadastroOuLogin = ' Signup / Login';
        const nome = 'Web QA';
        const email = `tester-${timestamp}@mail.com`;
        const comentario = 'Entregar em mãos';
        const nomeNoCartao = 'Tester QA Web';
        const numeroDoCartao = '1234567899876543';
        const cvc = '111';
        const mesDeVencimento = '08';
        const anoDeVencimento = '2028';

        menu.irPara(menuCadastroOuLogin);
        login.registrarNovoUsuario(nome, email);
        signup.preencherFormulario();
        home.verificarUsuarioLogado(nome);
        home.adicionarAoCarrinho();
        home.verCarrinho();
        cart.vefiricarSeEstaNaPaginaDoCarrinhoDeCompras();
        cart.fazerCheckOut();
        checkout.verificarDetalhesDoEndereco();
        checkout.revisarPedido();
        checkout.inserirComentario(comentario);
        checkout.fazerEncomenda();
        payment.inserirDadosDoCartao(nomeNoCartao, numeroDoCartao, cvc, mesDeVencimento, anoDeVencimento);
        payment.PagarEConfirmarPedido();

        cy.get('[data-qa="order-placed"]').should('contain', 'Order Placed!');
        cy.contains('Congratulations! Your order has been confirmed!').should('be.visible');
    });
});