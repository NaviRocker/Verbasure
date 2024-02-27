

import axios from 'axios';
import React, { useState, useEffect } from "react";
import img_star from '../assets/images/bg/img_star.png'


export default function ShowPoints({ childPoints }) {

    const [values] = useState({
        name: localStorage.getItem("inputValue"),
        CurrentPoints: localStorage.getItem("currentPointsValue")
    })

    const [imageData, setImageData] = useState([]);
    const [points, setPoints] = useState([])


    useEffect(() => {

        // localStorage.setItem("inputValue", [parentToChild])
        // console.log([parentToChild], "initialInput")

        axios.post('http://localhost:3002/image', values)
            .then(res => {
                setImageData(res.data[0])
                //console.log(res.data[0])
            })
            .catch(err => console.log(err));

        axios.post('http://localhost:3002/points', values)
            .then(res => {
                // setImageData(res.data[0])
                setPoints(res.data[0].points)
                //console.log(res.data[0].points)
            })
            .catch(err => console.log(err));

    }, []
    )

    // console.log(localStorage.getItem("inputValue"))
    return (



        <div className='card  align-items-end' style={{ width: "15rem" }}>

            <div className='row '>
                <div className='col-4'>
                    <img className='rounded-circle ' style={{ width: "50px", height: "50px" }} src={`http://localhost:3002/images/` + imageData.image} alt='card image cap'></img>
                </div>
                <div className='col-8'>
                    <h4 className='text-black'>{localStorage.getItem("inputValue")}</h4>
                   
                        <div className='row '>
                        <div className="col-md-2">
                                <i class="bi bi-star-fill  fs-6 text-warning "></i>
                            </div>
                            <div className='col-md-auto'>
                                <span className='text-black fs-6 text'>{childPoints == "" ? points : childPoints}xp</span>
                               
                            </div>
                          

                        </div>

                   


                </div>

            </div>


        </div>






    )
}