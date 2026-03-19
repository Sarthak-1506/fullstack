#include <stdio.h>

// Factorial function for loop method
int factorial(int n){
    int i, fact=1;
    for(i=1;i<=n;i++)
        fact *= i;
    return fact;
}

// Combination function using factorial for loop method
int combination(int n, int r){
    return factorial(n) / (factorial(r) * factorial(n-r));
}

// Recursive function for combination
int comb_rec(int n, int r){
    if(r==0 || r==n)
        return 1;
    return comb_rec(n-1,r-1) + comb_rec(n-1,r);
}

int main(){
    int n, i, j;

    printf("Enter number of rows: ");
    scanf("%d",&n);

    // Loop method
    printf("\nPascal's Triangle using loops:\n");
    for(i=0;i<n;i++){
        for(j=0;j<=i;j++)
            printf("%d ", combination(i,j));
        printf("\n");
    }

    // Recursive method
    printf("\nPascal's Triangle using recursion:\n");
    for(i=0;i<n;i++){
        for(j=0;j<=i;j++)
            printf("%d ", comb_rec(i,j));
        printf("\n");
    }

    return 0;
}
