# NOMBRE DE ARCHIVO'Cargabilidad_Horas_disponibles_en_proyecto_CNS_ASS_2024_(003).xlsx'
import pandas as pd

# Load the Excel file
file_path = 'Cargabilidad_Horas_disponibles_en_proyecto_CNS_ASS_2024_(003).xlsx'
sheet_name_hours = 'Maria Guerrero_Charged Hours by'
sheet_name_budget = 'Presupuesto'

# Read the table starting from the correct header row (THE ROW 6)
df_hours = pd.read_excel(file_path, sheet_name=sheet_name_hours, header=6)

# Read the budget table
df_budget = pd.read_excel(file_path, sheet_name=sheet_name_budget)

# Display the actual column names to identify the correct ones
print(df.columns.tolist()) # DELETE AFTER

# Define the correct columns to keep based on actual column names
columns_to_keep_hours = [
    'Employee', 'Employee GUI', 'Employee GPN', 'Employee Competency', 'Engagement ID',
    'Engagement', 'Accounting Cycle Date', 'Transaction Date', 'Hours'
]

# Ensure the correct columns exist in the DataFrame
columns_to_keep = [col for col in columns_to_keep if col in df.columns]

# Filter the DataFrame to keep only the specified columns
df_cleaned = df.loc[:, columns_to_keep].copy()

# Drop any rows that are completely empty
#df_cleaned.dropna(how='all', inplace=True)

# Drop rows where the 'Employee' column is empty
df_cleaned.dropna(subset=['Employee'], inplace=True)

# Display the cleaned DataFrame
print(df_cleaned.head()) # DELETE AFTER

# Group by Employee and Employee GPN
df_employee_gpn = df_cleaned[['Employee', 'Employee GPN']].drop_duplicates()

# Group by Engagement and Engagement ID
df_engagement_id = df_cleaned[['Engagement', 'Engagement ID']].drop_duplicates()

# Group by required columns and sum the 'Hours'
df_grouped_sum = df_cleaned.groupby(
    ['Employee', 'Employee GPN', 'Employee Competency', 'Engagement', 'Engagement ID']
)['Hours'].sum().reset_index()

# Further group by Engagement ID to sum the hours for each Engagement ID
df_engagement_sum = df_grouped_sum.groupby(['Engagement ID', 'Engagement'])['Hours'].sum().reset_index()

# Group by Employee GUI, Engagement ID, and Accounting Cycle Date, and sum the Hours
df_grouped_sum = df_cleaned.groupby(
    ['Employee GPN', 'Employee', 'Engagement ID', 'Engagement','Accounting Cycle Date']
)['Hours'].sum().reset_index()

# Sort by Engagement name
df_grouped_sum = df_grouped_sum.sort_values(by=['Accounting Cycle Date','Engagement'])

# Save the cleaned DataFrame and the grouped DataFrames to a new Excel file
with pd.ExcelWriter('cleaned_data.xlsx') as writer:
    df_cleaned.to_excel(writer, sheet_name='Cleaned_Data', index=False)
    #df_employee_gpn.to_excel(writer, sheet_name='Employee_EmployeeGPN', index=False)
    #df_engagement_id.to_excel(writer, sheet_name='Engagement_EngagementID', index=False)
    df_grouped_sum.to_excel(writer, sheet_name='SumaEngagement_Employee', index=False) # falta hours left y persupuestadas
    df_engagement_sum.to_excel(writer, sheet_name='EngagementID_Sum', index=False) #falta hours left Y persupuestadas
    df_grouped_sum.to_excel(writer, sheet_name='GroupedSum_Detailed', index=False)