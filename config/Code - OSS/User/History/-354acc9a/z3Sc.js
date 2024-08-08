describe("Historia de usuario 2. Registro de transacciones", () => {
	beforeEach(() => {
		// Login
		cy.login("admin", "juan20032003");
	});
	describe("Campo de nombre del voluntario que confirma", () => {
		it("Límite inferior", () => {
			cy.visit("/#/salida");
			cy.get("input").first().type("1");
			cy.contains("Continuar").click();
			cy.get("#prestamo").check();
			cy.get("input[name=patientNumber").type("1234");
			cy.get("input[name=volunteerName").type("Ana");
			cy.contains("Continuar").click();
			cy.get("body").and("contain", "Se registró la transacción con éxito");
		});
		it("Límite superior", () => {
			cy.visit("/#/salida");
			cy.get("input").first().type("1");
			cy.contains("Continuar").click();
			cy.get("#prestamo").check();
			cy.get("input[name=patientNumber").type("1234");
			cy.get("input[name=volunteerName").type(
				"María Conchita Isabella Balanco Lopez"
			);
			cy.contains("Continuar").click();
			cy.get("body").and("contain", "Se registró la transacción con éxito");
		});
		it("Una unidad abajo del límite inferior", () => {
			cy.visit("/#/salida");
			cy.get("input").first().type("1");
			cy.contains("Continuar").click();
			cy.get("#prestamo").check();
			cy.get("input[name=patientNumber").type("1234");
			cy.get("input[name=volunteerName").type("An");
			cy.contains("Continuar").click();
			cy.get("body").and("contain", "Por favor escriba su nombre completo");
		});
		it("Una unidad arriba del límite superior", () => {
			cy.visit("/#/salida");
			cy.get("input").first().type("1");
			cy.contains("Continuar").click();
			cy.get("#prestamo").check();
			cy.get("input[name=patientNumber").type("1234");
			cy.get("input[name=volunteerName").type(
				"María Conchita Isabella Balanco Lopez"
			);
			cy.contains("Continuar").click();
			cy.get("body").and(
				"contain",
				"El nombre no es válido. Debe contener entre 3 y 40 caracteres. No puede contener números."
			);
		});
		it("En el medio", () => {
			cy.visit("/#/salida");
			cy.get("input").first().type("1");
			cy.contains("Continuar").click();
			cy.get("#prestamo").check();
			cy.get("input[name=patientNumber").type("1234");
			cy.get("input[name=volunteerName").type("Ana María González");
			cy.contains("Continuar").click();
			cy.get("body").and("contain", "Se registró la transacción con éxito");
		});
		it("Valor nulo", () => {
			cy.visit("/#/salida");
			cy.get("input").first().type("1");
			cy.contains("Continuar").click();
			cy.get("#prestamo").check();
			cy.get("input[name=patientNumber").type("1234");
			cy.contains("Continuar").click();
			cy.get("body").and(
				"contain",
				"El nombre no es válido. Debe contener entre 3 y 40 caracteres. No puede contener números."
			);
		});
		it("Formato alfabético con espacio", () => {
			cy.visit("/#/salida");
			cy.get("input").first().type("1");
			cy.contains("Continuar").click();
			cy.get("#prestamo").check();
			cy.get("input[name=patientNumber").type("1234");
			cy.get("input[name=volunteerName").type("Luis Felipe Hernández");
			cy.contains("Continuar").click();
			cy.get("body").and("contain", "Se registró la transacción con éxito");
		});
		it("Formato inválido alfanumérico", () => {
			cy.visit("/#/salida");
			cy.get("input").first().type("1");
			cy.contains("Continuar").click();
			cy.get("#prestamo").check();
			cy.get("input[name=patientNumber").type("1234");
			cy.get("input[name=volunteerName").type("Juan Pedro 1234");
			cy.contains("Continuar").click();
			cy.get("body").and(
				"contain",
				"El nombre no es válido. Debe contener entre 3 y 40 caracteres. No puede contener números."
			);
		});
	});
	describe("Campo de número de paciente", () => {
		it("Límite inferior", () => {
			cy.visit("/#/salida");
			cy.get("input").first().type("1");
			cy.contains("Continuar").click();
			cy.get("#prestamo").check();
			cy.get("input[name=patientNumber").type("5832");
			cy.get("input[name=volunteerName").type("Ana María");
			cy.contains("Continuar").click();
			cy.get("body").and("contain", "Se registró la transacción con éxito");
		});
		it("Límite superior", () => {
			cy.visit("/#/salida");
			cy.get("input").first().type("1");
			cy.contains("Continuar").click();
			cy.get("#prestamo").check();
			cy.get("input[name=patientNumber").type("583267812567");
			cy.get("input[name=volunteerName").type("Ana María");
			cy.contains("Continuar").click();
			cy.get("body").and("contain", "Se registró la transacción con éxito");
		});
		it("Una unidad abajo del límite inferior", () => {
			cy.visit("/#/salida");
			cy.get("input").first().type("1");
			cy.contains("Continuar").click();
			cy.get("#prestamo").check();
			cy.get("input[name=patientNumber").type("583");
			cy.get("input[name=volunteerName").type("Ana María");
			cy.contains("Continuar").click();
			cy.get("body").and(
				"contain",
				"El número de expediente debe tener entre 4 y 12 números. No puede contener letras o espacios."
			);
		});
		it("Una unidad arriba del límite superior", () => {
			cy.visit("/#/salida");
			cy.get("input").first().type("1");
			cy.contains("Continuar").click();
			cy.get("#prestamo").check();
			cy.get("input[name=patientNumber").type("5832678125675");
			cy.get("input[name=volunteerName").type("Ana María");
			cy.contains("Continuar").click();
			cy.get("body").and(
				"contain",
				"El número de expediente debe tener entre 4 y 12 números. No puede contener letras o espacios."
			);
		});
		it("En el medio", () => {
			cy.visit("/#/salida");
			cy.get("input").first().type("1");
			cy.contains("Continuar").click();
			cy.get("#prestamo").check();
			cy.get("input[name=patientNumber").type("12345678");
			cy.get("input[name=volunteerName").type("Ana María");
			cy.contains("Continuar").click();
			cy.get("body").and("contain", "Se registró la transacción con éxito");
		});
		it("Formato numérico", () => {
			cy.visit("/#/salida");
			cy.get("input").first().type("1");
			cy.contains("Continuar").click();
			cy.get("#prestamo").check();
			cy.get("input[name=patientNumber").type("1234561");
			cy.get("input[name=volunteerName").type("Ana María");
			cy.contains("Continuar").click();
			cy.get("body").and("contain", "Se registró la transacción con éxito");
		});
		it("Formato inválido alfanumérico", () => {
			cy.visit("/#/salida");
			cy.get("input").first().type("1");
			cy.contains("Continuar").click();
			cy.get("#prestamo").check();
			cy.get("input[name=patientNumber").type("AB628191");
			cy.get("input[name=volunteerName").type("Ana María");
			cy.contains("Continuar").click();
			cy.get("body").and(
				"contain",
				"El número de expediente debe tener entre 4 y 12 números. No puede contener letras o espacios."
			);
		});
		it("Con espacios", () => {
			cy.visit("/#/salida");
			cy.get("input").first().type("1");
			cy.contains("Continuar").click();
			cy.get("#prestamo").check();
			cy.get("input[name=patientNumber").type("768 1839");
			cy.get("input[name=volunteerName").type("Ana María");
			cy.contains("Continuar").click();
			cy.get("body").and(
				"contain",
				"El número de expediente debe tener entre 4 y 12 números. No puede contener letras o espacios."
			);
		});
		it("Valor nulo en donación", () => {
			cy.visit("/#/salida");
			cy.get("input").first().type("1");
			cy.contains("Continuar").click();
			cy.get("#donacion").check();
			cy.get("input[name=volunteerName").type("Ana María");
			cy.contains("Continuar").click();
			cy.get("body").and(
				"contain",
				"El número de expediente debe tener entre 4 y 12 números. No puede contener letras o espacios."
			);
		});
		it("Valor nulo en préstamo", () => {
			cy.visit("/#/salida");
			cy.get("input").first().type("1");
			cy.contains("Continuar").click();
			cy.get("#prestamo").check();
			cy.get("input[name=volunteerName").type("Ana María");
			cy.contains("Continuar").click();
			cy.get("body").and("contain", "Se registró la transacción con éxito");
		});
	});
});
