/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!****************************************************!*\
  !*** ./cypress/e2e/2-advanced-examples/misc.cy.js ***!
  \****************************************************/


/// <reference types="cypress" />

context('Misc', () => {
  beforeEach(() => {
    cy.visit('https://example.cypress.io/commands/misc');
  });
  it('cy.exec() - execute a system command', () => {
    // execute a system command.
    // so you can take actions necessary for
    // your test outside the scope of Cypress.
    // https://on.cypress.io/exec

    // we can use Cypress.platform string to
    // select appropriate command
    // https://on.cypress/io/platform
    cy.log(`Platform ${Cypress.platform} architecture ${Cypress.arch}`);

    // on CircleCI Windows build machines we have a failure to run bash shell
    // https://github.com/cypress-io/cypress/issues/5169
    // so skip some of the tests by passing flag "--env circle=true"
    const isCircleOnWindows = Cypress.platform === 'win32' && Cypress.env('circle');
    if (isCircleOnWindows) {
      cy.log('Skipping test on CircleCI');
      return;
    }

    // cy.exec problem on Shippable CI
    // https://github.com/cypress-io/cypress/issues/6718
    const isShippable = Cypress.platform === 'linux' && Cypress.env('shippable');
    if (isShippable) {
      cy.log('Skipping test on ShippableCI');
      return;
    }
    cy.exec('echo Jane Lane').its('stdout').should('contain', 'Jane Lane');
    if (Cypress.platform === 'win32') {
      cy.exec(`print ${Cypress.config('configFile')}`).its('stderr').should('be.empty');
    } else {
      cy.exec(`cat ${Cypress.config('configFile')}`).its('stderr').should('be.empty');
      cy.exec('pwd').its('code').should('eq', 0);
    }
  });
  it('cy.focused() - get the DOM element that has focus', () => {
    // https://on.cypress.io/focused
    cy.get('.misc-form').find('#name').click();
    cy.focused().should('have.id', 'name');
    cy.get('.misc-form').find('#description').click();
    cy.focused().should('have.id', 'description');
  });
  context('Cypress.Screenshot', function () {
    it('cy.screenshot() - take a screenshot', () => {
      // https://on.cypress.io/screenshot
      cy.screenshot('my-image');
    });
    it('Cypress.Screenshot.defaults() - change default config of screenshots', function () {
      Cypress.Screenshot.defaults({
        blackout: ['.foo'],
        capture: 'viewport',
        clip: {
          x: 0,
          y: 0,
          width: 200,
          height: 200
        },
        scale: false,
        disableTimersAndAnimations: true,
        screenshotOnRunFailure: true,
        onBeforeScreenshot() {},
        onAfterScreenshot() {}
      });
    });
  });
  it('cy.wrap() - wrap an object', () => {
    // https://on.cypress.io/wrap
    cy.wrap({
      foo: 'bar'
    }).should('have.property', 'foo').and('include', 'bar');
  });
});
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QztRQUNsQkMsT0FBTyxFQUFFLFVBQVU7UUFDbkJDLElBQUksRUFBRTtVQUFFQyxDQUFDLEVBQUUsQ0FBQztVQUFFQyxDQUFDLEVBQUUsQ0FBQztVQUFFQyxLQUFLLEVBQUUsR0FBRztVQUFFQyxNQUFNLEVBQUU7UUFBSSxDQUFDO1FBQzdDQyxLQUFLLEVBQUUsS0FBSztRQUNaQywwQkFBMEIsRUFBRSxJQUFJO1FBQ2hDQyxzQkFBc0IsRUFBRSxJQUFJO1FBQzVCQyxrQkFBa0JBLENBQUEsRUFBSSxDQUFFLENBQUM7UUFDekJDLGlCQUFpQkEsQ0FBQSxFQUFJLENBQUU7TUFDekIsQ0FBQyxDQUFDO0lBQ0osQ0FBQyxDQUFDO0VBQ0osQ0FBQyxDQUFDO0VBRUY5QixFQUFFLENBQUMsNEJBQTRCLEVBQUUsTUFBTTtJQUNyQztJQUNBRixFQUFFLENBQUNpQyxJQUFJLENBQUM7TUFBRUMsR0FBRyxFQUFFO0lBQU0sQ0FBQyxDQUFDLENBQ3BCdEIsTUFBTSxDQUFDLGVBQWUsRUFBRSxLQUFLLENBQUMsQ0FDOUJ1QixHQUFHLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQztFQUMxQixDQUFDLENBQUM7QUFDSixDQUFDLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL2RvbmFjaW9uZXMvLi9jeXByZXNzL2UyZS8yLWFkdmFuY2VkLWV4YW1wbGVzL21pc2MuY3kuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgdHlwZXM9XCJjeXByZXNzXCIgLz5cblxuY29udGV4dCgnTWlzYycsICgpID0+IHtcbiAgYmVmb3JlRWFjaCgoKSA9PiB7XG4gICAgY3kudmlzaXQoJ2h0dHBzOi8vZXhhbXBsZS5jeXByZXNzLmlvL2NvbW1hbmRzL21pc2MnKVxuICB9KVxuXG4gIGl0KCdjeS5leGVjKCkgLSBleGVjdXRlIGEgc3lzdGVtIGNvbW1hbmQnLCAoKSA9PiB7XG4gICAgLy8gZXhlY3V0ZSBhIHN5c3RlbSBjb21tYW5kLlxuICAgIC8vIHNvIHlvdSBjYW4gdGFrZSBhY3Rpb25zIG5lY2Vzc2FyeSBmb3JcbiAgICAvLyB5b3VyIHRlc3Qgb3V0c2lkZSB0aGUgc2NvcGUgb2YgQ3lwcmVzcy5cbiAgICAvLyBodHRwczovL29uLmN5cHJlc3MuaW8vZXhlY1xuXG4gICAgLy8gd2UgY2FuIHVzZSBDeXByZXNzLnBsYXRmb3JtIHN0cmluZyB0b1xuICAgIC8vIHNlbGVjdCBhcHByb3ByaWF0ZSBjb21tYW5kXG4gICAgLy8gaHR0cHM6Ly9vbi5jeXByZXNzL2lvL3BsYXRmb3JtXG4gICAgY3kubG9nKGBQbGF0Zm9ybSAke0N5cHJlc3MucGxhdGZvcm19IGFyY2hpdGVjdHVyZSAke0N5cHJlc3MuYXJjaH1gKVxuXG4gICAgLy8gb24gQ2lyY2xlQ0kgV2luZG93cyBidWlsZCBtYWNoaW5lcyB3ZSBoYXZlIGEgZmFpbHVyZSB0byBydW4gYmFzaCBzaGVsbFxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9jeXByZXNzLWlvL2N5cHJlc3MvaXNzdWVzLzUxNjlcbiAgICAvLyBzbyBza2lwIHNvbWUgb2YgdGhlIHRlc3RzIGJ5IHBhc3NpbmcgZmxhZyBcIi0tZW52IGNpcmNsZT10cnVlXCJcbiAgICBjb25zdCBpc0NpcmNsZU9uV2luZG93cyA9IEN5cHJlc3MucGxhdGZvcm0gPT09ICd3aW4zMicgJiYgQ3lwcmVzcy5lbnYoJ2NpcmNsZScpXG5cbiAgICBpZiAoaXNDaXJjbGVPbldpbmRvd3MpIHtcbiAgICAgIGN5LmxvZygnU2tpcHBpbmcgdGVzdCBvbiBDaXJjbGVDSScpXG5cbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIGN5LmV4ZWMgcHJvYmxlbSBvbiBTaGlwcGFibGUgQ0lcbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vY3lwcmVzcy1pby9jeXByZXNzL2lzc3Vlcy82NzE4XG4gICAgY29uc3QgaXNTaGlwcGFibGUgPSBDeXByZXNzLnBsYXRmb3JtID09PSAnbGludXgnICYmIEN5cHJlc3MuZW52KCdzaGlwcGFibGUnKVxuXG4gICAgaWYgKGlzU2hpcHBhYmxlKSB7XG4gICAgICBjeS5sb2coJ1NraXBwaW5nIHRlc3Qgb24gU2hpcHBhYmxlQ0knKVxuXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjeS5leGVjKCdlY2hvIEphbmUgTGFuZScpXG4gICAgICAuaXRzKCdzdGRvdXQnKS5zaG91bGQoJ2NvbnRhaW4nLCAnSmFuZSBMYW5lJylcblxuICAgIGlmIChDeXByZXNzLnBsYXRmb3JtID09PSAnd2luMzInKSB7XG4gICAgICBjeS5leGVjKGBwcmludCAke0N5cHJlc3MuY29uZmlnKCdjb25maWdGaWxlJyl9YClcbiAgICAgICAgLml0cygnc3RkZXJyJykuc2hvdWxkKCdiZS5lbXB0eScpXG4gICAgfSBlbHNlIHtcbiAgICAgIGN5LmV4ZWMoYGNhdCAke0N5cHJlc3MuY29uZmlnKCdjb25maWdGaWxlJyl9YClcbiAgICAgICAgLml0cygnc3RkZXJyJykuc2hvdWxkKCdiZS5lbXB0eScpXG5cbiAgICAgIGN5LmV4ZWMoJ3B3ZCcpXG4gICAgICAgIC5pdHMoJ2NvZGUnKS5zaG91bGQoJ2VxJywgMClcbiAgICB9XG4gIH0pXG5cbiAgaXQoJ2N5LmZvY3VzZWQoKSAtIGdldCB0aGUgRE9NIGVsZW1lbnQgdGhhdCBoYXMgZm9jdXMnLCAoKSA9PiB7XG4gICAgLy8gaHR0cHM6Ly9vbi5jeXByZXNzLmlvL2ZvY3VzZWRcbiAgICBjeS5nZXQoJy5taXNjLWZvcm0nKS5maW5kKCcjbmFtZScpLmNsaWNrKClcbiAgICBjeS5mb2N1c2VkKCkuc2hvdWxkKCdoYXZlLmlkJywgJ25hbWUnKVxuXG4gICAgY3kuZ2V0KCcubWlzYy1mb3JtJykuZmluZCgnI2Rlc2NyaXB0aW9uJykuY2xpY2soKVxuICAgIGN5LmZvY3VzZWQoKS5zaG91bGQoJ2hhdmUuaWQnLCAnZGVzY3JpcHRpb24nKVxuICB9KVxuXG4gIGNvbnRleHQoJ0N5cHJlc3MuU2NyZWVuc2hvdCcsIGZ1bmN0aW9uICgpIHtcbiAgICBpdCgnY3kuc2NyZWVuc2hvdCgpIC0gdGFrZSBhIHNjcmVlbnNob3QnLCAoKSA9PiB7XG4gICAgICAvLyBodHRwczovL29uLmN5cHJlc3MuaW8vc2NyZWVuc2hvdFxuICAgICAgY3kuc2NyZWVuc2hvdCgnbXktaW1hZ2UnKVxuICAgIH0pXG5cbiAgICBpdCgnQ3lwcmVzcy5TY3JlZW5zaG90LmRlZmF1bHRzKCkgLSBjaGFuZ2UgZGVmYXVsdCBjb25maWcgb2Ygc2NyZWVuc2hvdHMnLCBmdW5jdGlvbiAoKSB7XG4gICAgICBDeXByZXNzLlNjcmVlbnNob3QuZGVmYXVsdHMoe1xuICAgICAgICBibGFja291dDogWycuZm9vJ10sXG4gICAgICAgIGNhcHR1cmU6ICd2aWV3cG9ydCcsXG4gICAgICAgIGNsaXA6IHsgeDogMCwgeTogMCwgd2lkdGg6IDIwMCwgaGVpZ2h0OiAyMDAgfSxcbiAgICAgICAgc2NhbGU6IGZhbHNlLFxuICAgICAgICBkaXNhYmxlVGltZXJzQW5kQW5pbWF0aW9uczogdHJ1ZSxcbiAgICAgICAgc2NyZWVuc2hvdE9uUnVuRmFpbHVyZTogdHJ1ZSxcbiAgICAgICAgb25CZWZvcmVTY3JlZW5zaG90ICgpIHsgfSxcbiAgICAgICAgb25BZnRlclNjcmVlbnNob3QgKCkgeyB9LFxuICAgICAgfSlcbiAgICB9KVxuICB9KVxuXG4gIGl0KCdjeS53cmFwKCkgLSB3cmFwIGFuIG9iamVjdCcsICgpID0+IHtcbiAgICAvLyBodHRwczovL29uLmN5cHJlc3MuaW8vd3JhcFxuICAgIGN5LndyYXAoeyBmb286ICdiYXInIH0pXG4gICAgICAuc2hvdWxkKCdoYXZlLnByb3BlcnR5JywgJ2ZvbycpXG4gICAgICAuYW5kKCdpbmNsdWRlJywgJ2JhcicpXG4gIH0pXG59KVxuIl0sIm5hbWVzIjpbImNvbnRleHQiLCJiZWZvcmVFYWNoIiwiY3kiLCJ2aXNpdCIsIml0IiwibG9nIiwiQ3lwcmVzcyIsInBsYXRmb3JtIiwiYXJjaCIsImlzQ2lyY2xlT25XaW5kb3dzIiwiZW52IiwiaXNTaGlwcGFibGUiLCJleGVjIiwiaXRzIiwic2hvdWxkIiwiY29uZmlnIiwiZ2V0IiwiZmluZCIsImNsaWNrIiwiZm9jdXNlZCIsInNjcmVlbnNob3QiLCJTY3JlZW5zaG90IiwiZGVmYXVsdHMiLCJibGFja291dCIsImNhcHR1cmUiLCJjbGlwIiwieCIsInkiLCJ3aWR0aCIsImhlaWdodCIsInNjYWxlIiwiZGlzYWJsZVRpbWVyc0FuZEFuaW1hdGlvbnMiLCJzY3JlZW5zaG90T25SdW5GYWlsdXJlIiwib25CZWZvcmVTY3JlZW5zaG90Iiwib25BZnRlclNjcmVlbnNob3QiLCJ3cmFwIiwiZm9vIiwiYW5kIl0sInNvdXJjZVJvb3QiOiIifQ==