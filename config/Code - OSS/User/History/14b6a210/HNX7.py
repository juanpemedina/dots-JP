import pandas as pd

""" Constantes """
FILE_PATH = 'Cargabilidad_Horas_disponibles_en_proyecto_CNS_ASS_2024_(004).xlsx'
SHEET_NAME = 'Maria Guerrero_Charged Hours by'
SHEET_NAME_ASS = 'Maria GuerreroASS 21-06-2024.x'
YEAR = 2024

HEADER_ROW = 6
BUDGET_SHEET_NAME = 'Presupuesto'

COLUMNS_TO_KEEP = [
    'Employee', 'Employee GPN', 'Rank Description', 'Employee Service Line', 'Employee Sub Service Line', 'Employee Competency', 'Engagement ID', 'Engagement', 'Client ID','Client Name', 'Accounting Cycle Date', 'Transaction Date', 'Hours'
]

""" Cargar Archivo de Excel """
try:
    df = pd.read_excel(FILE_PATH, sheet_name=SHEET_NAME, header=5)
    df_ASS = pd.read_excel(FILE_PATH, sheet_name=SHEET_NAME_ASS, header=HEADER_ROW)
    df_budget = pd.read_excel(FILE_PATH, sheet_name=BUDGET_SHEET_NAME)
except FileNotFoundError:
    print(f"Error: El archivo {FILE_PATH} no se encuentra.")
    exit()
except Exception as e:
    print(f"Error al cargar el archivo de Excel: {e}")
    exit()

""" Limpieza de datos reporte 1 """
# Filtrar las columnas que deseamos de la hoja reporte 1 (Consulting)
columns_to_keep = [col for col in COLUMNS_TO_KEEP if col in df.columns]
df_cleaned = df.loc[:, columns_to_keep].copy()
# Convertir la columna 'Accounting Cycle Date' a tipo datetime
df_cleaned['Accounting Cycle Date'] = pd.to_datetime(df_cleaned['Accounting Cycle Date'], errors='coerce')
# Filtrar las filas con 'Accounting Cycle Date' a partir del 2024
df_cleaned = df_cleaned[df_cleaned['Accounting Cycle Date'].dt.year >= YEAR]
# Eliminar filas donde la columna 'Employee' está vacía
df_cleaned.dropna(subset=['Employee'], inplace=True)

""" Limpieza de datos reporte 2 """
# Filtrar las columnas que deseamos de la hoja reporte 2 (ASS)
columns_to_keep_ASS = [col for col in COLUMNS_TO_KEEP if col in df_ASS.columns]
df_cleaned_ASS = df_ASS.loc[:, columns_to_keep_ASS].copy()
# Filtrar por Employee Competency igual a 'Technology Assurance'
df_cleaned_ASS = df_cleaned_ASS[df_cleaned_ASS['Employee Competency'] == 'Technology Assurance']
# Convertir la columna 'Accounting Cycle Date' a tipo datetime
df_cleaned_ASS['Accounting Cycle Date'] = pd.to_datetime(df_cleaned_ASS['Accounting Cycle Date'], errors='coerce')
# Filtrar las filas con 'Accounting Cycle Date' a partir del 2024
df_cleaned_ASS = df_cleaned_ASS[df_cleaned_ASS['Accounting Cycle Date'].dt.year >= YEAR]
# Eliminar filas donde la columna 'Employee' está vacía
df_cleaned_ASS.dropna(subset=['Employee'], inplace=True)

# Unión de los DataFrames de ambos reportes
df_cleaned_final = pd.concat([df_cleaned, df_cleaned_ASS], ignore_index=True)

""" Crear Datos de Horas presupuestadas """
budget_columns_to_keep = ['ENGAGEMENT ID', 'CLIENTE', 'USUARIO', 'HORAS PRESUPUESTADAS' ]
df_budget_cleaned = df_budget.loc[:, budget_columns_to_keep].copy()
df_budget_cleaned.rename(columns={'ENGAGEMENT ID': 'Engagement ID', 'CLIENTE': 'Engagement', 'HORAS PRESUPUESTADAS': 'Budgeted Hours', 'USUARIO': 'Employee'}, inplace=True)
df_budget_cleaned_sum = df_budget_cleaned.groupby(['Engagement ID','Engagement' ])['Budgeted Hours'].sum().reset_index()

""" Agrupa Employee+GPN+Competency, Engagement+ID, y la suma de horas """
df_sum_hours = df_cleaned_final.groupby(['Employee', 'Employee GPN','Rank Description', 'Employee Service Line', 'Employee Sub Service Line', 'Employee Competency', 'Engagement', 'Engagement ID', 'Client ID', 'Client Name'])['Hours'].sum().reset_index()
# Agrupar por Employee y Engagement ID para sumar las horas presupuestadas por cada Employee y Engagement ID
df_budget_cleaned_sum = df_budget_cleaned.groupby(['Engagement ID', 'Employee'])['Budgeted Hours'].sum().reset_index()
# Añadir Budgeted Hours a df_sum_hours
df_sum_hours = df_sum_hours.merge(df_budget_cleaned_sum[['Engagement ID', 'Employee', 'Budgeted Hours']], on=['Engagement ID', 'Employee'], how='left')

""" Engagement+ID Horas sumadas totales """
# Agrupar por Engagement ID para sumar las horas por cada Engagement ID
df_engagement_sum = df_sum_hours.groupby(['Engagement ID', 'Engagement'])['Hours'].sum().reset_index()
# Añadir Budgeted Hours a df_engagement_sum
df_engagement_sum = df_engagement_sum.merge(df_budget_cleaned_sum[['Engagement ID', 'Budgeted Hours']], on='Engagement ID', how='left')

""" Agrupa Employee+GPN+Competency, Engagement+ID, y la suma de horas segun el Accounting Cycle Date """
# Agrupar por Employee GUI, Engagement ID, y Accounting Cycle Date, y sumar las horas
df_sum_hours_weekly = df_cleaned_final.groupby(['Employee GPN', 'Employee', 'Engagement ID', 'Engagement', 'Accounting Cycle Date'])['Hours'].sum().reset_index()
# Ordenar por nombre de Engagement
df_sum_hours_weekly = df_sum_hours_weekly.sort_values(by=['Accounting Cycle Date', 'Engagement'])

# INTENTO 
df_sum_hours_weekly = df_sum_hours_weekly.merge(df_budget_cleaned_sum[['Engagement ID', 'Employee', 'Budgeted Hours']], on=['Engagement ID', 'Employee'], how='left')


""" Guardar en Excel """
# Guardar los DataFrames limpios y agrupados en un nuevo archivo de Excel
with pd.ExcelWriter('cleaned_data_new.xlsx') as writer:
    df_cleaned_final.to_excel(writer, sheet_name='DataLimpia', index=False)
    df_budget_cleaned.to_excel(writer, sheet_name='BudgetData', index=False)
    df_budget_cleaned_sum.to_excel(writer, sheet_name='BudgetDataw', index=False)
    df_sum_hours.to_excel(writer, sheet_name='Horas_Engagement_Employee', index=False)
    df_engagement_sum.to_excel(writer, sheet_name='Horas_Totales_Engagement', index=False)
    df_sum_hours_weekly.to_excel(writer, sheet_name='Horas_Semanales_Employee', index=False)
print("Proceso completado y datos guardados en 'cleaned_data.xls")

# Ver interfaz para usar 
