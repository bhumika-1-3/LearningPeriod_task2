import React from 'react'
import {Button} from "react-bootstrap" 
import { Link } from 'react-router-dom'

const styling={
    width:'80%',
    height:"570px"
    }
const btnStyle={
    position:'relative',
    top:'-150px',
    left:'200px'
}    
const NotFound = () => {
    return (
        <div>
        <center>
        <img style={styling} alt="404" src="https://miro.medium.com/max/1400/1*DeBkx8vjbumpCO-ZkPE9Cw.png"></img>
        <br/>
        <Link to="/">
        <Button style={btnStyle}>Home</Button>    
        </Link>
        </center>
        </div>
    )
}

export default NotFound