import backend

#Test que comprueba que, el nombre, solo se componga de caractéres alfabéticos
def test_onlyAlpha():
    assert gest_Cafeteria.checkName("KawaFresa") == True #Todos los caractéres son alfabéticos, así que es una entrada válida
    assert gest_Cafeteria.checkName("Kawa Fresa") == True #El espacio es válido como parte del nombre, así que es una entrada válida
    assert gest_Cafeteria.checkName("    ") == "ERROR: El nombre está en blanco" #Los números no son caractéres alfabéticos, así que ERROR
    assert gest_Cafeteria.checkName("K4w4Fr3s4") == "ERROR: El nombre contiene caractéres no alfabéticos" #Los números no son caractéres alfabéticos, así que ERROR
    assert gest_Cafeteria.checkName("Kawa Fresa!") == "ERROR: El nombre contiene caractéres no alfabéticos" #El signo "!"" no es un caractér alfabético, así que ERROR

#Test que comprueba que, el nombre, tenga un largo de entre 2 a 15 caractéres
def test_lenName():
    assert gest_Cafeteria.checkName("KawaFresa") == True #Tiene 9 caractéres, así que es una entrada válida
    assert gest_Cafeteria.checkName("K") == "ERROR: El nombre no tiene entre 2 y 15 caractéres" #Tiene 1 caractér, así que ERROR
    assert gest_Cafeteria.checkName("KawaFresaMuySabrosa") == "ERROR: El nombre no tiene entre 2 y 15 caractéres" #Tiene 19 caractéres, así que ERROR
    
#Test que comprueba que, los valores de tamaño de la lista, tengan valores enteros y sean de 1 a 48
def test_valSize():
    assert gest_Cafeteria.checkSizes("1, 2, 3") == True #Todos los valores son enteros, así que es una entrada válida
    assert gest_Cafeteria.checkSizes("a, 2, c") == "ERROR: La lista contiene caracteres alfabéticos" #Hay valores no númericos, así que ERROR
    assert gest_Cafeteria.checkSizes("a, b, c") == "ERROR: La lista contiene caracteres alfabéticos" #Ni un valor es númerico, así que ERROR
    assert gest_Cafeteria.checkSizes("1, 2, 3.3") == "ERROR: La lista contiene valores flotantes" #Hay un valor decimal, así que ERROR
    assert gest_Cafeteria.checkSizes("1, 2, 49") == "ERROR: La lista contiene valores que no se encuentran entre 1 y 48" #El 49 se sale del rango establecido, así que ERROR
    assert gest_Cafeteria.checkSizes("-1, 0, 1, 2") == "ERROR: La lista contiene valores que no se encuentran entre 1 y 48" #El -1 y 0 se salen del rango establecido, así que ERROR

#Test que comprueba que, los valores de tamaño de la lista, esten en orden ascendente
def test_sizeOrder():
    assert gest_Cafeteria.checkSizes("1") == True #Un solo elemento es válido, así que es una entrada válida
    assert gest_Cafeteria.checkSizes("1, 2, 3") == True #Los elementos están en orden ascendente, así que es una entrada válida
    assert gest_Cafeteria.checkSizes("1, 3, 5") == True #Los elementos no tienen que ser consecutivos, así que es una entrada válida
    assert gest_Cafeteria.checkSizes("2, 3, 4, 1") == "ERROR: La lista no está en orden ascendente" #El 1 es menor al 4, así que ERROR
    assert gest_Cafeteria.checkSizes("3, 2, 1") == "ERROR: La lista no está en orden ascendente" #Los elementos están en orden descendente, así que ERROR
    
#Test que comprueba que, la lista de tamaños, posea entre 1 y 5 elementos
def test_sizeSize():
    assert gest_Cafeteria.checkSizes("1") == True #Un solo elemento es válido, así que es una entrada válida
    assert gest_Cafeteria.checkSizes("1, 2, 3, 4, 5") == True #5 elementos es válido, así que es una entrada válida
    assert gest_Cafeteria.checkSizes("1, 2, 3, 4, 5, 6") == "ERROR: La lista no tiene de entre 1 y 5 elementos" #6 elementos no es válido, así que ERROR
    assert gest_Cafeteria.checkSizes("") == "ERROR: La lista está vacía" #Un string vacío no es válido, así que ERROR
    assert gest_Cafeteria.checkSizes(" ") == "ERROR: La lista está vacía" #Un string con solo espacios en blanco no es válido, así que ERROR

#Test que comprueba que, el formato de la entrada, tenga el formato correcto
def test_listFormat():
    assert gest_Cafeteria.checkFormat("KawaFresa, 1, 3, 5") == True #El nombre es la primera entrada y, después, está una lista de tamaños válidos, así que es una entrada válida
    assert gest_Cafeteria.checkFormat("KawaFresa, 1, 3 , 5, , 6") == True #Los espacios en blanco son ignorados, así que es una entrada válida
    assert gest_Cafeteria.checkFormat("KawaFresa, 1, 3, 5,, 6") == True #2 comas seguidas son ignoradas, así que es una entrada válida
    assert gest_Cafeteria.checkFormat("1, 2, 3, 4, KawaFresa") == "ERROR: El primer elemento no es un nombre válido" #La lista de tamaños es la primera entrada y, después, está el nombre, así que ERROR
    assert gest_Cafeteria.checkFormat("1, KawaFresa, 2, 3, 4") == "ERROR: El primer elemento no es un nombre válido" #El nombre se encuentra en medio de la lista de tamaños, así que ERROR
    assert gest_Cafeteria.checkFormat("") == "ERROR: La entrada está en blanco"
    