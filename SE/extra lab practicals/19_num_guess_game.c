#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int main() {
    int number, guess, attempts = 0, max_attempts = 7;

    // Initialize random seed
    srand(time(0));
    number = (rand() % 100) + 1; // random number between 1 and 100

    printf("Guess the number between 1 and 100.\n");
    printf("You have %d attempts.\n", max_attempts);

    do {
        printf("Enter your guess: ");
        scanf("%d", &guess);
        attempts++;

        if(guess > number)
            printf("Too high! Try again.\n");
        else if(guess < number)
            printf("Too low! Try again.\n");
        else {
            printf("Congratulations! You guessed it in %d attempts.\n", attempts);
            break;
        }

    } while(attempts < max_attempts);

    if(guess != number)
        printf("Sorry! The number was %d.\n", number);

    return 0;
}
