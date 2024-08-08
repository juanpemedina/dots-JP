import pandas as pd
import tkinter as tk
from tkinter import filedialog, messagebox

def process_file(file_path):
    SHEET_NAME = 'Maria Guerrero_Charged Hours by'
    SHEET_NAME_ASS = 'Maria GuerreroASS 21-06-2024.x'
    YEAR = 2024

    HEADER_ROW = 6
    BUDGET_SHEET_NAME = 'Presupuesto'

    COLUMNS_TO_KEEP = [
        'Employee', 'Employee GPN', 'Rank Description', 'Employee Service Line', 
        'Employee Sub Service Line', 'Employee Competency', 'Engagement ID', 
        'Engagement', 'Client ID', 'Client Name', 'Accounting Cycle Date', 
        'Transaction Date', 'Hours'
    ]

    try:
        df = pd.read_excel(file_path, sheet_name=SHEET_NAME, header=5)
        df_ASS = pd.read_excel(file_path, sheet_name=SHEET_NAME_ASS, header=HEADER_ROW)
        df_budget = pd.read_excel(file_path, sheet_name=BUDGET_SHEET_NAME)
    except FileNotFoundError:
        messagebox.showerror("Error", f"El archivo {file_path} no se encuentra.")
        return
    except Exception as e:
        messagebox.showerror("Error", f"Error al cargar el archivo de Excel: {e}")
        return

    # Limpieza de datos reporte 1
    columns_to_keep = [col for col in COLUMNS_TO_KEEP if col in df.columns]
    df_cleaned = df.loc[:, columns_to_keep].copy()

    # Convertir la columna 'Accounting Cycle Date' a tipo datetime
    df_cleaned['Accounting Cycle Date'] = pd.to_datetime(df_cleaned['Accounting Cycle Date'], errors='coerce')

    # Filtrar las filas con 'Accounting Cycle Date' a partir del 2024
    df_cleaned = df_cleaned[df_cleaned['Accounting Cycle Date'].dt.year >= YEAR]

    # Eliminar filas donde la columna 'Employee' está vacía
    df_cleaned.dropna(subset=['Employee'], inplace=True)

    # Limpieza de datos reporte 2
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

    # Crear Datos de Horas presupuestadas
    budget_columns_to_keep = ['ENGAGEMENT ID', 'CLIENTE', 'USUARIO', 'HORAS PRESUPUESTADAS']
    df_budget_cleaned = df_budget.loc[:, budget_columns_to_keep].copy()
    df_budget_cleaned.rename(columns={
        'ENGAGEMENT ID': 'Engagement ID', 
        'CLIENTE': 'Engagement', 
        'HORAS PRESUPUESTADAS': 'Budgeted Hours', 
        'USUARIO': 'Employee'
    }, inplace=True)

    # Sumar horas presupuestadas por Engagement ID y Employee
    df_budget_cleaned_sum = df_budget_cleaned.groupby(['Engagement ID', 'Engagement', 'Employee'])['Budgeted Hours'].sum().reset_index()

    # Agrupa Employee+GPN+Competency, Engagement+ID, y la suma de horas
    df_sum_hours = df_cleaned_final.groupby([
        'Employee', 'Employee GPN', 'Rank Description', 'Employee Service Line', 
        'Employee Sub Service Line', 'Employee Competency', 'Engagement', 
        'Engagement ID', 'Client ID', 'Client Name'
    ])['Hours'].sum().reset_index()

    # Añadir Budgeted Hours a df_sum_hours
    df_sum_hours = df_sum_hours.merge(
        df_budget_cleaned_sum[['Engagement ID', 'Employee', 'Budgeted Hours']], 
        on=['Engagement ID', 'Employee'], 
        how='left'
    )

    # Agrupar por Engagement ID para sumar las horas por cada Engagement ID
    df_engagement_sum = df_sum_hours.groupby(['Engagement ID', 'Engagement'])[['Hours', 'Budgeted Hours']].sum().reset_index()

    # Agrupar por Employee GPN, Engagement ID, y Accounting Cycle Date, y sumar las horas
    df_sum_hours_weekly = df_cleaned_final.groupby([
        'Employee GPN', 'Employee', 'Engagement ID', 'Engagement', 'Accounting Cycle Date'
    ])['Hours'].sum().reset_index()

    # Ordenar por nombre de Engagement
    df_sum_hours_weekly = df_sum_hours_weekly.sort_values(by=['Accounting Cycle Date', 'Engagement'])

    # Añadir Budgeted Hours a df_sum_hours_weekly
    df_sum_hours_weekly = df_sum_hours_weekly.merge(
        df_budget_cleaned_sum[['Engagement ID', 'Employee', 'Budgeted Hours']], 
        on=['Engagement ID', 'Employee'], 
        how='left'
    )

    # Guardar los DataFrames limpios y agrupados en un nuevo archivo de Excel
    output_file = file_path.replace('.xlsx', '_processed.xlsx')
    with pd.ExcelWriter(output_file) as writer:
        df_cleaned_final.to_excel(writer, sheet_name='DataLimpia', index=False)
        df_budget_cleaned.to_excel(writer, sheet_name='BudgetData', index=False)
        df_budget_cleaned_sum.to_excel(writer, sheet_name='BudgetDataSum', index=False)
        df_sum_hours.to_excel(writer, sheet_name='Horas_Engagement_Employee', index=False)
        df_engagement_sum.to_excel(writer, sheet_name='Horas_Totales_Engagement', index=False)
        df_sum_hours_weekly.to_excel(writer, sheet_name='Horas_Semanales_Employee', index=False)

    messagebox.showinfo("Completado", f"Proceso completado y datos guardados en '{output_file}'")

def select_file():
    file_path = filedialog.askopenfilename(
        filetypes=[("Excel files", "*.xlsx *.xls")],
        title="Seleccionar archivo de Excel"
    )
    if file_path:
        process_file(file_path)

# Configuración de la interfaz gráfica
root = tk.Tk()
root.title("Procesador de archivos de Excel")

frame = tk.Frame(root, padx=20, pady=20)
frame.pack(padx=10, pady=10)

label = tk.Label(frame, text="Seleccione el archivo de Excel para procesar")
label.pack(pady=10)

button = tk.Button(frame, text="Buscar archivo", command.select_file)
button.pack(pady=10)

root.mainloop()
