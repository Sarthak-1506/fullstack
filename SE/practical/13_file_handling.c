#include <stdio.h>

int main() {
    FILE *fp;
    char str[50];

    fp = fopen("test.txt", "w");
    printf("Enter a string: ");
    gets(str);
    fprintf(fp, "%s", str);
    fclose(fp);

    fp = fopen("test.txt", "r");
    fgets(str, 50, fp);
    printf("File content: %s", str);
    fclose(fp);

    return 0;
}
