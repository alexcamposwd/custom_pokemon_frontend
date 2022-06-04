/* eslint-disable no-undef */
// verbo/metodo - endpoint 
/// <reference types="cypress" />

const urlDel = Cypress.env("URL_DEL")

function delPokenew(id) {
  return cy.request({
    method: 'DELETE',
    url: urlDel + id,
    headers: {
      'Content-Type': 'application/json'
    },
    failOnStatusCode: false
  })
}

export { delPokenew }