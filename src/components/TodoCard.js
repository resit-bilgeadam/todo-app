import Button from './Button';


function TodoCard({todo, onDelete, onToggleCompleted}) {

    return (
        <div className='card'>
            <h4 className='card-title'>{todo.title}</h4>

            <Button 
                color='danger' 
                clickHandler={() => onDelete(todo.id)}
                block>
                    Delete
            </Button>

            <Button 
                color={todo.completed ? 'success' : 'primary'} 
                clickHandler={() => onToggleCompleted(todo.id)}
                block>
                {todo.completed ? 'Completed' : 'Not Completed'}
            </Button>
        </div>
    )
}

export default TodoCard;
