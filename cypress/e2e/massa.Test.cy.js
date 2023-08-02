///<reference types="cypress" />

describe('Dados de cadastro', () => {
    it('Deve preencher o campo', () => {
        cy.visit('https://buger-eats.vercel.app/deliver')

        //Massa de teste para preenchimento de dados
        cy.get('input[name="name"]').type('João Batista da silva')
        cy.get('input[name="cpf"]').type('99122536043')
        cy.get('input[name="email"]').type('joao.silva@example.com')
        cy.get('input[name="whatsapp"]').type('777855000')

        //Massa de teste para preenchimento de endereço
        cy.get('input[name="postalcode"]').type('65062-617')
        cy.get('input[value="Buscar CEP"]').click()
        cy.get('input[name="address-number"]').type('321')
        cy.get('input[name="address-details"]').type('Casa 221')
        cy.get('ul>li').eq(0).click()
        cy.get('input[type=file]').selectFile('hbManoel.jpg', {force:true})
        cy.get('.button-success').click() 
        cy.get('.swal2-confirm').click()
    })
})
