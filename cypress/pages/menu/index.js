class Menu {

    irPara(menu) {
        cy.contains(menu).click()
    }
}

export default new Menu()