UPDATE [dbo].[ToDoItems]
set [IsActive]=@isActive,
    [IsComplete]=@isComplete
where [Id]=@id

select [Id], [task], [IsActive], [IsComplete] from [dbo].[ToDoItems] where [Id]=@id