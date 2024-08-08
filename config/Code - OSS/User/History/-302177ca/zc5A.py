# Emilio Flamenco Andrade A01732743
# Github: https://github.com/EFlamenco/PruebasSistemaCafeteria

# Modulo para agregar bebidas a una cafeteria
def agregar_bebida(string):
    # Eliminar espacios en blanco
    string = string.replace(" ", "")
    
    # Verificar si el nombre del artículo está primero
    if not string[0].isalpha():
        return "Error: El nombre del artículo debe ser el primer elemento."
    
    # Dividir el input en nombre del artículo y tamaños y verificar que si contenga una lista de tamaños
    partes = string.split(",", 1)
    if len(partes) == 1:
        return "Error: Falta la lista de tamaños después del nombre del artículo."
    
    nombre, tamanos = partes
    
    # Verificar el formato del nombre del artículo
    if not nombre.isalpha() or len(nombre) < 2 or len(nombre) > 15:
        return "Error: El nombre del artículo debe contener caracteres alfabéticos y tener una longitud entre 2 y 15."
    
    # Dividir tamaños
    tamanos = tamanos.split(",")
    
    # Verificar la cantidad de tamaños
    if len(tamanos) > 5:
        return "Error: Se permiten máximo cinco tamaños por artículo."
    
    # Verificar el orden ascendente de tamaños
    for i in range(len(tamanos) - 1):
        if not tamanos[i].isdigit() or int(tamanos[i]) >= int(tamanos[i+1]):
            return "Error: Los tamaños deben ingresarse en orden ascendente y ser valores enteros."
    
    # Verificar el formato y rango de los tamaños
    for tamano in tamanos:
        if not tamano.isdigit() or int(tamano) < 1 or int(tamano) > 48:
            return "Error: Los tamaños deben ser valores enteros dentro del rango de 1 a 48."
    
    # Si pasa todas las validaciones, agregar la bebida
    return f"Se ha agregado la bebida {nombre} con los tamaños {', '.join(tamanos)}."
