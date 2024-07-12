import React, { useId, useRef } from 'react'
import { Button, Form, Row } from "react-bootstrap"
import './TodoInput.css'
import { Task } from '../App'

type TodoInputProps = {
  onSubmit: ({title, description, id}:Task) => void
}

function TodoInput({onSubmit}:TodoInputProps) {

  const titleRef = useRef<HTMLInputElement>(null)
  const descriptionRef = useRef<HTMLTextAreaElement>(null)
  const uid = useId();

  const createTask = (e: FormEvent) => {
    e.preventDefault()
    onSubmit({
      title: titleRef.current!.value, 
      description: descriptionRef.current!.value,
      id: uid
    })
  }

  return (
    <>
      <div className='TodoInput1'>
        <h1>Todo Input</h1>
          <div className='TodoInput2'>
            <Form onSubmit={createTask}>
              <Row>
                <Form.Control ref={titleRef} size="lg" type="text" placeholder="New task" />      
              </Row>
              <Row className='mt-3'>
                <Form.Control ref={descriptionRef} as='textarea' rows={5}  type="text" placeholder="add description" />    
              </Row>
              <Row className='mt-3'>
                <Button className='p-3' type="submit">Add task</Button>    
              </Row>
            </Form>
          </div>
      </div> 
    </>
  )
}

export default TodoInput