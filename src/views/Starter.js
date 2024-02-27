import { Row, Col } from 'reactstrap';
import './Starter.css';
import imageFriends from "../assets/images/bg/friends.png"
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ShowPoints from './ShowPoints';
import { useLocation, useNavigate } from 'react-router-dom';
import LocalStorage from '../layouts/LocalStorage';

export default function Starter() {

  const location = useLocation();
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [values, setValues] = useState({
    name: location.state.name,
    currentPoints:location.state.currentPoints,
  })
 // console.log(values.name+"values")
  const [imageData, setImageData] = useState([]);
  useEffect(() => {

    axios.post('http://localhost:3002/image', values)
      .then(res => {
        setImageData(res.data[0])
        // console.log(res.data[0])
        navigate('/home')
      })
      .catch(err => console.log(err));
  }, []
  )


  
  
 
 
  



  return (
    <>
      <div className="row">
        <div className="col p-3">
         
        </div>
        <div className="col">
      
        </div>
        <div className="col">
        <LocalStorage parentToChild={[location.state.name,location.state.currentPoints]} />
  
       
        </div>
      
      </div>


      <div className="container container-fluid">


       

        <div>
          {/* <button primary onClick={() => parentToChild()}>Click Parent</button> */}
          {/* <img src={`http://localhost:3002/images/` + imageData.image} alt="" style={{ width: "150px", height: "150px" }}></img> */}

        </div>
      </div>

    

    </>
  );
}


