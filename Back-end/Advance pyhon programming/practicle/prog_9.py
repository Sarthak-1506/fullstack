# Single Inheritance
class Parent:
    def show1(self):
        print("Single Inheritance")

class Child(Parent):
    pass

obj1 = Child()
obj1.show1()


# Multiple Inheritance
class Father:
    def show2(self):
        print("Father Class")

class Mother:
    def show3(self):
        print("Mother Class")

class Son(Father, Mother):
    pass

obj2 = Son()
obj2.show2()
obj2.show3()


# Multilevel Inheritance
class Grandfather:
    def show4(self):
        print("Grandfather Class")

class Father2(Grandfather):
    pass

class Child2(Father2):
    pass

obj3 = Child2()
obj3.show4()