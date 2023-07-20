import {Component} from 'react'

import Todo from '../TodoItem'

import './index.css'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

// Write your code here

class SimpleTodo extends Component {
  state = {
    todos: initialTodosList,
  }

  handleDeleteTodo = id => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== id),
    }))
  }

  render() {
    const {todos} = this.state
    return (
      <div className="simple-todo">
        <div className="todos-list">
          <h1 className="main-heading">Simple Todos</h1>
          {todos.map(todo => (
            <Todo key={todo.id} todo={todo} onDelete={this.handleDeleteTodo} />
          ))}
        </div>
      </div>
    )
  }
}

export default SimpleTodo
