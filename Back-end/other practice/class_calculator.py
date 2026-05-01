class Calculator:
    def add(self, a, b):
        return a+b

    def subtract(self, a, b):
        return a-b

calc = Calculator()
print(calc.add((int(input("Enter A : "))),(int(input("Enter B : ")))))       
print(calc.subtract((int(input("Enter A : "))),(int(input("Enter B : ")))))
