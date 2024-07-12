import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import { Button, Stack } from "react-bootstrap"
import TodoInput from './components/TodoInput'
import Todos from './components/Todos'
import { useState, useEffect } from 'react'

export type Task = {
  title: string,
  description: string,
  id: string
}

function App() {


  const [tasks, setTasks] = useState<Task[]>([])
  

  const onCreatetask = ({title, description, id}:Task) => {
    localStorage.setItem('tasks',JSON.stringify(tasks));
    setTasks(prevTasks => {
      return[...prevTasks, {title, description, id}]
    })
  }

  useEffect(() => {
    const jsonValue = localStorage.getItem('tasks')
    if (jsonValue === null){
      return 
    }else{
      setTasks(JSON.parse(jsonValue))
    }
  }, []);
  

  return (
    <>
    <button onClick={() => console.log(tasks)}>click me bitch</button>
    <TodoInput onSubmit={onCreatetask}/>
    <div className='ToDoList'>
      <h1>ToDo List</h1>
      <div>
        <Stack direction='horizontal' gap={4} className='buttonStack'>
          <Button className='w-100' size='lg'>All</Button>
          <Button className='w-100' size='lg'>Done</Button>
          <Button className='w-100' size='lg'>Todo</Button> 
        </Stack>
      </div>
      <div>
        <Todos tasks={tasks}/>
      </div>
    </div>
    </>
  )
}

export default App
