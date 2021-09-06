import React, { useState } from 'react'
import { Spinner,Collapse,Button,Fade } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';  
import SingleCalendar from 'react-single-calendar';
const Filter = () => {
  const [open,setOpen]=useState(false);

    return (
        <div className="calendarBtn" >
      <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        size="lg"
        aria-expanded={open}
      >
        Filter
      </Button>
      <Fade in={open}>

         <div id="example-collapse-text">
<SingleCalendar/>
        </div> 
      </Fade>
      </div>
    )
}

export default Filter
  