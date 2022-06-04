/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */

describe('API Testing Pokeapi.co', () => {  

  const UrlPokeapi = Cypress.env("URL_POKEAPI")

  beforeEach(() => {
    cy.request(UrlPokeapi).as('bulbasaur');
  });

  it('check connection and request', () => {
    cy.get('@bulbasaur')
      .its('body')
      .should('include', { name: 'bulbasaur' })
      .should('not.include', { name: 'pikachu' });
  });
});

describe('API Testing Pokenew api', () => {  

  const UrlPokenew = Cypress.env("URL_POKENEW")

  beforeEach(() => {
    cy.request(UrlPokenew).as('pokenew');
  });

  it('check connection and request', () => {
    cy.get('@pokenew').then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.be.not.null
      expect(JSON.stringify(response.body[0].name)).to.eq('"Mega Rampardos"')
    })
  });
});