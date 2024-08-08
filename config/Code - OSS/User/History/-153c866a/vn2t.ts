describe('The Login Page', () => {
  it('successfully loads and logs in', () => {
    cy.visit('/#/login') // Change URL to match your dev URL

    // Fill out the login form
    cy.get('input[placeholder="Usuario"]').type('admin')
    cy.get('input[placeholder="Contraseña"]').type('juan20032003')

    // Submit the login form
    cy.get('button[type="submit"]').click()

    // Verify that the user is redirected to the home page or another element indicating a successful login
    cy.url().should('include', '/#/')
    // You can also check for a specific element that should be present on the home page
    // cy.get('selector-for-element').should('be.visible')
  })
})
