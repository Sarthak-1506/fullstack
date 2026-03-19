#include <stdio.h>

struct Student {
    char name[50];
    int roll;
    float marks;
};

int main() {
    struct Student s[3];
    int i;

    // Input details
    for(i = 0; i < 3; i++) {
        printf("Enter name, roll number, and marks of student %d:\n", i+1);
        scanf("%s %d %f", s[i].name, &s[i].roll, &s[i].marks);
    }

    // Display details
    printf("\nStudent Details:\n");
    for(i = 0; i < 3; i++) {
        printf("Name: %s, Roll: %d, Marks: %.2f\n", s[i].name, s[i].roll, s[i].marks);
    }

    return 0;
}
