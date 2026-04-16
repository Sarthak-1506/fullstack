#include <stdio.h>
#include <string.h>

int main() {
    char str1[50], str2[50];

    printf("Enter first string: ");
    scanf("%s", str1);

    printf("Enter second string: ");
    scanf("%s", str2);

    strcat(str1, str2);   // concatenate strings

    printf("Concatenated string: %s\n", str1);
    printf("Length of string: %lu", strlen(str1));

    return 0;
}
