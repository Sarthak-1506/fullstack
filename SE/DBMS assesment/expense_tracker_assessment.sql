-- ============================================================
-- TOPS Technologies - DBMS Assessment
-- Database Management - SQL & PL/SQL
-- Theme: Personal Expense Tracker DB
-- ============================================================


-- ============================================================
-- SECTION A: CONCEPT APPLICATION (Written Answers as Comments)
-- ============================================================

/*
1. How relational databases help maintain accuracy in expense records:
   Relational databases use structured tables with defined data types, 
   primary keys, foreign keys, and constraints to ensure every expense 
   record is valid, linked to real users and categories, and free from 
   duplicate or inconsistent entries. Normalization eliminates redundancy, 
   so updating a user name or category name in one place reflects everywhere.

2. Why constraints are important in personal finance data:
   Constraints like NOT NULL, UNIQUE, CHECK, and FOREIGN KEY prevent 
   invalid data entry. For example, a CHECK constraint can prevent negative 
   expense amounts, NOT NULL ensures every expense has a date, and FOREIGN KEY 
   ensures expenses always belong to a real user and category. This keeps 
   financial records trustworthy and auditable.

3. How GROUP BY helps analyze spending patterns:
   GROUP BY aggregates rows that share a common value. In expense tracking, 
   we can group by category_name to see total spending per category, or by 
   month to observe monthly trends. Combined with SUM(), AVG(), or COUNT(), 
   it turns raw transaction rows into meaningful financial summaries.

4. Scenario where ROLLBACK is required during expense entry:
   Suppose a user submits an expense that must update both the expenses table 
   and a budget_summary table. If the first INSERT succeeds but the second 
   UPDATE fails (e.g., due to a constraint violation or network error), 
   ROLLBACK undoes both changes, keeping the database in a consistent state 
   and preventing partial/corrupt financial records.

5. How views help users track monthly expenses efficiently:
   A view like MonthlyExpenseView pre-joins users, expenses, and categories, 
   filtering by the current month. Users can query this view with a simple 
   SELECT instead of writing complex JOINs and WHERE clauses each time. 
   Views also restrict access to sensitive columns, showing only what's needed.

6. Why use triggers for automatic category or balance updates:
   Triggers fire automatically on INSERT, UPDATE, or DELETE without requiring 
   the application to call extra queries. For example, an AFTER INSERT trigger 
   on expenses can automatically update a monthly_summary table, or set a 
   default category if none is provided. This enforces business logic at the 
   database level, ensuring consistency regardless of how data is inserted.
*/


-- ============================================================
-- SECTION B: SQL HANDS-ON
-- ============================================================

-- ------------------------------------------------------------
-- Schema Creation (as given - DO NOT MODIFY structure)
-- ------------------------------------------------------------

CREATE TABLE IF NOT EXISTS users (
    user_id    INT PRIMARY KEY,
    name       VARCHAR(50),
    email      VARCHAR(100),
    created_at DATE
);

CREATE TABLE IF NOT EXISTS categories (
    category_id   INT PRIMARY KEY,
    category_name VARCHAR(50)
);

CREATE TABLE IF NOT EXISTS expenses (
    expense_id   INT PRIMARY KEY,
    user_id      INT,
    category_id  INT,
    amount       DECIMAL(10,2),
    expense_date DATE,
    FOREIGN KEY (user_id)     REFERENCES users(user_id),
    FOREIGN KEY (category_id) REFERENCES categories(category_id)
);


-- ============================================================
-- B.1: DDL Understanding (Written as Comments)
-- ============================================================

/*
Why foreign keys are used:
   The user_id in the expenses table must reference a real user_id in the 
   users table because an expense without a valid owner is meaningless and 
   untrustworthy. Foreign keys enforce referential integrity: the database 
   engine will REJECT any INSERT into expenses with a user_id that does not 
   exist in users. This guarantees every financial record is traceable to a 
   real account holder.

Issue if foreign keys were removed - Orphaned Records:
   Without foreign keys, you could delete a user from the users table while 
   their expense records remain in the expenses table. These "orphaned" records 
   point to a non-existent user_id. Queries joining users with expenses would 
   silently drop those records or return NULL values, leading to inaccurate 
   financial reports. For example: a user is deleted after a dispute, but their 
   ₹50,000 in expenses still exists - reports show money spent with no owner.
*/


-- ============================================================
-- B.2: DML Operations
-- ============================================================

-- Insert 5 users
INSERT INTO users (user_id, name, email, created_at) VALUES
(1, 'Aarav Mehta',   'aarav.mehta@email.com',   '2024-01-10'),
(2, 'Priya Sharma',  'priya.sharma@email.com',  '2024-02-15'),
(3, 'Rohan Patel',   'rohan.patel@email.com',   '2024-03-20'),
(4, 'Sneha Joshi',   'sneha.joshi@email.com',   '2024-04-05'),
(5, 'Vikram Nair',   'vikram.nair@email.com',   '2024-05-12');

-- Insert 3 categories
INSERT INTO categories (category_id, category_name) VALUES
(1, 'Food'),
(2, 'Rent'),
(3, 'Entertainment');

-- Insert 10 expense records distributed across users and categories
INSERT INTO expenses (expense_id, user_id, category_id, amount, expense_date) VALUES
(101, 1, 1, 450.00,  '2024-06-01'),   -- Aarav - Food
(102, 1, 3, 800.00,  '2024-06-05'),   -- Aarav - Entertainment
(103, 2, 1, 320.50,  '2024-06-02'),   -- Priya - Food
(104, 2, 2, 12000.00,'2024-06-01'),   -- Priya - Rent
(105, 3, 1, 275.00,  '2024-06-03'),   -- Rohan - Food
(106, 3, 3, 1500.00, '2024-06-10'),   -- Rohan - Entertainment
(107, 4, 2, 10500.00,'2024-06-01'),   -- Sneha - Rent
(108, 4, 1, 610.00,  '2024-06-07'),   -- Sneha - Food
(109, 5, 3, 950.00,  '2024-06-08'),   -- Vikram - Entertainment
(110, 5, 1, 180.00,  '2024-06-04');   -- Vikram - Food

-- Update: correct an incorrect expense (expense_id 101, wrong amount entered)
UPDATE expenses
SET    amount = 550.00
WHERE  expense_id = 101;

-- Delete: remove the expense where amount is less than 200
DELETE FROM expenses
WHERE  amount < 200.00;


-- ============================================================
-- B.3: Data Retrieval
-- ============================================================

-- Display all expenses with details using INNER JOIN
SELECT
    e.expense_date,
    e.amount,
    u.name            AS user_name,
    c.category_name
FROM   expenses   e
INNER JOIN users      u ON e.user_id     = u.user_id
INNER JOIN categories c ON e.category_id = c.category_id
ORDER BY e.expense_date;

-- Show total expense amount per category
SELECT
    c.category_name,
    SUM(e.amount) AS total_amount
FROM   expenses   e
INNER JOIN categories c ON e.category_id = c.category_id
GROUP BY c.category_name
ORDER BY total_amount DESC;

-- Display users sorted by total spending (highest to lowest)
SELECT
    u.name,
    SUM(e.amount) AS total_spending
FROM   expenses e
INNER JOIN users u ON e.user_id = u.user_id
GROUP BY u.user_id, u.name
ORDER BY total_spending DESC;


-- ============================================================
-- B.4: Views
-- ============================================================

-- Create ActiveUsersView: users with MORE than 5 expense records
CREATE OR REPLACE VIEW ActiveUsersView AS
SELECT
    u.name,
    u.email,
    COUNT(e.expense_id) AS expense_count
FROM   users    u
INNER JOIN expenses e ON u.user_id = e.user_id
GROUP BY u.user_id, u.name, u.email
HAVING COUNT(e.expense_id) > 5;

-- Query the view
SELECT * FROM ActiveUsersView;


-- ============================================================
-- SECTION C: MINI PROJECT - Expense Tracker DB
-- ============================================================


-- ------------------------------------------------------------
-- C.1: CRUD Queries
-- ------------------------------------------------------------

-- CREATE - Add a new user
INSERT INTO users (user_id, name, email, created_at)
VALUES (6, 'Meera Iyer', 'meera.iyer@email.com', CURDATE());

-- CREATE - Add a new expense for the new user
INSERT INTO expenses (expense_id, user_id, category_id, amount, expense_date)
VALUES (111, 6, 1, 430.00, CURDATE());

-- READ - Retrieve all expenses for a specific user
SELECT
    e.expense_id,
    e.expense_date,
    c.category_name,
    e.amount
FROM   expenses   e
INNER JOIN categories c ON e.category_id = c.category_id
WHERE  e.user_id = 6
ORDER BY e.expense_date DESC;

-- UPDATE - Correct the amount for a specific expense
UPDATE expenses
SET    amount = 480.00
WHERE  expense_id = 111;

-- DELETE - Remove an expense entry
DELETE FROM expenses
WHERE  expense_id = 111;


-- ------------------------------------------------------------
-- C.2: Stored Procedure - Monthly User Expense Calculator
-- ------------------------------------------------------------

DELIMITER $$

CREATE PROCEDURE GetMonthlyExpense(
    IN  p_user_id   INT,
    IN  p_year      INT,
    IN  p_month     INT,
    OUT p_total     DECIMAL(10,2)
)
BEGIN
    -- Calculate total expense for a given user, year, and month
    SELECT COALESCE(SUM(amount), 0.00)
    INTO   p_total
    FROM   expenses
    WHERE  user_id       = p_user_id
      AND  YEAR(expense_date)  = p_year
      AND  MONTH(expense_date) = p_month;

    -- Display result with user name for readability
    SELECT
        u.name                           AS user_name,
        p_year                           AS year,
        p_month                          AS month,
        COALESCE(SUM(e.amount), 0.00)    AS monthly_total
    FROM   users u
    LEFT JOIN expenses e
           ON  u.user_id       = e.user_id
           AND YEAR(e.expense_date)  = p_year
           AND MONTH(e.expense_date) = p_month
    WHERE  u.user_id = p_user_id
    GROUP BY u.user_id, u.name;
END$$

DELIMITER ;

-- Call the stored procedure (user 2, June 2024)
CALL GetMonthlyExpense(2, 2024, 6, @total);
SELECT @total AS output_total;


-- ------------------------------------------------------------
-- C.3: COMMIT and ROLLBACK Demo
-- ------------------------------------------------------------

-- Start a transaction
START TRANSACTION;

-- Step 1: Insert a new expense record
INSERT INTO expenses (expense_id, user_id, category_id, amount, expense_date)
VALUES (201, 3, 2, 11000.00, '2024-07-01');

-- Step 2: Verify the insert (should appear within this transaction)
SELECT * FROM expenses WHERE expense_id = 201;

-- Step 3: COMMIT - makes the change permanent
COMMIT;

-- -------- ROLLBACK Example --------

START TRANSACTION;

-- Attempt: Insert an expense with an incorrect user_id (non-existent user)
INSERT INTO expenses (expense_id, user_id, category_id, amount, expense_date)
VALUES (202, 99, 1, 500.00, '2024-07-02');  -- user_id 99 does not exist

-- Oops! Wrong data entered. ROLLBACK to undo the insert above.
ROLLBACK;

-- Confirm: expense_id 202 should NOT exist
SELECT * FROM expenses WHERE expense_id = 202;

-- -------- Real-World ROLLBACK Scenario --------
-- Simulate: Inserting an expense AND updating a budget table
-- If the budget update fails, we roll back the expense insert too.

START TRANSACTION;

    -- Insert legitimate expense
    INSERT INTO expenses (expense_id, user_id, category_id, amount, expense_date)
    VALUES (203, 1, 1, 750.00, '2024-07-03');

    -- Suppose the next operation fails (e.g., budget table doesn't exist yet)
    -- We use ROLLBACK to keep data consistent
    -- UPDATE budget SET remaining = remaining - 750 WHERE user_id = 1;
    -- (If the above line fails, we rollback the entire transaction)

ROLLBACK;  -- Rolling back since budget update was incomplete

-- Final check: expense 203 should NOT exist after rollback
SELECT * FROM expenses WHERE expense_id = 203;


-- ============================================================
-- END OF ASSESSMENT
-- ============================================================
