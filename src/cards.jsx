import {Button, Container,Collapse} from "react-bootstrap"
import React,{useState} from 'react'
import {Link} from "react-router-dom"
import UNIX from "./UNIX"
const Cards = (props) => {
    const data=props.data;
  const items=data.slice(0,28)
    

  //   const compare=items.filter((x)=>{
  //     const unixDate=x.launch_date_unix;
  //  return (dateObject1<unixDate)&&(dateObject2>unixDate)
  //   })
  //   console.log(compare);
    return (

      <div>
                          
        <h1 className="launch">LAUNCHES</h1>
        
    <br/> 
      <Container>
        <div className="cardings">
      {      
           
              items.map((item) =>(
        <div className='carding' key={item.flight_number}>
        <div className='carding-inner'>
          <div className='carding-front '>
            <img src={item.links.mission_patch_small} alt='' />
          </div>
          <div className='carding-back'>
            <h1>{item.mission_name}</h1>
            <ul>
              <li>
                <strong>Launch year:</strong> {item.launch_year}
              </li>
              <li>
                <strong>Rocket Name:</strong> {item.rocket.rocket_name}
              </li>
              <li>
              
                <strong><UNIX props={item.launch_date_unix}/></strong>
              </li>
              <Link to={`/launches/flight_number/`+item.flight_number} >
              <Button className="btn btn-danger plus"  >+
              </Button>
              </Link>
              
            </ul>
          </div>
        </div>
      
      </div>
      ))  
          
      })
      
        </div>
</Container>
<div className="calendar">
  
</div>
        </div>
    )
}


export default Cards

