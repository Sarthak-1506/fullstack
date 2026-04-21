#include <iostream>
using namespace std;

int main()
{
    // Implicit Type Conversion (Automatic)
    int x = 10;
    float y = x;   // int converted to float automatically

    // Explicit Type Conversion (Manual)
    float a = 5.75;
    int b = (int)a;   // float cast to int manually

    // Output results
    cout << "Implicit Conversion (int to float): " << y << endl;
    cout << "Explicit Conversion (float to int): " << b << endl;

    return 0;
}
