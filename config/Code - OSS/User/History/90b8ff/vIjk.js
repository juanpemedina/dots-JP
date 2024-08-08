describe('Buscar artículos o categorías', () => {

    beforeEach(() => {
      // Este código se ejecuta antes de cada prueba individual
      cy.visit('http://localhost:5173/#/entrada'); 
    });
  
    it('Debería mostrar productos de la categoría "Higiene"', () => {
      cy.get('input[placeholder="Buscar artículos o categorías"]').type('Higiene'); // Selector para el campo de búsqueda
      cy.get('button').contains('Buscar').click(); // Botón de búsqueda, ajusta el selector según sea necesario
      cy.get('.product-item').each(($el) => {
        cy.wrap($el).should('contain.text', 'Higiene');
      });
    });
  
    it('No debería mostrar productos para la categoría "Videojuegos"', () => {
      cy.get('input[placeholder="Buscar artículos o categorías"]').type('Videojuegos');
      cy.get('button').contains('Buscar').click();
      cy.get('.product-item').should('not.exist');
    });
  
    it('Debería mostrar todos los productos sin importar categorías cuando el campo de búsqueda está en blanco', () => {
      cy.get('input[placeholder="Buscar artículos o categorías"]').clear();
      cy.get('button').contains('Buscar').click();
      cy.get('.product-item').should('have.length.greaterThan', 0);
    });
  
    it('Debería mostrar un mensaje de error para búsqueda con más de 30 caracteres', () => {
      const longString = "Este es un ejemplo de un string que tiene más de 30 caracteres, y no debe de ser aceptado por el campo de búsqueda";
      cy.get('input[placeholder="Buscar artículos o categorías"]').type(longString);
      cy.get('button').contains('Buscar').click();
      cy.get('.error-message').should('contain.text', 'El campo de búsqueda no puede superar los 30 caracteres');
    });
  
    it('Debería mostrar productos de la categoría "Higiene" al buscar "Higi"', () => {
      cy.get('input[placeholder="Buscar artículos o categorías"]').type('Higi');
      cy.get('button').contains('Buscar').click();
      cy.get('.product-item').each(($el) => {
        cy.wrap($el).should('contain.text', 'Higiene');
      });
    });
  
    it('Debería mostrar productos de categorías que contienen la letra "A"', () => {
      cy.get('input[placeholder="Buscar artículos o categorías"]').type('A');
      cy.get('button').contains('Buscar').click();
      cy.get('.product-item').each(($el) => {
        cy.wrap($el).should('contain.text', 'A'); // Ajusta el criterio según sea necesario
      });
    });
  
  });
  