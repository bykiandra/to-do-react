interface ToDo {
  id: number,
  text: string,
  complete: boolean
}

type HandleToggle = (selected: ToDo) => void

type HandleSubmit = (text: string) => void