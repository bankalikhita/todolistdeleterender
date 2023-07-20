// Write your code here
import './index.css'

const Todo = ({todo, onDelete}) => {
  const handleDeleteClick = () => {
    onDelete(todo.id)
  }
  return (
    <li className="todo-item">
      <div className="divbet">
        <p>{todo.title}</p>
        <button type="button" onClick={handleDeleteClick}>
          Delete
        </button>
      </div>
    </li>
  )
}

export default Todo
