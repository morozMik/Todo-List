import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import { Button, Container, Stack } from "react-bootstrap"

function App() {


  return (
    <>
    <div className='TodoInput1'>
      <h1>Todo Input</h1>
        <div className='TodoInput2'>
          <div className='NewTodo'>new todo</div>
          <div className='NewTodoDes'>Add description</div>
          <button className='AddNewTask'>Add new task</button>
        </div>
    </div> 
    <div className='ToDoList'>
      <h1>ToDo List</h1>
      <div>
        <Stack direction='horizontal' gap={4} className='buttonStack'>
          <Button className='w-100' size='lg'>All</Button>
          <Button className='w-100' size='lg'>Done</Button>
          <Button className='w-100' size='lg'>Todo</Button> 
        </Stack>
      </div>
    </div>
    </>
  )
}

export default App
