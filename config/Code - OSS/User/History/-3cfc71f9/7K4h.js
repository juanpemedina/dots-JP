describe("Historia de usuario 1. Préstamos activos", () => {
	before(() => {
		// Login
		cy.login("admin", "juan20032003");

		// Fill the table
		cy.visit("/#/salida");
		cy.get("input").first().type("1");
		cy.contains("Continuar").click();
		cy.get("#prestamo").check();
		cy.get("input[name=patientNumber").type("1234");
		cy.get("input[name=volunteerName").type("Test volunteer");
	});

	it("Mostrar datos en la tabla", () => {
		cy.visit("/prestamos-activos"); // Replace with the URL of your page

		// Assuming the table has a specific class name or ID, you can use it to locate the table
		cy.get(".overflow-hidden").within(() => {
			// Check if the table has at least one row
			cy.get("tbody tr").should("have.length.gt", 0);
		});
	});

	it("Datos ordenados en la tabla", () => {
		cy.visit("/"); // Replace with the URL of your page

		// Assuming the table has a specific class name or ID, you can use it to locate the table
		cy.get(".overflow-hidden").within(() => {
			// Get the dates from each row in the table
			cy.get("tbody tr td.date").then((dateElements) => {
				const dates = Array.from(dateElements, (el) => el.innerText);

				// Check if the dates are sorted in descending order (most recent first)
				const sortedDates = [...dates].sort(
					(a, b) => new Date(b) - new Date(a)
				);
				expect(dates).to.deep.equal(sortedDates);
			});
		});
	});
});