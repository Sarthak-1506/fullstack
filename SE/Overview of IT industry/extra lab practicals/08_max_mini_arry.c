#include <stdio.h>

int main() {
    int a[10], i, j, temp;
    int max, min;

    // Input 10 integers
    printf("Enter 10 integers:\n");
    for(i = 0; i < 10; i++) {
        scanf("%d", &a[i]);
    }

    max = min = a[0];

    // Find max and min
    for(i = 1; i < 10; i++) {
        if(a[i] > max)
            max = a[i];
        if(a[i] < min)
            min = a[i];
    }

    printf("Maximum = %d\n", max);
    printf("Minimum = %d\n", min);

    // Sort array in ascending order
    for(i = 0; i < 9; i++) {
        for(j = i + 1; j < 10; j++) {
            if(a[i] > a[j]) {
                temp = a[i];
                a[i] = a[j];
                a[j] = temp;
            }
        }
    }

    printf("Sorted array in ascending order:\n");
    for(i = 0; i < 10; i++) {
        printf("%d ", a[i]);
    }

    return 0;
}
