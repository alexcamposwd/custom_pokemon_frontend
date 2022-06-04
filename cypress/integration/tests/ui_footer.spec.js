/* eslint-disable no-undef */
describe('Initial screen usability test', () => {
  it('Verificar elemetos Footer da tela na home', () => {
    cy.visit(Cypress.env("APP_URL"))
    cy.get('[data-cy="copyright"]').should('be.visible')
  })

  it('Check Initial Screen Footer Elements', () => {
    cy.visit(Cypress.env("APP_URL") + '/initial')
    cy.get('[data-cy="copyright"]').should('be.visible')
  })

  it('Check New List Screen Footer Elements', () => {
    cy.visit(Cypress.env("APP_URL") + '/list')
    cy.get('[data-cy="copyright"]').should('be.visible')
  })

  it('Check History Screen Footer Elements', () => {
    cy.visit(Cypress.env("APP_URL") + '/history')
    cy.get('[data-cy="copyright"]').should('be.visible')
  })

  it('Check About Screen Footer Elements', () => {
    cy.visit(Cypress.env("APP_URL") + '/about')
    cy.get('[data-cy="copyright"]').should('be.visible')
  })

  it('Check New Info Screen Footer Elements', () => {
    cy.visit(Cypress.env("APP_URL") + '/pokenew/629604c157d58865a2493a1e')
    cy.get('[data-cy="copyright"]').should('be.visible')
  })

  it('Check New Edit Screen Footer Elements', () => {
    cy.visit(Cypress.env("APP_URL") + '/edit/629604c157d58865a2493a1e')
    cy.get('[data-cy="copyright"]').should('be.visible')
  })

  it('Check New Screen Footer Elements', () => {
    cy.visit(Cypress.env("APP_URL") + '/new')
    cy.get('[data-cy="copyright"]').should('be.visible')
  })
})
