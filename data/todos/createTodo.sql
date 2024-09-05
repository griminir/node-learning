INSERT INTO [dbo].[ToDoItems]
  (
    [task],
    [IsActive],
    [IsComplete]
  )
VALUES (
  @task,
  @isActive,
  @isComplete
)

select SCOPE_IDENTITY() AS Id