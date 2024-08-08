# Juan Medina

def validar_entrada(entrada):
    # Eliminar espacios en blanco
    entrada = entrada.replace(" ", "")
    
    # Dividir la entrada en nombre de bebida y tamaños
    nombre, tamanos = entrada.split(",", 1)
    
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
