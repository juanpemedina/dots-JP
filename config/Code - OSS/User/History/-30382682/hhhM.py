import pandas as pd

# Load the Excel file
file_path = 'path_to_your_file/Cargabilidad_Horas_disponibles_en_proyecto_CNS_ASS_2024_(003).xlsx'
sheet_name = 'Maria Guerrero_Charged Hours by'

# Read the table starting from the correct header row
df = pd.read_excel(file_path, sheet_name=sheet_name, header=5)

# Display the actual column names to identify the correct ones
print(df.columns.tolist())

# Define the correct columns to keep based on actual column names
# Adjust these names based on the output of the above print statement
columns_to_keep = [
    'Employee', 'Employee GUI', 'Employee GPN', 'Engagement ID', 
    'Engagement Name', 'Accounting Cycle Date', 'Transaction Date', 'Hours'
]

# Ensure the correct columns exist in the DataFrame
columns_to_keep = [col for col in columns_to_keep if col in df.columns]

# Filter the DataFrame to keep only the specified columns
df_cleaned = df[columns_to_keep]

# Drop any rows that are completely empty
df_cleaned.dropna(how='all', inplace=True)

# Display the cleaned DataFrame
print(df_cleaned.head())

# Save the cleaned DataFrame to a new Excel file
df_cleaned.to_excel('path_to_your_file/cleaned_data.xlsx', index=False)
