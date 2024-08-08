import pandas as pd

""" Constantes """
FILE_PATH = 'Cargabilidad_Horas_disponibles_en_proyecto_CNS_ASS_2024_(003).xlsx'
SHEET_NAME = 'Maria Guerrero_Charged Hours by'
SHEET_NAME_ASS = 'Maria GuerreroASS 21-06-2024.x'
YEAR = 2024

HEADER_ROW = 6
BUDGET_SHEET_NAME = 'Presupuesto'

COLUMNS_TO_KEEP = [
    'Employee', 'Employee GPN', 'Employee Competency', 'Engagement ID',
    'Engagement', 'Accounting Cycle Date', 'Transaction Date', 'Hours'
]

""" Cargar Archivo de Excel"""

try:
    df = pd.read_excel(FILE_PATH, sheet_name=SHEET_NAME, header=HEADER_ROW)
    df_ASS = pd.read_excel(FILE_PATH, sheet_name=SHEET_NAME_ASS, header=HEADER_ROW)
    df_budget = pd.read_excel(FILE_PATH, sheet_name=BUDGET_SHEET_NAME)
except FileNotFoundError:
    print(f"Error: El archivo {FILE_PATH} no se encuentra.")
    exit()
except Exception as e:
    print(f"Error al cargar el archivo de Excel: {e}")
    exit()

""" Limpieza de datos reporte 1"""
# Filtrar las columnas que deseamos de la hoja reporte 1 (Consulting)
columns_to_keep = [col for col in COLUMNS_TO_KEEP if col in df.columns]
df_cleaned = df.loc[:, columns_to_keep].copy()
# Convertir la columna 'Accounting Cycle Date' a tipo datetime
df_cleaned['Accounting Cycle Date'] = pd.to_datetime(df_cleaned['Accounting Cycle Date'], errors='coerce')
# Filtrar las filas con 'Accounting Cycle Date' a partir del 2024
df_cleaned = df_cleaned[df_cleaned['Accounting Cycle Date'].dt.year >= YEAR]
# Eliminar filas donde la columna 'Employee' está vacía
df_cleaned.dropna(subset=['Employee'], inplace=True)

""" Limpieza de datos reporte 2"""
# Filtrar las columnas que deseamos de la hoja reporte 2 (ASS)
columns_to_keep_ASS = [col for col in COLUMNS_TO_KEEP if col in df_ASS.columns]
df_cleaned_ASS = df_ASS.loc[:, columns_to_keep].copy()
# Convertir la columna 'Accounting Cycle Date' a tipo datetime
df_cleaned_ASS['Accounting Cycle Date'] = pd.to_datetime(df_cleaned_ASS['Accounting Cycle Date'], errors='coerce')
# Filtrar las filas con 'Accounting Cycle Date' a partir del 2024
df_cleaned_ASS = df_cleaned_ASS[df_cleaned_ASS['Accounting Cycle Date'].dt.year >= YEAR]
# Eliminar filas donde la columna 'Employee' está vacía
df_cleaned_ASS.dropna(subset=['Employee'], inplace=True)

# Unión de los DataFrames
df_cleaned_merged = pd.concat([df_cleaned, df_cleaned_ASS], ignore_index=True)

""" CREAR TABLA DE """
""" HORAS PERSUPUESTADAS """
budget_columns_to_keep = ['ENGAGEMENT ID', 'HORAS PRESUPUESTADAS' ]
df_budget_cleaned = df_budget.loc[:, budget_columns_to_keep].copy()

df_budget_cleaned.rename(columns={'ENGAGEMENT ID': 'Engagement ID', 'USUARIO': 'Employee'}, inplace=True)
df_engagement_with_budget = pd.merge(df_cleaned_final, df_budget_cleaned, on='Engagement ID', how='left')



with pd.ExcelWriter('cleaned_dataPEPE.xlsx') as writer:
    df_budget.to_excel(writer, sheet_name='DataLimpiaASS', index=False)
    df_cleaned_merged.to_excel(writer, sheet_name='DataLimpiaReportes', index=False)
print("Proceso completado y datos guardados en 'cleaned_data.xls")

