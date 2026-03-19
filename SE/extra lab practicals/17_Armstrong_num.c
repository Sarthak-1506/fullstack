#include <stdio.h>

int main() {
    int num, temp, digit, sum, i;

    // Part 1: Check a number entered by user
    printf("Enter a number to check Armstrong: ");
    scanf("%d", &num);

    temp = num;
    sum = 0;
    while(temp != 0) {
        digit = temp % 10;
        sum += digit * digit * digit; // cube of digit
        temp /= 10;
    }

    if(sum == num)
        printf("%d is an Armstrong number.\n", num);
    else
        printf("%d is NOT an Armstrong number.\n", num);

    // Part 2: Print all Armstrong numbers from 1 to 1000
    printf("\nArmstrong numbers from 1 to 1000:\n");
    for(i = 1; i <= 1000; i++) {
        temp = i;
        sum = 0;
        while(temp != 0) {
            digit = temp % 10;
            sum += digit * digit * digit;
            temp /= 10;
        }
        if(sum == i)
            printf("%d ", i);
    }

    return 0;
}
