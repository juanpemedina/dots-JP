# test_backend.py

import pytest
from backend import addDrink

def test_addDrink():
    # Test cases 1 (Passed)
    # Test case 5 cup sizes 
    assert addDrink("Expresso,8,12,14,16,18") == "The drink [Expresso] with the sizes [8, 12, 14, 16, 18], was added to stock"
    assert addDrink("Latte,10,12,14,16,18") == "The drink [Latte] with the sizes [10, 12, 14, 16, 18], was added to stock"
    assert addDrink("Affogato,2,3,10") == "The drink [Affogato] with the sizes [2, 3, 10], was added to stock"
    assert addDrink("Ice Coffee,5, 10,14") == "The drink [IceCoffee] with the sizes [5, 10, 14], was added to stock"
    assert addDrink("Americano,7,17,34") == "The drink [Americano] with the sizes [7, 17, 34], was added to stock"
    assert addDrink("IceTea,8") == "The drink [IceTea] with the sizes [8], was added to stock"
    assert addDrink("Cortado,10,12,14") == "The drink [Cortado] with the sizes [10, 12, 14], was added to stock"
    assert addDrink("Latte,8,12,16") == "The drink [Latte] with the sizes [8, 12, 16], was added to stock"
    assert addDrink("DoubleExpresso, 10, 12, 14") == "The drink [DoubleExpresso] with the sizes [10, 12, 14], was added to stock"
    # Test cases 2 (Error)
    assert addDrink("C,10,20,30") == "Error: The item name must contain alphabetic characters and be between 2 and 15 in length"
    assert addDrink("C341,10,20,30") == "Error: The item name must contain alphabetic characters and be between 2 and 15 in length"
    assert addDrink("Chai,10,8,12") == "Error: Sizes must be entered in ascending order and be integer values"
    assert addDrink("Mocha,20.5,30,10") == "Error: Sizes must be integer values ​​within the range 1 to 48"
    assert addDrink("Cappuccino,5,10,15,20,25,30") == "Error: Maximum five sizes allowed per item"
    assert addDrink("Caramel Macchiato") == "Error: Size list missing after item name"
