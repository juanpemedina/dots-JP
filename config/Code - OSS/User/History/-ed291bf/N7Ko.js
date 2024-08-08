describe("Historia de usuario 7. Prueba de visualizacion de prestamos", () => {
  before(() => {
    // Login
		cy.login("admin", "juan20032003");

    // Register loan 1
    cy.visit("/#/salida");
		cy.get("#outgoings_body input").first().type("1");
    cy.contains("Continuar").click();
    cy.get("#prestamo").check();
    cy.get("input[name=patientNumber]").type("1234");
    cy.get("input[name=volunteerName]").type("Voluntario A");
    cy.contains("Continuar").click();
    cy.wait(1000);
    const confirmar = cy
    .get("button")
    .contains("Confirmar")
    .should("not.be.disabled");
    if (confirmar) {
      cy.get("button").contains("Confirmar").click();
    } else {
      cy.log("hello");
    }

    cy.wait(1000);


    cy.contains("Cancelar").click();

    // Register Loan 2
		cy.get("#outgoings_body input").first().type("1");
    cy.contains("Continuar").click();
    cy.get("#prestamo").check();
    cy.get("input[name=patientNumber]").type("5678");
    cy.get("input[name=volunteerName]").type("Voluntario B");
    cy.contains("Continuar").click();
    cy.wait(1000);
    if (confirmar) {
      cy.get("button").contains("Confirmar").click();
    } else {
      cy.log("hello");
    }
    cy.wait(1000);

  });

  beforeEach(() => {
    // Login before each test
		cy.login("admin", "juan20032003");
  });

  // Test por Past Movements (Loans)
  it("Tabla de préstamo", ()=>{
    cy.visit("/#/prestamos");
    cy.wait(1000);
    cy.get("table tbody tr").its('length').should('be.gt', 2);
    });


  // Test for patient loan search
  it("Búsqueda de préstamo", () => {
    // Search in Active Loans table
    cy.visit("/#/prestamos");
    cy.wait(1000);
    cy.get('input[placeholder="Buscar"]').type("Voluntario A");
    cy.wait(1000);
    cy.get("button").eq(2).click();
    cy.get("table").should("contain", "VOLUNTARIO A");

    // Search in Past Movements (Loans) table
    cy.visit("/#/movimientos");
    cy.get("button").contains("Préstamo").click();
    cy.wait(1000);
    cy.get('input[placeholder="Buscar"]').type("VOLUNTARIO A");
    cy.wait(1000);
    cy.get("button").eq(2).click();
    cy.get("table").should("contain", "VOLUNTARIO A");
  });


  // Test de búsqueda negativo
  it("Tabla de préstamo", ()=>{
    cy.visit("/#/prestamos");
    cy.wait(1000);
    cy.get('input[placeholder="Buscar"]').type("Prueba");
    cy.wait(1000);
    cy.get("button").eq(2).click();
    cy.get("table").should("not.contain", "VOLUNTARIO A");

    // Search in Past Movements (Loans) table
    cy.visit("/#/movimientos");
    cy.get("button").contains("Préstamo").click();
    cy.wait(1000);
    cy.get('input[placeholder="Buscar"]').type("Prueba");
    cy.wait(1000);
    cy.get("button").eq(2).click();
    cy.get("table").should("not.contain", "VOLUNTARIO A");

    });


});
