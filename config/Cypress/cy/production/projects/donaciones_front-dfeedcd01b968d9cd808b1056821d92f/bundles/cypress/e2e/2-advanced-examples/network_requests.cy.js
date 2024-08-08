/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!****************************************************************!*\
  !*** ./cypress/e2e/2-advanced-examples/network_requests.cy.js ***!
  \****************************************************************/


/// <reference types="cypress" />

context('Network Requests', () => {
  beforeEach(() => {
    cy.visit('https://example.cypress.io/commands/network-requests');
  });

  // Manage HTTP requests in your app

  it('cy.request() - make an XHR request', () => {
    // https://on.cypress.io/request
    cy.request('https://jsonplaceholder.cypress.io/comments').should(response => {
      expect(response.status).to.eq(200);
      // the server sometimes gets an extra comment posted from another machine
      // which gets returned as 1 extra object
      expect(response.body).to.have.property('length').and.be.oneOf([500, 501]);
      expect(response).to.have.property('headers');
      expect(response).to.have.property('duration');
    });
  });
  it('cy.request() - verify response using BDD syntax', () => {
    cy.request('https://jsonplaceholder.cypress.io/comments').then(response => {
      // https://on.cypress.io/assertions
      expect(response).property('status').to.equal(200);
      expect(response).property('body').to.have.property('length').and.be.oneOf([500, 501]);
      expect(response).to.include.keys('headers', 'duration');
    });
  });
  it('cy.request() with query parameters', () => {
    // will execute request
    // https://jsonplaceholder.cypress.io/comments?postId=1&id=3
    cy.request({
      url: 'https://jsonplaceholder.cypress.io/comments',
      qs: {
        postId: 1,
        id: 3
      }
    }).its('body').should('be.an', 'array').and('have.length', 1).its('0') // yields first element of the array
    .should('contain', {
      postId: 1,
      id: 3
    });
  });
  it('cy.request() - pass result to the second request', () => {
    // first, let's find out the userId of the first user we have
    cy.request('https://jsonplaceholder.cypress.io/users?_limit=1').its('body') // yields the response object
    .its('0') // yields the first element of the returned list
    // the above two commands its('body').its('0')
    // can be written as its('body.0')
    // if you do not care about TypeScript checks
    .then(user => {
      expect(user).property('id').to.be.a('number');
      // make a new post on behalf of the user
      cy.request('POST', 'https://jsonplaceholder.cypress.io/posts', {
        userId: user.id,
        title: 'Cypress Test Runner',
        body: 'Fast, easy and reliable testing for anything that runs in a browser.'
      });
    })
    // note that the value here is the returned value of the 2nd request
    // which is the new post object
    .then(response => {
      expect(response).property('status').to.equal(201); // new entity created
      expect(response).property('body').to.contain({
        title: 'Cypress Test Runner'
      });

      // we don't know the exact post id - only that it will be > 100
      // since JSONPlaceholder has built-in 100 posts
      expect(response.body).property('id').to.be.a('number').and.to.be.gt(100);

      // we don't know the user id here - since it was in above closure
      // so in this test just confirm that the property is there
      expect(response.body).property('userId').to.be.a('number');
    });
  });
  it('cy.request() - save response in the shared test context', () => {
    // https://on.cypress.io/variables-and-aliases
    cy.request('https://jsonplaceholder.cypress.io/users?_limit=1').its('body').its('0') // yields the first element of the returned list
    .as('user') // saves the object in the test context
    .then(function () {
      // NOTE 👀
      //  By the time this callback runs the "as('user')" command
      //  has saved the user object in the test context.
      //  To access the test context we need to use
      //  the "function () { ... }" callback form,
      //  otherwise "this" points at a wrong or undefined object!
      cy.request('POST', 'https://jsonplaceholder.cypress.io/posts', {
        userId: this.user.id,
        title: 'Cypress Test Runner',
        body: 'Fast, easy and reliable testing for anything that runs in a browser.'
      }).its('body').as('post'); // save the new post from the response
    }).then(function () {
      // When this callback runs, both "cy.request" API commands have finished
      // and the test context has "user" and "post" objects set.
      // Let's verify them.
      expect(this.post, 'post has the right user id').property('userId').to.equal(this.user.id);
    });
  });
  it('cy.intercept() - route responses to matching requests', () => {
    // https://on.cypress.io/intercept

    let message = 'whoa, this comment does not exist';

    // Listen to GET to comments/1
    cy.intercept('GET', '**/comments/*').as('getComment');

    // we have code that gets a comment when
    // the button is clicked in scripts.js
    cy.get('.network-btn').click();

    // https://on.cypress.io/wait
    cy.wait('@getComment').its('response.statusCode').should('be.oneOf', [200, 304]);

    // Listen to POST to comments
    cy.intercept('POST', '**/comments').as('postComment');

    // we have code that posts a comment when
    // the button is clicked in scripts.js
    cy.get('.network-post').click();
    cy.wait('@postComment').should(({
      request,
      response
    }) => {
      expect(request.body).to.include('email');
      expect(request.headers).to.have.property('content-type');
      expect(response && response.body).to.have.property('name', 'Using POST in cy.intercept()');
    });

    // Stub a response to PUT comments/ ****
    cy.intercept({
      method: 'PUT',
      url: '**/comments/*'
    }, {
      statusCode: 404,
      body: {
        error: message
      },
      headers: {
        'access-control-allow-origin': '*'
      },
      delayMs: 500
    }).as('putComment');

    // we have code that puts a comment when
    // the button is clicked in scripts.js
    cy.get('.network-put').click();
    cy.wait('@putComment');

    // our 404 statusCode logic in scripts.js executed
    cy.get('.network-put-comment').should('contain', message);
  });
});
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDLGNBQWMsQ0FBQyxDQUFDQyxLQUFLLENBQUMsQ0FBQztJQUU5QnBDLEVBQUUsQ0FBQ3FDLElBQUksQ0FBQyxhQUFhLENBQUM7O0lBRXRCO0lBQ0FyQyxFQUFFLENBQUNtQyxHQUFHLENBQUMsc0JBQXNCLENBQUMsQ0FBQy9CLE1BQU0sQ0FBQyxTQUFTLEVBQUU2QixPQUFPLENBQUM7RUFDM0QsQ0FBQyxDQUFDO0FBQ0osQ0FBQyxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kb25hY2lvbmVzLy4vY3lwcmVzcy9lMmUvMi1hZHZhbmNlZC1leGFtcGxlcy9uZXR3b3JrX3JlcXVlc3RzLmN5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHR5cGVzPVwiY3lwcmVzc1wiIC8+XG5cbmNvbnRleHQoJ05ldHdvcmsgUmVxdWVzdHMnLCAoKSA9PiB7XG4gIGJlZm9yZUVhY2goKCkgPT4ge1xuICAgIGN5LnZpc2l0KCdodHRwczovL2V4YW1wbGUuY3lwcmVzcy5pby9jb21tYW5kcy9uZXR3b3JrLXJlcXVlc3RzJylcbiAgfSlcblxuICAvLyBNYW5hZ2UgSFRUUCByZXF1ZXN0cyBpbiB5b3VyIGFwcFxuXG4gIGl0KCdjeS5yZXF1ZXN0KCkgLSBtYWtlIGFuIFhIUiByZXF1ZXN0JywgKCkgPT4ge1xuICAgIC8vIGh0dHBzOi8vb24uY3lwcmVzcy5pby9yZXF1ZXN0XG4gICAgY3kucmVxdWVzdCgnaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIuY3lwcmVzcy5pby9jb21tZW50cycpXG4gICAgICAuc2hvdWxkKChyZXNwb25zZSkgPT4ge1xuICAgICAgICBleHBlY3QocmVzcG9uc2Uuc3RhdHVzKS50by5lcSgyMDApXG4gICAgICAgIC8vIHRoZSBzZXJ2ZXIgc29tZXRpbWVzIGdldHMgYW4gZXh0cmEgY29tbWVudCBwb3N0ZWQgZnJvbSBhbm90aGVyIG1hY2hpbmVcbiAgICAgICAgLy8gd2hpY2ggZ2V0cyByZXR1cm5lZCBhcyAxIGV4dHJhIG9iamVjdFxuICAgICAgICBleHBlY3QocmVzcG9uc2UuYm9keSkudG8uaGF2ZS5wcm9wZXJ0eSgnbGVuZ3RoJykuYW5kLmJlLm9uZU9mKFs1MDAsIDUwMV0pXG4gICAgICAgIGV4cGVjdChyZXNwb25zZSkudG8uaGF2ZS5wcm9wZXJ0eSgnaGVhZGVycycpXG4gICAgICAgIGV4cGVjdChyZXNwb25zZSkudG8uaGF2ZS5wcm9wZXJ0eSgnZHVyYXRpb24nKVxuICAgICAgfSlcbiAgfSlcblxuICBpdCgnY3kucmVxdWVzdCgpIC0gdmVyaWZ5IHJlc3BvbnNlIHVzaW5nIEJERCBzeW50YXgnLCAoKSA9PiB7XG4gICAgY3kucmVxdWVzdCgnaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIuY3lwcmVzcy5pby9jb21tZW50cycpXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAvLyBodHRwczovL29uLmN5cHJlc3MuaW8vYXNzZXJ0aW9uc1xuICAgICAgZXhwZWN0KHJlc3BvbnNlKS5wcm9wZXJ0eSgnc3RhdHVzJykudG8uZXF1YWwoMjAwKVxuICAgICAgZXhwZWN0KHJlc3BvbnNlKS5wcm9wZXJ0eSgnYm9keScpLnRvLmhhdmUucHJvcGVydHkoJ2xlbmd0aCcpLmFuZC5iZS5vbmVPZihbNTAwLCA1MDFdKVxuICAgICAgZXhwZWN0KHJlc3BvbnNlKS50by5pbmNsdWRlLmtleXMoJ2hlYWRlcnMnLCAnZHVyYXRpb24nKVxuICAgIH0pXG4gIH0pXG5cbiAgaXQoJ2N5LnJlcXVlc3QoKSB3aXRoIHF1ZXJ5IHBhcmFtZXRlcnMnLCAoKSA9PiB7XG4gICAgLy8gd2lsbCBleGVjdXRlIHJlcXVlc3RcbiAgICAvLyBodHRwczovL2pzb25wbGFjZWhvbGRlci5jeXByZXNzLmlvL2NvbW1lbnRzP3Bvc3RJZD0xJmlkPTNcbiAgICBjeS5yZXF1ZXN0KHtcbiAgICAgIHVybDogJ2h0dHBzOi8vanNvbnBsYWNlaG9sZGVyLmN5cHJlc3MuaW8vY29tbWVudHMnLFxuICAgICAgcXM6IHtcbiAgICAgICAgcG9zdElkOiAxLFxuICAgICAgICBpZDogMyxcbiAgICAgIH0sXG4gICAgfSlcbiAgICAuaXRzKCdib2R5JylcbiAgICAuc2hvdWxkKCdiZS5hbicsICdhcnJheScpXG4gICAgLmFuZCgnaGF2ZS5sZW5ndGgnLCAxKVxuICAgIC5pdHMoJzAnKSAvLyB5aWVsZHMgZmlyc3QgZWxlbWVudCBvZiB0aGUgYXJyYXlcbiAgICAuc2hvdWxkKCdjb250YWluJywge1xuICAgICAgcG9zdElkOiAxLFxuICAgICAgaWQ6IDMsXG4gICAgfSlcbiAgfSlcblxuICBpdCgnY3kucmVxdWVzdCgpIC0gcGFzcyByZXN1bHQgdG8gdGhlIHNlY29uZCByZXF1ZXN0JywgKCkgPT4ge1xuICAgIC8vIGZpcnN0LCBsZXQncyBmaW5kIG91dCB0aGUgdXNlcklkIG9mIHRoZSBmaXJzdCB1c2VyIHdlIGhhdmVcbiAgICBjeS5yZXF1ZXN0KCdodHRwczovL2pzb25wbGFjZWhvbGRlci5jeXByZXNzLmlvL3VzZXJzP19saW1pdD0xJylcbiAgICAgIC5pdHMoJ2JvZHknKSAvLyB5aWVsZHMgdGhlIHJlc3BvbnNlIG9iamVjdFxuICAgICAgLml0cygnMCcpIC8vIHlpZWxkcyB0aGUgZmlyc3QgZWxlbWVudCBvZiB0aGUgcmV0dXJuZWQgbGlzdFxuICAgICAgLy8gdGhlIGFib3ZlIHR3byBjb21tYW5kcyBpdHMoJ2JvZHknKS5pdHMoJzAnKVxuICAgICAgLy8gY2FuIGJlIHdyaXR0ZW4gYXMgaXRzKCdib2R5LjAnKVxuICAgICAgLy8gaWYgeW91IGRvIG5vdCBjYXJlIGFib3V0IFR5cGVTY3JpcHQgY2hlY2tzXG4gICAgICAudGhlbigodXNlcikgPT4ge1xuICAgICAgICBleHBlY3QodXNlcikucHJvcGVydHkoJ2lkJykudG8uYmUuYSgnbnVtYmVyJylcbiAgICAgICAgLy8gbWFrZSBhIG5ldyBwb3N0IG9uIGJlaGFsZiBvZiB0aGUgdXNlclxuICAgICAgICBjeS5yZXF1ZXN0KCdQT1NUJywgJ2h0dHBzOi8vanNvbnBsYWNlaG9sZGVyLmN5cHJlc3MuaW8vcG9zdHMnLCB7XG4gICAgICAgICAgdXNlcklkOiB1c2VyLmlkLFxuICAgICAgICAgIHRpdGxlOiAnQ3lwcmVzcyBUZXN0IFJ1bm5lcicsXG4gICAgICAgICAgYm9keTogJ0Zhc3QsIGVhc3kgYW5kIHJlbGlhYmxlIHRlc3RpbmcgZm9yIGFueXRoaW5nIHRoYXQgcnVucyBpbiBhIGJyb3dzZXIuJyxcbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgICAvLyBub3RlIHRoYXQgdGhlIHZhbHVlIGhlcmUgaXMgdGhlIHJldHVybmVkIHZhbHVlIG9mIHRoZSAybmQgcmVxdWVzdFxuICAgICAgLy8gd2hpY2ggaXMgdGhlIG5ldyBwb3N0IG9iamVjdFxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIGV4cGVjdChyZXNwb25zZSkucHJvcGVydHkoJ3N0YXR1cycpLnRvLmVxdWFsKDIwMSkgLy8gbmV3IGVudGl0eSBjcmVhdGVkXG4gICAgICAgIGV4cGVjdChyZXNwb25zZSkucHJvcGVydHkoJ2JvZHknKS50by5jb250YWluKHtcbiAgICAgICAgICB0aXRsZTogJ0N5cHJlc3MgVGVzdCBSdW5uZXInLFxuICAgICAgICB9KVxuXG4gICAgICAgIC8vIHdlIGRvbid0IGtub3cgdGhlIGV4YWN0IHBvc3QgaWQgLSBvbmx5IHRoYXQgaXQgd2lsbCBiZSA+IDEwMFxuICAgICAgICAvLyBzaW5jZSBKU09OUGxhY2Vob2xkZXIgaGFzIGJ1aWx0LWluIDEwMCBwb3N0c1xuICAgICAgICBleHBlY3QocmVzcG9uc2UuYm9keSkucHJvcGVydHkoJ2lkJykudG8uYmUuYSgnbnVtYmVyJylcbiAgICAgICAgICAuYW5kLnRvLmJlLmd0KDEwMClcblxuICAgICAgICAvLyB3ZSBkb24ndCBrbm93IHRoZSB1c2VyIGlkIGhlcmUgLSBzaW5jZSBpdCB3YXMgaW4gYWJvdmUgY2xvc3VyZVxuICAgICAgICAvLyBzbyBpbiB0aGlzIHRlc3QganVzdCBjb25maXJtIHRoYXQgdGhlIHByb3BlcnR5IGlzIHRoZXJlXG4gICAgICAgIGV4cGVjdChyZXNwb25zZS5ib2R5KS5wcm9wZXJ0eSgndXNlcklkJykudG8uYmUuYSgnbnVtYmVyJylcbiAgICAgIH0pXG4gIH0pXG5cbiAgaXQoJ2N5LnJlcXVlc3QoKSAtIHNhdmUgcmVzcG9uc2UgaW4gdGhlIHNoYXJlZCB0ZXN0IGNvbnRleHQnLCAoKSA9PiB7XG4gICAgLy8gaHR0cHM6Ly9vbi5jeXByZXNzLmlvL3ZhcmlhYmxlcy1hbmQtYWxpYXNlc1xuICAgIGN5LnJlcXVlc3QoJ2h0dHBzOi8vanNvbnBsYWNlaG9sZGVyLmN5cHJlc3MuaW8vdXNlcnM/X2xpbWl0PTEnKVxuICAgICAgLml0cygnYm9keScpLml0cygnMCcpIC8vIHlpZWxkcyB0aGUgZmlyc3QgZWxlbWVudCBvZiB0aGUgcmV0dXJuZWQgbGlzdFxuICAgICAgLmFzKCd1c2VyJykgLy8gc2F2ZXMgdGhlIG9iamVjdCBpbiB0aGUgdGVzdCBjb250ZXh0XG4gICAgICAudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIE5PVEUg8J+RgFxuICAgICAgICAvLyAgQnkgdGhlIHRpbWUgdGhpcyBjYWxsYmFjayBydW5zIHRoZSBcImFzKCd1c2VyJylcIiBjb21tYW5kXG4gICAgICAgIC8vICBoYXMgc2F2ZWQgdGhlIHVzZXIgb2JqZWN0IGluIHRoZSB0ZXN0IGNvbnRleHQuXG4gICAgICAgIC8vICBUbyBhY2Nlc3MgdGhlIHRlc3QgY29udGV4dCB3ZSBuZWVkIHRvIHVzZVxuICAgICAgICAvLyAgdGhlIFwiZnVuY3Rpb24gKCkgeyAuLi4gfVwiIGNhbGxiYWNrIGZvcm0sXG4gICAgICAgIC8vICBvdGhlcndpc2UgXCJ0aGlzXCIgcG9pbnRzIGF0IGEgd3Jvbmcgb3IgdW5kZWZpbmVkIG9iamVjdCFcbiAgICAgICAgY3kucmVxdWVzdCgnUE9TVCcsICdodHRwczovL2pzb25wbGFjZWhvbGRlci5jeXByZXNzLmlvL3Bvc3RzJywge1xuICAgICAgICAgIHVzZXJJZDogdGhpcy51c2VyLmlkLFxuICAgICAgICAgIHRpdGxlOiAnQ3lwcmVzcyBUZXN0IFJ1bm5lcicsXG4gICAgICAgICAgYm9keTogJ0Zhc3QsIGVhc3kgYW5kIHJlbGlhYmxlIHRlc3RpbmcgZm9yIGFueXRoaW5nIHRoYXQgcnVucyBpbiBhIGJyb3dzZXIuJyxcbiAgICAgICAgfSlcbiAgICAgICAgLml0cygnYm9keScpLmFzKCdwb3N0JykgLy8gc2F2ZSB0aGUgbmV3IHBvc3QgZnJvbSB0aGUgcmVzcG9uc2VcbiAgICAgIH0pXG4gICAgICAudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIFdoZW4gdGhpcyBjYWxsYmFjayBydW5zLCBib3RoIFwiY3kucmVxdWVzdFwiIEFQSSBjb21tYW5kcyBoYXZlIGZpbmlzaGVkXG4gICAgICAgIC8vIGFuZCB0aGUgdGVzdCBjb250ZXh0IGhhcyBcInVzZXJcIiBhbmQgXCJwb3N0XCIgb2JqZWN0cyBzZXQuXG4gICAgICAgIC8vIExldCdzIHZlcmlmeSB0aGVtLlxuICAgICAgICBleHBlY3QodGhpcy5wb3N0LCAncG9zdCBoYXMgdGhlIHJpZ2h0IHVzZXIgaWQnKS5wcm9wZXJ0eSgndXNlcklkJykudG8uZXF1YWwodGhpcy51c2VyLmlkKVxuICAgICAgfSlcbiAgfSlcblxuICBpdCgnY3kuaW50ZXJjZXB0KCkgLSByb3V0ZSByZXNwb25zZXMgdG8gbWF0Y2hpbmcgcmVxdWVzdHMnLCAoKSA9PiB7XG4gICAgLy8gaHR0cHM6Ly9vbi5jeXByZXNzLmlvL2ludGVyY2VwdFxuXG4gICAgbGV0IG1lc3NhZ2UgPSAnd2hvYSwgdGhpcyBjb21tZW50IGRvZXMgbm90IGV4aXN0J1xuXG4gICAgLy8gTGlzdGVuIHRvIEdFVCB0byBjb21tZW50cy8xXG4gICAgY3kuaW50ZXJjZXB0KCdHRVQnLCAnKiovY29tbWVudHMvKicpLmFzKCdnZXRDb21tZW50JylcblxuICAgIC8vIHdlIGhhdmUgY29kZSB0aGF0IGdldHMgYSBjb21tZW50IHdoZW5cbiAgICAvLyB0aGUgYnV0dG9uIGlzIGNsaWNrZWQgaW4gc2NyaXB0cy5qc1xuICAgIGN5LmdldCgnLm5ldHdvcmstYnRuJykuY2xpY2soKVxuXG4gICAgLy8gaHR0cHM6Ly9vbi5jeXByZXNzLmlvL3dhaXRcbiAgICBjeS53YWl0KCdAZ2V0Q29tbWVudCcpLml0cygncmVzcG9uc2Uuc3RhdHVzQ29kZScpLnNob3VsZCgnYmUub25lT2YnLCBbMjAwLCAzMDRdKVxuXG4gICAgLy8gTGlzdGVuIHRvIFBPU1QgdG8gY29tbWVudHNcbiAgICBjeS5pbnRlcmNlcHQoJ1BPU1QnLCAnKiovY29tbWVudHMnKS5hcygncG9zdENvbW1lbnQnKVxuXG4gICAgLy8gd2UgaGF2ZSBjb2RlIHRoYXQgcG9zdHMgYSBjb21tZW50IHdoZW5cbiAgICAvLyB0aGUgYnV0dG9uIGlzIGNsaWNrZWQgaW4gc2NyaXB0cy5qc1xuICAgIGN5LmdldCgnLm5ldHdvcmstcG9zdCcpLmNsaWNrKClcbiAgICBjeS53YWl0KCdAcG9zdENvbW1lbnQnKS5zaG91bGQoKHsgcmVxdWVzdCwgcmVzcG9uc2UgfSkgPT4ge1xuICAgICAgZXhwZWN0KHJlcXVlc3QuYm9keSkudG8uaW5jbHVkZSgnZW1haWwnKVxuICAgICAgZXhwZWN0KHJlcXVlc3QuaGVhZGVycykudG8uaGF2ZS5wcm9wZXJ0eSgnY29udGVudC10eXBlJylcbiAgICAgIGV4cGVjdChyZXNwb25zZSAmJiByZXNwb25zZS5ib2R5KS50by5oYXZlLnByb3BlcnR5KCduYW1lJywgJ1VzaW5nIFBPU1QgaW4gY3kuaW50ZXJjZXB0KCknKVxuICAgIH0pXG5cbiAgICAvLyBTdHViIGEgcmVzcG9uc2UgdG8gUFVUIGNvbW1lbnRzLyAqKioqXG4gICAgY3kuaW50ZXJjZXB0KHtcbiAgICAgIG1ldGhvZDogJ1BVVCcsXG4gICAgICB1cmw6ICcqKi9jb21tZW50cy8qJyxcbiAgICB9LCB7XG4gICAgICBzdGF0dXNDb2RlOiA0MDQsXG4gICAgICBib2R5OiB7IGVycm9yOiBtZXNzYWdlIH0sXG4gICAgICBoZWFkZXJzOiB7ICdhY2Nlc3MtY29udHJvbC1hbGxvdy1vcmlnaW4nOiAnKicgfSxcbiAgICAgIGRlbGF5TXM6IDUwMCxcbiAgICB9KS5hcygncHV0Q29tbWVudCcpXG5cbiAgICAvLyB3ZSBoYXZlIGNvZGUgdGhhdCBwdXRzIGEgY29tbWVudCB3aGVuXG4gICAgLy8gdGhlIGJ1dHRvbiBpcyBjbGlja2VkIGluIHNjcmlwdHMuanNcbiAgICBjeS5nZXQoJy5uZXR3b3JrLXB1dCcpLmNsaWNrKClcblxuICAgIGN5LndhaXQoJ0BwdXRDb21tZW50JylcblxuICAgIC8vIG91ciA0MDQgc3RhdHVzQ29kZSBsb2dpYyBpbiBzY3JpcHRzLmpzIGV4ZWN1dGVkXG4gICAgY3kuZ2V0KCcubmV0d29yay1wdXQtY29tbWVudCcpLnNob3VsZCgnY29udGFpbicsIG1lc3NhZ2UpXG4gIH0pXG59KVxuIl0sIm5hbWVzIjpbImNvbnRleHQiLCJiZWZvcmVFYWNoIiwiY3kiLCJ2aXNpdCIsIml0IiwicmVxdWVzdCIsInNob3VsZCIsInJlc3BvbnNlIiwiZXhwZWN0Iiwic3RhdHVzIiwidG8iLCJlcSIsImJvZHkiLCJoYXZlIiwicHJvcGVydHkiLCJhbmQiLCJiZSIsIm9uZU9mIiwidGhlbiIsImVxdWFsIiwiaW5jbHVkZSIsImtleXMiLCJ1cmwiLCJxcyIsInBvc3RJZCIsImlkIiwiaXRzIiwidXNlciIsImEiLCJ1c2VySWQiLCJ0aXRsZSIsImNvbnRhaW4iLCJndCIsImFzIiwicG9zdCIsIm1lc3NhZ2UiLCJpbnRlcmNlcHQiLCJnZXQiLCJjbGljayIsIndhaXQiLCJoZWFkZXJzIiwibWV0aG9kIiwic3RhdHVzQ29kZSIsImVycm9yIiwiZGVsYXlNcyJdLCJzb3VyY2VSb290IjoiIn0=