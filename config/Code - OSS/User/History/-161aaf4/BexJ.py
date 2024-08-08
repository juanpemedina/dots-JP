# backend.py

def addDrink(input_str):
# Remove whitespace and split on name and sizes
    parts = input_str.replace(" ", "").split(",", 1)
    
# Check if name and size list provided    
    if len(parts) != 2:
        return "Error: Size list missing after item name"
    
    name, sizes = parts
    
# Check if name and size list provided    
    if not name.isalpha() or not (2 <= len(name) <= 15):
        return "Error: The item name must contain alphabetic characters and be between 2 and 15 in length"
    
# Check if sizes were provided    
    if not sizes:
        return "Error: Size list missing after item name"
    
# Split sizes and check the number of sizes    
    sizes = sizes.split(",")
    if not (1 <= len(sizes) <= 5):
        return "Error: Maximum five sizes allowed per item"
    
# Check ascending order and format of sizes    
    last_size = 0
    for new_size in sizes:
        if not new_size.isdigit() or not (1 <= int(new_size) <= 48):
            return "Error: Sizes must be integer values ​​within the range 1 to 48"
        if int(new_size) <= last_size:
            return "Error: Sizes must be entered in ascending order and be integer values"
        last_size = int(new_size)
    
# If all validations pass, add the drink
    return f"The drink [{name}] with the sizes [{', '.join(sizes)}], was added to stock"
