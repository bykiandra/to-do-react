interface Props {
  todo: ToDo,
  handleToggle: HandleToggle
}

const ToDoItem = ({ todo, handleToggle }: Props) => {
  return (
    <div className={ todo.complete ? 'bg-gray-100 rounded-lg p-3 opacity-30' : 'bg-gray-100 rounded-lg p-3' }>
      <label className={ todo.complete ? 'line-through' : undefined }>
        <input
          className="mr-2"
          type="checkbox"
          checked={todo.complete}
          onChange={() => handleToggle(todo)}
        />
        {todo.text}
      </label>
    </div>
  )
}

export default ToDoItem