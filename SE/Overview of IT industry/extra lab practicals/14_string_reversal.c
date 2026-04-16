#include <stdio.h>

// Function to reverse string
void reverse(char str[]) {
    int i = 0, len = 0;
    char temp;

    // find length manually
    while(str[len] != '\0')
        len++;

    // reverse the string
    for(i = 0; i < len/2; i++) {
        temp = str[i];
        str[i] = str[len-i-1];
        str[len-i-1] = temp;
    }
}

int main() {
    char str[100];

    printf("Enter a string: ");
    scanf("%s", str);

    reverse(str);

    printf("Reversed string = %s", str);

    return 0;
}
