/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!********************************************************!*\
  !*** ./cypress/e2e/2-advanced-examples/viewport.cy.js ***!
  \********************************************************/


/// <reference types="cypress" />
context('Viewport', () => {
  beforeEach(() => {
    cy.visit('https://example.cypress.io/commands/viewport');
  });
  it('cy.viewport() - set the viewport size and dimension', () => {
    // https://on.cypress.io/viewport

    cy.get('#navbar').should('be.visible');
    cy.viewport(320, 480);

    // the navbar should have collapse since our screen is smaller
    cy.get('#navbar').should('not.be.visible');
    cy.get('.navbar-toggle').should('be.visible').click();
    cy.get('.nav').find('a').should('be.visible');

    // lets see what our app looks like on a super large screen
    cy.viewport(2999, 2999);

    // cy.viewport() accepts a set of preset sizes
    // to easily set the screen to a device's width and height

    // We added a cy.wait() between each viewport change so you can see
    // the change otherwise it is a little too fast to see :)

    cy.viewport('macbook-15');
    cy.wait(200);
    cy.viewport('macbook-13');
    cy.wait(200);
    cy.viewport('macbook-11');
    cy.wait(200);
    cy.viewport('ipad-2');
    cy.wait(200);
    cy.viewport('ipad-mini');
    cy.wait(200);
    cy.viewport('iphone-6+');
    cy.wait(200);
    cy.viewport('iphone-6');
    cy.wait(200);
    cy.viewport('iphone-5');
    cy.wait(200);
    cy.viewport('iphone-4');
    cy.wait(200);
    cy.viewport('iphone-3');
    cy.wait(200);

    // cy.viewport() accepts an orientation for all presets
    // the default orientation is 'portrait'
    cy.viewport('ipad-2', 'portrait');
    cy.wait(200);
    cy.viewport('iphone-4', 'landscape');
    cy.wait(200);

    // The viewport will be reset back to the default dimensions
    // in between tests (the  default can be set in cypress.config.{js|ts})
  });
});
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlld3BvcnQuY3kuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBQSxPQUFPLENBQUMsVUFBVSxFQUFFLE1BQU07RUFDeEJDLFVBQVUsQ0FBQyxNQUFNO0lBQ2ZDLEVBQUUsQ0FBQ0MsS0FBSyxDQUFDLDhDQUE4QyxDQUFDO0VBQzFELENBQUMsQ0FBQztFQUVGQyxFQUFFLENBQUMscURBQXFELEVBQUUsTUFBTTtJQUM5RDs7SUFFQUYsRUFBRSxDQUFDRyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUNDLE1BQU0sQ0FBQyxZQUFZLENBQUM7SUFDdENKLEVBQUUsQ0FBQ0ssUUFBUSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7O0lBRXJCO0lBQ0FMLEVBQUUsQ0FBQ0csR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDQyxNQUFNLENBQUMsZ0JBQWdCLENBQUM7SUFDMUNKLEVBQUUsQ0FBQ0csR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUNDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQ0UsS0FBSyxDQUFDLENBQUM7SUFDckROLEVBQUUsQ0FBQ0csR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDSSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUNILE1BQU0sQ0FBQyxZQUFZLENBQUM7O0lBRTdDO0lBQ0FKLEVBQUUsQ0FBQ0ssUUFBUSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUM7O0lBRXZCO0lBQ0E7O0lBRUE7SUFDQTs7SUFFQUwsRUFBRSxDQUFDSyxRQUFRLENBQUMsWUFBWSxDQUFDO0lBQ3pCTCxFQUFFLENBQUNRLElBQUksQ0FBQyxHQUFHLENBQUM7SUFDWlIsRUFBRSxDQUFDSyxRQUFRLENBQUMsWUFBWSxDQUFDO0lBQ3pCTCxFQUFFLENBQUNRLElBQUksQ0FBQyxHQUFHLENBQUM7SUFDWlIsRUFBRSxDQUFDSyxRQUFRLENBQUMsWUFBWSxDQUFDO0lBQ3pCTCxFQUFFLENBQUNRLElBQUksQ0FBQyxHQUFHLENBQUM7SUFDWlIsRUFBRSxDQUFDSyxRQUFRLENBQUMsUUFBUSxDQUFDO0lBQ3JCTCxFQUFFLENBQUNRLElBQUksQ0FBQyxHQUFHLENBQUM7SUFDWlIsRUFBRSxDQUFDSyxRQUFRLENBQUMsV0FBVyxDQUFDO0lBQ3hCTCxFQUFFLENBQUNRLElBQUksQ0FBQyxHQUFHLENBQUM7SUFDWlIsRUFBRSxDQUFDSyxRQUFRLENBQUMsV0FBVyxDQUFDO0lBQ3hCTCxFQUFFLENBQUNRLElBQUksQ0FBQyxHQUFHLENBQUM7SUFDWlIsRUFBRSxDQUFDSyxRQUFRLENBQUMsVUFBVSxDQUFDO0lBQ3ZCTCxFQUFFLENBQUNRLElBQUksQ0FBQyxHQUFHLENBQUM7SUFDWlIsRUFBRSxDQUFDSyxRQUFRLENBQUMsVUFBVSxDQUFDO0lBQ3ZCTCxFQUFFLENBQUNRLElBQUksQ0FBQyxHQUFHLENBQUM7SUFDWlIsRUFBRSxDQUFDSyxRQUFRLENBQUMsVUFBVSxDQUFDO0lBQ3ZCTCxFQUFFLENBQUNRLElBQUksQ0FBQyxHQUFHLENBQUM7SUFDWlIsRUFBRSxDQUFDSyxRQUFRLENBQUMsVUFBVSxDQUFDO0lBQ3ZCTCxFQUFFLENBQUNRLElBQUksQ0FBQyxHQUFHLENBQUM7O0lBRVo7SUFDQTtJQUNBUixFQUFFLENBQUNLLFFBQVEsQ0FBQyxRQUFRLEVBQUUsVUFBVSxDQUFDO0lBQ2pDTCxFQUFFLENBQUNRLElBQUksQ0FBQyxHQUFHLENBQUM7SUFDWlIsRUFBRSxDQUFDSyxRQUFRLENBQUMsVUFBVSxFQUFFLFdBQVcsQ0FBQztJQUNwQ0wsRUFBRSxDQUFDUSxJQUFJLENBQUMsR0FBRyxDQUFDOztJQUVaO0lBQ0E7RUFDRixDQUFDLENBQUM7QUFDSixDQUFDLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL2RvbmFjaW9uZXMvLi9jeXByZXNzL2UyZS8yLWFkdmFuY2VkLWV4YW1wbGVzL3ZpZXdwb3J0LmN5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHR5cGVzPVwiY3lwcmVzc1wiIC8+XG5jb250ZXh0KCdWaWV3cG9ydCcsICgpID0+IHtcbiAgYmVmb3JlRWFjaCgoKSA9PiB7XG4gICAgY3kudmlzaXQoJ2h0dHBzOi8vZXhhbXBsZS5jeXByZXNzLmlvL2NvbW1hbmRzL3ZpZXdwb3J0JylcbiAgfSlcblxuICBpdCgnY3kudmlld3BvcnQoKSAtIHNldCB0aGUgdmlld3BvcnQgc2l6ZSBhbmQgZGltZW5zaW9uJywgKCkgPT4ge1xuICAgIC8vIGh0dHBzOi8vb24uY3lwcmVzcy5pby92aWV3cG9ydFxuXG4gICAgY3kuZ2V0KCcjbmF2YmFyJykuc2hvdWxkKCdiZS52aXNpYmxlJylcbiAgICBjeS52aWV3cG9ydCgzMjAsIDQ4MClcblxuICAgIC8vIHRoZSBuYXZiYXIgc2hvdWxkIGhhdmUgY29sbGFwc2Ugc2luY2Ugb3VyIHNjcmVlbiBpcyBzbWFsbGVyXG4gICAgY3kuZ2V0KCcjbmF2YmFyJykuc2hvdWxkKCdub3QuYmUudmlzaWJsZScpXG4gICAgY3kuZ2V0KCcubmF2YmFyLXRvZ2dsZScpLnNob3VsZCgnYmUudmlzaWJsZScpLmNsaWNrKClcbiAgICBjeS5nZXQoJy5uYXYnKS5maW5kKCdhJykuc2hvdWxkKCdiZS52aXNpYmxlJylcblxuICAgIC8vIGxldHMgc2VlIHdoYXQgb3VyIGFwcCBsb29rcyBsaWtlIG9uIGEgc3VwZXIgbGFyZ2Ugc2NyZWVuXG4gICAgY3kudmlld3BvcnQoMjk5OSwgMjk5OSlcblxuICAgIC8vIGN5LnZpZXdwb3J0KCkgYWNjZXB0cyBhIHNldCBvZiBwcmVzZXQgc2l6ZXNcbiAgICAvLyB0byBlYXNpbHkgc2V0IHRoZSBzY3JlZW4gdG8gYSBkZXZpY2UncyB3aWR0aCBhbmQgaGVpZ2h0XG5cbiAgICAvLyBXZSBhZGRlZCBhIGN5LndhaXQoKSBiZXR3ZWVuIGVhY2ggdmlld3BvcnQgY2hhbmdlIHNvIHlvdSBjYW4gc2VlXG4gICAgLy8gdGhlIGNoYW5nZSBvdGhlcndpc2UgaXQgaXMgYSBsaXR0bGUgdG9vIGZhc3QgdG8gc2VlIDopXG5cbiAgICBjeS52aWV3cG9ydCgnbWFjYm9vay0xNScpXG4gICAgY3kud2FpdCgyMDApXG4gICAgY3kudmlld3BvcnQoJ21hY2Jvb2stMTMnKVxuICAgIGN5LndhaXQoMjAwKVxuICAgIGN5LnZpZXdwb3J0KCdtYWNib29rLTExJylcbiAgICBjeS53YWl0KDIwMClcbiAgICBjeS52aWV3cG9ydCgnaXBhZC0yJylcbiAgICBjeS53YWl0KDIwMClcbiAgICBjeS52aWV3cG9ydCgnaXBhZC1taW5pJylcbiAgICBjeS53YWl0KDIwMClcbiAgICBjeS52aWV3cG9ydCgnaXBob25lLTYrJylcbiAgICBjeS53YWl0KDIwMClcbiAgICBjeS52aWV3cG9ydCgnaXBob25lLTYnKVxuICAgIGN5LndhaXQoMjAwKVxuICAgIGN5LnZpZXdwb3J0KCdpcGhvbmUtNScpXG4gICAgY3kud2FpdCgyMDApXG4gICAgY3kudmlld3BvcnQoJ2lwaG9uZS00JylcbiAgICBjeS53YWl0KDIwMClcbiAgICBjeS52aWV3cG9ydCgnaXBob25lLTMnKVxuICAgIGN5LndhaXQoMjAwKVxuXG4gICAgLy8gY3kudmlld3BvcnQoKSBhY2NlcHRzIGFuIG9yaWVudGF0aW9uIGZvciBhbGwgcHJlc2V0c1xuICAgIC8vIHRoZSBkZWZhdWx0IG9yaWVudGF0aW9uIGlzICdwb3J0cmFpdCdcbiAgICBjeS52aWV3cG9ydCgnaXBhZC0yJywgJ3BvcnRyYWl0JylcbiAgICBjeS53YWl0KDIwMClcbiAgICBjeS52aWV3cG9ydCgnaXBob25lLTQnLCAnbGFuZHNjYXBlJylcbiAgICBjeS53YWl0KDIwMClcblxuICAgIC8vIFRoZSB2aWV3cG9ydCB3aWxsIGJlIHJlc2V0IGJhY2sgdG8gdGhlIGRlZmF1bHQgZGltZW5zaW9uc1xuICAgIC8vIGluIGJldHdlZW4gdGVzdHMgKHRoZSAgZGVmYXVsdCBjYW4gYmUgc2V0IGluIGN5cHJlc3MuY29uZmlnLntqc3x0c30pXG4gIH0pXG59KVxuIl0sIm5hbWVzIjpbImNvbnRleHQiLCJiZWZvcmVFYWNoIiwiY3kiLCJ2aXNpdCIsIml0IiwiZ2V0Iiwic2hvdWxkIiwidmlld3BvcnQiLCJjbGljayIsImZpbmQiLCJ3YWl0Il0sInNvdXJjZVJvb3QiOiIifQ==