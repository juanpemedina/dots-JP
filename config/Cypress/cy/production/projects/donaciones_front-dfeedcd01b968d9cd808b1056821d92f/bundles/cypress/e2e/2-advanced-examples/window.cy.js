/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!******************************************************!*\
  !*** ./cypress/e2e/2-advanced-examples/window.cy.js ***!
  \******************************************************/


/// <reference types="cypress" />

context('Window', () => {
  beforeEach(() => {
    cy.visit('https://example.cypress.io/commands/window');
  });
  it('cy.window() - get the global window object', () => {
    // https://on.cypress.io/window
    cy.window().should('have.property', 'top');
  });
  it('cy.document() - get the document object', () => {
    // https://on.cypress.io/document
    cy.document().should('have.property', 'charset').and('eq', 'UTF-8');
  });
  it('cy.title() - get the title', () => {
    // https://on.cypress.io/title
    cy.title().should('include', 'Kitchen Sink');
  });
});
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2luZG93LmN5LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7O0FBRUFBLE9BQU8sQ0FBQyxRQUFRLEVBQUUsTUFBTTtFQUN0QkMsVUFBVSxDQUFDLE1BQU07SUFDZkMsRUFBRSxDQUFDQyxLQUFLLENBQUMsNENBQTRDLENBQUM7RUFDeEQsQ0FBQyxDQUFDO0VBRUZDLEVBQUUsQ0FBQyw0Q0FBNEMsRUFBRSxNQUFNO0lBQ3JEO0lBQ0FGLEVBQUUsQ0FBQ0csTUFBTSxDQUFDLENBQUMsQ0FBQ0MsTUFBTSxDQUFDLGVBQWUsRUFBRSxLQUFLLENBQUM7RUFDNUMsQ0FBQyxDQUFDO0VBRUZGLEVBQUUsQ0FBQyx5Q0FBeUMsRUFBRSxNQUFNO0lBQ2xEO0lBQ0FGLEVBQUUsQ0FBQ0ssUUFBUSxDQUFDLENBQUMsQ0FBQ0QsTUFBTSxDQUFDLGVBQWUsRUFBRSxTQUFTLENBQUMsQ0FBQ0UsR0FBRyxDQUFDLElBQUksRUFBRSxPQUFPLENBQUM7RUFDckUsQ0FBQyxDQUFDO0VBRUZKLEVBQUUsQ0FBQyw0QkFBNEIsRUFBRSxNQUFNO0lBQ3JDO0lBQ0FGLEVBQUUsQ0FBQ08sS0FBSyxDQUFDLENBQUMsQ0FBQ0gsTUFBTSxDQUFDLFNBQVMsRUFBRSxjQUFjLENBQUM7RUFDOUMsQ0FBQyxDQUFDO0FBQ0osQ0FBQyxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kb25hY2lvbmVzLy4vY3lwcmVzcy9lMmUvMi1hZHZhbmNlZC1leGFtcGxlcy93aW5kb3cuY3kuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgdHlwZXM9XCJjeXByZXNzXCIgLz5cblxuY29udGV4dCgnV2luZG93JywgKCkgPT4ge1xuICBiZWZvcmVFYWNoKCgpID0+IHtcbiAgICBjeS52aXNpdCgnaHR0cHM6Ly9leGFtcGxlLmN5cHJlc3MuaW8vY29tbWFuZHMvd2luZG93JylcbiAgfSlcblxuICBpdCgnY3kud2luZG93KCkgLSBnZXQgdGhlIGdsb2JhbCB3aW5kb3cgb2JqZWN0JywgKCkgPT4ge1xuICAgIC8vIGh0dHBzOi8vb24uY3lwcmVzcy5pby93aW5kb3dcbiAgICBjeS53aW5kb3coKS5zaG91bGQoJ2hhdmUucHJvcGVydHknLCAndG9wJylcbiAgfSlcblxuICBpdCgnY3kuZG9jdW1lbnQoKSAtIGdldCB0aGUgZG9jdW1lbnQgb2JqZWN0JywgKCkgPT4ge1xuICAgIC8vIGh0dHBzOi8vb24uY3lwcmVzcy5pby9kb2N1bWVudFxuICAgIGN5LmRvY3VtZW50KCkuc2hvdWxkKCdoYXZlLnByb3BlcnR5JywgJ2NoYXJzZXQnKS5hbmQoJ2VxJywgJ1VURi04JylcbiAgfSlcblxuICBpdCgnY3kudGl0bGUoKSAtIGdldCB0aGUgdGl0bGUnLCAoKSA9PiB7XG4gICAgLy8gaHR0cHM6Ly9vbi5jeXByZXNzLmlvL3RpdGxlXG4gICAgY3kudGl0bGUoKS5zaG91bGQoJ2luY2x1ZGUnLCAnS2l0Y2hlbiBTaW5rJylcbiAgfSlcbn0pXG4iXSwibmFtZXMiOlsiY29udGV4dCIsImJlZm9yZUVhY2giLCJjeSIsInZpc2l0IiwiaXQiLCJ3aW5kb3ciLCJzaG91bGQiLCJkb2N1bWVudCIsImFuZCIsInRpdGxlIl0sInNvdXJjZVJvb3QiOiIifQ==