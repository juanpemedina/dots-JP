describe("Historia de usuario 4. Delimitación de tipo de transacción", () => {
    before(() => {
        // Login
		cy.login("admin", "juan20032003");
    });

    beforeEach(() => {
        // Login
		cy.login("admin", "juan20032003");
    });
    // Successful toast verification when registering a loan
    it("Registro de préstamo exitoso", () => {
        cy.visit("/#/salida");
        cy.wait(250);
        cy.get("#outgoings_body input").first().type("1");
        cy.contains("Continuar").click();
        cy.wait(250);
        cy.get("#prestamo").check();
        cy.get("input[name=patientNumber").type("121212");
        cy.get("input[name=volunteerName").type("VolunteerUn");
        cy.contains("Continuar").click();
        cy.get('body')
        .and('contain', 'Se registró la transacción con éxito');
    });
    // Successful toast verification when registering a donation
    it("Registro de donación exitoso", () => {
        cy.visit("/#/salida");
        cy.get("#outgoings_body input").first().type("1");
        cy.contains("Continuar").click();
        cy.get("#donacion").check();
        cy.get("input[name=patientNumber").type("343434");
        cy.get("input[name=volunteerName").type("VolunteerDo");
        cy.contains("Continuar").click();
        cy.get('body')
        .and('contain', 'Se registró la transacción con éxito');
    });
    // Unsuccessful toast verification when registering with empty outgoing tye
    it("Registro con campo vacío", () => {
        cy.visit("/#/salida");
        cy.wait(250);
        cy.get("input").first().type("1");
        cy.contains("Continuar").click();
        cy.wait(250);
        cy.get("input[name=patientNumber").type("12345");
        cy.get("input[name=volunteerName").type("TEST VOLUNTEER");
        cy.contains("Continuar").click();
        cy.get('body')
        .and('contain', 'Hubo un error al registrar la transacción');
    });
    // Successful registration of a donation in table view
    it.only("Verificación de salida de donación", () => {
        // Registration of a donation
        cy.visit("/#/salida");
        cy.get("input").first().type("1");
        cy.contains("Continuar").click();
        cy.wait(250);
        cy.get("#donacion").check();
        cy.get("input[name=patientNumber").type("12345");
        cy.get("input[name=volunteerName").type("Test volunteerUN");
        cy.contains("Continuar").click();
        cy.wait(250);
        // Verification of registration in donations table
        cy.visit("/#/movimientos");
        cy.wait(250);
        cy.contains("Salidas").click();
        cy.wait(250);
        cy.get('input[placeholder="Buscar"]').type("TEST VOLUNTEERUN");
        cy.get('form').within(() => {
            cy.get('button[type="submit"]').click();
          });
        cy.get("table").should("contain", "TEST VOLUNTEERUN")
        .and("contain", "12345");
    });
    // Verification of successful registration of a loan in table view
    it("Verificación de salida de préstamo", () => {
        // Registration of a donation
        cy.visit("/#/salida");
        cy.get("input").first().type("1");
        cy.contains("Continuar").click();
        cy.wait(250);
        cy.get("#prestamo").check();
        cy.get("input[name=patientNumber").type("12345");
        cy.get("input[name=volunteerName").type("Test volunteerDO");
        cy.contains("Continuar").click();
        cy.wait(250);
        // Verification of registration in donations table
        cy.visit("/#/movimientos");
        cy.wait(250);
        cy.contains("Préstamos").click();
        cy.wait(250);
        cy.get('input[placeholder="Buscar"]').type("TEST VOLUNTEERDO");
        cy.get('form').within(() => {
            cy.get('button[type="submit"]').click();
          });
          cy.get("table").should("contain", "TEST VOLUNTEERDO")
          .and("contain", "12345");
    });

});
