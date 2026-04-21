#include <iostream>
using namespace std;

// Class definition
class BankAccount {
private:
    float balance; // private data member

public:
    // Constructor to initialize balance
    BankAccount(float initialBalance) {
        balance = initialBalance;
    }

    // Function to deposit money
    void deposit(float amount) {
        balance += amount;
        cout << "Deposited: " << amount << endl;
    }

    // Function to withdraw money
    void withdraw(float amount) {
        if (amount > balance)
            cout << "Insufficient balance!" << endl;
        else {
            balance -= amount;
            cout << "Withdrawn: " << amount << endl;
        }
    }

    // Function to display current balance
    void showBalance() {
        cout << "Current Balance: " << balance << endl;
    }
};

int main() {
    BankAccount account(1000); // Create account with initial balance 1000

    account.showBalance();

    account.deposit(500);   // Deposit 500
    account.showBalance();

    account.withdraw(300);  // Withdraw 300
    account.showBalance();

    account.withdraw(1500); // Try to withdraw more than balance

    return 0;
}
