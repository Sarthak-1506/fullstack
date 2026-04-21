#include <iostream>
using namespace std;

// Class definition
class Calculator {
public:
    // Member functions for operations
    int add(int a, int b) {
        return a + b;
    }

    int subtract(int a, int b) {
        return a - b;
    }

    int multiply(int a, int b) {
        return a * b;
    }

    float divide(int a, int b) {
        return (float)a / b;
    }
};

int main() {
    Calculator calc; // Create object of Calculator
    int num1, num2;

    cout << "Enter two numbers: ";
    cin >> num1 >> num2;

    cout << "Addition: " << calc.add(num1, num2) << endl;
    cout << "Subtraction: " << calc.subtract(num1, num2) << endl;
    cout << "Multiplication: " << calc.multiply(num1, num2) << endl;

    if (num2 != 0)
        cout << "Division: " << calc.divide(num1, num2) << endl;
    else
        cout << "Division by zero is not allowed!" << endl;

    return 0;
}
