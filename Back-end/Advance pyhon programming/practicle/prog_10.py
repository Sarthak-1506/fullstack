# Method Overloading
class Demo:
    def add(self, a, b=0):
        print("Addition =", a + b)

obj = Demo()

obj.add(10)
obj.add(10, 20)


# Method Overriding
class Parent:
    def show(self):
        print("Parent Class")

class Child(Parent):
    def show(self):
        print("Child Class")

obj2 = Child()
obj2.show()