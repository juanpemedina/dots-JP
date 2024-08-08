# Juan Medina

def validateInput(entrada):
    i = entrada.replace(" ", "") # Eliminar espacios en blanco

    nombre, tamanos = entrada.split(",", 1) # Dividir la entrada en nombre de bebida y tamaños

    # Validar nombre de bebida
    if not nombre.isalpha() or len(nombre) < 2 or len(nombre) > 15:
        return False
    
    # Validar tamaños
    tamanos = tamanos.split(",")
    if len(tamanos) < 1 or len(tamanos) > 5:
        return False
    
    tamaño_anterior = 0
    for tamaño in tamanos:
        tamaño = int(tamaño)
        if tamaño < 1 or tamaño > 48 or tamaño <= tamaño_anterior:
            return False
        tamaño_anterior = tamaño
    
    return True
