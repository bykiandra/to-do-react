import ToDoItem from './ToDoItem'

interface Props {
  todos: ToDo[],
  handleToggle: HandleToggle
}

const ToDoList = ({ todos, handleToggle }: Props) => {
  return (
    <div className="grid grid-col gap-2 w-80">
      {todos.map((todo) => (
        <ToDoItem key={todo.id} todo={todo} handleToggle={handleToggle} />
      ))}
    </div>
  )
}

export default ToDoList