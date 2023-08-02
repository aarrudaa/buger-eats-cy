///<reference types="cypress" />

describe('home', () => {
  it('Site deve estar online', () => {
    cy.visit('https://buger-eats.vercel.app')
    /*Validando o título do header no inspector em elements para uma 
    garantia de que o site está de fato, online*/
    cy.title().should('eq', 'Buger Eats')
  })
})