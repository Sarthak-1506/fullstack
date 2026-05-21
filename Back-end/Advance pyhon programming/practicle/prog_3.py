# This program calculates the average of three numbers

def calculate_average(num1, num2, num3):
    """Function to calculate average of three numbers."""
    
    total = num1 + num2 + num3  # Add all numbers
    average = total / 3         # Calculate average
    
    return average


def main():
    """Main function to execute the program."""
    
    # Taking input from the user
    number1 = float(input("Enter first number: "))
    number2 = float(input("Enter second number: "))
    number3 = float(input("Enter third number: "))
    
    # Calling the function
    result = calculate_average(number1, number2, number3)
    
    # Displaying the result
    print(f"The average is: {result}")


# Ensures the program runs only when executed directly
if __name__ == "__main__":
    main()
