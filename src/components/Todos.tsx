import React from 'react'
import { Button, Collapse, Row, Stack} from "react-bootstrap"
import { useState } from 'react';
import { MdExpandMore, MdOutlineEdit} from "react-icons/md";
import { FaRegTrashCan } from "react-icons/fa6";
import Form from 'react-bootstrap/Form';
import './Todos.css'


type TodosProps= {
  tasks: Task[]
}


function Todos({tasks}:TodosProps) {

  const [open, setOpen] = useState(false);

  const TodoElement = tasks.map(task => 
  <>
    <div className='TodoItem'>
      <Row>   
        <Stack gap={3} direction='horizontal'>
          <Button size='lg'
            onClick={() => setOpen(!open)}
            aria-controls="collapse-text"
            aria-expanded={open} className='expandButton'>
            <MdExpandMore/>
          </Button>
          <div className='taskName'>{task.title}</div>
          <Form.Check aria-label="option 1"className="p-2 ms-auto"/>
          <Button variant="outline-warning"><MdOutlineEdit/></Button>
          <Button variant="outline-danger"><FaRegTrashCan/></Button>
        </Stack>
      </Row>
      <Row>
        <Collapse in={open}>
          <div id="example-collapse-text">
            {task.description}
          </div>
        </Collapse>
      </Row>
    </div>
  </>)


  
  return (
    <div>{TodoElement}</div>
  )
}
export default Todos