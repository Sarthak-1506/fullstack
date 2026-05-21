snum=int(input("enter your roll no : "))
sname=input("enter your name : ")
s1=int(input("Enter marks of subject 1 :"))
s2=int(input("Enter marks of subject 2 :"))
s3=int(input("Enter marks of subject 3 :"))

total=s1+s2+s3
per=total/3

print("student roll no : ",snum)
print("student name : ",sname)
print("Total marks : ",total)
print("per : ",per)

if per>=70:
    print("Distinction")
elif per>=60:
    print("First class")
elif per>=60:
    print("Second class")
elif per>=60:
    print("Pass class")
else:
    print("Fail")
