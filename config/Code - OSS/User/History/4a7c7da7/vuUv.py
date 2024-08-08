import pytest
from backend import agregar_bebida

def test_agregar_bebida():
    # Casos de prueba exitosos
    assert agregar_bebida("Cafe,10,12,14,16,18") == "Se ha agregado la bebida Cafe con los tamaños 10, 12, 14, 16, 18."
    assert agregar_bebida("Capuchino,10,12,14,16,18") == "Se ha agregado la bebida Capuchino con los tamaños 10, 12, 14, 16, 18."
    assert agregar_bebida("Mocha,2,3,10") == "Se ha agregado la bebida Mocha con los tamaños 2, 3, 10."
    assert agregar_bebida("Te,5,10,14") == "Se ha agregado la bebida Te con los tamaños 5, 10, 14."
    assert agregar_bebida("Te,7,17,34") == "Se ha agregado la bebida Te con los tamaños 7, 17, 34."
    assert agregar_bebida("Te,5") == "Se ha agregado la bebida Te con los tamaños 5."
    assert agregar_bebida("Café,10,12,14") == "Se ha agregado la bebida Café con los tamaños 10, 12, 14."
    assert agregar_bebida("Expresso,8,12,16") == "Se ha agregado la bebida Expresso con los tamaños 8, 12, 16."

    # Casos de prueba fallidos
    assert agregar_bebida("C,10,20,30") == "Error: El nombre del artículo debe contener caracteres alfabéticos y tener una longitud entre 2 y 15."
    assert agregar_bebida("C341,10,20,30") == "Error: El nombre del artículo debe contener caracteres alfabéticos y tener una longitud entre 2 y 15."
    assert agregar_bebida("Chai,10,8,12") == "Error: Los tamaños deben ingresarse en orden ascendente y ser valores enteros."
    assert agregar_bebida("Café, 10, 12, 14") == "Se ha agregado la bebida Café con los tamaños 10, 12, 14."
    assert agregar_bebida("Mocha,20.5,30,10") == "Error: Los tamaños deben ser valores enteros dentro del rango de 1 a 48."
    assert agregar_bebida("Cappuccino,5,10,15,20,25,30") == "Error: Se permiten máximo cinco tamaños por artículo."
