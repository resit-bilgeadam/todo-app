import {useState} from 'react';
import TodoCard from "./TodoCard";
import Input from "./Input";
import Button from "./Button";


const INITIAL_TODOS = [
    {id: Math.random(), title: 'Todo 1', completed: false},
    {id: Math.random(), title: 'Todo 2', completed: true},
    {id: Math.random(), title: 'Todo 3', completed: false},
]

function TodoWidget() {
    const [todos, setTodos] = useState(INITIAL_TODOS);
    const [todoTitle, setTodoTitle] = useState('');

    const addTodo = (event) => {
        event.preventDefault();

        if (!todoTitle.trim()) return;

        const newTodo = {
            id: Math.random(),
            title: todoTitle,
            completed: false
        }

        setTodos([...todos, newTodo]);
        setTodoTitle('');
    }

    const deleteTodo = (todoId) => {
        const newTodos = todos.filter(todo => todo.id !== todoId)

        setTodos(newTodos);
    }

    const toggleCompleted = (todoId) => {
        const updatedTodos = todos.map(todo => {
            if (todo.id === todoId) {
                return {...todo, completed: !todo.completed}
            }

            return todo;
        })

        setTodos(updatedTodos)
    }

    return (
        <div>
            <h1>Todo Functional Widget</h1>
            
            <div className='todo-form-wrapper card'>
                <form onSubmit={addTodo}>
                    <Input 
                        label='Todo Title' 
                        placeholder='Enter your todo...'
                        type='text'
                        name='todo-title'
                        id='title-input'
                        value={todoTitle}
                        changeHandler={(e) => setTodoTitle(e.target.value)} />

                    <Button type='submit'>
                        Add Todo
                    </Button>
                </form>
            </div>

            <hr/>

            <div className='todos-wrapper'>
                {
                    todos.map(todo => <TodoCard 
                                        key={todo.id} 
                                        todo={todo}
                                        onDelete={deleteTodo}
                                        onToggleCompleted={toggleCompleted} />)
                }
            </div>
        </div>
    )
}

export default TodoWidget;
