#include <iostream>
using namespace std;

int main()
{
    string name;    // Variable to store name
    int age;        // Variable to store age

    // Taking input
    cout << "Enter your name: ";
    cin >> name;

    cout << "Enter your age: ";
    cin >> age;

    // Display output
    cout << "\nHello, " << name << "! You are " << age << " years old." << endl;

    return 0;
}
