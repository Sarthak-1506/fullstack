#include <stdio.h>

int main() {
    int a, b;

    // Accept input
    printf("Enter two integers: ");
    scanf("%d %d", &a, &b);

    // Arithmetic operations
    printf("Addition: %d\n", a + b);
    printf("Subtraction: %d\n", a - b);
    printf("Multiplication: %d\n", a * b);
    printf("Division: %d\n", a / b);

    // Relational operations
    printf("a > b : %d\n", a > b);
    printf("a < b : %d\n", a < b);
    printf("a == b : %d\n", a == b);

    // Logical operations
    printf("(a > 0 && b > 0) : %d\n", (a > 0 && b > 0));
    printf("(a > 0 || b > 0) : %d\n", (a > 0 || b > 0));

    return 0;
}
