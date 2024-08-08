describe("Historia de usuario 5. Descargar Archivo en Excel", () => {
	before(() => {
		// Login
		cy.login("admin", "juan20032003");

		// Fill the table
		cy.visit("/#/salida");
		cy.get("#outgoings_body input").first().type("1");
		cy.contains("Continuar").click();
		cy.get("#prestamo").check();
		cy.get("input[name=patientNumber").type("1234");
		cy.get("input[name=volunteerName").type("Voluntario Test Prestamo");
		cy.contains("Continuar").click();
		cy.wait(1000);

		// Register an outcoming
        cy.visit("/#/salida");
        cy.get("#outgoings_body input").first().type("1");
        cy.contains("Continuar").click();
        cy.get("#donacion").check();
        cy.get("input[name=patientNumber]").type("5678");
        cy.get("input[name=volunteerName]").type("Voluntario Test Salida");
        cy.contains("Continuar").click();
        cy.wait(1000);

        // Register an incoming
        cy.visit("/#/entrada");
		cy.get("#incomings_body input").first().type("1");
        cy.contains("Continuar").click();
        cy.get("input[name=donorName]").type("Donante Test");
        cy.get("input[name=volunteerName]").type("Voluntario Test Entrada");
        cy.contains("Continuar").click();
        cy.wait(1000);
	});

	beforeEach(() => {
		// Login
		cy.login("admin", "juan20032003");
	});

	it("Descargar el excel en prestamos, donaciones y entradas", () => {
        const filenameLoan = "_prestamos_2024-05-28.csv_";
        const filenameIncoming = "_entradas_2024-05-28.csv_";
        const filenameOutgoing = "_salidas_2024-05-28.csv_";

        // Delete any downloads before the test
        cy.task('deleteFolder', 'cypress/downloads').then(() => {
            // Search past loan movements and download the file
            cy.visit("/#/movimientos");
            cy.get("button").contains("Préstamo").click();
            cy.wait(1000);
            cy.get("button").contains("Descargar en Excel").click();
        
            // Wait for the download to finish
            cy.wait(5000);
        
            // Assert if the file is downloaded
            cy.task('isFileDownloaded', filenameLoan).should('be.true');

            // Search past outgoing movements and download the file
            cy.visit("/#/movimientos");
            cy.get("button").contains("Salidas").click();
            cy.wait(1000);
            cy.get("button").contains("Descargar en Excel").click();
        
            // Wait for the download to finish
            cy.wait(5000);
        
            // Assert if the file is downloaded
            cy.task('isFileDownloaded', filenameOutgoing).should('be.true');

            // Search past incomings movements and download the file
            cy.visit("/#/movimientos");
            cy.get("button").contains("Entradas").click();
            cy.wait(1000);
            cy.get("button").contains("Descargar en Excel").click();
        
            // Wait for the download to finish
            cy.wait(5000);
        
            // Assert if the file is downloaded
            cy.task('isFileDownloaded', filenameIncoming).should('be.true');
          });
	});

    // Una prueba con todos los datos de entrada, con el donador en null
    it("Prueba con donador null", () => {
        const filenameIncoming = "_entradas_2024-05-28.csv_";

        // Register an incoming
        cy.visit("/#/entrada");
		cy.get("#incomings_body input").first().type("1");
        cy.contains("Continuar").click();
        //cy.get("input[name=donorName]").type(" ");
        cy.get("input[name=volunteerName]").type("Voluntario Null");
        cy.contains("Continuar").click();
        cy.wait(1000);

        // Delete any downloads before the test
        cy.task('deleteFolder', 'cypress/downloads').then(() => {
            // Search past incomings movements and download the file
            cy.visit("/#/movimientos");
            cy.get("button").contains("Entradas").click();
            cy.wait(1000);
            cy.get('input[placeholder="Buscar"]').type("Voluntario Null");
            cy.wait(1000);
            cy.get("button").eq(1).click();
            cy.get("button").contains("Descargar en Excel").click();
        
            // Wait for the download to finish
            cy.wait(5000);
        
            // Assert if the file is downloaded
            cy.task('isFileDownloaded', filenameIncoming).should('be.true');
          });
	});


    it("Prueba sin datos", () => {
        // Search past loan movements and asserting the button doesnt show up
        cy.visit("/#/movimientos");
        cy.get("button").contains("Préstamo").click();
        cy.wait(1000);
        cy.get('input[placeholder="Buscar"]').type("Nada");
        cy.wait(1000);
        cy.get("button").eq(2).click();
        cy.get("button").should("not.contain", "Descargar en Excel");
	});

});
