describe('Historia de usuario 3. Prueba de campo de búsqueda', () => {  
    before(() => {
        // Login
		cy.login("admin", "juan20032003");

        /*
        // Register a loan
        cy.visit("/#/salida");
        cy.get("input").first().type("1");
        cy.contains("Continuar").click();
        cy.get("#prestamo").check();
        cy.get("input[name=patientNumber]").type("1234");
        cy.get("input[name=volunteerName]").type("Voluntario Test Prestamo");
        cy.contains("Continuar").click();
        cy.wait(1000);

        // Register an outcoming
        cy.visit("/#/salida");
        cy.get("input").first().type("1");
        cy.contains("Continuar").click();
        cy.get("#donacion").check();
        cy.get("input[name=patientNumber]").type("5678");
        cy.get("input[name=volunteerName]").type("Voluntario Test Salida");
        cy.contains("Continuar").click();
        cy.wait(1000);
    
        // Register an incoming
        cy.visit("/#/entrada");
		cy.get("input").first().type("1");
        cy.contains("Continuar").click();
        cy.get("input[name=donorName]").type("Donante Test");
        cy.get("input[name=volunteerName]").type("Voluntario Test Entrada");
        cy.contains("Continuar").click();
        cy.wait(1000);
        */
        
      });

      beforeEach(() => {
        // Login before each test
        cy.login("admin", "juan20032003");
      });
        
    // Test for loan search
    it("Búsqueda de préstamo", () => {
        // Search in Active Loans table
        cy.visit("/#/prestamos");
        cy.wait(1000);
        cy.get('input[placeholder="Buscar"]').type("Voluntario Test Prestamo");
        cy.wait(1000);
        cy.get("button").eq(1).click();
        cy.get("table").should("contain", "Voluntario Test Prestamo");
        
        // Search in Past Movements (Loans) table        
        cy.visit("/#/movimientos");
        cy.get("button").contains("Préstamo").click();
        cy.wait(1000);
        cy.get('input[placeholder="Buscar"]').type("Voluntario Test Prestamo");
        cy.wait(1000);
        cy.get("button").eq(1).click();
        cy.get("table").should("contain", "Voluntario Test Prestamo");
    });

    // Test for entry donation search
    it("Búsqueda de donacion de entrada", () => {
        cy.visit("/#/movimientos");
        cy.get("button").contains("Entradas").click();
        cy.wait(1000);
        cy.get('input[placeholder="Buscar"]').type("Donante Test");
        cy.wait(1000);
        cy.get("button").eq(1).click();
        cy.get("table").should("contain", "Donante Test");
    });

    // Test for registered exit search
    it("Busqueda de una salida registrada", () => {
        cy.visit("/#/movimientos");
        cy.get("button").contains("Salidas").click();
        cy.wait(1000);
        cy.get('input[placeholder="Buscar"]').type("Voluntario Test Salida");
        cy.wait(1000);
        cy.get("button").eq(1).click();
        cy.get("table").should("contain", "5678");
    });

    // Test for null or empty values:
    it("Busqueda de valores nulos o vacios", () => {
        // Register a transaction with null values        
        cy.visit("/#/salida");
        cy.get("input").first().type("1");
        cy.contains("Continuar").click();
        cy.get("#donacion").check();
        cy.get("input[name=patientNumber]").type("9999");
        cy.get("input[name=volunteerName]").clear();
        cy.contains("Continuar").click();
        cy.wait(6000);
        
        // Perform search for a transaction with null values (Should not exist)        
        cy.visit("/#/movimientos");
        cy.get("button").contains("Salidas").click();
        cy.get('input[placeholder="Buscar"]').type("9999");
        cy.wait(1000);
        cy.get("button").eq(1).click();
        cy.get("table").should("not.contain", "9999");
    });

    // Test for viewing past transactions
    it("Verificación de la visualización de transacciones pasadas", () => {
        cy.visit("/#/movimientos");
        cy.wait(1000);
        cy.get("table").find("tr").should("have.length.greaterThan", 1);
    });

    // Sorting test
    it.only("Debería ordenar la tabla ascendentemente por fecha", () => {
        cy.visit("/#/movimientos");
        cy.wait(1000);
        cy.get("table tbody tr td:nth-child(3)")
        .then(($cells) => {
            const dates = [...$cells].map(cell => cell.innerText.trim());
        });

    });
    

    // Test for handling time zones and special dates
});
  