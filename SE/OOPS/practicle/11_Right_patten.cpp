#include <iostream>
using namespace std;

int main() {
    int n;

    cout << "Enter number of rows: ";
    cin >> n;

    for (int i = 1; i <= n; i++) {           // Outer loop ? rows
        for (int j = 1; j <= i; j++) {       // Inner loop ? stars in each row
            cout << "* ";
        }
        cout << endl;
    }

    return 0;
}
