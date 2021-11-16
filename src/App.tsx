import { useState } from 'react'
import NewToDo from './components/NewToDo'
import ToDoList from './components/ToDoList'
import Footer from './components/Footer'

const initialToDos: ToDo[] = [
  {
    id: Date.now(),
    text: "Hello world",
    complete: false
  }
]

const App = () => {
  const [allToDos, setAllToDos] = useState<Array<ToDo>>(initialToDos)

  const handleToggle: HandleToggle = (selected) => {
    const updatedToDos = allToDos.map(todo => {
      if (todo === selected) {
        todo.complete = !todo.complete
      }
      return todo
    });
    setAllToDos(updatedToDos)
  }

  const handleSubmit: HandleSubmit = (text) => {
    const newToDo = {
      id: Date.now(),
      text: text,
      complete: false
    }
    setAllToDos([...allToDos, newToDo])
  }

  return (
    <div className="grid justify-items-center grid-col">
      <h1 className="my-5 text-3xl font-black text-blue-400 border-b">
        To Do List
      </h1>
      <NewToDo handleSubmit={handleSubmit} />
      <ToDoList
        todos={allToDos}
        handleToggle={handleToggle}
      />
      <Footer />
    </div>
  );
}

export default App
