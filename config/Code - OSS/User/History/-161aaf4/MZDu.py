def agregar_bebida(string):
    # Eliminar espacios en blanco y dividir en nombre y tamaños
    partes = string.replace(" ", "").split(",", 1)
    
    # Verificar si se proporcionó el nombre y la lista de tamaños
    if len(partes) != 2:
        return "Error: Debe proporcionar el nombre del artículo seguido de la lista de tamaños separados por coma."
    
    nombre, tamanos = partes
    
    # Verificar el formato del nombre del artículo
    if not nombre.isalpha() or not (2 <= len(nombre) <= 15):
        return "Error: El nombre del artículo debe contener caracteres alfabéticos y tener una longitud entre 2 y 15."
    
    # Dividir tamaños y verificar la cantidad de tamaños
    tamanos = tamanos.split(",")
    if not (1 <= len(tamanos) <= 5):
        return "Error: Se permiten máximo cinco tamaños por artículo."
    
    # Verificar si se proporcionó al menos un tamaño
    if not tamanos[0]:
        return "Error: Falta la lista de tamaños después del nombre del artículo."
    
    # Verificar el orden ascendente y el formato de los tamaños
    tamano_anterior = 0
    for tamano in tamanos:
        if not tamano.isdigit() or not (1 <= int(tamano) <= 48):
            return "Error: Los tamaños deben ser valores enteros dentro del rango de 1 a 48."
        if int(tamano) <= tamano_anterior:
            return "Error: Los tamaños deben ingresarse en orden ascendente y ser valores enteros."
        tamano_anterior = int(tamano)
    
    # Si pasa todas las validaciones, agregar la bebida
    return f"Se ha agregado la bebida {nombre} con los tamaños {', '.join(tamanos)}."

# Ejemplo de uso
bebida = "Caramel Macchiato"
print(agregar_bebida(bebida))
