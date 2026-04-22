phonebook = {}

while True:
    print("\n1. Add Contact\n2. Search Contact\n3. Show All\n4. Exit")
    choice = input("Enter choice: ")

    if choice == "1":
        name = input("Enter name: ")
        number = input("Enter number: ")
        phonebook[name] = number

    elif choice == "2":
        name = input("Enter name to search: ")
        print(phonebook.get(name, "Contact not found"))

    elif choice == "3":
        print(phonebook)

    elif choice == "4":
        break
