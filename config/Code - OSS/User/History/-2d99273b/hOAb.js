describe('Historia de usuario 3. Prueba de campo de búsqueda', () => {  
    before(() => {
        // Login
		cy.login("admin", "juan20032003");

        // Register a loan
        cy.visit("/#/salida");
        cy.get("#outgoings_body input").first().type("1");
        cy.contains("Continuar").click();
        cy.get("#prestamo").check();
        cy.get("input[name=patientNumber]").type("1234");
        cy.get("input[name=volunteerName]").type("VOLUNTARIOP");
        cy.contains("Continuar").click();
        cy.wait(1000);

        // Register an outcoming
        cy.visit("/#/salida");
        cy.get("#outgoings_body input").first().type("1");
        cy.contains("Continuar").click();
        cy.get("#donacion").check();
        cy.get("input[name=patientNumber]").type("5678");
        cy.get("input[name=volunteerName]").type("VOLUNTARIOD");
        cy.contains("Continuar").click();
        cy.wait(1000);
    
        // Register an incoming
        cy.visit("/#/entrada");
		cy.get("#incomings_body input").first().type("1");
        cy.contains("Continuar").click();
        cy.get("input[name=donorName]").type("DONANTEE");
        cy.get("input[name=volunteerName]").type("VOLUNTARIOPE");
        cy.contains("Continuar").click();
        cy.wait(1000);
        
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
        cy.get('input[placeholder="Buscar"]').type("VOLUNTARIOP");
        cy.wait(1000);
        cy.get("button").eq(2).click();
        cy.get("table").should("contain", "VOLUNTARIOP");
        
        // Search in Past Movements (Loans) table        
        cy.visit("/#/movimientos");
        cy.get("button").contains("Préstamo").click();
        cy.wait(1000);
        cy.get('input[placeholder="Buscar"]').type("VOLUNTARIOP");
        cy.wait(1000);
        cy.get("button").eq(2).click();
        cy.get("table").should("contain", "VOLUNTARIOP");
    });

    // Test for entry donation search
    it("Búsqueda de donacion de entrada", () => {
        cy.visit("/#/movimientos");
        cy.get("button").contains("Entradas").click();
        cy.wait(1000);
        cy.get('input[placeholder="Buscar"]').type("DONANTEE");
        cy.wait(1000);
        cy.get("button").eq(2).click();
        cy.get("table").should("contain", "DONANTEE");
    });

    // Test for registered exit search
    it("Busqueda de una salida registrada", () => {
        cy.visit("/#/movimientos");
        cy.get("button").contains("Salidas").click();
        cy.wait(1000);
        cy.get('input[placeholder="Buscar"]').type("VOLUNTARIOS");
        cy.wait(1000);
        cy.get("button").eq(2).click();
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
        cy.get("button").eq(2).click();
        cy.get("table").should("not.contain", "9999");
    });

    // Test for viewing past transactions
    it("Verificación de la visualización de transacciones pasadas", () => {
        cy.visit("/#/movimientos");
        cy.wait(1000);
        cy.get("table").find("tr").should("have.length.greaterThan", 1);
    });

    // Sorting test
    it("Tabla ordenada descendentemente por fecha", () => {
        // Visit the movements page
        cy.visit("/#/movimientos");
        cy.wait(1000);
        // Select all cells in the third column
        cy.get("table tbody tr td:nth-child(3)")
        .then(($cells) => {
            // Extract the text content of the cells and store them in an array
            const dates = [...$cells].map(cell => cell.innerText.trim());
            // Convert the date strings to Date objects for easy comparison
            const dateObjects = dates.map(date => new Date(date));
            // Verify that the dates are in descending order
            const isDescending = dateObjects.every((date, i, arr) => {
                // Ensure each date is less than or equal to the previous date
                return i === 0 || date <= arr[i - 1];
            });
            // Use expect to assert that the dates are indeed in descending order
            expect(isDescending).to.be.true;
        });

    });
    
    // Test for handling time zones and special dates
});
  