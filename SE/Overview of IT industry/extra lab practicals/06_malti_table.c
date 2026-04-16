#include <stdio.h>

int main() {
    int num, n, i;

    printf("Enter a number: ");
    scanf("%d", &num);

    printf("Enter range for multiplication table: ");
    scanf("%d", &n);

    printf("Multiplication Table of %d:\n", num);

    for(i = 1; i <= n; i++) {
        printf("%d x %d = %d\n", num, i, num * i);
    }

    return 0;
}
