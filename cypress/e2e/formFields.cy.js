///<reference types="cypress" />

describe('Campos', () => {
    it('Botão de cadastro', () => {
        cy.visit('https://buger-eats.vercel.app')

        cy.get('strong')
        cy.get('a').click()
    })

    describe('Validando página de cadastro', () => {
        it('Acesso ao cadastro', () => {
            cy.visit('https://buger-eats.vercel.app')

            /*Validando se a página de cadastro está de fato, na
            página correta! Validando com o header "Dados"*/
            cy.get('strong').should('have.text', 'Cadastre-se para fazer entregas')
            cy.get('a').click()
            cy.get('form')

        })

        describe('Validação de campos', () => {
            it('Campo nome', () => {
                cy.visit('https://buger-eats.vercel.app/deliver')

            cy.get('input[placeholder*="Nome completo"]')
                    .should('be.visible')
            })
        })

        describe('Validação de campos', () => {
            it('Campo CPF', () => {
                cy.visit('https://buger-eats.vercel.app/deliver')

                cy.get('input[placeholder*="CPF somente números"]')
                    .should('be.visible')
            })
        })

        describe('Validação de campos', () => {
            it('Campo Email', () => {
                cy.visit('https://buger-eats.vercel.app/deliver')

                cy.get('input[placeholder*="E-mail"]')
                    .should('be.visible')
            })
        })

        describe('Validação de campos', () => {
            it('Campo Whatsapp', () => {
                cy.visit('https://buger-eats.vercel.app/deliver')

                cy.get('input[placeholder*="Whatsapp"]')
                    .should('be.visible')
            })
        })
    })
})
