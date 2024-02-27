import React, { useState } from 'react'
import { Row, Col } from 'reactstrap';
import { Link, useNavigate } from 'react-router-dom'
import Validation from './LoginValidation'
import axios from 'axios'
import friends_login from '../assets/images/bg/login.png'

function Login() {
    const [values, setValues] = useState({
        email: '',
        password: ''
    })


    const navigate = useNavigate();

    const [errors, setErrors] = useState({})

    const handleInput = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: [event.target.value] }))
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(Validation(values));
        if (errors.email === "" && errors.password === "") {

            axios.post('http://localhost:3002/login', values)
                .then(res => {
                    if (res.data.Message === "Success") {
             
                     //  console.log(res.data.pointsLogin)
                        navigate('/starter', { state:{name:res.data.userName,currentPoints:res.data.pointsLogin} });
                    } else {
                        alert("No User")
                    }
                })
                .catch(err => console.log(err));
        }
    }

 
   
  
  
    return (
        <>
           
            <Row className='row   '>
              
                <Col className='col py-5'>

                    <div className='container text-left' >
                        <h1><strong className='text'>Sign In</strong></h1>

                        <form action='' onSubmit={handleSubmit}>
                            <div className='mb-3'>
                                <label htmlFor='email'><strong>Email</strong></label>
                                <input type='email' placeholder='Enter Email' name='email'
                                    onChange={handleInput} className='form-control rounded-2 w-100' />
                                {errors.email && <span className='text-danger'>{errors.email}</span>}
                            </div>

                            <div>
                                <div className='mb-3'>
                                    <label htmlFor='password'><strong>Password</strong></label>
                                    <input type='password' placeholder='Enter Password' name='password'
                                        onChange={handleInput} className='form-control rounded-2 w-100' />
                                    {errors.password && <span className='text-danger'>{errors.password}</span>}
                                </div>
                            </div>

                            <div className='py-3'>
                                <button type='submit' className='btn btn-primary  w-100'><strong>Log In</strong></button>

                            </div>

                            <Link to="/signup" className='btn btn-default border w-100 bg-light text-decoration-none'><strong>Sign Up</strong></Link>

                        </form>
                    </div>

                </Col>
                <Col className='col'>

                    <div className='container text-center' >
                        <img src={friends_login} class='img-fluid' alt=''></img>
                    </div>
                </Col>
            </Row>
        </>
    )
}

export default Login