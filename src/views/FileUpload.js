import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
function FileUpload()
{
    const [file, setFile] = useState();
    const [data, setData] = useState([]);
   
   
    
    const handleFile = (e) => {
        setFile(e.target.files[0])
    }
    const navigate = useNavigate();
    console.log(navigate);

    
    useEffect(() =>{
        axios.get('http://localhost:3001/')
        .then(res => {
            setData(res.data[0])
        })
        .catch(err => console.log(err));
    },[]
    )

    const handleUpload = () =>{
        const formdata = new FormData();
        formdata.append('image',file);
        axios.post('http://localhost:3002/upload',formdata)
        .then(res => {
            if(res.data.Message ==="Success"){
                console.log()
              navigate('/login');
            }
            else {
                console.log("Failed")
            }
        })
        .catch(err => console.log(err));

    }
    return (
        
            <div className='bg-white p-3 rounded w-25 justify-content-center' >
                <h1 className="">SELECT YOUR AVATAR</h1>
                <div className='mb-3'>
                      <input type="file" onChange={handleFile} className="form-control rounded-0"></input>

                </div>
                <div>
                     <button onClick={handleUpload} rounded className="btn btn-primary w-100">Upload</button>
                </div>
                       
                <br/>
                <div className='mb-3'>
                <img src={`http://localhost:3002/images/`+data.image} alt ="" style={{width: "150px", height:"50px"}}></img>
                </div>
                       
                
             </div>
        

      
    )
}

export default FileUpload