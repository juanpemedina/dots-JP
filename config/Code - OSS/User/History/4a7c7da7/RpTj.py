import pytest
from backend import addDrink

def test_addDrink():
    # Casos de prueba exitosos
    assert addDrink("Cafe,10,12,14,16,18") == "Se ha agregado la bebida Cafe con los tamaños 10, 12, 14, 16, 18."
    # Test 2 a 15 caracteres de longitud
    assert addDrink("Lechero,10,12,14,16,18") == "Se ha agregado la bebida Capuchino con los tamaños 10, 12, 14, 16, 18."
    
    assert addDrink("Mocha,2,3,10") == "Se ha agregado la bebida Mocha con los tamaños 2, 3, 10."
    assert addDrink("Te,5,10,14") == "Se ha agregado la bebida Te con los tamaños 5, 10, 14."
    assert addDrink("Te,7,17,34") == "Se ha agregado la bebida Te con los tamaños 7, 17, 34."
    assert addDrink("Te,5") == "Se ha agregado la bebida Te con los tamaños 5."
    assert addDrink("Café,10,12,14") == "Se ha agregado la bebida Café con los tamaños 10, 12, 14."
    assert addDrink("Expresso,8,12,16") == "Se ha agregado la bebida Expresso con los tamaños 8, 12, 16."
    assert addDrink("C,10,20,30") == "Error: El nombre del artículo debe contener caracteres alfabéticos y tener una longitud entre 2 y 15."
    assert addDrink("C341,10,20,30") == "Error: El nombre del artículo debe contener caracteres alfabéticos y tener una longitud entre 2 y 15."
    assert addDrink("Chai,10,8,12") == "Error: Los tamaños deben ingresarse en orden ascendente y ser valores enteros."
    assert addDrink("Café, 10, 12, 14") == "Se ha agregado la bebida Café con los tamaños 10, 12, 14."
    assert addDrink("Mocha,20.5,30,10") == "Error: Los tamaños deben ser valores enteros dentro del rango de 1 a 48."
    assert addDrink("Cappuccino,5,10,15,20,25,30") == "Error: Se permiten máximo cinco tamaños por artículo."
    assert addDrink("Caramel Macchiato") == "Error: Falta la lista de tamaños después del nombre del artículo."
