#include <stdio.h>

int main() 
{
    int choice, quantity;
    char more;
    float totalBill = 0;

    do 
    {
        printf("\n===== FOOD MENU =====\n");
        printf("1. Pizza      - Rs. 250\n");
        printf("2. Burger     - Rs. 120\n");
        printf("3. Sandwich   - Rs. 100\n");
        printf("4. Pasta      - Rs. 180\n");
        printf("5. Cold Drink - Rs. 50\n");
        printf("=====================\n");

        printf("Enter your choice (1-5): ");
        scanf("%d", &choice);

        printf("Enter quantity: ");
        scanf("%d", &quantity);

        if (choice == 1) 
        {
            totalBill = totalBill + (250 * quantity);
            printf("Pizza added successfully!\n");
        }
        else if (choice == 2) 
        {
            totalBill = totalBill + (120 * quantity);
            printf("Burger added successfully!\n");
        }
        else if (choice == 3) 
        {
            totalBill = totalBill + (100 * quantity);
            printf("Sandwich added successfully!\n");
        }
        else if (choice == 4) 
        {
            totalBill = totalBill + (180 * quantity);
            printf("Pasta added successfully!\n");
        }
        else if (choice == 5) 
        {
            totalBill = totalBill + (50 * quantity);
            printf("Cold Drink added successfully!\n");
        }
        else 
        {
            printf("Invalid choice!\n");
        }



        printf("Current Total Bill = Rs. %.2f\n", totalBill);

        printf("Do you want to order more? (y/n): ");
        scanf(" %c", &more);

    } while (more == 'y' || more == 'Y');

    printf("\n===== FINAL BILL =====\n");
    printf("Total Amount = Rs. %.2f\n", totalBill);
    printf("Thank you for visiting!\n");

    return 0;
}
