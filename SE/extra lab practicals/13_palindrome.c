#include <stdio.h>

int palindrome(int n){
    int r, rev=0, temp=n;

    while(n!=0){
        r=n%10;
        rev=rev*10+r;
        n=n/10;
    }

    if(temp==rev)
        return 1;
    else
        return 0;
}

int main(){
    int num;

    printf("Enter a number: ");
    scanf("%d",&num);

    if(palindrome(num))
        printf("Palindrome Number");
    else
        printf("Not a Palindrome Number");

    return 0;
}
