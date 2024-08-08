describe("Historia de usuario 6. Actualizaciones de las transacciones en tiempo real", () => {
	beforeEach(() => {
		// Login
		cy.login("admin", "juan20032003");
	});

    it("Prueba sin registros", () => {
        // Search past loan movements and asserting the button doesnt show up
        cy.visit("/#/movimientos");
        cy.get("button").contains("Préstamo").click();
        cy.wait(1000);
        cy.get('input[placeholder="Buscar"]').type("Sujeto Uno");
        cy.wait(1000);
        cy.get("button").eq(2).click();
        cy.get("table").should("not.contain", "SUJETO UNO");
	});

    it("Prueba inmediatamente despues del registrar un articulo", () => {
        // Register an incoming
        cy.visit("/#/entrada");
		cy.get("#incomings_body input").first().type("1");
        cy.contains("Continuar").click();
        cy.get("input[name=donorName]").type("Farmacias Similares");
        cy.get("input[name=volunteerName]").type("Sujeto Uno");
        cy.contains("Continuar").click();
        cy.wait(1000);

        // Search past incoming movements and asserting the transaction shows on the table
        cy.visit("/#/movimientos");
        cy.get("button").contains("Entradas").click();
        cy.wait(1000);
        cy.get('input[placeholder="Buscar"]').type("Sujeto Uno");
        cy.wait(1000);
        cy.get("button").eq(2).click();
        cy.get("table").should("contain", "SUJETO UNO");
	});

    it("Prueba de prestamo inmediatamente despues de registrarlo y despues de devolverlo", () => {
        // Register a Loan
		cy.visit("/#/salida");
		cy.get("#outgoings_body input").first().type("1");
		cy.contains("Continuar").click();
		cy.get("#prestamo").check();
		cy.get("input[name=patientNumber").type("1234");
		cy.get("input[name=volunteerName").type("Voluntario prestamo");
		cy.contains("Continuar").click();
		cy.wait(1000);

        // Search active loans movements and asserting the transaction updates
        cy.visit("/#/prestamos");
        cy.get("table").should("contain", "VOLUNTARIO PRESTAMO");
        cy.wait(1000);
        cy.get('input[placeholder="Buscar"]').type("Voluntario prestamo");
        cy.wait(1000);
        cy.get("button").eq(2).click();
        cy.wait(1000);
        cy.contains('button', 'Devolver').first().click();
        cy.contains("Confirmar").click();
        cy.wait(1000);
        cy.get("table").should("not.contain", "VOLUNTARIO PRESTAMO");

        // Search past loans movements and asserting the transaction updates as "Devuelto"
        cy.visit("/#/movimientos");
        cy.get("button").contains("Préstamos").click();
        cy.wait(1000);
        cy.get('input[placeholder="Buscar"]').type("Voluntario prestamo");
        cy.wait(1000);
        cy.get("button").eq(2).click();
        cy.get("table").should("contain", "Devuelto");
	});

});
