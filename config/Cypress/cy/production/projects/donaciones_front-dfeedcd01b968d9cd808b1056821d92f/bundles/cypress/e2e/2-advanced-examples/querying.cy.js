/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!********************************************************!*\
  !*** ./cypress/e2e/2-advanced-examples/querying.cy.js ***!
  \********************************************************/


/// <reference types="cypress" />

context('Querying', () => {
  beforeEach(() => {
    cy.visit('https://example.cypress.io/commands/querying');
  });

  // The most commonly used query is 'cy.get()', you can
  // think of this like the '$' in jQuery

  it('cy.get() - query DOM elements', () => {
    // https://on.cypress.io/get

    cy.get('#query-btn').should('contain', 'Button');
    cy.get('.query-btn').should('contain', 'Button');
    cy.get('#querying .well>button:first').should('contain', 'Button');
    //              ↲
    // Use CSS selectors just like jQuery

    cy.get('[data-test-id="test-example"]').should('have.class', 'example');

    // 'cy.get()' yields jQuery object, you can get its attribute
    // by invoking `.attr()` method
    cy.get('[data-test-id="test-example"]').invoke('attr', 'data-test-id').should('equal', 'test-example');

    // or you can get element's CSS property
    cy.get('[data-test-id="test-example"]').invoke('css', 'position').should('equal', 'static');

    // or use assertions directly during 'cy.get()'
    // https://on.cypress.io/assertions
    cy.get('[data-test-id="test-example"]').should('have.attr', 'data-test-id', 'test-example').and('have.css', 'position', 'static');
  });
  it('cy.contains() - query DOM elements with matching content', () => {
    // https://on.cypress.io/contains
    cy.get('.query-list').contains('bananas').should('have.class', 'third');

    // we can pass a regexp to `.contains()`
    cy.get('.query-list').contains(/^b\w+/).should('have.class', 'third');
    cy.get('.query-list').contains('apples').should('have.class', 'first');

    // passing a selector to contains will
    // yield the selector containing the text
    cy.get('#querying').contains('ul', 'oranges').should('have.class', 'query-list');
    cy.get('.query-button').contains('Save Form').should('have.class', 'btn');
  });
  it('.within() - query DOM elements within a specific element', () => {
    // https://on.cypress.io/within
    cy.get('.query-form').within(() => {
      cy.get('input:first').should('have.attr', 'placeholder', 'Email');
      cy.get('input:last').should('have.attr', 'placeholder', 'Password');
    });
  });
  it('cy.root() - query the root DOM element', () => {
    // https://on.cypress.io/root

    // By default, root is the document
    cy.root().should('match', 'html');
    cy.get('.query-ul').within(() => {
      // In this within, the root is now the ul DOM element
      cy.root().should('have.class', 'query-ul');
    });
  });
  it('best practices - selecting elements', () => {
    // https://on.cypress.io/best-practices#Selecting-Elements
    cy.get('[data-cy=best-practices-selecting-elements]').within(() => {
      // Worst - too generic, no context
      cy.get('button').click();

      // Bad. Coupled to styling. Highly subject to change.
      cy.get('.btn.btn-large').click();

      // Average. Coupled to the `name` attribute which has HTML semantics.
      cy.get('[name=submission]').click();

      // Better. But still coupled to styling or JS event listeners.
      cy.get('#main').click();

      // Slightly better. Uses an ID but also ensures the element
      // has an ARIA role attribute
      cy.get('#main[role=button]').click();

      // Much better. But still coupled to text content that may change.
      cy.contains('Submit').click();

      // Best. Insulated from all changes.
      cy.get('[data-cy=submit]').click();
    });
  });
});
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDSixDQUFDLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL2RvbmFjaW9uZXMvLi9jeXByZXNzL2UyZS8yLWFkdmFuY2VkLWV4YW1wbGVzL3F1ZXJ5aW5nLmN5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHR5cGVzPVwiY3lwcmVzc1wiIC8+XG5cbmNvbnRleHQoJ1F1ZXJ5aW5nJywgKCkgPT4ge1xuICBiZWZvcmVFYWNoKCgpID0+IHtcbiAgICBjeS52aXNpdCgnaHR0cHM6Ly9leGFtcGxlLmN5cHJlc3MuaW8vY29tbWFuZHMvcXVlcnlpbmcnKVxuICB9KVxuXG4gIC8vIFRoZSBtb3N0IGNvbW1vbmx5IHVzZWQgcXVlcnkgaXMgJ2N5LmdldCgpJywgeW91IGNhblxuICAvLyB0aGluayBvZiB0aGlzIGxpa2UgdGhlICckJyBpbiBqUXVlcnlcblxuICBpdCgnY3kuZ2V0KCkgLSBxdWVyeSBET00gZWxlbWVudHMnLCAoKSA9PiB7XG4gICAgLy8gaHR0cHM6Ly9vbi5jeXByZXNzLmlvL2dldFxuXG4gICAgY3kuZ2V0KCcjcXVlcnktYnRuJykuc2hvdWxkKCdjb250YWluJywgJ0J1dHRvbicpXG5cbiAgICBjeS5nZXQoJy5xdWVyeS1idG4nKS5zaG91bGQoJ2NvbnRhaW4nLCAnQnV0dG9uJylcblxuICAgIGN5LmdldCgnI3F1ZXJ5aW5nIC53ZWxsPmJ1dHRvbjpmaXJzdCcpLnNob3VsZCgnY29udGFpbicsICdCdXR0b24nKVxuICAgIC8vICAgICAgICAgICAgICDihrJcbiAgICAvLyBVc2UgQ1NTIHNlbGVjdG9ycyBqdXN0IGxpa2UgalF1ZXJ5XG5cbiAgICBjeS5nZXQoJ1tkYXRhLXRlc3QtaWQ9XCJ0ZXN0LWV4YW1wbGVcIl0nKS5zaG91bGQoJ2hhdmUuY2xhc3MnLCAnZXhhbXBsZScpXG5cbiAgICAvLyAnY3kuZ2V0KCknIHlpZWxkcyBqUXVlcnkgb2JqZWN0LCB5b3UgY2FuIGdldCBpdHMgYXR0cmlidXRlXG4gICAgLy8gYnkgaW52b2tpbmcgYC5hdHRyKClgIG1ldGhvZFxuICAgIGN5LmdldCgnW2RhdGEtdGVzdC1pZD1cInRlc3QtZXhhbXBsZVwiXScpXG4gICAgICAuaW52b2tlKCdhdHRyJywgJ2RhdGEtdGVzdC1pZCcpXG4gICAgICAuc2hvdWxkKCdlcXVhbCcsICd0ZXN0LWV4YW1wbGUnKVxuXG4gICAgLy8gb3IgeW91IGNhbiBnZXQgZWxlbWVudCdzIENTUyBwcm9wZXJ0eVxuICAgIGN5LmdldCgnW2RhdGEtdGVzdC1pZD1cInRlc3QtZXhhbXBsZVwiXScpXG4gICAgICAuaW52b2tlKCdjc3MnLCAncG9zaXRpb24nKVxuICAgICAgLnNob3VsZCgnZXF1YWwnLCAnc3RhdGljJylcblxuICAgIC8vIG9yIHVzZSBhc3NlcnRpb25zIGRpcmVjdGx5IGR1cmluZyAnY3kuZ2V0KCknXG4gICAgLy8gaHR0cHM6Ly9vbi5jeXByZXNzLmlvL2Fzc2VydGlvbnNcbiAgICBjeS5nZXQoJ1tkYXRhLXRlc3QtaWQ9XCJ0ZXN0LWV4YW1wbGVcIl0nKVxuICAgICAgLnNob3VsZCgnaGF2ZS5hdHRyJywgJ2RhdGEtdGVzdC1pZCcsICd0ZXN0LWV4YW1wbGUnKVxuICAgICAgLmFuZCgnaGF2ZS5jc3MnLCAncG9zaXRpb24nLCAnc3RhdGljJylcbiAgfSlcblxuICBpdCgnY3kuY29udGFpbnMoKSAtIHF1ZXJ5IERPTSBlbGVtZW50cyB3aXRoIG1hdGNoaW5nIGNvbnRlbnQnLCAoKSA9PiB7XG4gICAgLy8gaHR0cHM6Ly9vbi5jeXByZXNzLmlvL2NvbnRhaW5zXG4gICAgY3kuZ2V0KCcucXVlcnktbGlzdCcpXG4gICAgICAuY29udGFpbnMoJ2JhbmFuYXMnKVxuICAgICAgLnNob3VsZCgnaGF2ZS5jbGFzcycsICd0aGlyZCcpXG5cbiAgICAvLyB3ZSBjYW4gcGFzcyBhIHJlZ2V4cCB0byBgLmNvbnRhaW5zKClgXG4gICAgY3kuZ2V0KCcucXVlcnktbGlzdCcpXG4gICAgICAuY29udGFpbnMoL15iXFx3Ky8pXG4gICAgICAuc2hvdWxkKCdoYXZlLmNsYXNzJywgJ3RoaXJkJylcblxuICAgIGN5LmdldCgnLnF1ZXJ5LWxpc3QnKVxuICAgICAgLmNvbnRhaW5zKCdhcHBsZXMnKVxuICAgICAgLnNob3VsZCgnaGF2ZS5jbGFzcycsICdmaXJzdCcpXG5cbiAgICAvLyBwYXNzaW5nIGEgc2VsZWN0b3IgdG8gY29udGFpbnMgd2lsbFxuICAgIC8vIHlpZWxkIHRoZSBzZWxlY3RvciBjb250YWluaW5nIHRoZSB0ZXh0XG4gICAgY3kuZ2V0KCcjcXVlcnlpbmcnKVxuICAgICAgLmNvbnRhaW5zKCd1bCcsICdvcmFuZ2VzJylcbiAgICAgIC5zaG91bGQoJ2hhdmUuY2xhc3MnLCAncXVlcnktbGlzdCcpXG5cbiAgICBjeS5nZXQoJy5xdWVyeS1idXR0b24nKVxuICAgICAgLmNvbnRhaW5zKCdTYXZlIEZvcm0nKVxuICAgICAgLnNob3VsZCgnaGF2ZS5jbGFzcycsICdidG4nKVxuICB9KVxuXG4gIGl0KCcud2l0aGluKCkgLSBxdWVyeSBET00gZWxlbWVudHMgd2l0aGluIGEgc3BlY2lmaWMgZWxlbWVudCcsICgpID0+IHtcbiAgICAvLyBodHRwczovL29uLmN5cHJlc3MuaW8vd2l0aGluXG4gICAgY3kuZ2V0KCcucXVlcnktZm9ybScpLndpdGhpbigoKSA9PiB7XG4gICAgICBjeS5nZXQoJ2lucHV0OmZpcnN0Jykuc2hvdWxkKCdoYXZlLmF0dHInLCAncGxhY2Vob2xkZXInLCAnRW1haWwnKVxuICAgICAgY3kuZ2V0KCdpbnB1dDpsYXN0Jykuc2hvdWxkKCdoYXZlLmF0dHInLCAncGxhY2Vob2xkZXInLCAnUGFzc3dvcmQnKVxuICAgIH0pXG4gIH0pXG5cbiAgaXQoJ2N5LnJvb3QoKSAtIHF1ZXJ5IHRoZSByb290IERPTSBlbGVtZW50JywgKCkgPT4ge1xuICAgIC8vIGh0dHBzOi8vb24uY3lwcmVzcy5pby9yb290XG5cbiAgICAvLyBCeSBkZWZhdWx0LCByb290IGlzIHRoZSBkb2N1bWVudFxuICAgIGN5LnJvb3QoKS5zaG91bGQoJ21hdGNoJywgJ2h0bWwnKVxuXG4gICAgY3kuZ2V0KCcucXVlcnktdWwnKS53aXRoaW4oKCkgPT4ge1xuICAgICAgLy8gSW4gdGhpcyB3aXRoaW4sIHRoZSByb290IGlzIG5vdyB0aGUgdWwgRE9NIGVsZW1lbnRcbiAgICAgIGN5LnJvb3QoKS5zaG91bGQoJ2hhdmUuY2xhc3MnLCAncXVlcnktdWwnKVxuICAgIH0pXG4gIH0pXG5cbiAgaXQoJ2Jlc3QgcHJhY3RpY2VzIC0gc2VsZWN0aW5nIGVsZW1lbnRzJywgKCkgPT4ge1xuICAgIC8vIGh0dHBzOi8vb24uY3lwcmVzcy5pby9iZXN0LXByYWN0aWNlcyNTZWxlY3RpbmctRWxlbWVudHNcbiAgICBjeS5nZXQoJ1tkYXRhLWN5PWJlc3QtcHJhY3RpY2VzLXNlbGVjdGluZy1lbGVtZW50c10nKS53aXRoaW4oKCkgPT4ge1xuICAgICAgLy8gV29yc3QgLSB0b28gZ2VuZXJpYywgbm8gY29udGV4dFxuICAgICAgY3kuZ2V0KCdidXR0b24nKS5jbGljaygpXG5cbiAgICAgIC8vIEJhZC4gQ291cGxlZCB0byBzdHlsaW5nLiBIaWdobHkgc3ViamVjdCB0byBjaGFuZ2UuXG4gICAgICBjeS5nZXQoJy5idG4uYnRuLWxhcmdlJykuY2xpY2soKVxuXG4gICAgICAvLyBBdmVyYWdlLiBDb3VwbGVkIHRvIHRoZSBgbmFtZWAgYXR0cmlidXRlIHdoaWNoIGhhcyBIVE1MIHNlbWFudGljcy5cbiAgICAgIGN5LmdldCgnW25hbWU9c3VibWlzc2lvbl0nKS5jbGljaygpXG5cbiAgICAgIC8vIEJldHRlci4gQnV0IHN0aWxsIGNvdXBsZWQgdG8gc3R5bGluZyBvciBKUyBldmVudCBsaXN0ZW5lcnMuXG4gICAgICBjeS5nZXQoJyNtYWluJykuY2xpY2soKVxuXG4gICAgICAvLyBTbGlnaHRseSBiZXR0ZXIuIFVzZXMgYW4gSUQgYnV0IGFsc28gZW5zdXJlcyB0aGUgZWxlbWVudFxuICAgICAgLy8gaGFzIGFuIEFSSUEgcm9sZSBhdHRyaWJ1dGVcbiAgICAgIGN5LmdldCgnI21haW5bcm9sZT1idXR0b25dJykuY2xpY2soKVxuXG4gICAgICAvLyBNdWNoIGJldHRlci4gQnV0IHN0aWxsIGNvdXBsZWQgdG8gdGV4dCBjb250ZW50IHRoYXQgbWF5IGNoYW5nZS5cbiAgICAgIGN5LmNvbnRhaW5zKCdTdWJtaXQnKS5jbGljaygpXG5cbiAgICAgIC8vIEJlc3QuIEluc3VsYXRlZCBmcm9tIGFsbCBjaGFuZ2VzLlxuICAgICAgY3kuZ2V0KCdbZGF0YS1jeT1zdWJtaXRdJykuY2xpY2soKVxuICAgIH0pXG4gIH0pXG59KVxuIl0sIm5hbWVzIjpbImNvbnRleHQiLCJiZWZvcmVFYWNoIiwiY3kiLCJ2aXNpdCIsIml0IiwiZ2V0Iiwic2hvdWxkIiwiaW52b2tlIiwiYW5kIiwiY29udGFpbnMiLCJ3aXRoaW4iLCJyb290IiwiY2xpY2siXSwic291cmNlUm9vdCI6IiJ9