def addDrink(input_str):
    # Eliminar espacios en blanco y dividir en nombre y tamaños
    parts = input_str.replace(" ", "").split(",", 1)
    
    # Verificar si se proporcionó el nombre y la lista de tamaños
    if len(parts) != 2:
        return "Error: Size list missing after item name"
    
    name, sizes = parts
    
    # Verificar el formato del nombre
    if not name.isalpha() or not (2 <= len(name) <= 15):
        return "Error: The item name must contain alphabetic characters and be between 2 and 15 in length"
    
    # Verificar si se proporcionaron tamaños
    if not sizes:
        return "Error: Size list missing after item name"
    
    # Dividir tamaños y verificar la cantidad de tamaños
    sizes = sizes.split(",")
    if not (1 <= len(sizes) <= 5):
        return "Error: Maximum five sizes allowed per item"
    
    # Verificar el orden ascendente y el formato de los tamaños
    last_size = 0
    for new_size in sizes:
        if not new_size.isdigit() or not (1 <= int(new_size) <= 48):
            return "Error: Sizes must be integer values ​​within the range 1 to 48"
        if int(new_size) <= last_size:
            return "Error: Sizes must be entered in ascending order and be integer values"
        last_size = int(new_size)
    
    # Si pasa todas las validaciones, agregar la bebida
    return f"The drink [{name}] with the sizes [{', '.join(sizes)}], was added to stock"

# Ejemplo de uso
#bebida = "Caramel Macchiato"
#print(agregar_bebida(bebida))
