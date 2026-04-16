#include <stdio.h>

// Recursive factorial function
long long factorial_rec(int n){
    if(n==0 || n==1)
        return 1;
    return n * factorial_rec(n-1);
}

// Iterative factorial function
long long factorial_itr(int n){
    long long fact = 1;
    int i;
    for(i=1;i<=n;i++)
        fact = fact * i;
    return fact;
}

int main(){
    int n;

    printf("Enter a number: ");
    scanf("%d",&n);

    printf("Factorial using Iterative = %lld\n", factorial_itr(n));
    printf("Factorial using Recursive = %lld\n", factorial_rec(n));

    return 0;
}
