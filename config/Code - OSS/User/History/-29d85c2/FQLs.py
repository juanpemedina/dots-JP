import pandas as pd

""" Constantes """
FILE_PATH = 'Cargabilidad_Horas_disponibles_en_proyecto_CNS_ASS_2024_(003).xlsx'
SHEET_NAME = 'Maria Guerrero_Charged Hours by'
HEADER_ROW = 6

COLUMNS_TO_KEEP = [
    'Employee', 'Employee GPN', 'Employee Competency', 'Engagement ID',
    'Engagement', 'Accounting Cycle Date', 'Transaction Date', 'Hours'
]

""" Cargar Archivo de Excel"""

try:
    df = pd.read_excel(FILE_PATH, sheet_name=SHEET_NAME, header=HEADER_ROW)
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
# Eliminar filas donde la columna 'Employee' está vacía
df_cleaned.dropna(subset=['Employee'], inplace=True)

""" Agrupa Employee y Employee GPN """
df_employee_gpn = df_cleaned[['Employee', 'Employee GPN']].drop_duplicates()

""" Agrupa Engagement y Engagement ID """
df_engagement_id = df_cleaned[['Engagement', 'Engagement ID']].drop_duplicates()

""" Agrupa Employee+ID, Engagement+GPN, """
df_grouped_sum = df_cleaned.groupby(
    ['Employee', 'Employee GPN', 'Employee Competency', 'Engagement', 'Engagement ID']
)['Hours'].sum().reset_index()