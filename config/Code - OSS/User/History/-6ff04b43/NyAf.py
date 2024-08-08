# test_backend.py

import pytest
from backend import validarEntrada

# Casos de prueba válidos
@pytest.mark.parametrize("entrada", [
    ("Café,1"),
    ("Té,2,4,8,16"),
    ("Chocolate,5,10,15,20,25"),
])
def test_entrada_valida(entrada):
    assert validarEntrada(entrada) == True

# Casos de prueba inválidos
@pytest.mark.parametrize("entrada", [
    ("Té grande,2,4,8,16"),  # Nombre de bebida con espacio
    ("Té,2,4,8,8"),         # Tamaño no ascendente
    ("C,1"),                # Nombre de bebida demasiado corto
    ("Café,49"),            # Tamaño fuera del rango
    ("Café,1,3,5,7,9")      # Demasiados tamaños
])
def test_entrada_invalida(entrada):
    assert validarEntrada(entrada) == False
