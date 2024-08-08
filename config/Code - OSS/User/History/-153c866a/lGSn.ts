describe('Prueba de Préstamos', () => {
  
  //Función auxiliar para iniciar sesión
  const login = () => {
    cy.visit('http://localhost:5173/#/login'); // Navega a la página de inicio de sesión
    cy.get('input[placeholder="Usuario"]').type('admin'); // Reemplaza 'tuUsuario' con el nombre de usuario correcto
    cy.get('input[placeholder="Contraseña"]').type('juan20032003'); // Reemplaza 'tuContraseña' con la contraseña correcta
    cy.get('button').contains('Ingresar').click();
    cy.wait(2000); 
  };

  beforeEach(() => {
    // Inicia sesión antes de cada prueba
    login();
  });

  it('Debería registrar un préstamo y mostrarlo en movimientos pasados', () => {
    cy.visit('http://localhost:5173/#/movimientos'); // Navega a la página de movimientos
    cy.wait(2000); 
    cy.contains('Préstamos').click(); // Busca el texto "Préstamos" dentro de cualquier elemento y hace clic en él
    cy.wait(1000); 

    // Verificación de que el préstamo se muestra en movimientos pasados
  });
});
