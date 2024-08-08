def addDrink(input_str):
    # Eliminar espacios en blanco y dividir en nombre y tamaños
    parts = input_str.replace(" ", "").split(",", 1)
    
    # Verificar si se proporcionó el nombre y la lista de tamaños
    if len(parts) != 2:
        return "Error: Size list missing after item name"
    
    name, sizes = parts
    
    # Verificar el formato del nombre
    if not name.isalpha() or not (2 <= len(name) <= 15):
        return "Error: El nombre del artículo debe contener caracteres alfabéticos y tener una longitud entre 2 y 15."
    
    # Verificar si se proporcionaron tamaños
    if not sizes:
        return "Error: Size list missing after item name"
    
    # Dividir tamaños y verificar la cantidad de tamaños
    sizes = sizes.split(",")
    if not (1 <= len(sizes) <= 5):
        return "Error: A maximum of five sizes are allowed per item"
    
    # Verificar el orden ascendente y el formato de los tamaños
    last_size = 0
    for new_size in sizes:
        if not new_size.isdigit() or not (1 <= int(new_size) <= 48):
            return "Error: Los tamaños deben ser valores enteros dentro del rango de 1 a 48."
        if int(new_size) <= last_size:
            return "Error: Los tamaños deben ingresarse en orden ascendente y ser valores enteros."
        last_size = int(new_size)
    
    # Si pasa todas las validaciones, agregar la bebida
    return f"Se ha agregado la bebida {name} con los tamaños {', '.join(sizes)}."

# Ejemplo de uso
#bebida = "Caramel Macchiato"
#print(agregar_bebida(bebida))
