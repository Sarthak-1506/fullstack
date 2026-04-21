#include <iostream>
using namespace std;

int main() {
    int marks;

    cout << "Enter your marks (0-100): ";
    cin >> marks;

    if (marks >= 90 && marks <= 100) {
        cout << "Grade: A" << endl;
    }
    else if (marks >= 75) {
        cout << "Grade: B" << endl;
    }
    else if (marks >= 60) {
        cout << "Grade: C" << endl;
    }
    else if (marks >= 40) {
        cout << "Grade: D" << endl;
    }
    else if (marks >= 0) {
        cout << "Grade: Fail" << endl;
    }
    else {
        cout << "Invalid marks entered!" << endl;
    }

    return 0;
}
