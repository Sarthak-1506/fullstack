students = {}

def calculate_grade(marks):
    if marks >= 90:
        return "A+"
    elif marks >= 75:
        return "A"
    elif marks >= 60:
        return "B"
    elif marks >= 50:
        return "C"
    else:
        return "Fail"

def add_student():
    name = input("Enter student name: ")
    marks = float(input("Enter marks: "))
    grade = calculate_grade(marks)
    students[name] = {"marks": marks, "grade": grade}
    print("Student added successfully!\n")

def display_students():
    if not students:
        print("No records found.\n")
    else:
        print("\nStudent Records:")
        for name, data in students.items():
            print(f"Name: {name}, Marks: {data['marks']}, Grade: {data['grade']}")
        print()


def search_student():
    name = input("Enter student name to search: ")
    if name in students:
        data = students[name]
        print(f"Found -> Marks: {data['marks']}, Grade: {data['grade']}\n")
    else:
        print("Student not found.\n")

def main():
    while True:
        print("===== Grade Management System =====")
        print("1. Add Student")
        print("2. Display Students")
        print("3. Search Student")
        print("4. Exit")

        choice = input("Enter your choice: ")

        if choice == '1':
            add_student()
        elif choice == '2':
            display_students()
        elif choice == '3':
            search_student()
        elif choice == '4':
            print("Exiting program...")
            break
        else:
            print("Invalid choice! Try again.\n")


main()
