class Restaurant:

    def start(self):
        self.total = 0
        print("Welcome to Restaurant")

    def menu(self):
        print("Pizza = 200 Rs")
        print("Burger = 100 Rs")

    def order(self, choice):
        if choice == 1:
            self.total = self.total + 200
            print("Pizza added")
        elif choice == 2:
            self.total = self.total + 100
            print("Burger added")
        else:
            print("Invalid item")

    def bill(self):
        print("Total bill is:", self.total)


r = Restaurant()
r.start()

while True:

    print("*"*100)
    print("1. Show Menu")
    print("2. Order")
    print("3. Bill")
    print("4. Exit")
    print("*"*100)
    
    choice=int(input("Enter choice :"))

    if choice==1:
        r.menu()
    elif choice==2:
        item = int(input("Enter item (1=Pizza, 2=Burger): "))
        r.order(item)
    elif choice==3:
        r.bill()
    elif choice==4:
        print("Thank you!  For Visiting Our Restauant...")
        break
    else:
        print("Wrong choice please try again...")
