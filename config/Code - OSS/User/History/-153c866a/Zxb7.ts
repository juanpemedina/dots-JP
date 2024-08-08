describe('Registro de Movimientos', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/#/login');
    cy.get('input[placeholder="Usuario"]').type('admin'); // Rellena el campo de usuario
    cy.get('input[placeholder="Contraseña"]').type('juan20032003'); // Rellena el campo de contraseña
    cy.get('button').contains('Ingresar').click(); // Click en el botón de Ingresar
    cy.url().should('include', '/#/'); // Asegura que la URL incluye el hash de la página principal
    cy.visit('http://localhost:5173/#/movimientos'); // Navega a la página de movimientos
  });

  it('Prueba con todos los datos de salida', () => {
    cy.get('button[value="tab1"]').click(); // Click en la pestaña Salidas
    cy.get('table').should('exist');
    cy.get('table tbody tr').should('have.length.greaterThan', 0); // Verifica que haya al menos una fila
  });

  it('Prueba con todos los datos de entrada', () => {
    cy.get('button[value="tab2"]').click(); // Click en la pestaña Entradas
    cy.get('input[placeholder="Buscar"]').type('Pat'); // Busca por Pat
    cy.get('table').should('exist');
    cy.get('table tbody tr').each(($el) => {
      cy.wrap($el).contains('Pat'); // Verifica que cada fila contenga 'Pat'
    });
  });

  it('Prueba con todos los datos de entrada, con el donador en null', () => {
    cy.get('button[value="tab2"]').click(); // Click en la pestaña Entradas
    cy.get('input[placeholder="Buscar"]').type('Patr1ci@'); // Busca por Patr1ci@
    cy.get('table').should('exist');
    cy.get('table tbody tr').should('have.length', 0); // La tabla debe estar vacía
  });

  it.only('Prueba sin datos', () => {
    cy.get('button[value="tab1"]').click(); // Click en la pestaña Salidas
    cy.get('table tbody tr').should('have.length', 0); // No debe haber datos
    cy.get('button').contains('Descargar en Excel').should('not.exist'); // El botón de descarga no debe mostrarse
  });
});
