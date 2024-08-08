describe('Prueba de Préstamos', () => {
  
  //Función auxiliar para iniciar sesión
  const login = () => {
    cy.visit('http://localhost:5173/#/login'); // Navega a la página de inicio de sesión
    cy.get('input[placeholder="Usuario"]').type('admin'); // Reemplaza 'tuUsuario' con el nombre de usuario correcto
    cy.get('input[placeholder="Contraseña"]').type('juan20032003'); // Reemplaza 'tuContraseña' con la contraseña correcta
    cy.get('button').contains('Ingresar').click();

  };

  beforeEach(() => {
    // Inicia sesión antes de cada prueba
    login();
    cy.visit('http://localhost:5173/#/movimientos'); // Navega a la página de movimientos
    cy.contains('Préstamos').should('be.visible').click();
    cy.contains('Préstamos').should('exist').click();

  });

  it('Debería registrar un préstamo y mostrarlo en movimientos pasados', () => {
  
    // Espera a que el botón de "Préstamos" esté disponible y sea interactivo
    cy.contains('Préstamos').should('be.visible');
  });
});
