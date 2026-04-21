#include <iostream>
using namespace std;

int main() {
    int number = 50;  // fixed number
    int guess;

    cout << "Guess a number between 1 and 100: ";

    while (true) {
        cin >> guess;

        if (guess > number) {
            cout << "Too High! Try again: ";
        }
        else if (guess < number) {
            cout << "Too Low! Try again: ";
        }
        else {
            cout << "Correct! You guessed it!";
            break;  // exit loop
        }
    }

    return 0;
}
