import React from 'react'
import { Button, Collapse, Row, Stack} from "react-bootstrap"
import { useState } from 'react';
import { MdExpandMore, MdOutlineEdit} from "react-icons/md";
import { FaRegTrashCan } from "react-icons/fa6";
import Form from 'react-bootstrap/Form';
import './Todos.css'





function Todos() {

  const [open, setOpen] = useState(false);



  
  return (
    <div className='TodoItem'>
      <Row>   
        <Stack gap={3} direction='horizontal'>
          <Button size='lg'
            onClick={() => setOpen(!open)}
            aria-controls="collapse-text"
            aria-expanded={open} className='expandButton'>
            <MdExpandMore/>
          </Button>
          <div className='taskName'>Name of the task</div>
          <Form.Check  aria-label="option 1"className="p-2 ms-auto"/>
          <Button variant="outline-warning"><MdOutlineEdit/></Button>
          <Button variant="outline-danger"><FaRegTrashCan/></Button>
        </Stack>
      </Row>
      <Row>
        <Collapse in={open}>
          <div id="example-collapse-text">
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
            terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
            labore wes anderson cred nesciunt sapiente ea proident.
          </div>
        </Collapse>
      </Row>
    </div>
  )
}
export default Todos