import React,{useState,useEffect} from 'react'
import Header from "./header.js" 
import axios from 'axios'
import Cards from './cards'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Home from './home.jsx';
import { Spinner,Collapse,Button,Fade } from 'react-bootstrap'
import NotFound from './NotFound.jsx'
import Moment from 'react-moment'
import Filter from './Filter.jsx'
// import 'rsuite/dist/styles/rsuite-default.css'
import { DateRangePicker } from 'rsuite'
import moment from 'moment'

const App = () => {
  // let [date, filterDate] = useState('');
  // const [open,setOpen]=useState(false);
  // // const items=data.slice(0,28)
  // const dateEdit1=Date.parse(date[0]);
  // const dateEdit2=Date.parse(date[1]);
  //     let dateObject1 = new Date(dateEdit1)
  // let dateObject2 = new Date(dateEdit2)
  // let humanDateFormat1 = dateObject1.toLocaleString() 
  // let humanDateFormat2 = dateObject2.toLocaleString() 
  // console.log(humanDateFormat1);
  // console.log(humanDateFormat2);
  // console.log({date});
  const [items,setItems]=useState([]);
  const [loading,setLoading]=useState('');
  useEffect(()=>{
  
    const fetching=async ()=>{
     const response=await axios.get('https://api.spacexdata.com/v3/launches');
     console.log(response.data);
     setItems(response.data);
     
    }
    fetching();
    setTimeout(() => {
      setLoading(true);
    }, 1000);
  },[])
//   // class MyComponent extends Component {
//   //   handleSelect(date){
//   //     console.log(date); // native Date object
//   //   }

//   const handleSelect=(date)=>{
//     console.log(date);
//   }
// //  items.map((x)=>{
// //  const dates=x.launch_date_unix;
// //  console.log(dates);
// //  let milliseconds = dates * 1000 
// //  let dateObject = new Date(milliseconds)
// //   let humanDateFormat = dateObject.toLocaleString() 
// // x.launch_date_unix=humanDateFormat;
// //   })
// items.map((x)=>{
//   var dates=x.launch_date_unix;
//  var dateFormat=moment(dates).format('DD-MMM-YYYY')
//  x.launch_date_unix=dateFormat
// })
// // for(var i=0;i<items.length;i++){
// //   let milliseconds = items[i].launch_date_unix * 1000 
// //   let dateObject = new Date(milliseconds)
// //   let humanDateFormat = dateObject.toLocaleString() 
// //   items[i].launch_date_unix=humanDateFormat;
// // }
// // items.forEach((x,index)=>{
// //     const dates=x.launch_date_unix;
// //     <Moment format="YYYY/MM/DD">
// //     {/* 1976-04-19T12:59-0500 */}
// //     {dates}
// // </Moment>
// //     x.launch_date_unix=dates;

//     // let milliseconds = dates * 1000 
//     // let dateObject = new Date(milliseconds)
//     // let humanDateFormat = dateObject.toLocaleString() 
  
//   // })
console.log(items);
  return (
    <Router>
    {loading ? (<div>
      <Switch>
     <Route path='/' exact >
      <Header/>
     {/* <Filter/> */}
     <Cards data={items}/>
     </Route>
     <Route path={`/launches/flight_number/:id`} >
     <Home data={items}/>
     </Route>
     <Route component={NotFound}/>
      </Switch>
    </div>) : (<div className="loader">
    <Spinner animation="grow" />
    <Spinner animation="grow" />
     <Spinner animation="grow" />
     <Spinner animation="grow" />
    <h1>Your Page is loading...</h1>
    </div>
    )}

      </Router>
  )
}
export default App
