#include <stdio.h>

// Recursive
int fib_rec(int n){
    if(n<=1) return n;
    return fib_rec(n-1) + fib_rec(n-2);
}

// Iterative
int fib_itr(int n){
    int a=0,b=1,c,i;
    if(n<=1) return n;
    for(i=2;i<=n;i++){
        c=a+b;
        a=b;
        b=c;
    }
    return b;
}

int main(){
    int n;

    printf("Enter N: ");
    scanf("%d",&n);

    printf("Recursive Fibonacci = %d\n",fib_rec(n));
    printf("Iterative Fibonacci = %d\n",fib_itr(n));

    return 0;
}
