#include <iostream>
using namespace std;

int globalVar = 10; // Global variable

int main() {
    int localVar = 5; // Local variable

    cout << "Global = " << globalVar << ", Local = " << localVar << endl;

    return 0;
}
