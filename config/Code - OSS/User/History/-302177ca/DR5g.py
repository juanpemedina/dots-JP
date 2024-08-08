# Juan Medina

def validar_formato_entrada(entrada):
    # Eliminar espacios en blanco
    entrada = entrada.replace(" ", "")
    
    # Separar nombre del artículo y tamaños
    nombre, tamaños = entrada.split(',', 1)
    
    # Validar nombre del artículo
    if not nombre.isalpha() or len(nombre) < 2 or len(nombre) > 15:
        return False
    
    # Validar tamaños
    tamaños = tamaños.split(',')
    if len(tamaños) > 5:
        return False
    
    prev_tamaño = 0
    for tamaño in tamaños:
        tamaño = tamaño.strip()  # Eliminar espacios en blanco
        if not tamaño.isdigit():
            return False
        tamaño = int(tamaño)
        if tamaño < 1 or tamaño > 48 or tamaño <= prev_tamaño:
            return False
        prev_tamaño = tamaño
    
    return True

# Ejemplos de entrada para probar la función
entradas = [
    "Café,12,16,20,24,32",
    "Té verde,8,12",
    "Frappé,10,15,20",
    "Z,1,2,3,4,5",
    "Agua,48,36,24,12,1",
    "Coca Cola,20,24,16,12",
    "Cerveza,",
    "Café, 12, 16, 20, 24, 32",  # con espacios en blanco
    "Leche Condensada, 8, 10, 12", # con espacios en blanco
    "Té caliente, 12, 10" # tamaño en desorden
]

# Probamos las entradas
for entrada in entradas:
    resultado = validar_formato_entrada(entrada)
    print(f"{entrada}: {'Válido' if resultado else 'Inválido'}")
