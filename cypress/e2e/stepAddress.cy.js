///<reference types="cypress" />

describe('Endereço visivel', () => {
    it('Validação do header', () => {
        cy.visit('https://buger-eats.vercel.app/deliver')

        cy.contains('Endereço')
    })
})

describe('Campos', () => {
    it('Placeholder CEP', () => {
        cy.visit('https://buger-eats.vercel.app/deliver')

        cy.get('input[placeholder*="CEP"')
    })
})

describe('Campos', () => {
    it('Placeholder número', () => {
        cy.visit('https://buger-eats.vercel.app/deliver')

        cy.get('input[placeholder*="Número"')
    })
})

describe('Campos', () => {
    it('Placeholder complemento', () => {
        cy.visit('https://buger-eats.vercel.app/deliver')

        cy.get('input[placeholder*="Complemento"')
    })
})

describe('Campos', () => {
    it('Placeholder bairro', () => {
        cy.visit('https://buger-eats.vercel.app/deliver')

        cy.get('input[placeholder*="Bairro"')
    })
})

describe('Campos', () => {
    it('Placeholder cidade/UF', () => {
        cy.visit('https://buger-eats.vercel.app/deliver')

        cy.get('input[placeholder*="Cidade/UF"')
    })
})

describe('Botão', () => {
    it('Validando busca de CEP', () => {
        cy.visit('https://buger-eats.vercel.app/deliver')

        cy.get('input[value="Buscar CEP"]').should('be.visible')
    })
})
