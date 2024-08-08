/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!********************************************************!*\
  !*** ./cypress/e2e/2-advanced-examples/aliasing.cy.js ***!
  \********************************************************/


/// <reference types="cypress" />

context('Aliasing', () => {
  beforeEach(() => {
    cy.visit('https://example.cypress.io/commands/aliasing');
  });
  it('.as() - alias a DOM element for later use', () => {
    // https://on.cypress.io/as

    // Alias a DOM element for use later
    // We don't have to traverse to the element
    // later in our code, we reference it with @

    cy.get('.as-table').find('tbody>tr').first().find('td').first().find('button').as('firstBtn');

    // when we reference the alias, we place an
    // @ in front of its name
    cy.get('@firstBtn').click();
    cy.get('@firstBtn').should('have.class', 'btn-success').and('contain', 'Changed');
  });
  it('.as() - alias a route for later use', () => {
    // Alias the route to wait for its response
    cy.intercept('GET', '**/comments/*').as('getComment');

    // we have code that gets a comment when
    // the button is clicked in scripts.js
    cy.get('.network-btn').click();

    // https://on.cypress.io/wait
    cy.wait('@getComment').its('response.statusCode').should('eq', 200);
  });
});
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxpYXNpbmcuY3kuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7QUFFQUEsT0FBTyxDQUFDLFVBQVUsRUFBRSxNQUFNO0VBQ3hCQyxVQUFVLENBQUMsTUFBTTtJQUNmQyxFQUFFLENBQUNDLEtBQUssQ0FBQyw4Q0FBOEMsQ0FBQztFQUMxRCxDQUFDLENBQUM7RUFFRkMsRUFBRSxDQUFDLDJDQUEyQyxFQUFFLE1BQU07SUFDcEQ7O0lBRUE7SUFDQTtJQUNBOztJQUVBRixFQUFFLENBQUNHLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUNqQ0MsS0FBSyxDQUFDLENBQUMsQ0FBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDQyxLQUFLLENBQUMsQ0FBQyxDQUMxQkQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDRSxFQUFFLENBQUMsVUFBVSxDQUFDOztJQUVoQztJQUNBO0lBQ0FOLEVBQUUsQ0FBQ0csR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDSSxLQUFLLENBQUMsQ0FBQztJQUUzQlAsRUFBRSxDQUFDRyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQ2hCSyxNQUFNLENBQUMsWUFBWSxFQUFFLGFBQWEsQ0FBQyxDQUNuQ0MsR0FBRyxDQUFDLFNBQVMsRUFBRSxTQUFTLENBQUM7RUFDOUIsQ0FBQyxDQUFDO0VBRUZQLEVBQUUsQ0FBQyxxQ0FBcUMsRUFBRSxNQUFNO0lBQzlDO0lBQ0FGLEVBQUUsQ0FBQ1UsU0FBUyxDQUFDLEtBQUssRUFBRSxlQUFlLENBQUMsQ0FBQ0osRUFBRSxDQUFDLFlBQVksQ0FBQzs7SUFFckQ7SUFDQTtJQUNBTixFQUFFLENBQUNHLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQ0ksS0FBSyxDQUFDLENBQUM7O0lBRTlCO0lBQ0FQLEVBQUUsQ0FBQ1csSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDQyxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQ0osTUFBTSxDQUFDLElBQUksRUFBRSxHQUFHLENBQUM7RUFDckUsQ0FBQyxDQUFDO0FBQ0osQ0FBQyxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kb25hY2lvbmVzLy4vY3lwcmVzcy9lMmUvMi1hZHZhbmNlZC1leGFtcGxlcy9hbGlhc2luZy5jeS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSB0eXBlcz1cImN5cHJlc3NcIiAvPlxuXG5jb250ZXh0KCdBbGlhc2luZycsICgpID0+IHtcbiAgYmVmb3JlRWFjaCgoKSA9PiB7XG4gICAgY3kudmlzaXQoJ2h0dHBzOi8vZXhhbXBsZS5jeXByZXNzLmlvL2NvbW1hbmRzL2FsaWFzaW5nJylcbiAgfSlcblxuICBpdCgnLmFzKCkgLSBhbGlhcyBhIERPTSBlbGVtZW50IGZvciBsYXRlciB1c2UnLCAoKSA9PiB7XG4gICAgLy8gaHR0cHM6Ly9vbi5jeXByZXNzLmlvL2FzXG5cbiAgICAvLyBBbGlhcyBhIERPTSBlbGVtZW50IGZvciB1c2UgbGF0ZXJcbiAgICAvLyBXZSBkb24ndCBoYXZlIHRvIHRyYXZlcnNlIHRvIHRoZSBlbGVtZW50XG4gICAgLy8gbGF0ZXIgaW4gb3VyIGNvZGUsIHdlIHJlZmVyZW5jZSBpdCB3aXRoIEBcblxuICAgIGN5LmdldCgnLmFzLXRhYmxlJykuZmluZCgndGJvZHk+dHInKVxuICAgICAgLmZpcnN0KCkuZmluZCgndGQnKS5maXJzdCgpXG4gICAgICAuZmluZCgnYnV0dG9uJykuYXMoJ2ZpcnN0QnRuJylcblxuICAgIC8vIHdoZW4gd2UgcmVmZXJlbmNlIHRoZSBhbGlhcywgd2UgcGxhY2UgYW5cbiAgICAvLyBAIGluIGZyb250IG9mIGl0cyBuYW1lXG4gICAgY3kuZ2V0KCdAZmlyc3RCdG4nKS5jbGljaygpXG5cbiAgICBjeS5nZXQoJ0BmaXJzdEJ0bicpXG4gICAgICAuc2hvdWxkKCdoYXZlLmNsYXNzJywgJ2J0bi1zdWNjZXNzJylcbiAgICAgIC5hbmQoJ2NvbnRhaW4nLCAnQ2hhbmdlZCcpXG4gIH0pXG5cbiAgaXQoJy5hcygpIC0gYWxpYXMgYSByb3V0ZSBmb3IgbGF0ZXIgdXNlJywgKCkgPT4ge1xuICAgIC8vIEFsaWFzIHRoZSByb3V0ZSB0byB3YWl0IGZvciBpdHMgcmVzcG9uc2VcbiAgICBjeS5pbnRlcmNlcHQoJ0dFVCcsICcqKi9jb21tZW50cy8qJykuYXMoJ2dldENvbW1lbnQnKVxuXG4gICAgLy8gd2UgaGF2ZSBjb2RlIHRoYXQgZ2V0cyBhIGNvbW1lbnQgd2hlblxuICAgIC8vIHRoZSBidXR0b24gaXMgY2xpY2tlZCBpbiBzY3JpcHRzLmpzXG4gICAgY3kuZ2V0KCcubmV0d29yay1idG4nKS5jbGljaygpXG5cbiAgICAvLyBodHRwczovL29uLmN5cHJlc3MuaW8vd2FpdFxuICAgIGN5LndhaXQoJ0BnZXRDb21tZW50JykuaXRzKCdyZXNwb25zZS5zdGF0dXNDb2RlJykuc2hvdWxkKCdlcScsIDIwMClcbiAgfSlcbn0pXG4iXSwibmFtZXMiOlsiY29udGV4dCIsImJlZm9yZUVhY2giLCJjeSIsInZpc2l0IiwiaXQiLCJnZXQiLCJmaW5kIiwiZmlyc3QiLCJhcyIsImNsaWNrIiwic2hvdWxkIiwiYW5kIiwiaW50ZXJjZXB0Iiwid2FpdCIsIml0cyJdLCJzb3VyY2VSb290IjoiIn0=