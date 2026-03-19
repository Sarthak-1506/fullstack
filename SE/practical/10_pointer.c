#include <stdio.h>

int main() {
    int num = 10;
    int *ptr;

    ptr = &num;   // pointer stores address of num

    *ptr = 20;    // modify value using pointer

    printf("Value of num = %d\n", num);
    printf("Value using pointer = %d\n", *ptr);

    return 0;
}
