describe('Registro de Donaciones de Material a Pacientes', () => {
  before(() => {
    // Login
    cy.login("admin", "juan20032003");
  });

  beforeEach(() => {
		cy.login("admin", "juan20032003");
  });

  // Una prueba con todos los datos de salida
  it("Prueba con todos los datos de salida", () => {
    cy.visit("/#/salida");
    for (let i = 0; i < 3; i++) {
      cy.get("#outgoings_body input").first().type("1");
      cy.contains("Continuar").click();
      cy.get("#donacion").check();
      cy.get("input[name=patientNumber]").type("56781");
      cy.get("input[name=volunteerName]").type(
        "Voluntario HU10");
      cy.contains("Continuar").click();
      cy.wait(1000);
    }

    cy.visit("/#/movimientos");
    cy.get("button").contains("Salidas").click();   
    cy.get('input[placeholder="Buscar"]').type("56781");
    cy.wait(1000);
    cy.get("button").eq(1).click();
    cy.get("table").should("contain", "56781");
  });
  // Una prueba con todos los datos de entrada
  it("Prueba con todos los datos de entrada", () => {
    // Register an incoming
    cy.visit("/#/entrada");
		cy.get("#incomings_body input").first().type("1");
    cy.contains("Continuar").click();
    cy.get("input[name=donorName]").type("Donante HU10");
    cy.get("input[name=volunteerName]").type("Voluntario HU10");
    cy.contains("Continuar").click();
    cy.wait(1000);
    

    cy.visit("/#/movimientos");
    cy.get("button").contains("Entradas").click();    
    cy.contains("Voluntario HU10");
    cy.contains("Donante HU10");
  });

  // Una prueba con todos los datos de salida, con el donador en null
  it.only('Prueba con el donador null o vacios', () => {
    // Register a transaction with null values        
    cy.visit("/#/salida");
    cy.get("input").first().type("1");
    cy.contains("Continuar").click();
    cy.get("#donacion").check();
    cy.get("input[name=patientNumber]").type("9999");
    cy.get("input[name=volunteerName]").clear();
    cy.contains("Continuar").click();
    cy.wait(1000);

    // Perform search for a transaction with null values (Should not exist)        
    cy.visit("/donaciones/#/prestamos");
    cy.get("button").contains("Salidas").click();
    cy.get("table").should("not.contain", "9999");
    cy.get('input[placeholder="Buscar"]').type("9999");
    cy.wait(1000);
    cy.get("button").eq(1).click();
    cy.get("table").should("not.contain", "9999");
  });

  // Una prueba sin datos
  it('Base de datos vacía', () => {
    cy.visit('donaciones/#/prestamos');
    cy.get('table tbody tr').should('have.length', 0);
    cy.get('button').contains('Descargar en Excel').should('not.exist');
  });
});
