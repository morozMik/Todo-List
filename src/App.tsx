import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import { Button, Ciner, Stack } from "react-bootstrap"
import TodoInput from './components/TodoInput'

function App() {


  return (
    <>
    <TodoInput/>
    <div className='ToDoList'>
      <h1>ToDo List</h1>
      <div>
        <Stack direction='horizontal' gap={4} className='buttonStack'>
          <Button className='w-100' size='lg'>All</Button>
          <Button className='w-100' size='lg'>Done</Button>
          <Button className='w-100  ' size='lg'>Todo</Button> 
        </Stack>
      </div>
      <div className='todos'>

      </div>
    </div>
    </>
  )
}

export default App
