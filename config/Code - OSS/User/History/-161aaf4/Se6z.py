def addDrink(string):
    # Remove spaces and split on name and sizes
    parts = string.replace(" ", "").split(",", 1)
    
    # Check if name and size list provided
    if len(parts) != 2:
        return "Error: Falta la lista de tamaños después del nombre del artículo."
    
    name, sizes = parts
    
    # Check the format of the article name
    if not name.isalpha() or not (2 <= len(name) <= 15):
        return "Error: El nombre del artículo debe contener caracteres alfabéticos y tener una longitud entre 2 y 15."
    
# Check if sizes were provided
    if not sizes:
        return "Error: Falta la lista de tamaños después del nombre del artículo."
    
    # Split sizes and check the number of sizes
    sizes = sizes.split(",")
    if not (1 <= len(sizes) <= 5):
        return "Error: Se permiten máximo cinco tamaños por artículo."
    
    # Check ascending order and format of sizes
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
