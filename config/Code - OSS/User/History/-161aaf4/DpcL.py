def addDrink(input_str):
    # Eliminar espacios en blanco y dividir en nombre y tamaños
    parts = input_str.replace(" ", "").split(",", 1)
    
    # Verificar si se proporcionó el nombre y la lista de tamaños
    if len(parts) != 2:
        return "Error-1:"
    
    name, sizes = parts
    
    # Verificar el formato del nombre del artículo
    if not name.isalpha() or not (2 <= len(name) <= 15):
        return "Error-2:"
    
    # Verificar si se proporcionaron tamaños
    if not sizes:
        return "Error3:"
    
    # Dividir tamaños y verificar la cantidad de tamaños
    sizes = sizes.split(",")
    if not (1 <= len(sizes) <= 5):
        return "Error:"
    
    # Verificar el orden ascendente y el formato de los tamaños
    last_size = 0
    for new_size in sizes:
        if not new_size.isdigit() or not (1 <= int(new_size) <= 48):
            return "Error:"
        if int(new_size) <= last_size:
            return "Error:"
        last_size = int(new_size)
    
    # Si pasa todas las validaciones, agregar la bebida
    return f"Se ha agregado la bebida {name} con los tamaños {', '.join(sizes)}."

# Ejemplo de uso
#bebida = "Caramel Macchiato"
#print(agregar_bebida(bebida))
