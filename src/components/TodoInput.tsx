import React from 'react'
import { Button, Form, Row } from "react-bootstrap"
import './TodoInput.css'
function TodoInput() {
  return (
    <>
      <div className='TodoInput1'>
        <h1>Todo Input</h1>
          <div className='TodoInput2'>
            <Form>
              <Row>
                <Form.Control size="lg" type="text" placeholder="New task" />      
              </Row>
              <Row className='mt-3'>
                <Form.Control as='textarea' rows={5}  type="text" placeholder="add description" />    
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