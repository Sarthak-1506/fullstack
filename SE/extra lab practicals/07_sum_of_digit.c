#include <stdio.h>

int main() {
    int num, temp, digit, sum = 0, reverse = 0;

    printf("Enter an integer: ");
    scanf("%d", &num);

    temp = num;   // store original number

    while(num != 0) {
        digit = num % 10;        // get last digit
        sum += digit;            // add to sum
        reverse = reverse * 10 + digit;  // build reversed number
        num = num / 10;          // remove last digit
    }

    printf("Sum of digits = %d\n", sum);
    printf("Reversed number = %d\n", reverse);

    return 0;
}
