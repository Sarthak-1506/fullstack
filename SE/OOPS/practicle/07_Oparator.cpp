#include <iostream>
using namespace std;

int main()
{
    int a = 10, b = 5;

    // Arithmetic Operators
    cout << "Arithmetic Operators:\n";
    cout << "a + b = " << a + b << endl;
    cout << "a - b = " << a - b << endl;
    cout << "a * b = " << a * b << endl;
    cout << "a / b = " << a / b << endl;
    cout << "a % b = " << a % b << endl << endl;

    // Relational Operators
    cout << "Relational Operators:\n";
    cout << "a > b  = " << (a > b) << endl;
    cout << "a < b  = " << (a < b) << endl;
    cout << "a == b = " << (a == b) << endl;
    cout << "a != b = " << (a != b) << endl;
    cout << "a >= b = " << (a >= b) << endl;
    cout << "a <= b = " << (a <= b) << endl << endl;

    // Logical Operators
    cout << "Logical Operators:\n";
    cout << "(a > b) && (b > 0) = " << ((a > b) && (b > 0)) << endl;
    cout << "(a < b) || (b > 0) = " << ((a < b) || (b > 0)) << endl;
    cout << "!(a < b) = " << !(a < b) << endl << endl;

    // Bitwise Operators
    cout << "Bitwise Operators:\n";
    cout << "a & b = " << (a & b) << endl;
    cout << "a | b = " << (a | b) << endl;
    cout << "a ^ b = " << (a ^ b) << endl;
    cout << "a << 1 = " << (a << 1) << endl;  // Left shift
    cout << "a >> 1 = " << (a >> 1) << endl;  // Right shift

    return 0;
}
