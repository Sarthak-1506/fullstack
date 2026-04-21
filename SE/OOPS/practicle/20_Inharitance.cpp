#include <iostream>
using namespace std;

// Base class
class Person {
public:
    string name;
    int age;

    void showPerson() {
        cout << "Name: " << name << ", Age: " << age << endl;
    }
};

// Derived class Student
class Student : public Person {
public:
    int rollNo;

    void showStudent() {
        showPerson();  // Reuse base class function
        cout << "Roll No: " << rollNo << endl;
    }
};

// Derived class Teacher
class Teacher : public Person {
public:
    string subject;

    void showTeacher() {
        showPerson();  // Reuse base class function
        cout << "Subject: " << subject << endl;
    }
};

int main() {
    Student s1;
    s1.name = "Alice";
    s1.age = 20;
    s1.rollNo = 101;

    Teacher t1;
    t1.name = "Mr. Bob";
    t1.age = 35;
    t1.subject = "Mathematics";

    cout << "Student Details:\n";
    s1.showStudent();

    cout << "\nTeacher Details:\n";
    t1.showTeacher();

    return 0;
}
