n=int(input("enter a number : "))

if n>1:
    for i in range(2,n):
        if n%i==0:
            print(n,"num is not prime num.....")
            break
    else:
        print(n,"num is a prime num.....")
else:
    print(n,"num is not prime num.....")
