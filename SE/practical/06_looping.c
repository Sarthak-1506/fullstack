#include <stdio.h>

int main() {
    int i;

    // For loop
    printf("Using for loop:\n");
    for(i = 1; i <= 10; i++) {
        printf("%d ", i);
    }

    // While loop
    printf("\nUsing while loop:\n");
    i = 1;
    while(i <= 10) {
        printf("%d ", i);
        i++;
    }

    // Do-while loop
    printf("\nUsing do-while loop:\n");
    i = 1;
    do {
        printf("%d ", i);
        i++;
    } while(i <= 10);

    return 0;
}
