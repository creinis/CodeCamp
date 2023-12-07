temp = "5 degrees"
cel = 0

try:
    fahr = float(temp)
except ValueError:
    print("Error: The temperature is not a valid number.")
    # Handle the error or exit the program gracefully
else:
    cel = (fahr - 32.0) * 5.0 / 9.0
    print(cel)