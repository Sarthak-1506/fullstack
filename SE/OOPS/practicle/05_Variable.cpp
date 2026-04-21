#include <iostream>
using namespace std;

int main()
{
    // Constant
    const float PI = 3.14;

    // Variables
    int a = 10;
    float b = 5.5;
    char grade = 'A';
    string name = "Tirth";

    // Operations
    float sum = a + b;
    float circleArea = PI * 5 * 5; // using constant PI

    // Output
    cout << "Name: " << name << endl;
    cout << "Grade: " << grade << endl;
    cout << "Integer a = " << a << endl;
    cout << "Float b = " << b << endl;
    cout << "Sum of a and b = " << sum << endl;
    cout << "Area of Circle (using constant PI) = " << circleArea << endl;

    return 0;
}
