// CardComponent.js
import React from 'react';
import medal_image from '../assets/medals/fa6-solid_medal.png'
import medal_tie_image from '../assets/medals/fa6-solid_medal(2).png'
import gold_medal_image from '../assets/medals/goldmedal.png'
import silver_medal_image from '../assets/medals/silvermedal.png'
import bronze_medal_image from '../assets/medals/bronzemedal.png'


const Top3CardComponent = ({ data,index }) => {

  console.log(index)


  const isTopThree = index>=1 && index<=3;

  // Define inline styles for the gold medal image
  const goldMedalStyles = {
    width: "80px",  // Adjust the width as needed
    height: "100px", // Adjust the height as needed
  }; 
  return (
    <>
    {index===0 && 
    
    
    <div className="card  text-center" style={{ width: "150px", height: "320px" }}  >
      
      <div className='col justify-content-center'>
        <img src={`http://localhost:3002/images/` + data.image} className='rounded-circle ' alt='card image cap' style={{ width: "80px", height: "80px" }} ></img>
      </div>
      
      <div className='col'>
        <img src={gold_medal_image} style={goldMedalStyles}></img>
      </div>
      <div className='col'>
        <h2><strong>1st</strong></h2>
      </div>
      <div className='col'>
        <h5><strong>{data.name}</strong></h5>
      </div>
      <div className='col'>
        <h5 ><strong>{data.points}xp</strong></h5>
      </div>
   

  </div>
    
    
    }
    {index ===1 && 
    
    <div className="card text-center" style={{ width: "150px", height: "300px" }}  >
      
      <div className='col justify-content-center'>
        <img src={`http://localhost:3002/images/` + data.image} className='rounded-circle ' alt='card image cap' style={{ width: "80px", height: "80px" }} ></img>
      </div>
      
      <div className='col'>
        <img s src={silver_medal_image}  style={goldMedalStyles}></img>
      </div>
      <div className='col'>
        <h4><strong>2nd</strong></h4>
      </div>
      <div className='col'>
        <h5><strong>{data.name}</strong></h5>
      </div>
      <div className='col'>
        <h5 ><strong>{data.points}xp</strong></h5>
      </div>
   
   

  </div>
    }     
     {index ===2 && 
    
    <div className="card  text-center" style={{ width: "150px", height: "280px" }} >
      
      <div className='col justify-content-center'>
        <img src={`http://localhost:3002/images/` + data.image} className='rounded-circle ' alt='card image cap' style={{ width: "100px", height: "80px" }} ></img>
      </div>
      
      <div className='col'>
        <img src={bronze_medal_image}  style={goldMedalStyles}></img>
      </div>
      <div className='col'>
        <h5><strong>3rd</strong></h5>
      </div>
      <div className='col'>
        <h5><strong>{data.name}</strong></h5>
      </div>
      <div className='col'>
        <h5 ><strong>{data.points}xp</strong></h5>
      </div>
   

  </div>
    }     
    
    </>
   
  );
};

export default Top3CardComponent;
