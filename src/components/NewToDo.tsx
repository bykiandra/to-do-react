import { useState } from 'react'

interface Props {
  handleSubmit: HandleSubmit
}

const NewToDo = ({ handleSubmit }: Props) => {
  const [input, setInput] = useState<string>('')

  return (
    <form className="mb-5">
      <input type="text" placeholder="New to do..."
        onChange={e => {setInput(e.target.value)}}
        className="p-1 border-b focus:outline-none focus:border-blue-400"
      />
      <button type="submit"
      onClick={e => {
        e.preventDefault()
        handleSubmit(input)
        setInput('')
      }}
        className="bg-gray-200 ml-3 py-1 px-4 rounded-lg hover:bg-gray-300"
      >
        Add
      </button>
    </form>
  )
}

export default NewToDo