class Restaurant:

    def openmenu(self):
        self.menu = {
            "pizza": 200,
            "burger": 120,
            "sandwich": 100,
            "coffee": 80
        }
        self.total = 0
        print("Welcome to our Restaurant 🍽️")

    def showmenu(self):
        print("----- MENU -----")
        for item in self.menu:
            print(item, ":", self.menu[item], "Rs.")

    def order(self, item, qty):
        if item in self.menu:
            cost = self.menu[item]*qty
            self.total += cost
            print(qty, item, "added to your order. Cost:", cost, "Rs.")
        else:
            print("Sorry, item not available!")

    def showbill(self):
        print("Your total bill is:", self.total, "Rs.")


r1 = Restaurant()
r1.openmenu()

while True:

    print("*"*100)
    print("1. Show Menu")
    print("2. Order Food")
    print("3. Show Bill")
    print("4. Exit")
    print("*"*100)

    choice = int(input("Enter Your Choice : "))

    if choice==1:
        r1.showmenu()
    elif choice==2:
        item=input("Enter item name : ").lower()
        qty=int(input("Enter quantity : "))
        r1.order(item, qty)
    elif choice==3:
        r1.showbill()
    elif choice==4:
        print("Thank you for visiting Our Restaurant")
        print("*"*100)
        break
    else:
        print("Invalid choice..Please try again..!")
    print("*"*100)
