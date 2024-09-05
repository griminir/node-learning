-- Step 1: Create the database if it does not already exist
IF NOT EXISTS (SELECT * FROM sys.databases WHERE name = 'what_you_wanna_call_your_db')
BEGIN
    CREATE DATABASE what_you_wanna_call_your_db;
END
GO

-- Use the database
USE what_you_wanna_call_your_db;
GO

-- Step 2: Create the `ToDoItems` table if it does not already exist
IF NOT EXISTS (SELECT * FROM sys.tables WHERE name = 'ToDoItems')
BEGIN
    CREATE TABLE ToDoItems (
        id INT IDENTITY(1,1) PRIMARY KEY,
        task NVARCHAR(400) NOT NULL,
        IsActive BIT NOT NULL DEFAULT 1,
        IsComplete BIT NOT NULL DEFAULT 0
    );
END
GO

-- Step 3: Insert sample data (optional)
INSERT INTO ToDoItems (task, IsActive, IsComplete) VALUES
('Sample Task 1', 1, 0),
('Sample Task 2', 1, 0);
GO