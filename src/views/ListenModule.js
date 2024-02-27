import { Row, Col } from 'reactstrap';
import './Starter.css';
import React, { useEffect, useState } from 'react';
import AudioPlayer from 'react-audio-player';
import audio from '../assets/audios/LE_listening_A1_Meeting_people_at_a_dinner.mp3'
import ShowPoints from './ShowPoints';
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import trophy_img from '../assets/medals/trophy.png'
import cone_image from '../assets/medals/cone_left.png'
import {useProgress} from '../providers/progressContext'
import ProgressTimeLine from '../components/ProgressTimeLine';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons'
import avatar from '../assets/avatars/image 1.png'
import Swal from 'sweetalert2'
export default function VideoModule() {
    const { 
        handleNext,
        isProgressModalVisible,
        handleProgressModalVisibility,
        setCurrentStep
       } = useProgress();
    const questions = [
        {
            questionText: 'Julian remembers Alyssa.',
            answerOptions: [
                { answerText: 'True', isCorrect: false },
                { answerText: 'False', isCorrect: true },
            ],
            hint: 'Try Again!',
        },
        {
            questionText: "Ben is Alyssa's brother.",
            answerOptions: [
                { answerText: 'True', isCorrect: true },
                { answerText: 'False', isCorrect: false },
            ],
            hint: 'Try Again!',
        },
        {
            questionText: "They were at Ben's wedding.",
            answerOptions: [
                { answerText: 'True', isCorrect: true },
                { answerText: 'False', isCorrect: false },
            ],
            hint: 'Try Again!',
        },
        {
            questionText: 'The wedding was in February.',
            answerOptions: [
                { answerText: 'True', isCorrect: false },
                { answerText: 'False', isCorrect: true },
            ],
            hint: 'Try Again!',
        },
        {
            questionText: 'Julian says the wrong name.',
            answerOptions: [
                { answerText: 'True', isCorrect: true },
                { answerText: 'False', isCorrect: false },
            ],
            hint: 'Try Again!',
        }, {
            questionText: "Alyssa doesn't want a drink",
            answerOptions: [
                { answerText: 'True', isCorrect: false },
                { answerText: 'False', isCorrect: true },
            ],
            hint: 'Try Again!',
        },


    ];


    //Show Video




    //quiz
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [showHint, setShowHint] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    

    const handleAnswerOptionClick = (isCorrect) => {

        setSelectedAnswer(isCorrect);
        if (`Clicked: ${isCorrect ? setScore(score + 100) : setScore(score - 25)}`);
        if (isCorrect) {

            setShowHint(false)
           
            setShowSuccess(true)
        } else {
            setScore(score - 50);
            setShowHint(true)
            showHintPopup()
            handleShow(true)
        }

    };


    //Next Question
    const handleSubmitAnswer = () => {
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
            setSelectedAnswer(null);
            setShowHint(false)
            setShowHint(false)
            setShowSuccess(false)
        } else {
            setShowScore(true)
            showCustomAlert()
            setShowHint(false)
            setShowSuccess(false)

        }
    }




    const getColorBasedOnCondition = (isCorrect, index) => {
        // Your logic to determine the color based on the item value
        // For example, conditionally return 'red' or 'blue'

        if (selectedAnswer === null) {
            return ''; // Default color if no answer is selected
        }
        else {
            if (isCorrect) {
                return isCorrect === !selectedAnswer ? index === 'red' : 'green';
            }
            else {
                return isCorrect === selectedAnswer ? index === 'green' : 'red'
            }

        }
    };

    //submit answers
    const navigate = useNavigate();
    const submitResult = async () => {
        let x = score;
        let y = currentScore;
        let z = x + y;
        const values = {
            name: localStorage.getItem("inputValue"),
            points: z,
        }
        await axios.post('http://localhost:3002/submit', values)
            .then(res => {
                if (res.status === 200) {
                    console.log(res)
                    //window.location.reload();
                    getLatesetPoints()
                    navigate('/travelsrilanka')
                }




            })
            .catch(err => console.log(err));
    }


    //get current Points
    useEffect(() => {
        setCurrentStep(3)
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

                console.log(res.data[0].points)
            })
            .catch(err => console.log(err));
    }



    //reset Quiz

    const resetQuiz = () => {
        setCurrentQuestion(0);
        setScore(0);
        setSelectedAnswer(null);
        setShowScore(false);
    }


    //pop-up form
    const [showModal, setShowModal] = useState(false);

    const handleShow = () => setShowModal(true);
    const handleClose = () => setShowModal(false);

    const showCustomAlert = () => {
          //Update Local Storage for road Map
    localStorage.setItem("1", 2);
        Swal.fire({
          html: `
           
          <div className='score-section p-3'>
          <h4 class="text-success bg-white rounded-4"><strong>+${score}xp</strong></h4>
          <h4 class="text-warning bg-white rounded-4">MEETUP WITH FRIENDS<br></br> LISTENING MODULE COMPLETED!!!</h4>
      </div>


      <div className='col'>
          <img src="${trophy_img}" style={{ height: "50%" }} alt=''></img>
      </div>

      
           
          `,
        }).then((result) => {
            if (result.isConfirmed) {
              handleNext()
              handleProgressModalVisibility()
              console.log('Modal is confirmed or closed');
            } else if (result.dismiss) {
                handleNext()
                handleProgressModalVisibility()
            }
          });
        };
    
    //Show level Success Message

    const showHintPopup = () => {

        Swal.fire({

            showCloseButton: true,
            showConfirmButton: false,
            background: '', // Background color for the blurred overlay
            customClass: {
                popup: 'rounded-popup rounded-5',
                closeButton: 'custom-close-button',
            },
            onOpen: (popup) => {
                // Add custom styling to the popup container
                const container = popup.querySelector('.rounded-popup');
                container.style.display = 'flex';
                container.style.alignItems = 'center';
                container.style.justifyContent = 'center';

                // Add custom styling to the image
                const image = popup.querySelector('.swal2-image');
                image.style.borderRadius = '50%';
                image.style.marginRight = '20px';

                // Add custom styling to the content
                const content = popup.querySelector('.swal2-content');
                content.style.flexGrow = '1';
            },
            html: `
              <div style="display: flex; align-items: center;">
                <div>
                  <img src="${avatar}" alt="Custom image" style="border-radius: 50%; width: 100px; height: 100px; margin-right: 20px;"/>
                </div>
                <div>
                  <h2>Let's Try Again!</h2>
                
                </div>
              </div>`
            ,
        });
    }

    return (
        <>


<div class="row">
            <div class="col-md-12">
                    <h2 style={{fontFamily: 'Comic Sans MS, cursive'}} className='title-text text-center'>Meeting People at a Dinner</h2>

                </div>
                <div class="col-md-6 p-3 d-flex align-items-center">
                    
                    <p class="text-uppercase fs-6">Listening Module</p>
                </div>
                
                <div class="col-md-6 d-flex justify-content-end">
                    <ShowPoints childPoints={currentScore} parentToChild={localStorage.getItem("inputValue")} />
                </div>
                {/* //  <LocalStorage parentToChild={location.state.name} /> */}
            </div>
            <div className='container p-5'>



                {/* <div className='row justify-content-around m-3 p-5' >
                    <AudioPlayer
                        src={audio}
                        autoPlay
                        controls
                    />
                </div> */}

            </div>

            <Row className='row justify-content-around '>
                <Col >
                    <div className='border border-info rounded border-3'>


                        <div className='row justify-content-around m-3 p-5' >
                            <AudioPlayer
                                src={audio}
                                autoPlay
                                controls
                            />
                        </div>
                    </div>
                </Col>

                <Col className='col-5'>
                    <div className='container text-center'>
                        {showScore ? (
                            <>
{/* 
                                <div className='score-section p-3'>
                                    <h4 class="text-success bg-white rounded-4"><strong>+{score}xp</strong></h4>
                                    <h4 class="text-warning bg-white rounded-4">MEETUP WITH FRIENDS<br></br> LISTENING MODULE COMPLETED!!!</h4>
                                </div>


                                <div className='col'>
                                    <img src={trophy_img} style={{ height: "50%" }} alt=''></img>
                                </div> */}

                                <div className=''>
                                <div className='py-1'>
                                    <button type='button' className='btn btn-outline-info w-50' onClick={() => { resetQuiz() }}>
                                        RESET
                                    </button>
                                </div>
                                <div>
                                    <button type='button' className='btn btn-outline-info w-50' onClick={() => { submitResult() }}>
                                        GO TO NEXT
                                    </button>
                                </div>
                                </div>
                            </>
                        ) : (
                            <>


                                <div className='question-section'>
                                    <div className='question-count  '>
                                        <span className='text rounded-2 p-2'>Question {currentQuestion + 1}/{questions.length}</span>
                                    </div>
                                    <div className='question-text rounded-3'>{questions[currentQuestion].questionText}</div>
                                </div>
                                {/* <div className='answer-section '>
                                    {questions[currentQuestion].answerOptions.map((answerOption, index) => (
                                        <button key={index} type="button" className={`btn btn-primary rounded-4  w-75 py-1 m-1 ${getColorBasedOnCondition(answerOption.isCorrect, index)} `}
                                            onClick={() => handleAnswerOptionClick(answerOption.isCorrect, index)}>{answerOption.answerText}</button>
                                    ))}
                                </div> */}


                                <div className='answer-section '>
                                    {questions[currentQuestion].answerOptions.map((answerOption, index) => (
                                        <button
                                            key={index}
                                            type="button"
                                            className={` btn-primary rounded-4 border border-info clickable  rounded-4 w-75 py-1 m-1 answer-button ${getColorBasedOnCondition(answerOption.isCorrect, index, answerOption.answerText)}`}
                                            onClick={() => handleAnswerOptionClick(answerOption.isCorrect, index)}
                                        >
                                            {/* Render icon based on answer text */}
                                            {answerOption.answerText === 'True' ? (
                                                <FontAwesomeIcon icon={faCheck} className="icon bg" style={{color:'green'}} />
                                            ) : (
                                                <FontAwesomeIcon icon={faTimes} className="icon"  style={{color:'red'}}/>
                                            )}
                                            {/* {answerOption.answerText} */}
                                        </button>
                                    ))}

                                </div>


                                <div class="col-md-6 offset-md-3">
                                    <button type='button' className='btn btn-outline-primary rounded-2 w-50 py-1 m-5' onClick={() => handleSubmitAnswer()} >NEXT</button>
                                </div>
                            </>
                        )}



                        {


                            showHint ? (
                                <>
                                    {/* <div className='label-fail rounded-4'>
                                        <div className='question-text text-white rounded-5 p-1'><h5>{questions[currentQuestion].hint}</h5></div>
                                    </div> */}


                                </>
                            ) : (<></>)}



                        {showSuccess ? (
                            <>
{/* 
                                <div className='label-success rounded-4'>
                                    <div className='question-text text-white rounded-5 p-1'><h5>Awesome ! That's correct.</h5></div>
                                </div> */}
                            </>
                        ) : (<></>)
                        }


                    </div>
                </Col>
            </Row>
            {isProgressModalVisible && <ProgressTimeLine/>}    

        </>
    );
}


