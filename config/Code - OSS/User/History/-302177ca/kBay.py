#Función que checa si el formato, de la bebida agregada, es correcto
def checkFormat(dr):
	#Checa si la entrada solo tiene espacios en blanco o un string vacío
	if (dr.isspace()) or dr == "":
    	return("ERROR: La entrada está en blanco") #Si sí, devuelve ERROR
	#Obtiene el primer elemento del string de la bebida, presuntamente el nombre de esta
	name = dr.split(",", 1)[0].strip()
	#Obtiene el resto del string de la bebida, presuntamente la lista de tamaños de esta
	sizes = dr.split(",", 1)[1].strip()
    
	#Checa si el string de entrada, el nombre y la lista de tamaños, tienen formato correcto
	if(checkName(name) == True and checkSizes(sizes) == True):
    	return(True) #Si sí, devuelve True
	else:
    	return("ERROR: El primer elemento no es un nombre válido") #Si no, ERROR


#Función que checha si el formato, del nombre de la bebida agregada, es correcto
def checkName(na):
	#Checa si el string solo contiene espacios en blanco
	if (na.isspace()) or na == "":
    	return("ERROR: El nombre está en blanco") #Si sí, devuelve ERROR
	#Checa si el string del nombre tiene entre 2 y 15 caracteres
	if (1 < len(na) < 16):
    	nameIs = all(char.isalpha() or char.isspace() for char in na) #Si sí, se revisa si todos los caracterés del nombre son
                                                                    	#una letra o un espacio, si sí, guarda True, si no, False
    	#Checa el valor de nameIs
    	if (nameIs):
        	return(True) #Si sí, devuelve True
    	else:
        	return("ERROR: El nombre contiene caractéres no alfabéticos") #Si no, ERROR
	else:
    	return("ERROR: El nombre no tiene entre 2 y 15 caractéres") #Si no, ERROR


#Función que checa si el formato, de la lista de tamaños de la bebida agregada, es correcto
def checkSizes(si):
	#Checa si el string de la lista de tamaños es solamente espacios en blanco o si está vacía
	if (si.isspace() or si == ""):
    	return("ERROR: La lista está vacía") #Si sí, devuelve ERROR
    
	#Se crea una lista que contiene todos los valores del string, ignorando comas o espacios en blanco
	li = [num.strip() for num in si.split(",") if num.strip()]
	#Se hace un ciclo que recorre cada valor de la lista
	for num in li:
    	#Checa si el caractér es alfabético
    	if (num.isalpha()):
        	return("ERROR: La lista contiene caracteres alfabéticos") #Si sí, devuelve ERROR
    	#Si no, checa si el caractér es flotante
    	elif ("." in num):
        	return("ERROR: La lista contiene valores flotantes") #Si sí, devuelve ERROR
    	else:
        	#Si no, se tranforma el string del número a integer
        	tNum = int(num)
        	#Checa si el valor del tamaño se encuentra entre 1 y 48
        	if (0 < tNum < 49):
            	1 #Si sí, no sucede nada
        	else:
            	return("ERROR: La lista contiene valores que no se encuentran entre 1 y 48") #Si no, ERROR
    
	i = 1 #Se declara un contador para el ciclo
	#Checa si la lista tiene entre 1 y 5 elementos
	if (0 < len(li) < 6):
    	#Si sí, se crea un ciclo que se repetirá por cada elemento de la lista
    	while i < len(li):
        	#Checa si el elemento visto de la lista es menor al que le precede
        	if (li[i] < li[i - 1]):
            	return("ERROR: La lista no está en orden ascendente") #Si sí, devuelve ERROR
        	i += 1 #Si no, revisa el elemento siguiente
	else:
    	return("ERROR: La lista no tiene de entre 1 y 5 elementos") #Si no, ERROR
    
	return(True) #Si no, True


# print("Agrega una nueva Bebida")
# drink = input()

# if (checkFormat(drink)):
# 	print('Bebida Agregada Exitosamente')
# else:
# 	print('Proceso Fallido')