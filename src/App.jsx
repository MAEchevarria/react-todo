import { useState, useEffect } from 'react'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import { Container, Card } from 'react-bootstrap'
import './App.css'

function App() {
  const [userText, setUserText] = useState("")
  const [todos, setTodos] = useState([])
  const [keyIndex, setKeyIndex] = useState(0)
  
  // useEffect gets list of todos from local storage on first render
  useEffect(() => {
    getTodos();
  }, [])

  // tracks todos state; updates local storage with current todos
  useEffect(() => {
    storeTodos();
  }, [todos])

  function getTodos() {
      if (localStorage.getItem("todos") === null) {
          localStorage.setItem("todos", JSON.stringify([]));
      } else {
          const items = JSON.parse(localStorage.getItem("todos"));
          setTodos(items)
      }
  }

  function storeTodos() {
      if (todos.length > 0) {
          localStorage.setItem("todos", JSON.stringify(todos));
      }
  }
  return (
    <Container fluid className="content">
      <Card className="">
        <div className="my-3">
          <h2>React Todo App</h2>
        </div>
        <TodoForm userText={ userText } setUserText={ setUserText } todos={ todos } setTodos={ setTodos } keyIndex={ keyIndex } setKeyIndex={ setKeyIndex } />
        <TodoList todos={ todos } setTodos={ setTodos } />
      </Card>
    </Container>
  )
}

export default App
