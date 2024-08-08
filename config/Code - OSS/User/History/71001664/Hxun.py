import tkinter as tk
from tkinter import filedialog, messagebox

def select_file():
    file_path = filedialog.askopenfilename(
        filetypes=[("Excel files", "*.xlsx *.xls")],
        title="Seleccionar archivo de Excel"
    )
    if file_path:
        messagebox.showinfo("Archivo seleccionado", f"Archivo seleccionado: {file_path}")

# Configuración de la interfaz gráfica
root = tk.Tk()
root.title("Procesador de archivos de Excel")

frame = tk.Frame(root, padx=20, pady=20)
frame.pack(padx=10, pady=10)

label = tk.Label(frame, text="Seleccione el archivo de Excel para procesar")
label.pack(pady=10)

button = tk.Button(frame, text="Buscar archivo", command=select_file)
button.pack(pady=10)

root.mainloop()
