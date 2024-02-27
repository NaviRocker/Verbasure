// CardComponent.js
import React from 'react';

const CardComponent = ({ data }) => {



  
  return (
    <div className="card card-fluid text-center" >
      <div className='row '>
        <div className='col justify-content-center'>
          <img src={`http://localhost:3002/images/` + data.image} className='rounded-circle ' alt='card image cap' style={{ width: "50px", height: "50px" }} ></img>
        </div>
        <div className='col'>
          <h4>{data.name}</h4>
        </div>
        <div className='col'>
          <span>{data.points}xp</span>
        </div>
      </div>


    </div>
  );
};

export default CardComponent;
