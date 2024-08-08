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
  });

  it('Debería registrar un préstamo y mostrarlo en movimientos pasados', () => {
    cy.visit('http://localhost:5173/#/movimientos'); // Navega a la página de movimientos
    cy.contains('Préstamos').as('prestamosButton'); // Asigna un alias al botón de "Préstamos"
    
    // Hacemos clic en el botón de "Préstamos" usando el alias
    cy.get('@prestamosButton').click();
  
    // Agregamos una pausa para dar tiempo a la página para reaccionar
    cy.wait(2000); // Puedes ajustar este tiempo según sea necesario
  
    // Aquí puedes continuar con la verificación del préstamo en los movimientos pasados  });
});
