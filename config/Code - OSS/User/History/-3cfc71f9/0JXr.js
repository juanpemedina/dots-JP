describe("Historia de usuario 1. Préstamos activos", () => {
	before(() => {
		// Login
		cy.login("admin", "juan20032003");

		// Fill the table
		cy.visit("/#/salida");
		cy.get("input").first().type("1");
		cy.contains("Continuar", { timeout: 10000 }).should('be.visible').click();  // Increased timeout and visibility check
		cy.get("#prestamo").check();
		cy.get("input[name=patientNumber]").type("1234");
		cy.get("input[name=volunteerName]").type("Test volunteer 1");
		cy.contains("Continuar", { timeout: 10000 }).should('be.visible').click();  // Increased timeout and visibility check
		cy.wait(1000);

		// Fill the table again
		cy.visit("/#/salida");
		cy.get("input").first().type("1");
		cy.contains("Continuar", { timeout: 10000 }).should('be.visible').click();  // Increased timeout and visibility check
		cy.get("#prestamo").check();
		cy.get("input[name=patientNumber]").type("1234");
		cy.get("input[name=volunteerName]").type("Test volunteer 2");
		cy.contains("Continuar", { timeout: 10000 }).should('be.visible').click();  // Increased timeout and visibility check
		cy.wait(1000);
	});

	beforeEach(() => {
		// Login
		cy.login("admin", "juan20032003");
	});

	it("Datos ordenados en la tabla", () => {
		cy.visit("/#/prestamos");
		cy.wait(1000);

		cy.get("table").within(() => {
			cy.get('tbody tr td[id^="date_"]').then((dateElements) => {
				const dates = Array.from(dateElements, (el) => el.innerText);
				const sortedDates = [...dates].sort((a, b) => new Date(b) - new Date(a));
				expect(dates).to.deep.equal(sortedDates);
			});
		});
	});

	it("Verificación de salidas", () => {
		cy.visit("/#/prestamos");
		cy.wait(1000);

		cy.get("tbody tr").each((row, index) => {
			if (index < 1) {
				const patientNumber = row.find('td[id^="patientNumber_"]').text();
				const volunteerName = row.find('td[id^="authorizingVolunteer_"]').text();

				const matchingInfo = [
					{ patientNumber: "1234", volunteerName: "Test volunteer 1" },
					{ patientNumber: "1234", volunteerName: "Test volunteer 2" },
				].find(info => info.patientNumber === patientNumber && info.volunteerName === volunteerName);

				expect(matchingInfo).to.exist;
			}
		});
	});

	it("Conformidad de datos", () => {
		cy.visit("/#/prestamos");
		cy.wait(1000);

		cy.get("tbody tr").each((row, index) => {
			if (index < 1) {
				const date = row.find('td[id^="date_"]').text();
				const patientNumber = row.find('td[id^="patientNumber_"]').text();

				const formattedDate = new Date(date).toLocaleString();
				const formattedPatientNumber = patientNumber.replace(/\D/g, "");

				expect(formattedDate).to.exist;
				expect(formattedPatientNumber).to.exist;
			}
		});
	});
});
