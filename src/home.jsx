import React from 'react'
import { useParams } from 'react-router'
import Button from 'react-bootstrap/Button';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './lp2.css'
import 'bootstrap/dist/css/bootstrap.min.css';  
import UNIX from './UNIX';
// import {data } from './cards';
const Home = (props) => {
const {id}=useParams();
const flightNumber={id}

const items=props.data[Number(flightNumber.id)-1];


  return (
        <center >
        <div className="secondPage">
        <Link to="/">
       <Button variant="primary" size="lg">Back</Button>
       </Link>
       <table>
        <Table responsive hover bordered variant="light" className="tables">
        <tbody >
           <tr>
           <th >
          Mission Name:
           </th>
           <td>
             {items.mission_name}    
           </td>
           </tr>
           <tr>
           <th>
           Flight Number:
           </th>
           <td>
             {items.flight_number}    
           </td>
           </tr>
          <tr>
           <th>
            Launch Year :
           </th>
           <td>
             {items.launch_year}    
           </td>
           </tr>
            <tr>
             <th>
               Launch Date:    
             </th>
             <td>
              <UNIX props={items.launch_date_unix} ></UNIX>   
             </td>     
            </tr>
            <tr>
             <th>
              Rocket :     
             </th>
             <td>
             Name:{items.rocket.rocket_name} 
             &nbsp; Type:{items.rocket.rocket_type}      
             </td>     
            </tr>
            
            <tr>
              <th>
                 Launch Site:
              </th>
              <td>
                {items.launch_site.site_name} 
              </td>    
            </tr>
                       
        </tbody>
        </Table>
        </table>
        </div>
        </center>
    )
}
export default Home