import pandas as pd

""" Constantes """
FILE_PATH = 'Cargabilidad_Horas_disponibles_en_proyecto_CNS_ASS_2024_(003).xlsx'
SHEET_NAME = 'Maria GuerreroASS 21-06-2024.x'
SHEET_NAME_2 = 'Maria Guerrero_Charged Hours by'
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
    df_budget = pd.read_excel(FILE_PATH, sheet_name=BUDGET_SHEET_NAME)
    df_budget = pd.read_excel(FILE_PATH, sheet_name=BUDGET_SHEET_NAME)
except FileNotFoundError:
    print(f"Error: El archivo {FILE_PATH} no se encuentra.")
    exit()
except Exception as e:
    print(f"Error al cargar el archivo de Excel: {e}")
    exit()

""" Limpieza de datos """
# Filtrar las columnas que deseamos
columns_to_keep = [col for col in COLUMNS_TO_KEEP if col in df.columns]
df_cleaned = df.loc[:, columns_to_keep].copy()

# Convertir la columna 'Accounting Cycle Date' a tipo datetime
df_cleaned['Accounting Cycle Date'] = pd.to_datetime(df_cleaned['Accounting Cycle Date'], errors='coerce')

# Filtrar las filas con 'Accounting Cycle Date' a partir del 2024
df_cleaned = df_cleaned[df_cleaned['Accounting Cycle Date'].dt.year >= YEAR]

# Eliminar filas donde la columna 'Employee' está vacía
df_cleaned.dropna(subset=['Employee'], inplace=True)

""" Agrupa Employee+GPN+Competency, Engagement+ID, y la suma de horas"""
df_sum_hours = df_cleaned.groupby(
    ['Employee', 'Employee GPN', 'Employee Competency', 'Engagement', 'Engagement ID']
)['Hours'].sum().reset_index()

""" Engagement+ID Horas sumadas totales """
# Agrupar por Engagement ID para sumar las horas por cada Engagement ID
df_engagement_sum = df_sum_hours.groupby(['Engagement ID', 'Engagement'])['Hours'].sum().reset_index()

""" Agrupa Employee+GPN+Competency, Engagement+ID, y la suma de horas segun el Accounting Cycle Date """
# Agrupar por Employee GUI, Engagement ID, y Accounting Cycle Date, y sumar las horas
df_sum_hours_weekly = df_cleaned.groupby(
    ['Employee GPN', 'Employee', 'Engagement ID', 'Engagement', 'Accounting Cycle Date']
)['Hours'].sum().reset_index()
# Ordenar por nombre de Engagement
df_sum_hours_weekly = df_sum_hours_weekly.sort_values(by=['Accounting Cycle Date', 'Engagement'])

""" HORAS PERSUPUESTADAS """
budget_columns_to_keep = ['ENGAGEMENT ID', 'HORAS PRESUPUESTADAS' ]
df_budget_cleaned = df_budget.loc[:, budget_columns_to_keep].copy()

df_budget_cleaned.rename(columns={'ENGAGEMENT ID': 'Engagement ID', 'USUARIO': 'Employee'}, inplace=True)
df_engagement_with_budget = pd.merge(df_cleaned, df_budget_cleaned, on='Engagement ID', how='left')

""" Guardar en Excel"""
# Guardar los DataFrames limpios y agrupados en un nuevo archivo de Excel
with pd.ExcelWriter('cleaned_dataPPPP.xlsx') as writer:
    df_cleaned.to_excel(writer, sheet_name='DataLimpia', index=False)
    df_sum_hours.to_excel(writer, sheet_name='Horas_Engagement_Employee', index=False)
    df_engagement_sum.to_excel(writer, sheet_name='Horas_Totales_Engagement', index=False)
    df_sum_hours_weekly.to_excel(writer, sheet_name='Horas_Semanales_Employee', index=False)
    df_engagement_with_budget.to_excel(writer, sheet_name='Horas_Totales_Con_Presupuesto', index=False)
print("Proceso completado y datos guardados en 'cleaned_data.xls")
