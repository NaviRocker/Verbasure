
import React, { useState, useEffect } from "react";
import axios from 'axios';
function LocalStorage({ parentToChild }) {

    const [values] = useState({
        name: parentToChild,
    })

    useEffect(() => {

        localStorage.setItem("inputValue", [parentToChild[0]])
        localStorage.setItem("currentPointsValue", [parentToChild[1]])
       //console.log([parentToChild], "amooor amoor")

        axios.post('http://localhost:3002/image', values)
            .then(res => {
                setImageData(res.data[0])
               //console.log(res.data[0])
            })
            .catch(err => console.log(err));

    }, []
    )
    const [imageData, setImageData] = useState([]);

    


    return (
        <>


        </>
    )
}
export default LocalStorage;