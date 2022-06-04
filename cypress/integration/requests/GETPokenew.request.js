/* eslint-disable no-undef */
// verbo/metodo - endpoint 
/// <reference types="cypress" />

const urlGet = Cypress.env("URL_GET")

function allPokenew() {

  return cy.request({
    method: 'GET',
    url: urlGet,
    headers: {
      'Content-Type': 'application/json'
    },
    failOnStatusCode: false
  })
}

export { allPokenew }