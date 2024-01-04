import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'

function App() {
  const [todos,setTodo] = useState([]);

  // const data = await fetch("http://localhost:3000/todos");
  // setTodo(data.todos)
  //useeffect hook?

  fetch("http://localhost:3000/todos")
  .then(async (res)=>{
    const json = await res.json();
    setTodo(json.todos);
})

  return (
    <div>
      <CreateTodo/>
      <Todos todos = {todos}/>
    </div>
  )
}


export default App
