// CardList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CardComponent from '../components/CardComponent';
import Top3CardComponent from '../components/Top3CardComponent'
import './Starter.css'
import ShowPoints from './ShowPoints';
const CardList = () => {


  const [data, setData] = useState([]);
  const [top3Data, setTop3Data] = useState([]);
  const getTop3Data = () => {
    axios.get("http://localhost:3002/top").then((response) => {
      console.log(response)
      setTop3Data(response.data)
    }).catch((error) => {

    })
  }
  useEffect(() => {
    getTop3Data()
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3002/data');
        setData(response.data);


      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };



    fetchData();

  }, []);


    //get current Points
    useEffect(() => {

      getLatesetPoints();
  });


  const [values] = useState({
      name: localStorage.getItem("inputValue"),
      CurrentPoints: localStorage.getItem("currentPointsValue")
  })
  const [currentScore, setCurrentScore] = useState(0);
  const getLatesetPoints = async () => {
      await axios.post('http://localhost:3002/points', values)
          .then(res => {
              // setImageData(res.data[0])
              setCurrentScore(res.data[0].points)
              // navigate('/listenmodule')
              console.log(res.data[0].points)
          })
          .catch(err => console.log(err));
  }



  return (
    <>
      <div className="row">
        <div className="col p-3">

        </div>
        <div className="col">
          <h1 style={{fontFamily: 'Comic Sans MS, cursive'}} className='title-text text-center text-black rounded-4 mt-3'>Leaderboard</h1>
          
        </div>
        <div className="col">
        <ShowPoints childPoints={currentScore} parentToChild={localStorage.getItem("inputValue")} />
        </div>
        {/* //  <LocalStorage parentToChild={location.state.name} /> */}
      </div>

      <h2 className=" mb-3 mt-3" style={{ textAlign: "center" }}>Winners</h2>
      <div className="horizontal-card-list justify-content-center" >
        {top3Data && top3Data.map((item,index) => (
         
          <Top3CardComponent key={item.id} data={item} index={index}/>
        ))}
      </div>
      <br></br>
      <div className="vertical-card-list container mt-3" >
        {data && data.map((item) => (
          <CardComponent key={item.id} data={item} />
        ))}
      </div>
    </>

  );
};

export default CardList;
