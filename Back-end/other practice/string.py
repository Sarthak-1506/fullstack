s=input("Enter String : ")

uc=0
lc=0
al=0
sp=0
nm=0

for i in s:
    if i.isalpha():
        al=al+1
    elif i.isspace():
        sp=sp+1
    elif i.isnumeric():
        nm=nm+1
    if i.isupper():
        uc=uc+1
    elif i.islower:
        lc=lc+1

print("total alphabets : ",al)
print("total space : ",sp)
print("total numbers : ",nm)
print("total uppercase letters : ",uc)
print("total lowercase letters : ",lc)

