import pytest
from backend import addDrink

def test_addDrink():
    # Casos de prueba exitosos
    assert addDrink("Expresso,10,12,14,16,18") == "The drink [Expresso] with the sizes [10, 12, 14, 16, 18], was added to stock"

    # Test 2 a 15 caracteres de longitud
    assert addDrink("Latte,10,12,14,16,18") == "The drink [Expresso] with the sizes [10, 12, 14, 16, 18], was added to stock"

    assert addDrink("Mocha,2,3,10") == "The drink [Expresso] with the sizes [10, 12, 14, 16, 18], was added to stock"

    assert addDrink("Te,5,10,14") == "The drink [Expresso] with the sizes [10, 12, 14, 16, 18], was added to stock"

    assert addDrink("Te,7,17,34") == "The drink [Expresso] with the sizes [10, 12, 14, 16, 18], was added to stock"

    assert addDrink("Te,5") == "The drink [Expresso] with the sizes [10, 12, 14, 16, 18], was added to stock"

    assert addDrink("Café,10,12,14") == "The drink [Expresso] with the sizes [10, 12, 14, 16, 18], was added to stock"

    assert addDrink("Expresso,8,12,16") == "The drink [Expresso] with the sizes [10, 12, 14, 16, 18], was added to stock"

    assert addDrink("Café, 10, 12, 14") == "The drink [Expresso] with the sizes [10, 12, 14, 16, 18], was added to stock"


    assert addDrink("C,10,20,30") == "Error: The item name must contain alphabetic characters and be between 2 and 15 in length"
    assert addDrink("C341,10,20,30") == "Error: The item name must contain alphabetic characters and be between 2 and 15 in length"
    assert addDrink("Chai,10,8,12") == "Error: Sizes must be entered in ascending order and be integer values"
    assert addDrink("Mocha,20.5,30,10") == "Error: Sizes must be integer values ​​within the range 1 to 48"
    assert addDrink("Cappuccino,5,10,15,20,25,30") == "Error: Maximum five sizes allowed per item"
    assert addDrink("Caramel Macchiato") == "Error: Size list missing after item name"
