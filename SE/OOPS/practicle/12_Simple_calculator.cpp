#include <iostream>
using namespace std;

// Functions for operations
int add(int a, int b) { return a + b; }
int subtract(int a, int b) { return a - b; }
int multiply(int a, int b) { return a * b; }
int divide(int a, int b) { return a / b; }

int main() {
    int num1, num2, choice;

    cout << "Enter first number: ";
    cin >> num1;
    cout << "Enter second number: ";
    cin >> num2;

    cout << "Choose operation: 1.Add 2.Subtract 3.Multiply 4.Divide: ";
    cin >> choice;

    if (choice == 1)
        cout << "Result = " << add(num1, num2);
    else if (choice == 2)
        cout << "Result = " << subtract(num1, num2);
    else if (choice == 3)
        cout << "Result = " << multiply(num1, num2);
    else if (choice == 4)
        cout << "Result = " << divide(num1, num2);
    else
        cout << "Invalid choice!";

    return 0;
}
