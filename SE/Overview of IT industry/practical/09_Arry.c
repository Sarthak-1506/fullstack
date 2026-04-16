#include <stdio.h>

int main() {
    int a[5], i;
    int b[3][3], j, sum = 0;

    // One-dimensional array
    printf("Enter 5 integers:\n");
    for(i = 0; i < 5; i++) {
        scanf("%d", &a[i]);
    }

    printf("Elements in 1D array:\n");
    for(i = 0; i < 5; i++) {
        printf("%d ", a[i]);
    }

    // Two-dimensional array (3x3 matrix)
    printf("\nEnter elements of 3x3 matrix:\n");
    for(i = 0; i < 3; i++) {
        for(j = 0; j < 3; j++) {
            scanf("%d", &b[i][j]);
            sum += b[i][j];
        }
    }

    printf("Sum of all elements in matrix = %d", sum);

    return 0;
}
