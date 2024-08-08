/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!************************************!*\
  !*** ./cypress/e2e/HU7/main.cy.js ***!
  \************************************/


describe("Historia de usuario 7. Prueba de visualizacion de prestamos", () => {
  before(() => {
    // Login
    cy.login("admin", "administrador");

    // Register loan 1
    cy.visit("/#/salida");
    cy.get("#outgoings_body input").first().type("1");
    cy.contains("Continuar").click();
    cy.get("#prestamo").check();
    cy.get("input[name=patientNumber]").type("1234");
    cy.get("input[name=volunteerName]").type("Voluntario A");
    cy.contains("Continuar").click();
    cy.wait(1000);
    cy.contains("Confirmar").click();
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
    cy.contains("Confirmar").click();
    cy.wait(1000);
  });
  beforeEach(() => {
    // Login before each test
    cy.login("admin", "administrador");
  });

  // Test por Past Movements (Loans)
  it("Tabla de préstamo", () => {
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
  it("Tabla de préstamo", () => {
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
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5jeS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBQSxRQUFRLENBQUMsNkRBQTZELEVBQUUsTUFBTTtFQUM1RUMsTUFBTSxDQUFDLE1BQU07SUFDWDtJQUNGQyxFQUFFLENBQUNDLEtBQUssQ0FBQyxPQUFPLEVBQUUsZUFBZSxDQUFDOztJQUVoQztJQUNBRCxFQUFFLENBQUNFLEtBQUssQ0FBQyxXQUFXLENBQUM7SUFDdkJGLEVBQUUsQ0FBQ0csR0FBRyxDQUFDLHVCQUF1QixDQUFDLENBQUNDLEtBQUssQ0FBQyxDQUFDLENBQUNDLElBQUksQ0FBQyxHQUFHLENBQUM7SUFDL0NMLEVBQUUsQ0FBQ00sUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDQyxLQUFLLENBQUMsQ0FBQztJQUNoQ1AsRUFBRSxDQUFDRyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUNLLEtBQUssQ0FBQyxDQUFDO0lBQzNCUixFQUFFLENBQUNHLEdBQUcsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ2hETCxFQUFFLENBQUNHLEdBQUcsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDRSxJQUFJLENBQUMsY0FBYyxDQUFDO0lBQ3hETCxFQUFFLENBQUNNLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQ0MsS0FBSyxDQUFDLENBQUM7SUFDaENQLEVBQUUsQ0FBQ1MsSUFBSSxDQUFDLElBQUksQ0FBQztJQUNiVCxFQUFFLENBQUNNLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQ0MsS0FBSyxDQUFDLENBQUM7SUFDaENQLEVBQUUsQ0FBQ1MsSUFBSSxDQUFDLElBQUksQ0FBQztJQUdiVCxFQUFFLENBQUNNLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQ0MsS0FBSyxDQUFDLENBQUM7O0lBRS9CO0lBQ0ZQLEVBQUUsQ0FBQ0csR0FBRyxDQUFDLHVCQUF1QixDQUFDLENBQUNDLEtBQUssQ0FBQyxDQUFDLENBQUNDLElBQUksQ0FBQyxHQUFHLENBQUM7SUFDL0NMLEVBQUUsQ0FBQ00sUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDQyxLQUFLLENBQUMsQ0FBQztJQUNoQ1AsRUFBRSxDQUFDRyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUNLLEtBQUssQ0FBQyxDQUFDO0lBQzNCUixFQUFFLENBQUNHLEdBQUcsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ2hETCxFQUFFLENBQUNHLEdBQUcsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDRSxJQUFJLENBQUMsY0FBYyxDQUFDO0lBQ3hETCxFQUFFLENBQUNNLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQ0MsS0FBSyxDQUFDLENBQUM7SUFDaENQLEVBQUUsQ0FBQ1MsSUFBSSxDQUFDLElBQUksQ0FBQztJQUNiVCxFQUFFLENBQUNNLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQ0MsS0FBSyxDQUFDLENBQUM7SUFDaENQLEVBQUUsQ0FBQ1MsSUFBSSxDQUFDLElBQUksQ0FBQztFQUVmLENBQUMsQ0FBQztFQUVGQyxVQUFVLENBQUMsTUFBTTtJQUNmO0lBQ0ZWLEVBQUUsQ0FBQ0MsS0FBSyxDQUFDLE9BQU8sRUFBRSxlQUFlLENBQUM7RUFDbEMsQ0FBQyxDQUFDOztFQUVGO0VBQ0FVLEVBQUUsQ0FBQyxtQkFBbUIsRUFBRSxNQUFJO0lBQzFCWCxFQUFFLENBQUNFLEtBQUssQ0FBQyxjQUFjLENBQUM7SUFDeEJGLEVBQUUsQ0FBQ1MsSUFBSSxDQUFDLElBQUksQ0FBQztJQUNiVCxFQUFFLENBQUNHLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDUyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUNDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO0VBQ3pELENBQUMsQ0FBQzs7RUFHSjtFQUNBRixFQUFFLENBQUMsc0JBQXNCLEVBQUUsTUFBTTtJQUMvQjtJQUNBWCxFQUFFLENBQUNFLEtBQUssQ0FBQyxjQUFjLENBQUM7SUFDeEJGLEVBQUUsQ0FBQ1MsSUFBSSxDQUFDLElBQUksQ0FBQztJQUNiVCxFQUFFLENBQUNHLEdBQUcsQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDRSxJQUFJLENBQUMsY0FBYyxDQUFDO0lBQzFETCxFQUFFLENBQUNTLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDYlQsRUFBRSxDQUFDRyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUNXLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQ1AsS0FBSyxDQUFDLENBQUM7SUFDOUJQLEVBQUUsQ0FBQ0csR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDVSxNQUFNLENBQUMsU0FBUyxFQUFFLGNBQWMsQ0FBQzs7SUFFakQ7SUFDQWIsRUFBRSxDQUFDRSxLQUFLLENBQUMsZ0JBQWdCLENBQUM7SUFDMUJGLEVBQUUsQ0FBQ0csR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDRyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUNDLEtBQUssQ0FBQyxDQUFDO0lBQzdDUCxFQUFFLENBQUNTLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDYlQsRUFBRSxDQUFDRyxHQUFHLENBQUMsNkJBQTZCLENBQUMsQ0FBQ0UsSUFBSSxDQUFDLGNBQWMsQ0FBQztJQUMxREwsRUFBRSxDQUFDUyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ2JULEVBQUUsQ0FBQ0csR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDVyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUNQLEtBQUssQ0FBQyxDQUFDO0lBQzlCUCxFQUFFLENBQUNHLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQ1UsTUFBTSxDQUFDLFNBQVMsRUFBRSxjQUFjLENBQUM7RUFDbkQsQ0FBQyxDQUFDOztFQUdGO0VBQ0FGLEVBQUUsQ0FBQyxtQkFBbUIsRUFBRSxNQUFJO0lBQzFCWCxFQUFFLENBQUNFLEtBQUssQ0FBQyxjQUFjLENBQUM7SUFDeEJGLEVBQUUsQ0FBQ1MsSUFBSSxDQUFDLElBQUksQ0FBQztJQUNiVCxFQUFFLENBQUNHLEdBQUcsQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDRSxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3BETCxFQUFFLENBQUNTLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDYlQsRUFBRSxDQUFDRyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUNXLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQ1AsS0FBSyxDQUFDLENBQUM7SUFDOUJQLEVBQUUsQ0FBQ0csR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDVSxNQUFNLENBQUMsYUFBYSxFQUFFLGNBQWMsQ0FBQzs7SUFFckQ7SUFDQWIsRUFBRSxDQUFDRSxLQUFLLENBQUMsZ0JBQWdCLENBQUM7SUFDMUJGLEVBQUUsQ0FBQ0csR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDRyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUNDLEtBQUssQ0FBQyxDQUFDO0lBQzdDUCxFQUFFLENBQUNTLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDYlQsRUFBRSxDQUFDRyxHQUFHLENBQUMsNkJBQTZCLENBQUMsQ0FBQ0UsSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUNwREwsRUFBRSxDQUFDUyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ2JULEVBQUUsQ0FBQ0csR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDVyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUNQLEtBQUssQ0FBQyxDQUFDO0lBQzlCUCxFQUFFLENBQUNHLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQ1UsTUFBTSxDQUFDLGFBQWEsRUFBRSxjQUFjLENBQUM7RUFFckQsQ0FBQyxDQUFDO0FBR04sQ0FBQyxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kb25hY2lvbmVzLy4vY3lwcmVzcy9lMmUvSFU3L21haW4uY3kuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZGVzY3JpYmUoXCJIaXN0b3JpYSBkZSB1c3VhcmlvIDcuIFBydWViYSBkZSB2aXN1YWxpemFjaW9uIGRlIHByZXN0YW1vc1wiLCAoKSA9PiB7XG4gIGJlZm9yZSgoKSA9PiB7XG4gICAgLy8gTG9naW5cblx0XHRjeS5sb2dpbihcImFkbWluXCIsIFwiYWRtaW5pc3RyYWRvclwiKTtcblxuICAgIC8vIFJlZ2lzdGVyIGxvYW4gMVxuICAgIGN5LnZpc2l0KFwiLyMvc2FsaWRhXCIpO1xuXHRcdGN5LmdldChcIiNvdXRnb2luZ3NfYm9keSBpbnB1dFwiKS5maXJzdCgpLnR5cGUoXCIxXCIpO1xuICAgIGN5LmNvbnRhaW5zKFwiQ29udGludWFyXCIpLmNsaWNrKCk7XG4gICAgY3kuZ2V0KFwiI3ByZXN0YW1vXCIpLmNoZWNrKCk7XG4gICAgY3kuZ2V0KFwiaW5wdXRbbmFtZT1wYXRpZW50TnVtYmVyXVwiKS50eXBlKFwiMTIzNFwiKTtcbiAgICBjeS5nZXQoXCJpbnB1dFtuYW1lPXZvbHVudGVlck5hbWVdXCIpLnR5cGUoXCJWb2x1bnRhcmlvIEFcIik7XG4gICAgY3kuY29udGFpbnMoXCJDb250aW51YXJcIikuY2xpY2soKTtcbiAgICBjeS53YWl0KDEwMDApO1xuICAgIGN5LmNvbnRhaW5zKFwiQ29uZmlybWFyXCIpLmNsaWNrKCk7XG4gICAgY3kud2FpdCgxMDAwKTtcblxuXG4gICAgY3kuY29udGFpbnMoXCJDYW5jZWxhclwiKS5jbGljaygpO1xuXG4gICAgLy8gUmVnaXN0ZXIgTG9hbiAyXG5cdFx0Y3kuZ2V0KFwiI291dGdvaW5nc19ib2R5IGlucHV0XCIpLmZpcnN0KCkudHlwZShcIjFcIik7XG4gICAgY3kuY29udGFpbnMoXCJDb250aW51YXJcIikuY2xpY2soKTtcbiAgICBjeS5nZXQoXCIjcHJlc3RhbW9cIikuY2hlY2soKTtcbiAgICBjeS5nZXQoXCJpbnB1dFtuYW1lPXBhdGllbnROdW1iZXJdXCIpLnR5cGUoXCI1Njc4XCIpO1xuICAgIGN5LmdldChcImlucHV0W25hbWU9dm9sdW50ZWVyTmFtZV1cIikudHlwZShcIlZvbHVudGFyaW8gQlwiKTtcbiAgICBjeS5jb250YWlucyhcIkNvbnRpbnVhclwiKS5jbGljaygpO1xuICAgIGN5LndhaXQoMTAwMCk7XG4gICAgY3kuY29udGFpbnMoXCJDb25maXJtYXJcIikuY2xpY2soKTtcbiAgICBjeS53YWl0KDEwMDApO1xuXG4gIH0pO1xuXG4gIGJlZm9yZUVhY2goKCkgPT4ge1xuICAgIC8vIExvZ2luIGJlZm9yZSBlYWNoIHRlc3Rcblx0XHRjeS5sb2dpbihcImFkbWluXCIsIFwiYWRtaW5pc3RyYWRvclwiKTtcbiAgfSk7XG5cbiAgLy8gVGVzdCBwb3IgUGFzdCBNb3ZlbWVudHMgKExvYW5zKVxuICBpdChcIlRhYmxhIGRlIHByw6lzdGFtb1wiLCAoKT0+e1xuICAgIGN5LnZpc2l0KFwiLyMvcHJlc3RhbW9zXCIpO1xuICAgIGN5LndhaXQoMTAwMCk7XG4gICAgY3kuZ2V0KFwidGFibGUgdGJvZHkgdHJcIikuaXRzKCdsZW5ndGgnKS5zaG91bGQoJ2JlLmd0JywgMik7XG4gICAgfSk7XG5cblxuICAvLyBUZXN0IGZvciBwYXRpZW50IGxvYW4gc2VhcmNoXG4gIGl0KFwiQsO6c3F1ZWRhIGRlIHByw6lzdGFtb1wiLCAoKSA9PiB7XG4gICAgLy8gU2VhcmNoIGluIEFjdGl2ZSBMb2FucyB0YWJsZVxuICAgIGN5LnZpc2l0KFwiLyMvcHJlc3RhbW9zXCIpO1xuICAgIGN5LndhaXQoMTAwMCk7XG4gICAgY3kuZ2V0KCdpbnB1dFtwbGFjZWhvbGRlcj1cIkJ1c2NhclwiXScpLnR5cGUoXCJWb2x1bnRhcmlvIEFcIik7XG4gICAgY3kud2FpdCgxMDAwKTtcbiAgICBjeS5nZXQoXCJidXR0b25cIikuZXEoMikuY2xpY2soKTtcbiAgICBjeS5nZXQoXCJ0YWJsZVwiKS5zaG91bGQoXCJjb250YWluXCIsIFwiVk9MVU5UQVJJTyBBXCIpO1xuXG4gICAgLy8gU2VhcmNoIGluIFBhc3QgTW92ZW1lbnRzIChMb2FucykgdGFibGVcbiAgICBjeS52aXNpdChcIi8jL21vdmltaWVudG9zXCIpO1xuICAgIGN5LmdldChcImJ1dHRvblwiKS5jb250YWlucyhcIlByw6lzdGFtb1wiKS5jbGljaygpO1xuICAgIGN5LndhaXQoMTAwMCk7XG4gICAgY3kuZ2V0KCdpbnB1dFtwbGFjZWhvbGRlcj1cIkJ1c2NhclwiXScpLnR5cGUoXCJWT0xVTlRBUklPIEFcIik7XG4gICAgY3kud2FpdCgxMDAwKTtcbiAgICBjeS5nZXQoXCJidXR0b25cIikuZXEoMikuY2xpY2soKTtcbiAgICBjeS5nZXQoXCJ0YWJsZVwiKS5zaG91bGQoXCJjb250YWluXCIsIFwiVk9MVU5UQVJJTyBBXCIpO1xuICB9KTtcblxuXG4gIC8vIFRlc3QgZGUgYsO6c3F1ZWRhIG5lZ2F0aXZvXG4gIGl0KFwiVGFibGEgZGUgcHLDqXN0YW1vXCIsICgpPT57XG4gICAgY3kudmlzaXQoXCIvIy9wcmVzdGFtb3NcIik7XG4gICAgY3kud2FpdCgxMDAwKTtcbiAgICBjeS5nZXQoJ2lucHV0W3BsYWNlaG9sZGVyPVwiQnVzY2FyXCJdJykudHlwZShcIlBydWViYVwiKTtcbiAgICBjeS53YWl0KDEwMDApO1xuICAgIGN5LmdldChcImJ1dHRvblwiKS5lcSgyKS5jbGljaygpO1xuICAgIGN5LmdldChcInRhYmxlXCIpLnNob3VsZChcIm5vdC5jb250YWluXCIsIFwiVk9MVU5UQVJJTyBBXCIpO1xuXG4gICAgLy8gU2VhcmNoIGluIFBhc3QgTW92ZW1lbnRzIChMb2FucykgdGFibGVcbiAgICBjeS52aXNpdChcIi8jL21vdmltaWVudG9zXCIpO1xuICAgIGN5LmdldChcImJ1dHRvblwiKS5jb250YWlucyhcIlByw6lzdGFtb1wiKS5jbGljaygpO1xuICAgIGN5LndhaXQoMTAwMCk7XG4gICAgY3kuZ2V0KCdpbnB1dFtwbGFjZWhvbGRlcj1cIkJ1c2NhclwiXScpLnR5cGUoXCJQcnVlYmFcIik7XG4gICAgY3kud2FpdCgxMDAwKTtcbiAgICBjeS5nZXQoXCJidXR0b25cIikuZXEoMikuY2xpY2soKTtcbiAgICBjeS5nZXQoXCJ0YWJsZVwiKS5zaG91bGQoXCJub3QuY29udGFpblwiLCBcIlZPTFVOVEFSSU8gQVwiKTtcblxuICAgIH0pO1xuXG5cbn0pO1xuIl0sIm5hbWVzIjpbImRlc2NyaWJlIiwiYmVmb3JlIiwiY3kiLCJsb2dpbiIsInZpc2l0IiwiZ2V0IiwiZmlyc3QiLCJ0eXBlIiwiY29udGFpbnMiLCJjbGljayIsImNoZWNrIiwid2FpdCIsImJlZm9yZUVhY2giLCJpdCIsIml0cyIsInNob3VsZCIsImVxIl0sInNvdXJjZVJvb3QiOiIifQ==