describe("Historia de usuario 1. Préstamos activos", () => {
	before(() => {
		// Login
		cy.login("admin", "juan20032003");

		// Fill the table
	});

	beforeEach(() => {		cy.contains("Continuar").click();

		// Login
		cy.login("admin", "juan20032003");
	});

	it("Datos ordenados en la tabla", () => {
		cy.visit("/#/prestamos");
		cy.wait(1000);

		cy.get("table").within(() => {
			// Get the dates from each row in the table
			cy.get('tbody tr td[id^="date_"]').then((dateElements) => {
				const dates = Array.from(dateElements, (el) => el.innerText);

				// Check if the dates are sorted in descending order (most recent first)
				const sortedDates = [...dates].sort(
					(a, b) => new Date(b) - new Date(a)
				);
				expect(dates).to.deep.equal(sortedDates);
			});
		});
	});

	it("Verificación de salidas", () => {
		cy.visit("/#/prestamos");
		cy.wait(1000);

		cy.get("tbody tr").each((row, index) => {
			if (index < 1) {
				// patient number, and volunteer name from each row
				const patientNumber = row.find('td[id^="patientNumber_"]').text();
				const volunteerName = row
					.find('td[id^="authorizingVolunteer_"]')
					.text();

				// Find the corresponding info entered in the before statement
				const matchingInfo = [
					{ patientNumber: "1234", volunteerName: "Test volunteer 1" },
					{ patientNumber: "1234", volunteerName: "Test volunteer 2" },
				].find(
					(info) =>
						info.patientNumber === patientNumber &&
						info.volunteerName === volunteerName
				);

				// Assert that the corresponding info exists
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
