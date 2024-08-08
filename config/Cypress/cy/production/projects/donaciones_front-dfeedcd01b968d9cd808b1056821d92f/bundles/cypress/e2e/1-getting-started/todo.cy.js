/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!**************************************************!*\
  !*** ./cypress/e2e/1-getting-started/todo.cy.js ***!
  \**************************************************/


/// <reference types="cypress" />

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

describe('example to-do app', () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.visit('https://example.cypress.io/todo');
  });
  it('displays two todo items by default', () => {
    // We use the `cy.get()` command to get all elements that match the selector.
    // Then, we use `should` to assert that there are two matched items,
    // which are the two default items.
    cy.get('.todo-list li').should('have.length', 2);

    // We can go even further and check that the default todos each contain
    // the correct text. We use the `first` and `last` functions
    // to get just the first and last matched elements individually,
    // and then perform an assertion with `should`.
    cy.get('.todo-list li').first().should('have.text', 'Pay electric bill');
    cy.get('.todo-list li').last().should('have.text', 'Walk the dog');
  });
  it('can add new todo items', () => {
    // We'll store our item text in a variable so we can reuse it
    const newItem = 'Feed the cat';

    // Let's get the input element and use the `type` command to
    // input our new list item. After typing the content of our item,
    // we need to type the enter key as well in order to submit the input.
    // This input has a data-test attribute so we'll use that to select the
    // element in accordance with best practices:
    // https://on.cypress.io/selecting-elements
    cy.get('[data-test=new-todo]').type(`${newItem}{enter}`);

    // Now that we've typed our new item, let's check that it actually was added to the list.
    // Since it's the newest item, it should exist as the last element in the list.
    // In addition, with the two default items, we should have a total of 3 elements in the list.
    // Since assertions yield the element that was asserted on,
    // we can chain both of these assertions together into a single statement.
    cy.get('.todo-list li').should('have.length', 3).last().should('have.text', newItem);
  });
  it('can check off an item as completed', () => {
    // In addition to using the `get` command to get an element by selector,
    // we can also use the `contains` command to get an element by its contents.
    // However, this will yield the <label>, which is lowest-level element that contains the text.
    // In order to check the item, we'll find the <input> element for this <label>
    // by traversing up the dom to the parent element. From there, we can `find`
    // the child checkbox <input> element and use the `check` command to check it.
    cy.contains('Pay electric bill').parent().find('input[type=checkbox]').check();

    // Now that we've checked the button, we can go ahead and make sure
    // that the list element is now marked as completed.
    // Again we'll use `contains` to find the <label> element and then use the `parents` command
    // to traverse multiple levels up the dom until we find the corresponding <li> element.
    // Once we get that element, we can assert that it has the completed class.
    cy.contains('Pay electric bill').parents('li').should('have.class', 'completed');
  });
  context('with a checked task', () => {
    beforeEach(() => {
      // We'll take the command we used above to check off an element
      // Since we want to perform multiple tests that start with checking
      // one element, we put it in the beforeEach hook
      // so that it runs at the start of every test.
      cy.contains('Pay electric bill').parent().find('input[type=checkbox]').check();
    });
    it('can filter for uncompleted tasks', () => {
      // We'll click on the "active" button in order to
      // display only incomplete items
      cy.contains('Active').click();

      // After filtering, we can assert that there is only the one
      // incomplete item in the list.
      cy.get('.todo-list li').should('have.length', 1).first().should('have.text', 'Walk the dog');

      // For good measure, let's also assert that the task we checked off
      // does not exist on the page.
      cy.contains('Pay electric bill').should('not.exist');
    });
    it('can filter for completed tasks', () => {
      // We can perform similar steps as the test above to ensure
      // that only completed tasks are shown
      cy.contains('Completed').click();
      cy.get('.todo-list li').should('have.length', 1).first().should('have.text', 'Pay electric bill');
      cy.contains('Walk the dog').should('not.exist');
    });
    it('can delete all completed tasks', () => {
      // First, let's click the "Clear completed" button
      // `contains` is actually serving two purposes here.
      // First, it's ensuring that the button exists within the dom.
      // This button only appears when at least one task is checked
      // so this command is implicitly verifying that it does exist.
      // Second, it selects the button so we can click it.
      cy.contains('Clear completed').click();

      // Then we can make sure that there is only one element
      // in the list and our element does not exist
      cy.get('.todo-list li').should('have.length', 1).should('not.have.text', 'Pay electric bill');

      // Finally, make sure that the clear button no longer exists.
      cy.contains('Clear completed').should('not.exist');
    });
  });
});
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUVGRixFQUFFLENBQUMsZ0NBQWdDLEVBQUUsTUFBTTtNQUN6QztNQUNBO01BQ0FGLEVBQUUsQ0FBQ1MsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDTSxLQUFLLENBQUMsQ0FBQztNQUVoQ2YsRUFBRSxDQUFDRyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQ3BCQyxNQUFNLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQyxDQUN4QkMsS0FBSyxDQUFDLENBQUMsQ0FDUEQsTUFBTSxDQUFDLFdBQVcsRUFBRSxtQkFBbUIsQ0FBQztNQUUzQ0osRUFBRSxDQUFDUyxRQUFRLENBQUMsY0FBYyxDQUFDLENBQUNMLE1BQU0sQ0FBQyxXQUFXLENBQUM7SUFDakQsQ0FBQyxDQUFDO0lBRUZGLEVBQUUsQ0FBQyxnQ0FBZ0MsRUFBRSxNQUFNO01BQ3pDO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBRixFQUFFLENBQUNTLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDTSxLQUFLLENBQUMsQ0FBQzs7TUFFdEM7TUFDQTtNQUNBZixFQUFFLENBQUNHLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FDcEJDLE1BQU0sQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLENBQ3hCQSxNQUFNLENBQUMsZUFBZSxFQUFFLG1CQUFtQixDQUFDOztNQUUvQztNQUNBSixFQUFFLENBQUNTLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDTCxNQUFNLENBQUMsV0FBVyxDQUFDO0lBQ3BELENBQUMsQ0FBQztFQUNKLENBQUMsQ0FBQztBQUNKLENBQUMsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZG9uYWNpb25lcy8uL2N5cHJlc3MvZTJlLzEtZ2V0dGluZy1zdGFydGVkL3RvZG8uY3kuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgdHlwZXM9XCJjeXByZXNzXCIgLz5cblxuLy8gV2VsY29tZSB0byBDeXByZXNzIVxuLy9cbi8vIFRoaXMgc3BlYyBmaWxlIGNvbnRhaW5zIGEgdmFyaWV0eSBvZiBzYW1wbGUgdGVzdHNcbi8vIGZvciBhIHRvZG8gbGlzdCBhcHAgdGhhdCBhcmUgZGVzaWduZWQgdG8gZGVtb25zdHJhdGVcbi8vIHRoZSBwb3dlciBvZiB3cml0aW5nIHRlc3RzIGluIEN5cHJlc3MuXG4vL1xuLy8gVG8gbGVhcm4gbW9yZSBhYm91dCBob3cgQ3lwcmVzcyB3b3JrcyBhbmRcbi8vIHdoYXQgbWFrZXMgaXQgc3VjaCBhbiBhd2Vzb21lIHRlc3RpbmcgdG9vbCxcbi8vIHBsZWFzZSByZWFkIG91ciBnZXR0aW5nIHN0YXJ0ZWQgZ3VpZGU6XG4vLyBodHRwczovL29uLmN5cHJlc3MuaW8vaW50cm9kdWN0aW9uLXRvLWN5cHJlc3NcblxuZGVzY3JpYmUoJ2V4YW1wbGUgdG8tZG8gYXBwJywgKCkgPT4ge1xuICBiZWZvcmVFYWNoKCgpID0+IHtcbiAgICAvLyBDeXByZXNzIHN0YXJ0cyBvdXQgd2l0aCBhIGJsYW5rIHNsYXRlIGZvciBlYWNoIHRlc3RcbiAgICAvLyBzbyB3ZSBtdXN0IHRlbGwgaXQgdG8gdmlzaXQgb3VyIHdlYnNpdGUgd2l0aCB0aGUgYGN5LnZpc2l0KClgIGNvbW1hbmQuXG4gICAgLy8gU2luY2Ugd2Ugd2FudCB0byB2aXNpdCB0aGUgc2FtZSBVUkwgYXQgdGhlIHN0YXJ0IG9mIGFsbCBvdXIgdGVzdHMsXG4gICAgLy8gd2UgaW5jbHVkZSBpdCBpbiBvdXIgYmVmb3JlRWFjaCBmdW5jdGlvbiBzbyB0aGF0IGl0IHJ1bnMgYmVmb3JlIGVhY2ggdGVzdFxuICAgIGN5LnZpc2l0KCdodHRwczovL2V4YW1wbGUuY3lwcmVzcy5pby90b2RvJylcbiAgfSlcblxuICBpdCgnZGlzcGxheXMgdHdvIHRvZG8gaXRlbXMgYnkgZGVmYXVsdCcsICgpID0+IHtcbiAgICAvLyBXZSB1c2UgdGhlIGBjeS5nZXQoKWAgY29tbWFuZCB0byBnZXQgYWxsIGVsZW1lbnRzIHRoYXQgbWF0Y2ggdGhlIHNlbGVjdG9yLlxuICAgIC8vIFRoZW4sIHdlIHVzZSBgc2hvdWxkYCB0byBhc3NlcnQgdGhhdCB0aGVyZSBhcmUgdHdvIG1hdGNoZWQgaXRlbXMsXG4gICAgLy8gd2hpY2ggYXJlIHRoZSB0d28gZGVmYXVsdCBpdGVtcy5cbiAgICBjeS5nZXQoJy50b2RvLWxpc3QgbGknKS5zaG91bGQoJ2hhdmUubGVuZ3RoJywgMilcblxuICAgIC8vIFdlIGNhbiBnbyBldmVuIGZ1cnRoZXIgYW5kIGNoZWNrIHRoYXQgdGhlIGRlZmF1bHQgdG9kb3MgZWFjaCBjb250YWluXG4gICAgLy8gdGhlIGNvcnJlY3QgdGV4dC4gV2UgdXNlIHRoZSBgZmlyc3RgIGFuZCBgbGFzdGAgZnVuY3Rpb25zXG4gICAgLy8gdG8gZ2V0IGp1c3QgdGhlIGZpcnN0IGFuZCBsYXN0IG1hdGNoZWQgZWxlbWVudHMgaW5kaXZpZHVhbGx5LFxuICAgIC8vIGFuZCB0aGVuIHBlcmZvcm0gYW4gYXNzZXJ0aW9uIHdpdGggYHNob3VsZGAuXG4gICAgY3kuZ2V0KCcudG9kby1saXN0IGxpJykuZmlyc3QoKS5zaG91bGQoJ2hhdmUudGV4dCcsICdQYXkgZWxlY3RyaWMgYmlsbCcpXG4gICAgY3kuZ2V0KCcudG9kby1saXN0IGxpJykubGFzdCgpLnNob3VsZCgnaGF2ZS50ZXh0JywgJ1dhbGsgdGhlIGRvZycpXG4gIH0pXG5cbiAgaXQoJ2NhbiBhZGQgbmV3IHRvZG8gaXRlbXMnLCAoKSA9PiB7XG4gICAgLy8gV2UnbGwgc3RvcmUgb3VyIGl0ZW0gdGV4dCBpbiBhIHZhcmlhYmxlIHNvIHdlIGNhbiByZXVzZSBpdFxuICAgIGNvbnN0IG5ld0l0ZW0gPSAnRmVlZCB0aGUgY2F0J1xuXG4gICAgLy8gTGV0J3MgZ2V0IHRoZSBpbnB1dCBlbGVtZW50IGFuZCB1c2UgdGhlIGB0eXBlYCBjb21tYW5kIHRvXG4gICAgLy8gaW5wdXQgb3VyIG5ldyBsaXN0IGl0ZW0uIEFmdGVyIHR5cGluZyB0aGUgY29udGVudCBvZiBvdXIgaXRlbSxcbiAgICAvLyB3ZSBuZWVkIHRvIHR5cGUgdGhlIGVudGVyIGtleSBhcyB3ZWxsIGluIG9yZGVyIHRvIHN1Ym1pdCB0aGUgaW5wdXQuXG4gICAgLy8gVGhpcyBpbnB1dCBoYXMgYSBkYXRhLXRlc3QgYXR0cmlidXRlIHNvIHdlJ2xsIHVzZSB0aGF0IHRvIHNlbGVjdCB0aGVcbiAgICAvLyBlbGVtZW50IGluIGFjY29yZGFuY2Ugd2l0aCBiZXN0IHByYWN0aWNlczpcbiAgICAvLyBodHRwczovL29uLmN5cHJlc3MuaW8vc2VsZWN0aW5nLWVsZW1lbnRzXG4gICAgY3kuZ2V0KCdbZGF0YS10ZXN0PW5ldy10b2RvXScpLnR5cGUoYCR7bmV3SXRlbX17ZW50ZXJ9YClcblxuICAgIC8vIE5vdyB0aGF0IHdlJ3ZlIHR5cGVkIG91ciBuZXcgaXRlbSwgbGV0J3MgY2hlY2sgdGhhdCBpdCBhY3R1YWxseSB3YXMgYWRkZWQgdG8gdGhlIGxpc3QuXG4gICAgLy8gU2luY2UgaXQncyB0aGUgbmV3ZXN0IGl0ZW0sIGl0IHNob3VsZCBleGlzdCBhcyB0aGUgbGFzdCBlbGVtZW50IGluIHRoZSBsaXN0LlxuICAgIC8vIEluIGFkZGl0aW9uLCB3aXRoIHRoZSB0d28gZGVmYXVsdCBpdGVtcywgd2Ugc2hvdWxkIGhhdmUgYSB0b3RhbCBvZiAzIGVsZW1lbnRzIGluIHRoZSBsaXN0LlxuICAgIC8vIFNpbmNlIGFzc2VydGlvbnMgeWllbGQgdGhlIGVsZW1lbnQgdGhhdCB3YXMgYXNzZXJ0ZWQgb24sXG4gICAgLy8gd2UgY2FuIGNoYWluIGJvdGggb2YgdGhlc2UgYXNzZXJ0aW9ucyB0b2dldGhlciBpbnRvIGEgc2luZ2xlIHN0YXRlbWVudC5cbiAgICBjeS5nZXQoJy50b2RvLWxpc3QgbGknKVxuICAgICAgLnNob3VsZCgnaGF2ZS5sZW5ndGgnLCAzKVxuICAgICAgLmxhc3QoKVxuICAgICAgLnNob3VsZCgnaGF2ZS50ZXh0JywgbmV3SXRlbSlcbiAgfSlcblxuICBpdCgnY2FuIGNoZWNrIG9mZiBhbiBpdGVtIGFzIGNvbXBsZXRlZCcsICgpID0+IHtcbiAgICAvLyBJbiBhZGRpdGlvbiB0byB1c2luZyB0aGUgYGdldGAgY29tbWFuZCB0byBnZXQgYW4gZWxlbWVudCBieSBzZWxlY3RvcixcbiAgICAvLyB3ZSBjYW4gYWxzbyB1c2UgdGhlIGBjb250YWluc2AgY29tbWFuZCB0byBnZXQgYW4gZWxlbWVudCBieSBpdHMgY29udGVudHMuXG4gICAgLy8gSG93ZXZlciwgdGhpcyB3aWxsIHlpZWxkIHRoZSA8bGFiZWw+LCB3aGljaCBpcyBsb3dlc3QtbGV2ZWwgZWxlbWVudCB0aGF0IGNvbnRhaW5zIHRoZSB0ZXh0LlxuICAgIC8vIEluIG9yZGVyIHRvIGNoZWNrIHRoZSBpdGVtLCB3ZSdsbCBmaW5kIHRoZSA8aW5wdXQ+IGVsZW1lbnQgZm9yIHRoaXMgPGxhYmVsPlxuICAgIC8vIGJ5IHRyYXZlcnNpbmcgdXAgdGhlIGRvbSB0byB0aGUgcGFyZW50IGVsZW1lbnQuIEZyb20gdGhlcmUsIHdlIGNhbiBgZmluZGBcbiAgICAvLyB0aGUgY2hpbGQgY2hlY2tib3ggPGlucHV0PiBlbGVtZW50IGFuZCB1c2UgdGhlIGBjaGVja2AgY29tbWFuZCB0byBjaGVjayBpdC5cbiAgICBjeS5jb250YWlucygnUGF5IGVsZWN0cmljIGJpbGwnKVxuICAgICAgLnBhcmVudCgpXG4gICAgICAuZmluZCgnaW5wdXRbdHlwZT1jaGVja2JveF0nKVxuICAgICAgLmNoZWNrKClcblxuICAgIC8vIE5vdyB0aGF0IHdlJ3ZlIGNoZWNrZWQgdGhlIGJ1dHRvbiwgd2UgY2FuIGdvIGFoZWFkIGFuZCBtYWtlIHN1cmVcbiAgICAvLyB0aGF0IHRoZSBsaXN0IGVsZW1lbnQgaXMgbm93IG1hcmtlZCBhcyBjb21wbGV0ZWQuXG4gICAgLy8gQWdhaW4gd2UnbGwgdXNlIGBjb250YWluc2AgdG8gZmluZCB0aGUgPGxhYmVsPiBlbGVtZW50IGFuZCB0aGVuIHVzZSB0aGUgYHBhcmVudHNgIGNvbW1hbmRcbiAgICAvLyB0byB0cmF2ZXJzZSBtdWx0aXBsZSBsZXZlbHMgdXAgdGhlIGRvbSB1bnRpbCB3ZSBmaW5kIHRoZSBjb3JyZXNwb25kaW5nIDxsaT4gZWxlbWVudC5cbiAgICAvLyBPbmNlIHdlIGdldCB0aGF0IGVsZW1lbnQsIHdlIGNhbiBhc3NlcnQgdGhhdCBpdCBoYXMgdGhlIGNvbXBsZXRlZCBjbGFzcy5cbiAgICBjeS5jb250YWlucygnUGF5IGVsZWN0cmljIGJpbGwnKVxuICAgICAgLnBhcmVudHMoJ2xpJylcbiAgICAgIC5zaG91bGQoJ2hhdmUuY2xhc3MnLCAnY29tcGxldGVkJylcbiAgfSlcblxuICBjb250ZXh0KCd3aXRoIGEgY2hlY2tlZCB0YXNrJywgKCkgPT4ge1xuICAgIGJlZm9yZUVhY2goKCkgPT4ge1xuICAgICAgLy8gV2UnbGwgdGFrZSB0aGUgY29tbWFuZCB3ZSB1c2VkIGFib3ZlIHRvIGNoZWNrIG9mZiBhbiBlbGVtZW50XG4gICAgICAvLyBTaW5jZSB3ZSB3YW50IHRvIHBlcmZvcm0gbXVsdGlwbGUgdGVzdHMgdGhhdCBzdGFydCB3aXRoIGNoZWNraW5nXG4gICAgICAvLyBvbmUgZWxlbWVudCwgd2UgcHV0IGl0IGluIHRoZSBiZWZvcmVFYWNoIGhvb2tcbiAgICAgIC8vIHNvIHRoYXQgaXQgcnVucyBhdCB0aGUgc3RhcnQgb2YgZXZlcnkgdGVzdC5cbiAgICAgIGN5LmNvbnRhaW5zKCdQYXkgZWxlY3RyaWMgYmlsbCcpXG4gICAgICAgIC5wYXJlbnQoKVxuICAgICAgICAuZmluZCgnaW5wdXRbdHlwZT1jaGVja2JveF0nKVxuICAgICAgICAuY2hlY2soKVxuICAgIH0pXG5cbiAgICBpdCgnY2FuIGZpbHRlciBmb3IgdW5jb21wbGV0ZWQgdGFza3MnLCAoKSA9PiB7XG4gICAgICAvLyBXZSdsbCBjbGljayBvbiB0aGUgXCJhY3RpdmVcIiBidXR0b24gaW4gb3JkZXIgdG9cbiAgICAgIC8vIGRpc3BsYXkgb25seSBpbmNvbXBsZXRlIGl0ZW1zXG4gICAgICBjeS5jb250YWlucygnQWN0aXZlJykuY2xpY2soKVxuXG4gICAgICAvLyBBZnRlciBmaWx0ZXJpbmcsIHdlIGNhbiBhc3NlcnQgdGhhdCB0aGVyZSBpcyBvbmx5IHRoZSBvbmVcbiAgICAgIC8vIGluY29tcGxldGUgaXRlbSBpbiB0aGUgbGlzdC5cbiAgICAgIGN5LmdldCgnLnRvZG8tbGlzdCBsaScpXG4gICAgICAgIC5zaG91bGQoJ2hhdmUubGVuZ3RoJywgMSlcbiAgICAgICAgLmZpcnN0KClcbiAgICAgICAgLnNob3VsZCgnaGF2ZS50ZXh0JywgJ1dhbGsgdGhlIGRvZycpXG5cbiAgICAgIC8vIEZvciBnb29kIG1lYXN1cmUsIGxldCdzIGFsc28gYXNzZXJ0IHRoYXQgdGhlIHRhc2sgd2UgY2hlY2tlZCBvZmZcbiAgICAgIC8vIGRvZXMgbm90IGV4aXN0IG9uIHRoZSBwYWdlLlxuICAgICAgY3kuY29udGFpbnMoJ1BheSBlbGVjdHJpYyBiaWxsJykuc2hvdWxkKCdub3QuZXhpc3QnKVxuICAgIH0pXG5cbiAgICBpdCgnY2FuIGZpbHRlciBmb3IgY29tcGxldGVkIHRhc2tzJywgKCkgPT4ge1xuICAgICAgLy8gV2UgY2FuIHBlcmZvcm0gc2ltaWxhciBzdGVwcyBhcyB0aGUgdGVzdCBhYm92ZSB0byBlbnN1cmVcbiAgICAgIC8vIHRoYXQgb25seSBjb21wbGV0ZWQgdGFza3MgYXJlIHNob3duXG4gICAgICBjeS5jb250YWlucygnQ29tcGxldGVkJykuY2xpY2soKVxuXG4gICAgICBjeS5nZXQoJy50b2RvLWxpc3QgbGknKVxuICAgICAgICAuc2hvdWxkKCdoYXZlLmxlbmd0aCcsIDEpXG4gICAgICAgIC5maXJzdCgpXG4gICAgICAgIC5zaG91bGQoJ2hhdmUudGV4dCcsICdQYXkgZWxlY3RyaWMgYmlsbCcpXG5cbiAgICAgIGN5LmNvbnRhaW5zKCdXYWxrIHRoZSBkb2cnKS5zaG91bGQoJ25vdC5leGlzdCcpXG4gICAgfSlcblxuICAgIGl0KCdjYW4gZGVsZXRlIGFsbCBjb21wbGV0ZWQgdGFza3MnLCAoKSA9PiB7XG4gICAgICAvLyBGaXJzdCwgbGV0J3MgY2xpY2sgdGhlIFwiQ2xlYXIgY29tcGxldGVkXCIgYnV0dG9uXG4gICAgICAvLyBgY29udGFpbnNgIGlzIGFjdHVhbGx5IHNlcnZpbmcgdHdvIHB1cnBvc2VzIGhlcmUuXG4gICAgICAvLyBGaXJzdCwgaXQncyBlbnN1cmluZyB0aGF0IHRoZSBidXR0b24gZXhpc3RzIHdpdGhpbiB0aGUgZG9tLlxuICAgICAgLy8gVGhpcyBidXR0b24gb25seSBhcHBlYXJzIHdoZW4gYXQgbGVhc3Qgb25lIHRhc2sgaXMgY2hlY2tlZFxuICAgICAgLy8gc28gdGhpcyBjb21tYW5kIGlzIGltcGxpY2l0bHkgdmVyaWZ5aW5nIHRoYXQgaXQgZG9lcyBleGlzdC5cbiAgICAgIC8vIFNlY29uZCwgaXQgc2VsZWN0cyB0aGUgYnV0dG9uIHNvIHdlIGNhbiBjbGljayBpdC5cbiAgICAgIGN5LmNvbnRhaW5zKCdDbGVhciBjb21wbGV0ZWQnKS5jbGljaygpXG5cbiAgICAgIC8vIFRoZW4gd2UgY2FuIG1ha2Ugc3VyZSB0aGF0IHRoZXJlIGlzIG9ubHkgb25lIGVsZW1lbnRcbiAgICAgIC8vIGluIHRoZSBsaXN0IGFuZCBvdXIgZWxlbWVudCBkb2VzIG5vdCBleGlzdFxuICAgICAgY3kuZ2V0KCcudG9kby1saXN0IGxpJylcbiAgICAgICAgLnNob3VsZCgnaGF2ZS5sZW5ndGgnLCAxKVxuICAgICAgICAuc2hvdWxkKCdub3QuaGF2ZS50ZXh0JywgJ1BheSBlbGVjdHJpYyBiaWxsJylcblxuICAgICAgLy8gRmluYWxseSwgbWFrZSBzdXJlIHRoYXQgdGhlIGNsZWFyIGJ1dHRvbiBubyBsb25nZXIgZXhpc3RzLlxuICAgICAgY3kuY29udGFpbnMoJ0NsZWFyIGNvbXBsZXRlZCcpLnNob3VsZCgnbm90LmV4aXN0JylcbiAgICB9KVxuICB9KVxufSlcbiJdLCJuYW1lcyI6WyJkZXNjcmliZSIsImJlZm9yZUVhY2giLCJjeSIsInZpc2l0IiwiaXQiLCJnZXQiLCJzaG91bGQiLCJmaXJzdCIsImxhc3QiLCJuZXdJdGVtIiwidHlwZSIsImNvbnRhaW5zIiwicGFyZW50IiwiZmluZCIsImNoZWNrIiwicGFyZW50cyIsImNvbnRleHQiLCJjbGljayJdLCJzb3VyY2VSb290IjoiIn0=