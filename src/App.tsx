
import { useState } from 'react'
import './App.css'

function App() {
  const [newTask, setNewTask] = useState('')

  return (
    <>
      <h1>Add new task</h1>
      <div className='NewTask'>
        <textarea name="new task" id="new task" ></textarea>
      </div>
    </>
  )
}

export default App
