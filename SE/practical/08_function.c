#include <stdio.h>

// Function declaration
int factorial(int n);

int main() {
    int num, result;

    printf("Enter a number: ");
    scanf("%d", &num);

    // Function call
    result = factorial(num);

    printf("Factorial = %d", result);

    return 0;
}

// Function definition
int factorial(int n) {
    int i, fact = 1;
    for(i = 1; i <= n; i++) {
        fact = fact * i;
    }
    return fact;
}
