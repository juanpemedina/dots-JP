/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!*******************************************************!*\
  !*** ./cypress/e2e/2-advanced-examples/actions.cy.js ***!
  \*******************************************************/


/// <reference types="cypress" />

context('Actions', () => {
  beforeEach(() => {
    cy.visit('https://example.cypress.io/commands/actions');
  });

  // https://on.cypress.io/interacting-with-elements

  it('.type() - type into a DOM element', () => {
    // https://on.cypress.io/type
    cy.get('.action-email').type('fake@email.com');
    cy.get('.action-email').should('have.value', 'fake@email.com');

    // .type() with special character sequences
    cy.get('.action-email').type('{leftarrow}{rightarrow}{uparrow}{downarrow}');
    cy.get('.action-email').type('{del}{selectall}{backspace}');

    // .type() with key modifiers
    cy.get('.action-email').type('{alt}{option}'); //these are equivalent
    cy.get('.action-email').type('{ctrl}{control}'); //these are equivalent
    cy.get('.action-email').type('{meta}{command}{cmd}'); //these are equivalent
    cy.get('.action-email').type('{shift}');

    // Delay each keypress by 0.1 sec
    cy.get('.action-email').type('slow.typing@email.com', {
      delay: 100
    });
    cy.get('.action-email').should('have.value', 'slow.typing@email.com');
    cy.get('.action-disabled')
    // Ignore error checking prior to type
    // like whether the input is visible or disabled
    .type('disabled error checking', {
      force: true
    });
    cy.get('.action-disabled').should('have.value', 'disabled error checking');
  });
  it('.focus() - focus on a DOM element', () => {
    // https://on.cypress.io/focus
    cy.get('.action-focus').focus();
    cy.get('.action-focus').should('have.class', 'focus').prev().should('have.attr', 'style', 'color: orange;');
  });
  it('.blur() - blur off a DOM element', () => {
    // https://on.cypress.io/blur
    cy.get('.action-blur').type('About to blur');
    cy.get('.action-blur').blur();
    cy.get('.action-blur').should('have.class', 'error').prev().should('have.attr', 'style', 'color: red;');
  });
  it('.clear() - clears an input or textarea element', () => {
    // https://on.cypress.io/clear
    cy.get('.action-clear').type('Clear this text');
    cy.get('.action-clear').should('have.value', 'Clear this text');
    cy.get('.action-clear').clear();
    cy.get('.action-clear').should('have.value', '');
  });
  it('.submit() - submit a form', () => {
    // https://on.cypress.io/submit
    cy.get('.action-form').find('[type="text"]').type('HALFOFF');
    cy.get('.action-form').submit();
    cy.get('.action-form').next().should('contain', 'Your form has been submitted!');
  });
  it('.click() - click on a DOM element', () => {
    // https://on.cypress.io/click
    cy.get('.action-btn').click();

    // You can click on 9 specific positions of an element:
    //  -----------------------------------
    // | topLeft        top       topRight |
    // |                                   |
    // |                                   |
    // |                                   |
    // | left          center        right |
    // |                                   |
    // |                                   |
    // |                                   |
    // | bottomLeft   bottom   bottomRight |
    //  -----------------------------------

    // clicking in the center of the element is the default
    cy.get('#action-canvas').click();
    cy.get('#action-canvas').click('topLeft');
    cy.get('#action-canvas').click('top');
    cy.get('#action-canvas').click('topRight');
    cy.get('#action-canvas').click('left');
    cy.get('#action-canvas').click('right');
    cy.get('#action-canvas').click('bottomLeft');
    cy.get('#action-canvas').click('bottom');
    cy.get('#action-canvas').click('bottomRight');

    // .click() accepts an x and y coordinate
    // that controls where the click occurs :)

    cy.get('#action-canvas');
    cy.get('#action-canvas').click(80, 75); // click 80px on x coord and 75px on y coord
    cy.get('#action-canvas').click(170, 75);
    cy.get('#action-canvas').click(80, 165);
    cy.get('#action-canvas').click(100, 185);
    cy.get('#action-canvas').click(125, 190);
    cy.get('#action-canvas').click(150, 185);
    cy.get('#action-canvas').click(170, 165);

    // click multiple elements by passing multiple: true
    cy.get('.action-labels>.label').click({
      multiple: true
    });

    // Ignore error checking prior to clicking
    cy.get('.action-opacity>.btn').click({
      force: true
    });
  });
  it('.dblclick() - double click on a DOM element', () => {
    // https://on.cypress.io/dblclick

    // Our app has a listener on 'dblclick' event in our 'scripts.js'
    // that hides the div and shows an input on double click
    cy.get('.action-div').dblclick();
    cy.get('.action-div').should('not.be.visible');
    cy.get('.action-input-hidden').should('be.visible');
  });
  it('.rightclick() - right click on a DOM element', () => {
    // https://on.cypress.io/rightclick

    // Our app has a listener on 'contextmenu' event in our 'scripts.js'
    // that hides the div and shows an input on right click
    cy.get('.rightclick-action-div').rightclick();
    cy.get('.rightclick-action-div').should('not.be.visible');
    cy.get('.rightclick-action-input-hidden').should('be.visible');
  });
  it('.check() - check a checkbox or radio element', () => {
    // https://on.cypress.io/check

    // By default, .check() will check all
    // matching checkbox or radio elements in succession, one after another
    cy.get('.action-checkboxes [type="checkbox"]').not('[disabled]').check();
    cy.get('.action-checkboxes [type="checkbox"]').not('[disabled]').should('be.checked');
    cy.get('.action-radios [type="radio"]').not('[disabled]').check();
    cy.get('.action-radios [type="radio"]').not('[disabled]').should('be.checked');

    // .check() accepts a value argument
    cy.get('.action-radios [type="radio"]').check('radio1');
    cy.get('.action-radios [type="radio"]').should('be.checked');

    // .check() accepts an array of values
    cy.get('.action-multiple-checkboxes [type="checkbox"]').check(['checkbox1', 'checkbox2']);
    cy.get('.action-multiple-checkboxes [type="checkbox"]').should('be.checked');

    // Ignore error checking prior to checking
    cy.get('.action-checkboxes [disabled]').check({
      force: true
    });
    cy.get('.action-checkboxes [disabled]').should('be.checked');
    cy.get('.action-radios [type="radio"]').check('radio3', {
      force: true
    });
    cy.get('.action-radios [type="radio"]').should('be.checked');
  });
  it('.uncheck() - uncheck a checkbox element', () => {
    // https://on.cypress.io/uncheck

    // By default, .uncheck() will uncheck all matching
    // checkbox elements in succession, one after another
    cy.get('.action-check [type="checkbox"]').not('[disabled]').uncheck();
    cy.get('.action-check [type="checkbox"]').not('[disabled]').should('not.be.checked');

    // .uncheck() accepts a value argument
    cy.get('.action-check [type="checkbox"]').check('checkbox1');
    cy.get('.action-check [type="checkbox"]').uncheck('checkbox1');
    cy.get('.action-check [type="checkbox"][value="checkbox1"]').should('not.be.checked');

    // .uncheck() accepts an array of values
    cy.get('.action-check [type="checkbox"]').check(['checkbox1', 'checkbox3']);
    cy.get('.action-check [type="checkbox"]').uncheck(['checkbox1', 'checkbox3']);
    cy.get('.action-check [type="checkbox"][value="checkbox1"]').should('not.be.checked');
    cy.get('.action-check [type="checkbox"][value="checkbox3"]').should('not.be.checked');

    // Ignore error checking prior to unchecking
    cy.get('.action-check [disabled]').uncheck({
      force: true
    });
    cy.get('.action-check [disabled]').should('not.be.checked');
  });
  it('.select() - select an option in a <select> element', () => {
    // https://on.cypress.io/select

    // at first, no option should be selected
    cy.get('.action-select').should('have.value', '--Select a fruit--');

    // Select option(s) with matching text content
    cy.get('.action-select').select('apples');
    // confirm the apples were selected
    // note that each value starts with "fr-" in our HTML
    cy.get('.action-select').should('have.value', 'fr-apples');
    cy.get('.action-select-multiple').select(['apples', 'oranges', 'bananas']);
    cy.get('.action-select-multiple')
    // when getting multiple values, invoke "val" method first
    .invoke('val').should('deep.equal', ['fr-apples', 'fr-oranges', 'fr-bananas']);

    // Select option(s) with matching value
    cy.get('.action-select').select('fr-bananas');
    cy.get('.action-select')
    // can attach an assertion right away to the element
    .should('have.value', 'fr-bananas');
    cy.get('.action-select-multiple').select(['fr-apples', 'fr-oranges', 'fr-bananas']);
    cy.get('.action-select-multiple').invoke('val').should('deep.equal', ['fr-apples', 'fr-oranges', 'fr-bananas']);

    // assert the selected values include oranges
    cy.get('.action-select-multiple').invoke('val').should('include', 'fr-oranges');
  });
  it('.scrollIntoView() - scroll an element into view', () => {
    // https://on.cypress.io/scrollintoview

    // normally all of these buttons are hidden,
    // because they're not within
    // the viewable area of their parent
    // (we need to scroll to see them)
    cy.get('#scroll-horizontal button').should('not.be.visible');

    // scroll the button into view, as if the user had scrolled
    cy.get('#scroll-horizontal button').scrollIntoView();
    cy.get('#scroll-horizontal button').should('be.visible');
    cy.get('#scroll-vertical button').should('not.be.visible');

    // Cypress handles the scroll direction needed
    cy.get('#scroll-vertical button').scrollIntoView();
    cy.get('#scroll-vertical button').should('be.visible');
    cy.get('#scroll-both button').should('not.be.visible');

    // Cypress knows to scroll to the right and down
    cy.get('#scroll-both button').scrollIntoView();
    cy.get('#scroll-both button').should('be.visible');
  });
  it('.trigger() - trigger an event on a DOM element', () => {
    // https://on.cypress.io/trigger

    // To interact with a range input (slider)
    // we need to set its value & trigger the
    // event to signal it changed

    // Here, we invoke jQuery's val() method to set
    // the value and trigger the 'change' event
    cy.get('.trigger-input-range').invoke('val', 25);
    cy.get('.trigger-input-range').trigger('change');
    cy.get('.trigger-input-range').get('input[type=range]').siblings('p').should('have.text', '25');
  });
  it('cy.scrollTo() - scroll the window or element to a position', () => {
    // https://on.cypress.io/scrollto

    // You can scroll to 9 specific positions of an element:
    //  -----------------------------------
    // | topLeft        top       topRight |
    // |                                   |
    // |                                   |
    // |                                   |
    // | left          center        right |
    // |                                   |
    // |                                   |
    // |                                   |
    // | bottomLeft   bottom   bottomRight |
    //  -----------------------------------

    // if you chain .scrollTo() off of cy, we will
    // scroll the entire window
    cy.scrollTo('bottom');
    cy.get('#scrollable-horizontal').scrollTo('right');

    // or you can scroll to a specific coordinate:
    // (x axis, y axis) in pixels
    cy.get('#scrollable-vertical').scrollTo(250, 250);

    // or you can scroll to a specific percentage
    // of the (width, height) of the element
    cy.get('#scrollable-both').scrollTo('75%', '25%');

    // control the easing of the scroll (default is 'swing')
    cy.get('#scrollable-vertical').scrollTo('center', {
      easing: 'linear'
    });

    // control the duration of the scroll (in ms)
    cy.get('#scrollable-both').scrollTo('center', {
      duration: 2000
    });
  });
});
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TSxFQUFFO0lBQVMsQ0FBQyxDQUFDOztJQUV2RTtJQUNBNUIsRUFBRSxDQUFDRyxHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQ3dCLFFBQVEsQ0FBQyxRQUFRLEVBQUU7TUFBRUUsUUFBUSxFQUFFO0lBQUssQ0FBQyxDQUFDO0VBQ25FLENBQUMsQ0FBQztBQUNKLENBQUMsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZG9uYWNpb25lcy8uL2N5cHJlc3MvZTJlLzItYWR2YW5jZWQtZXhhbXBsZXMvYWN0aW9ucy5jeS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSB0eXBlcz1cImN5cHJlc3NcIiAvPlxuXG5jb250ZXh0KCdBY3Rpb25zJywgKCkgPT4ge1xuICBiZWZvcmVFYWNoKCgpID0+IHtcbiAgICBjeS52aXNpdCgnaHR0cHM6Ly9leGFtcGxlLmN5cHJlc3MuaW8vY29tbWFuZHMvYWN0aW9ucycpXG4gIH0pXG5cbiAgLy8gaHR0cHM6Ly9vbi5jeXByZXNzLmlvL2ludGVyYWN0aW5nLXdpdGgtZWxlbWVudHNcblxuICBpdCgnLnR5cGUoKSAtIHR5cGUgaW50byBhIERPTSBlbGVtZW50JywgKCkgPT4ge1xuICAgIC8vIGh0dHBzOi8vb24uY3lwcmVzcy5pby90eXBlXG4gICAgY3kuZ2V0KCcuYWN0aW9uLWVtYWlsJykudHlwZSgnZmFrZUBlbWFpbC5jb20nKVxuICAgIGN5LmdldCgnLmFjdGlvbi1lbWFpbCcpLnNob3VsZCgnaGF2ZS52YWx1ZScsICdmYWtlQGVtYWlsLmNvbScpXG5cbiAgICAvLyAudHlwZSgpIHdpdGggc3BlY2lhbCBjaGFyYWN0ZXIgc2VxdWVuY2VzXG4gICAgY3kuZ2V0KCcuYWN0aW9uLWVtYWlsJykudHlwZSgne2xlZnRhcnJvd317cmlnaHRhcnJvd317dXBhcnJvd317ZG93bmFycm93fScpXG4gICAgY3kuZ2V0KCcuYWN0aW9uLWVtYWlsJykudHlwZSgne2RlbH17c2VsZWN0YWxsfXtiYWNrc3BhY2V9JylcblxuICAgIC8vIC50eXBlKCkgd2l0aCBrZXkgbW9kaWZpZXJzXG4gICAgY3kuZ2V0KCcuYWN0aW9uLWVtYWlsJykudHlwZSgne2FsdH17b3B0aW9ufScpIC8vdGhlc2UgYXJlIGVxdWl2YWxlbnRcbiAgICBjeS5nZXQoJy5hY3Rpb24tZW1haWwnKS50eXBlKCd7Y3RybH17Y29udHJvbH0nKSAvL3RoZXNlIGFyZSBlcXVpdmFsZW50XG4gICAgY3kuZ2V0KCcuYWN0aW9uLWVtYWlsJykudHlwZSgne21ldGF9e2NvbW1hbmR9e2NtZH0nKSAvL3RoZXNlIGFyZSBlcXVpdmFsZW50XG4gICAgY3kuZ2V0KCcuYWN0aW9uLWVtYWlsJykudHlwZSgne3NoaWZ0fScpXG5cbiAgICAvLyBEZWxheSBlYWNoIGtleXByZXNzIGJ5IDAuMSBzZWNcbiAgICBjeS5nZXQoJy5hY3Rpb24tZW1haWwnKS50eXBlKCdzbG93LnR5cGluZ0BlbWFpbC5jb20nLCB7IGRlbGF5OiAxMDAgfSlcbiAgICBjeS5nZXQoJy5hY3Rpb24tZW1haWwnKS5zaG91bGQoJ2hhdmUudmFsdWUnLCAnc2xvdy50eXBpbmdAZW1haWwuY29tJylcblxuICAgIGN5LmdldCgnLmFjdGlvbi1kaXNhYmxlZCcpXG4gICAgICAvLyBJZ25vcmUgZXJyb3IgY2hlY2tpbmcgcHJpb3IgdG8gdHlwZVxuICAgICAgLy8gbGlrZSB3aGV0aGVyIHRoZSBpbnB1dCBpcyB2aXNpYmxlIG9yIGRpc2FibGVkXG4gICAgICAudHlwZSgnZGlzYWJsZWQgZXJyb3IgY2hlY2tpbmcnLCB7IGZvcmNlOiB0cnVlIH0pXG4gICAgY3kuZ2V0KCcuYWN0aW9uLWRpc2FibGVkJykuc2hvdWxkKCdoYXZlLnZhbHVlJywgJ2Rpc2FibGVkIGVycm9yIGNoZWNraW5nJylcbiAgfSlcblxuICBpdCgnLmZvY3VzKCkgLSBmb2N1cyBvbiBhIERPTSBlbGVtZW50JywgKCkgPT4ge1xuICAgIC8vIGh0dHBzOi8vb24uY3lwcmVzcy5pby9mb2N1c1xuICAgIGN5LmdldCgnLmFjdGlvbi1mb2N1cycpLmZvY3VzKClcbiAgICBjeS5nZXQoJy5hY3Rpb24tZm9jdXMnKS5zaG91bGQoJ2hhdmUuY2xhc3MnLCAnZm9jdXMnKVxuICAgICAgLnByZXYoKS5zaG91bGQoJ2hhdmUuYXR0cicsICdzdHlsZScsICdjb2xvcjogb3JhbmdlOycpXG4gIH0pXG5cbiAgaXQoJy5ibHVyKCkgLSBibHVyIG9mZiBhIERPTSBlbGVtZW50JywgKCkgPT4ge1xuICAgIC8vIGh0dHBzOi8vb24uY3lwcmVzcy5pby9ibHVyXG4gICAgY3kuZ2V0KCcuYWN0aW9uLWJsdXInKS50eXBlKCdBYm91dCB0byBibHVyJylcbiAgICBjeS5nZXQoJy5hY3Rpb24tYmx1cicpLmJsdXIoKVxuICAgIGN5LmdldCgnLmFjdGlvbi1ibHVyJykuc2hvdWxkKCdoYXZlLmNsYXNzJywgJ2Vycm9yJylcbiAgICAgIC5wcmV2KCkuc2hvdWxkKCdoYXZlLmF0dHInLCAnc3R5bGUnLCAnY29sb3I6IHJlZDsnKVxuICB9KVxuXG4gIGl0KCcuY2xlYXIoKSAtIGNsZWFycyBhbiBpbnB1dCBvciB0ZXh0YXJlYSBlbGVtZW50JywgKCkgPT4ge1xuICAgIC8vIGh0dHBzOi8vb24uY3lwcmVzcy5pby9jbGVhclxuICAgIGN5LmdldCgnLmFjdGlvbi1jbGVhcicpLnR5cGUoJ0NsZWFyIHRoaXMgdGV4dCcpXG4gICAgY3kuZ2V0KCcuYWN0aW9uLWNsZWFyJykuc2hvdWxkKCdoYXZlLnZhbHVlJywgJ0NsZWFyIHRoaXMgdGV4dCcpXG4gICAgY3kuZ2V0KCcuYWN0aW9uLWNsZWFyJykuY2xlYXIoKVxuICAgIGN5LmdldCgnLmFjdGlvbi1jbGVhcicpLnNob3VsZCgnaGF2ZS52YWx1ZScsICcnKVxuICB9KVxuXG4gIGl0KCcuc3VibWl0KCkgLSBzdWJtaXQgYSBmb3JtJywgKCkgPT4ge1xuICAgIC8vIGh0dHBzOi8vb24uY3lwcmVzcy5pby9zdWJtaXRcbiAgICBjeS5nZXQoJy5hY3Rpb24tZm9ybScpXG4gICAgICAuZmluZCgnW3R5cGU9XCJ0ZXh0XCJdJykudHlwZSgnSEFMRk9GRicpXG5cbiAgICBjeS5nZXQoJy5hY3Rpb24tZm9ybScpLnN1Ym1pdCgpXG4gICAgY3kuZ2V0KCcuYWN0aW9uLWZvcm0nKS5uZXh0KCkuc2hvdWxkKCdjb250YWluJywgJ1lvdXIgZm9ybSBoYXMgYmVlbiBzdWJtaXR0ZWQhJylcbiAgfSlcblxuICBpdCgnLmNsaWNrKCkgLSBjbGljayBvbiBhIERPTSBlbGVtZW50JywgKCkgPT4ge1xuICAgIC8vIGh0dHBzOi8vb24uY3lwcmVzcy5pby9jbGlja1xuICAgIGN5LmdldCgnLmFjdGlvbi1idG4nKS5jbGljaygpXG5cbiAgICAvLyBZb3UgY2FuIGNsaWNrIG9uIDkgc3BlY2lmaWMgcG9zaXRpb25zIG9mIGFuIGVsZW1lbnQ6XG4gICAgLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gfCB0b3BMZWZ0ICAgICAgICB0b3AgICAgICAgdG9wUmlnaHQgfFxuICAgIC8vIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAgICAvLyB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gICAgLy8gfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICAgIC8vIHwgbGVmdCAgICAgICAgICBjZW50ZXIgICAgICAgIHJpZ2h0IHxcbiAgICAvLyB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gICAgLy8gfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICAgIC8vIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAgICAvLyB8IGJvdHRvbUxlZnQgICBib3R0b20gICBib3R0b21SaWdodCB8XG4gICAgLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICAvLyBjbGlja2luZyBpbiB0aGUgY2VudGVyIG9mIHRoZSBlbGVtZW50IGlzIHRoZSBkZWZhdWx0XG4gICAgY3kuZ2V0KCcjYWN0aW9uLWNhbnZhcycpLmNsaWNrKClcblxuICAgIGN5LmdldCgnI2FjdGlvbi1jYW52YXMnKS5jbGljaygndG9wTGVmdCcpXG4gICAgY3kuZ2V0KCcjYWN0aW9uLWNhbnZhcycpLmNsaWNrKCd0b3AnKVxuICAgIGN5LmdldCgnI2FjdGlvbi1jYW52YXMnKS5jbGljaygndG9wUmlnaHQnKVxuICAgIGN5LmdldCgnI2FjdGlvbi1jYW52YXMnKS5jbGljaygnbGVmdCcpXG4gICAgY3kuZ2V0KCcjYWN0aW9uLWNhbnZhcycpLmNsaWNrKCdyaWdodCcpXG4gICAgY3kuZ2V0KCcjYWN0aW9uLWNhbnZhcycpLmNsaWNrKCdib3R0b21MZWZ0JylcbiAgICBjeS5nZXQoJyNhY3Rpb24tY2FudmFzJykuY2xpY2soJ2JvdHRvbScpXG4gICAgY3kuZ2V0KCcjYWN0aW9uLWNhbnZhcycpLmNsaWNrKCdib3R0b21SaWdodCcpXG5cbiAgICAvLyAuY2xpY2soKSBhY2NlcHRzIGFuIHggYW5kIHkgY29vcmRpbmF0ZVxuICAgIC8vIHRoYXQgY29udHJvbHMgd2hlcmUgdGhlIGNsaWNrIG9jY3VycyA6KVxuXG4gICAgY3kuZ2V0KCcjYWN0aW9uLWNhbnZhcycpXG4gICAgY3kuZ2V0KCcjYWN0aW9uLWNhbnZhcycpLmNsaWNrKDgwLCA3NSkgLy8gY2xpY2sgODBweCBvbiB4IGNvb3JkIGFuZCA3NXB4IG9uIHkgY29vcmRcbiAgICBjeS5nZXQoJyNhY3Rpb24tY2FudmFzJykuY2xpY2soMTcwLCA3NSlcbiAgICBjeS5nZXQoJyNhY3Rpb24tY2FudmFzJykuY2xpY2soODAsIDE2NSlcbiAgICBjeS5nZXQoJyNhY3Rpb24tY2FudmFzJykuY2xpY2soMTAwLCAxODUpXG4gICAgY3kuZ2V0KCcjYWN0aW9uLWNhbnZhcycpLmNsaWNrKDEyNSwgMTkwKVxuICAgIGN5LmdldCgnI2FjdGlvbi1jYW52YXMnKS5jbGljaygxNTAsIDE4NSlcbiAgICBjeS5nZXQoJyNhY3Rpb24tY2FudmFzJykuY2xpY2soMTcwLCAxNjUpXG5cbiAgICAvLyBjbGljayBtdWx0aXBsZSBlbGVtZW50cyBieSBwYXNzaW5nIG11bHRpcGxlOiB0cnVlXG4gICAgY3kuZ2V0KCcuYWN0aW9uLWxhYmVscz4ubGFiZWwnKS5jbGljayh7IG11bHRpcGxlOiB0cnVlIH0pXG5cbiAgICAvLyBJZ25vcmUgZXJyb3IgY2hlY2tpbmcgcHJpb3IgdG8gY2xpY2tpbmdcbiAgICBjeS5nZXQoJy5hY3Rpb24tb3BhY2l0eT4uYnRuJykuY2xpY2soeyBmb3JjZTogdHJ1ZSB9KVxuICB9KVxuXG4gIGl0KCcuZGJsY2xpY2soKSAtIGRvdWJsZSBjbGljayBvbiBhIERPTSBlbGVtZW50JywgKCkgPT4ge1xuICAgIC8vIGh0dHBzOi8vb24uY3lwcmVzcy5pby9kYmxjbGlja1xuXG4gICAgLy8gT3VyIGFwcCBoYXMgYSBsaXN0ZW5lciBvbiAnZGJsY2xpY2snIGV2ZW50IGluIG91ciAnc2NyaXB0cy5qcydcbiAgICAvLyB0aGF0IGhpZGVzIHRoZSBkaXYgYW5kIHNob3dzIGFuIGlucHV0IG9uIGRvdWJsZSBjbGlja1xuICAgIGN5LmdldCgnLmFjdGlvbi1kaXYnKS5kYmxjbGljaygpXG4gICAgY3kuZ2V0KCcuYWN0aW9uLWRpdicpLnNob3VsZCgnbm90LmJlLnZpc2libGUnKVxuICAgIGN5LmdldCgnLmFjdGlvbi1pbnB1dC1oaWRkZW4nKS5zaG91bGQoJ2JlLnZpc2libGUnKVxuICB9KVxuXG4gIGl0KCcucmlnaHRjbGljaygpIC0gcmlnaHQgY2xpY2sgb24gYSBET00gZWxlbWVudCcsICgpID0+IHtcbiAgICAvLyBodHRwczovL29uLmN5cHJlc3MuaW8vcmlnaHRjbGlja1xuXG4gICAgLy8gT3VyIGFwcCBoYXMgYSBsaXN0ZW5lciBvbiAnY29udGV4dG1lbnUnIGV2ZW50IGluIG91ciAnc2NyaXB0cy5qcydcbiAgICAvLyB0aGF0IGhpZGVzIHRoZSBkaXYgYW5kIHNob3dzIGFuIGlucHV0IG9uIHJpZ2h0IGNsaWNrXG4gICAgY3kuZ2V0KCcucmlnaHRjbGljay1hY3Rpb24tZGl2JykucmlnaHRjbGljaygpXG4gICAgY3kuZ2V0KCcucmlnaHRjbGljay1hY3Rpb24tZGl2Jykuc2hvdWxkKCdub3QuYmUudmlzaWJsZScpXG4gICAgY3kuZ2V0KCcucmlnaHRjbGljay1hY3Rpb24taW5wdXQtaGlkZGVuJykuc2hvdWxkKCdiZS52aXNpYmxlJylcbiAgfSlcblxuICBpdCgnLmNoZWNrKCkgLSBjaGVjayBhIGNoZWNrYm94IG9yIHJhZGlvIGVsZW1lbnQnLCAoKSA9PiB7XG4gICAgLy8gaHR0cHM6Ly9vbi5jeXByZXNzLmlvL2NoZWNrXG5cbiAgICAvLyBCeSBkZWZhdWx0LCAuY2hlY2soKSB3aWxsIGNoZWNrIGFsbFxuICAgIC8vIG1hdGNoaW5nIGNoZWNrYm94IG9yIHJhZGlvIGVsZW1lbnRzIGluIHN1Y2Nlc3Npb24sIG9uZSBhZnRlciBhbm90aGVyXG4gICAgY3kuZ2V0KCcuYWN0aW9uLWNoZWNrYm94ZXMgW3R5cGU9XCJjaGVja2JveFwiXScpLm5vdCgnW2Rpc2FibGVkXScpLmNoZWNrKClcbiAgICBjeS5nZXQoJy5hY3Rpb24tY2hlY2tib3hlcyBbdHlwZT1cImNoZWNrYm94XCJdJykubm90KCdbZGlzYWJsZWRdJykuc2hvdWxkKCdiZS5jaGVja2VkJylcblxuICAgIGN5LmdldCgnLmFjdGlvbi1yYWRpb3MgW3R5cGU9XCJyYWRpb1wiXScpLm5vdCgnW2Rpc2FibGVkXScpLmNoZWNrKClcbiAgICBjeS5nZXQoJy5hY3Rpb24tcmFkaW9zIFt0eXBlPVwicmFkaW9cIl0nKS5ub3QoJ1tkaXNhYmxlZF0nKS5zaG91bGQoJ2JlLmNoZWNrZWQnKVxuXG4gICAgLy8gLmNoZWNrKCkgYWNjZXB0cyBhIHZhbHVlIGFyZ3VtZW50XG4gICAgY3kuZ2V0KCcuYWN0aW9uLXJhZGlvcyBbdHlwZT1cInJhZGlvXCJdJykuY2hlY2soJ3JhZGlvMScpXG4gICAgY3kuZ2V0KCcuYWN0aW9uLXJhZGlvcyBbdHlwZT1cInJhZGlvXCJdJykuc2hvdWxkKCdiZS5jaGVja2VkJylcblxuICAgIC8vIC5jaGVjaygpIGFjY2VwdHMgYW4gYXJyYXkgb2YgdmFsdWVzXG4gICAgY3kuZ2V0KCcuYWN0aW9uLW11bHRpcGxlLWNoZWNrYm94ZXMgW3R5cGU9XCJjaGVja2JveFwiXScpLmNoZWNrKFsnY2hlY2tib3gxJywgJ2NoZWNrYm94MiddKVxuICAgIGN5LmdldCgnLmFjdGlvbi1tdWx0aXBsZS1jaGVja2JveGVzIFt0eXBlPVwiY2hlY2tib3hcIl0nKS5zaG91bGQoJ2JlLmNoZWNrZWQnKVxuXG4gICAgLy8gSWdub3JlIGVycm9yIGNoZWNraW5nIHByaW9yIHRvIGNoZWNraW5nXG4gICAgY3kuZ2V0KCcuYWN0aW9uLWNoZWNrYm94ZXMgW2Rpc2FibGVkXScpLmNoZWNrKHsgZm9yY2U6IHRydWUgfSlcbiAgICBjeS5nZXQoJy5hY3Rpb24tY2hlY2tib3hlcyBbZGlzYWJsZWRdJykuc2hvdWxkKCdiZS5jaGVja2VkJylcblxuICAgIGN5LmdldCgnLmFjdGlvbi1yYWRpb3MgW3R5cGU9XCJyYWRpb1wiXScpLmNoZWNrKCdyYWRpbzMnLCB7IGZvcmNlOiB0cnVlIH0pXG4gICAgY3kuZ2V0KCcuYWN0aW9uLXJhZGlvcyBbdHlwZT1cInJhZGlvXCJdJykuc2hvdWxkKCdiZS5jaGVja2VkJylcbiAgfSlcblxuICBpdCgnLnVuY2hlY2soKSAtIHVuY2hlY2sgYSBjaGVja2JveCBlbGVtZW50JywgKCkgPT4ge1xuICAgIC8vIGh0dHBzOi8vb24uY3lwcmVzcy5pby91bmNoZWNrXG5cbiAgICAvLyBCeSBkZWZhdWx0LCAudW5jaGVjaygpIHdpbGwgdW5jaGVjayBhbGwgbWF0Y2hpbmdcbiAgICAvLyBjaGVja2JveCBlbGVtZW50cyBpbiBzdWNjZXNzaW9uLCBvbmUgYWZ0ZXIgYW5vdGhlclxuICAgIGN5LmdldCgnLmFjdGlvbi1jaGVjayBbdHlwZT1cImNoZWNrYm94XCJdJylcbiAgICAgIC5ub3QoJ1tkaXNhYmxlZF0nKVxuICAgICAgLnVuY2hlY2soKVxuICAgIGN5LmdldCgnLmFjdGlvbi1jaGVjayBbdHlwZT1cImNoZWNrYm94XCJdJylcbiAgICAgIC5ub3QoJ1tkaXNhYmxlZF0nKVxuICAgICAgLnNob3VsZCgnbm90LmJlLmNoZWNrZWQnKVxuXG4gICAgLy8gLnVuY2hlY2soKSBhY2NlcHRzIGEgdmFsdWUgYXJndW1lbnRcbiAgICBjeS5nZXQoJy5hY3Rpb24tY2hlY2sgW3R5cGU9XCJjaGVja2JveFwiXScpXG4gICAgICAuY2hlY2soJ2NoZWNrYm94MScpXG4gICAgY3kuZ2V0KCcuYWN0aW9uLWNoZWNrIFt0eXBlPVwiY2hlY2tib3hcIl0nKVxuICAgICAgLnVuY2hlY2soJ2NoZWNrYm94MScpXG4gICAgY3kuZ2V0KCcuYWN0aW9uLWNoZWNrIFt0eXBlPVwiY2hlY2tib3hcIl1bdmFsdWU9XCJjaGVja2JveDFcIl0nKVxuICAgICAgLnNob3VsZCgnbm90LmJlLmNoZWNrZWQnKVxuXG4gICAgLy8gLnVuY2hlY2soKSBhY2NlcHRzIGFuIGFycmF5IG9mIHZhbHVlc1xuICAgIGN5LmdldCgnLmFjdGlvbi1jaGVjayBbdHlwZT1cImNoZWNrYm94XCJdJylcbiAgICAgIC5jaGVjayhbJ2NoZWNrYm94MScsICdjaGVja2JveDMnXSlcbiAgICBjeS5nZXQoJy5hY3Rpb24tY2hlY2sgW3R5cGU9XCJjaGVja2JveFwiXScpXG4gICAgICAudW5jaGVjayhbJ2NoZWNrYm94MScsICdjaGVja2JveDMnXSlcbiAgICBjeS5nZXQoJy5hY3Rpb24tY2hlY2sgW3R5cGU9XCJjaGVja2JveFwiXVt2YWx1ZT1cImNoZWNrYm94MVwiXScpXG4gICAgICAuc2hvdWxkKCdub3QuYmUuY2hlY2tlZCcpXG4gICAgY3kuZ2V0KCcuYWN0aW9uLWNoZWNrIFt0eXBlPVwiY2hlY2tib3hcIl1bdmFsdWU9XCJjaGVja2JveDNcIl0nKVxuICAgICAgLnNob3VsZCgnbm90LmJlLmNoZWNrZWQnKVxuXG4gICAgLy8gSWdub3JlIGVycm9yIGNoZWNraW5nIHByaW9yIHRvIHVuY2hlY2tpbmdcbiAgICBjeS5nZXQoJy5hY3Rpb24tY2hlY2sgW2Rpc2FibGVkXScpLnVuY2hlY2soeyBmb3JjZTogdHJ1ZSB9KVxuICAgIGN5LmdldCgnLmFjdGlvbi1jaGVjayBbZGlzYWJsZWRdJykuc2hvdWxkKCdub3QuYmUuY2hlY2tlZCcpXG4gIH0pXG5cbiAgaXQoJy5zZWxlY3QoKSAtIHNlbGVjdCBhbiBvcHRpb24gaW4gYSA8c2VsZWN0PiBlbGVtZW50JywgKCkgPT4ge1xuICAgIC8vIGh0dHBzOi8vb24uY3lwcmVzcy5pby9zZWxlY3RcblxuICAgIC8vIGF0IGZpcnN0LCBubyBvcHRpb24gc2hvdWxkIGJlIHNlbGVjdGVkXG4gICAgY3kuZ2V0KCcuYWN0aW9uLXNlbGVjdCcpXG4gICAgICAuc2hvdWxkKCdoYXZlLnZhbHVlJywgJy0tU2VsZWN0IGEgZnJ1aXQtLScpXG5cbiAgICAvLyBTZWxlY3Qgb3B0aW9uKHMpIHdpdGggbWF0Y2hpbmcgdGV4dCBjb250ZW50XG4gICAgY3kuZ2V0KCcuYWN0aW9uLXNlbGVjdCcpLnNlbGVjdCgnYXBwbGVzJylcbiAgICAvLyBjb25maXJtIHRoZSBhcHBsZXMgd2VyZSBzZWxlY3RlZFxuICAgIC8vIG5vdGUgdGhhdCBlYWNoIHZhbHVlIHN0YXJ0cyB3aXRoIFwiZnItXCIgaW4gb3VyIEhUTUxcbiAgICBjeS5nZXQoJy5hY3Rpb24tc2VsZWN0Jykuc2hvdWxkKCdoYXZlLnZhbHVlJywgJ2ZyLWFwcGxlcycpXG5cbiAgICBjeS5nZXQoJy5hY3Rpb24tc2VsZWN0LW11bHRpcGxlJylcbiAgICAgIC5zZWxlY3QoWydhcHBsZXMnLCAnb3JhbmdlcycsICdiYW5hbmFzJ10pXG4gICAgY3kuZ2V0KCcuYWN0aW9uLXNlbGVjdC1tdWx0aXBsZScpXG4gICAgICAvLyB3aGVuIGdldHRpbmcgbXVsdGlwbGUgdmFsdWVzLCBpbnZva2UgXCJ2YWxcIiBtZXRob2QgZmlyc3RcbiAgICAgIC5pbnZva2UoJ3ZhbCcpXG4gICAgICAuc2hvdWxkKCdkZWVwLmVxdWFsJywgWydmci1hcHBsZXMnLCAnZnItb3JhbmdlcycsICdmci1iYW5hbmFzJ10pXG5cbiAgICAvLyBTZWxlY3Qgb3B0aW9uKHMpIHdpdGggbWF0Y2hpbmcgdmFsdWVcbiAgICBjeS5nZXQoJy5hY3Rpb24tc2VsZWN0Jykuc2VsZWN0KCdmci1iYW5hbmFzJylcbiAgICBjeS5nZXQoJy5hY3Rpb24tc2VsZWN0JylcbiAgICAgIC8vIGNhbiBhdHRhY2ggYW4gYXNzZXJ0aW9uIHJpZ2h0IGF3YXkgdG8gdGhlIGVsZW1lbnRcbiAgICAgIC5zaG91bGQoJ2hhdmUudmFsdWUnLCAnZnItYmFuYW5hcycpXG5cbiAgICBjeS5nZXQoJy5hY3Rpb24tc2VsZWN0LW11bHRpcGxlJylcbiAgICAgIC5zZWxlY3QoWydmci1hcHBsZXMnLCAnZnItb3JhbmdlcycsICdmci1iYW5hbmFzJ10pXG4gICAgY3kuZ2V0KCcuYWN0aW9uLXNlbGVjdC1tdWx0aXBsZScpXG4gICAgICAuaW52b2tlKCd2YWwnKVxuICAgICAgLnNob3VsZCgnZGVlcC5lcXVhbCcsIFsnZnItYXBwbGVzJywgJ2ZyLW9yYW5nZXMnLCAnZnItYmFuYW5hcyddKVxuXG4gICAgLy8gYXNzZXJ0IHRoZSBzZWxlY3RlZCB2YWx1ZXMgaW5jbHVkZSBvcmFuZ2VzXG4gICAgY3kuZ2V0KCcuYWN0aW9uLXNlbGVjdC1tdWx0aXBsZScpXG4gICAgICAuaW52b2tlKCd2YWwnKS5zaG91bGQoJ2luY2x1ZGUnLCAnZnItb3JhbmdlcycpXG4gIH0pXG5cbiAgaXQoJy5zY3JvbGxJbnRvVmlldygpIC0gc2Nyb2xsIGFuIGVsZW1lbnQgaW50byB2aWV3JywgKCkgPT4ge1xuICAgIC8vIGh0dHBzOi8vb24uY3lwcmVzcy5pby9zY3JvbGxpbnRvdmlld1xuXG4gICAgLy8gbm9ybWFsbHkgYWxsIG9mIHRoZXNlIGJ1dHRvbnMgYXJlIGhpZGRlbixcbiAgICAvLyBiZWNhdXNlIHRoZXkncmUgbm90IHdpdGhpblxuICAgIC8vIHRoZSB2aWV3YWJsZSBhcmVhIG9mIHRoZWlyIHBhcmVudFxuICAgIC8vICh3ZSBuZWVkIHRvIHNjcm9sbCB0byBzZWUgdGhlbSlcbiAgICBjeS5nZXQoJyNzY3JvbGwtaG9yaXpvbnRhbCBidXR0b24nKVxuICAgICAgLnNob3VsZCgnbm90LmJlLnZpc2libGUnKVxuXG4gICAgLy8gc2Nyb2xsIHRoZSBidXR0b24gaW50byB2aWV3LCBhcyBpZiB0aGUgdXNlciBoYWQgc2Nyb2xsZWRcbiAgICBjeS5nZXQoJyNzY3JvbGwtaG9yaXpvbnRhbCBidXR0b24nKS5zY3JvbGxJbnRvVmlldygpXG4gICAgY3kuZ2V0KCcjc2Nyb2xsLWhvcml6b250YWwgYnV0dG9uJylcbiAgICAgIC5zaG91bGQoJ2JlLnZpc2libGUnKVxuXG4gICAgY3kuZ2V0KCcjc2Nyb2xsLXZlcnRpY2FsIGJ1dHRvbicpXG4gICAgICAuc2hvdWxkKCdub3QuYmUudmlzaWJsZScpXG5cbiAgICAvLyBDeXByZXNzIGhhbmRsZXMgdGhlIHNjcm9sbCBkaXJlY3Rpb24gbmVlZGVkXG4gICAgY3kuZ2V0KCcjc2Nyb2xsLXZlcnRpY2FsIGJ1dHRvbicpLnNjcm9sbEludG9WaWV3KClcbiAgICBjeS5nZXQoJyNzY3JvbGwtdmVydGljYWwgYnV0dG9uJylcbiAgICAgIC5zaG91bGQoJ2JlLnZpc2libGUnKVxuXG4gICAgY3kuZ2V0KCcjc2Nyb2xsLWJvdGggYnV0dG9uJylcbiAgICAgIC5zaG91bGQoJ25vdC5iZS52aXNpYmxlJylcblxuICAgIC8vIEN5cHJlc3Mga25vd3MgdG8gc2Nyb2xsIHRvIHRoZSByaWdodCBhbmQgZG93blxuICAgIGN5LmdldCgnI3Njcm9sbC1ib3RoIGJ1dHRvbicpLnNjcm9sbEludG9WaWV3KClcbiAgICBjeS5nZXQoJyNzY3JvbGwtYm90aCBidXR0b24nKVxuICAgICAgLnNob3VsZCgnYmUudmlzaWJsZScpXG4gIH0pXG5cbiAgaXQoJy50cmlnZ2VyKCkgLSB0cmlnZ2VyIGFuIGV2ZW50IG9uIGEgRE9NIGVsZW1lbnQnLCAoKSA9PiB7XG4gICAgLy8gaHR0cHM6Ly9vbi5jeXByZXNzLmlvL3RyaWdnZXJcblxuICAgIC8vIFRvIGludGVyYWN0IHdpdGggYSByYW5nZSBpbnB1dCAoc2xpZGVyKVxuICAgIC8vIHdlIG5lZWQgdG8gc2V0IGl0cyB2YWx1ZSAmIHRyaWdnZXIgdGhlXG4gICAgLy8gZXZlbnQgdG8gc2lnbmFsIGl0IGNoYW5nZWRcblxuICAgIC8vIEhlcmUsIHdlIGludm9rZSBqUXVlcnkncyB2YWwoKSBtZXRob2QgdG8gc2V0XG4gICAgLy8gdGhlIHZhbHVlIGFuZCB0cmlnZ2VyIHRoZSAnY2hhbmdlJyBldmVudFxuICAgIGN5LmdldCgnLnRyaWdnZXItaW5wdXQtcmFuZ2UnKVxuICAgICAgLmludm9rZSgndmFsJywgMjUpXG4gICAgY3kuZ2V0KCcudHJpZ2dlci1pbnB1dC1yYW5nZScpXG4gICAgICAudHJpZ2dlcignY2hhbmdlJylcbiAgICBjeS5nZXQoJy50cmlnZ2VyLWlucHV0LXJhbmdlJylcbiAgICAgIC5nZXQoJ2lucHV0W3R5cGU9cmFuZ2VdJykuc2libGluZ3MoJ3AnKVxuICAgICAgLnNob3VsZCgnaGF2ZS50ZXh0JywgJzI1JylcbiAgfSlcblxuICBpdCgnY3kuc2Nyb2xsVG8oKSAtIHNjcm9sbCB0aGUgd2luZG93IG9yIGVsZW1lbnQgdG8gYSBwb3NpdGlvbicsICgpID0+IHtcbiAgICAvLyBodHRwczovL29uLmN5cHJlc3MuaW8vc2Nyb2xsdG9cblxuICAgIC8vIFlvdSBjYW4gc2Nyb2xsIHRvIDkgc3BlY2lmaWMgcG9zaXRpb25zIG9mIGFuIGVsZW1lbnQ6XG4gICAgLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gfCB0b3BMZWZ0ICAgICAgICB0b3AgICAgICAgdG9wUmlnaHQgfFxuICAgIC8vIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAgICAvLyB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gICAgLy8gfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICAgIC8vIHwgbGVmdCAgICAgICAgICBjZW50ZXIgICAgICAgIHJpZ2h0IHxcbiAgICAvLyB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gICAgLy8gfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICAgIC8vIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAgICAvLyB8IGJvdHRvbUxlZnQgICBib3R0b20gICBib3R0b21SaWdodCB8XG4gICAgLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICAvLyBpZiB5b3UgY2hhaW4gLnNjcm9sbFRvKCkgb2ZmIG9mIGN5LCB3ZSB3aWxsXG4gICAgLy8gc2Nyb2xsIHRoZSBlbnRpcmUgd2luZG93XG4gICAgY3kuc2Nyb2xsVG8oJ2JvdHRvbScpXG5cbiAgICBjeS5nZXQoJyNzY3JvbGxhYmxlLWhvcml6b250YWwnKS5zY3JvbGxUbygncmlnaHQnKVxuXG4gICAgLy8gb3IgeW91IGNhbiBzY3JvbGwgdG8gYSBzcGVjaWZpYyBjb29yZGluYXRlOlxuICAgIC8vICh4IGF4aXMsIHkgYXhpcykgaW4gcGl4ZWxzXG4gICAgY3kuZ2V0KCcjc2Nyb2xsYWJsZS12ZXJ0aWNhbCcpLnNjcm9sbFRvKDI1MCwgMjUwKVxuXG4gICAgLy8gb3IgeW91IGNhbiBzY3JvbGwgdG8gYSBzcGVjaWZpYyBwZXJjZW50YWdlXG4gICAgLy8gb2YgdGhlICh3aWR0aCwgaGVpZ2h0KSBvZiB0aGUgZWxlbWVudFxuICAgIGN5LmdldCgnI3Njcm9sbGFibGUtYm90aCcpLnNjcm9sbFRvKCc3NSUnLCAnMjUlJylcblxuICAgIC8vIGNvbnRyb2wgdGhlIGVhc2luZyBvZiB0aGUgc2Nyb2xsIChkZWZhdWx0IGlzICdzd2luZycpXG4gICAgY3kuZ2V0KCcjc2Nyb2xsYWJsZS12ZXJ0aWNhbCcpLnNjcm9sbFRvKCdjZW50ZXInLCB7IGVhc2luZzogJ2xpbmVhcicgfSlcblxuICAgIC8vIGNvbnRyb2wgdGhlIGR1cmF0aW9uIG9mIHRoZSBzY3JvbGwgKGluIG1zKVxuICAgIGN5LmdldCgnI3Njcm9sbGFibGUtYm90aCcpLnNjcm9sbFRvKCdjZW50ZXInLCB7IGR1cmF0aW9uOiAyMDAwIH0pXG4gIH0pXG59KVxuIl0sIm5hbWVzIjpbImNvbnRleHQiLCJiZWZvcmVFYWNoIiwiY3kiLCJ2aXNpdCIsIml0IiwiZ2V0IiwidHlwZSIsInNob3VsZCIsImRlbGF5IiwiZm9yY2UiLCJmb2N1cyIsInByZXYiLCJibHVyIiwiY2xlYXIiLCJmaW5kIiwic3VibWl0IiwibmV4dCIsImNsaWNrIiwibXVsdGlwbGUiLCJkYmxjbGljayIsInJpZ2h0Y2xpY2siLCJub3QiLCJjaGVjayIsInVuY2hlY2siLCJzZWxlY3QiLCJpbnZva2UiLCJzY3JvbGxJbnRvVmlldyIsInRyaWdnZXIiLCJzaWJsaW5ncyIsInNjcm9sbFRvIiwiZWFzaW5nIiwiZHVyYXRpb24iXSwic291cmNlUm9vdCI6IiJ9