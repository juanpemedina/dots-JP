describe('Buscar artículos o categorías - Seleccionar una categoría existente', () => {
    it('Debería mostrar productos de la categoría "Higiene"', () => {
      cy.visit('/'); // Asegúrate de visitar la URL correcta de tu aplicación
      cy.get('input[placeholder="Buscar artículos o categorías"]').type('Higiene'); // Selector para el campo de búsqueda
      cy.get('button').contains('Buscar').click(); // Botón de búsqueda, ajusta el selector según sea necesario
      cy.get('.product-item').each(($el) => {
        cy.wrap($el).should('contain.text', 'Higiene');
      });
    });
  });
  