///<reference types="cypress" />

describe('Validando página', () => {
    it('Acessando página de cadastro', () => {
        cy.visit('https://buger-eats.vercel.app/')

        cy.get('strong')
        cy.get('a').click()
        cy.get('form')
    })
})

describe('Validando campos', () => {
    it('Verificando campos', () => {
        cy.visit('https://buger-eats.vercel.app/deliver')

        cy.get('input[placeholder*="Nome completo"]')
        cy.get('input[placeholder*="CPF somente números"]')
        cy.get('input[placeholder*="E-mail"]')
        cy.get('input[placeholder*="Whatsapp"]')

        cy.get('input[placeholder*="CEP"')
        cy.get('input[placeholder*="Número"')
        cy.get('input[placeholder*="Complemento"')
        cy.get('input[placeholder*="Bairro"')
        cy.get('input[placeholder*="Cidade/UF"')
        cy.get('ul>li').eq(0)
        cy.get('.dropzone')
        cy.get('p')
    })
})

describe('Validando mensagem de erro', () => {
    it('Mensagem de erro', () => {
        cy.visit('https://buger-eats.vercel.app/deliver')

        cy.get('.button-success').click()
        //Buscando tag pela classe e a sua posição usando .eq (usar .eq quando
        //tiver N tags usando a mesma classe)
        cy.get('.alert-error').eq(0).should('have.text',
            'É necessário informar o nome')
        cy.get('.alert-error').eq(1).should('have.text',
            'É necessário informar o CPF')
        cy.get('.alert-error').eq(2).should('have.text', 
            'É necessário informar o email')
        cy.get('.alert-error').eq(3).should('have.text', 
            'É necessário informar o CEP')
        cy.get('.alert-error').eq(4).should('have.text', 
            'É necessário informar o número do endereço')
        cy.get('.alert-error').eq(5).should('have.text', 
            'Selecione o método de entrega')
        cy.get('.alert-error').eq(6).should('have.text', 
            'Adicione uma foto da sua CNH')
    })
})
