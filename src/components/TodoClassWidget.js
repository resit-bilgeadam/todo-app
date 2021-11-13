import {Component} from 'react';
import Button from './Button';
import Input from './Input';
import TodoCard from './TodoCard';

const INITIAL_TODOS = [
    {id: Math.random(), title: 'Todo 1', completed: false},
    {id: Math.random(), title: 'Todo 2', completed: true},
    {id: Math.random(), title: 'Todo 3', completed: false},
]


class TodoClassWidget extends Component {
    state = {
        todos: INITIAL_TODOS,
        todoTitle: ''
    }

    constructor(props) {
        super(props)
    }

    addTodo = (e) => {
        e.preventDefault();

        if (!this.state.todoTitle.trim()) return;

        const newTodo = {
            id: Math.random(),
            title: this.state.todoTitle,
            completed: false
        }

        this.setState({
            todos: [...this.state.todos, newTodo], 
            todoTitle: ''
        })
    }

    deleteTodo = (todoId) => {
        const filteredTodos = this.state.todos.filter(todo => todo.id !== todoId);

        this.setState({todos: filteredTodos});
    }

    toggleCompleted = (todoId) => {
        const updatedTodos = this.state.todos.map(todo => {
            if (todo.id === todoId) {
                return {...todo, completed: !todo.completed}
            }

            return todo;
        })

        this.setState({todos: updatedTodos});
    }

    setTodoTitle = (e) => {
        this.setState({todoTitle: e.target.value})
    }
    
    render() {
        return (
            <div>
                <h1>Todo Class Widget</h1>

                <div className='todo-form-wrapper card'>
                    <form onSubmit={this.addTodo}>
                        <Input 
                            placeholder='Enter your todo...'
                            name='todo-input'
                            id='todo-class-input'
                            label='Todo Title'
                            value={this.state.todoTitle}
                            changeHandler={this.setTodoTitle} />

                        <Button type='submit'>Add Todo</Button>
                    </form>
                </div>

                <hr />

                <div className='todos-wrapper'>
                    {
                        this.state.todos.map(todo => <TodoCard 
                                                        key={todo.id}
                                                        todo={todo}
                                                        onDelete={this.deleteTodo}
                                                        onToggleCompleted={this.toggleCompleted} />)
                    }
                </div>
            </div>
        )
    }
}

export default TodoClassWidget;
