import { Row, Col } from 'reactstrap';
import './Starter.css';
import React, { useState } from 'react';
import YoutubeEmbed from './YoutubeEmbed';
import ShowPoints from './ShowPoints';
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import trophy_img from '../assets/medals/trophy.png'
import cone_image from '../assets/medals/cone_left.png'
import { useEffect } from 'react';
import friends_ucsc from '../assets/images/bg/friends_ucsc.png'
import avatar from '../assets/avatars/avatar3.png'
import Swal from 'sweetalert2'
import {useProgress} from '../providers/progressContext'
import ProgressTimeLine from '../components/ProgressTimeLine';
import forum from "../assets/avatars/forum.jpg";
export default function DiscussionGroups() {
    const { 
        handleNext,
        isProgressModalVisible,
        handleProgressModalVisibility,
        setCurrentStep
       } = useProgress();

    const questions = [
        {
            questionText: (<div>
                <p>Hi there, </p>
                <p>_______________</p>
            </div>),
            answerOptions: [
                { answerText: 'a)	I don’t know about this', isCorrect: false },
                { answerText: 'b)	Never heard about this', isCorrect: false },
                { answerText: 'c)	I’m happy to help', isCorrect: true },
                { answerText: 'd)	I can help but I won’t', isCorrect: false },
            ],
            hint: "Hint: This is a common phrase used to express willingness to assist.",
            finalAnswer: (<div>
                <p>Hi there, </p>
                <p><mark>I’m happy to help</mark></p>
            </div>)
        },
        {
            questionText: "Here's a ___________ of the basics.",
            answerOptions: [
                { answerText: 'a)	Audio clip', isCorrect: false },
                { answerText: 'b)	Video footage', isCorrect: false },
                { answerText: 'c)	Breakthrough', isCorrect: false },
                { answerText: 'd)	Breakdown ', isCorrect: true },
            ],
            hint: 'Hint: This word indicates providing a detailed explanation or analysis',
            finalAnswer: (<div>
                <p>Here's a <mark>Breakdown</mark> of the basics</p>
            </div>)
        },
        {
            questionText: (
                <div>
                    <p>
                        "First concept: What is a use case?
                        A use case represents a sequence of actions that a user performs to ____________ a specific goal using the system.
                        "
                    </p>
                </div>),
            answerOptions: [
                { answerText: 'a)	Success', isCorrect: false },
                { answerText: 'b)	Win', isCorrect: false },
                { answerText: 'c)	Achieve', isCorrect: true },
                { answerText: 'd)	Present ', isCorrect: false },
            ],
            hint: 'Hint: Consider a term related to successfully reaching an aim',
            finalAnswer: (<div>
                <p>First concept: What is a use case?
                    A use case represents a sequence of actions that a user performs to <mark>Achieve</mark> a specific goal using the system.</p>
            </div>)
        },
        {
            questionText: "It describes the ____________ between the user and the system from the user's point of view.",
            answerOptions: [
                { answerText: 'a)	Interaction', isCorrect: true },
                { answerText: 'b)	Isolation', isCorrect: false },
                { answerText: 'c)	Separation', isCorrect: false },
                { answerText: 'd)	Modification ', isCorrect: false },
            ],
            hint: 'Hint: Think of a term that describes the communication between two parties',
            finalAnswer: (<div>
                <p>
                    It describes the <mark>Interaction</mark> between the user and the system from the user's point of view.
                </p>
            </div>)
        },
        {
            questionText: (
                <div>
                    <p>
                        Second concept: What are actors?
                        Actors are ____________ entities that interact with the system. They can be users, other systems, or external devices.

                    </p>
                </div>
            ),
            answerOptions: [
                { answerText: 'a)	Beautiful', isCorrect: false },
                { answerText: 'b)	External', isCorrect: false },
                { answerText: 'c)	Invisible', isCorrect: true },
                { answerText: 'd)	Intangible ', isCorrect: false },
            ],
            hint: 'Hint: This adjective describes the entities that are situated outside of the system, as further explained by the given examples.',
            finalAnswer: (
                <div>
                    <p> Second concept: What are actors?
                        Actors are <mark>Invisible</mark> entities that interact with the system. They can be users, other systems, or external devices.

                    </p>
                </div>
            )
        },



    ];







    //quiz
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [showHint, setShowHint] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [showVideo, setShowVideo] = useState(true)
    const [showFinalAnswer, setShowFinalAnswer] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const goToQuiz = () => {
        setShowVideo(false)
    }



    const handleAnswerOptionClick = (isCorrect) => {

        setSelectedAnswer(isCorrect);
        if (`Clicked: ${isCorrect ? setScore(score + 125) : setScore(score - 30)}`);
        if (isCorrect) {

            setShowHint(false)
            setShowSuccess(true)
            setIsHovered(false)
            setShowFinalAnswer(true)
        } else {
            setScore(score - 50);
            setShowHint(true)
            showHintPopup()
            setIsHovered(false)
            setShowFinalAnswer(false)
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
            setShowFinalAnswer(false)
        } else {
            setShowScore(true)
            showCustomAlert()
            setShowHint(false)
            setShowSuccess(false)
            setShowFinalAnswer(false)

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


    //Submit resultss

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
                    navigate('/extraactivities')

                }




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

    //get current Points
    useEffect(() => {
        setCurrentStep(8)
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
                //   navigate('/listenmodule')
                console.log(res.data[0].points)
            })
            .catch(err => console.log(err));
    }


    const showCustomAlert = () => {
           //Update Local Storage for road Map
    localStorage.setItem("3", 3);
        Swal.fire({
            html: `
            <div className='score-section p-3'>
            <h4 class="text-success bg-white rounded-4">+${score}xp</h4>
            <h4 class="text-warning bg-white rounded-4">A DAY AT THE UNIVERISTY<br></br>ENROLLING IN COURSES!!!</h4>
        </div>
        <div className='col'>
            <img src="${trophy_img}" style={{ height: "50%" }} alt=''></img>
        </div> 
          `,
        }).then((result) => {
            if (result.isConfirmed) {
              handleNext()
              handleProgressModalVisibility()
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
              <h2>Let's make another attempt!</h2>
              <div>
                <img src="${avatar}" alt="Custom image" style="border-radius: 25%; width: 100px; height: 100px; margin-bottom: 20px"/>
              </div>
             <p>${questions[currentQuestion].hint}</p>
            </div>
          </div>`,
        });
    }


    return (
        <> <>

            <div>
                <div className="row ">

                <div className="col-md-12">
                        <h2 style={{fontFamily: 'Comic Sans MS, cursive'}} className='title-text text-center'>A Day at the University</h2>


                    </div>
                    <div className="col-md-6 p-3 d-flex align-items-center">
                        <p class="text-uppercase fs-3">4. Discussion group </p>
                    </div>
                    
                    <div className="col-md-6 d-flex justify-content-end">
                        {/* // <ShowPoints parentToChild={localStorage.getItem("inputValue")} /> */}
                        <ShowPoints childPoints={currentScore} parentToChild={localStorage.getItem("inputValue")} />
                    </div>
                    {/* //  <LocalStorage parentToChild={location.state.name} /> */}
                </div>
                <Row className='justify-content-center py-5' style={{ overflowY: 'auto', maxHeight: '300px' }}>
                    <Col className='col-10'>

                        <div className='container justify-content-center' style={{ width: "100%", height: "100%" }}>
                            <div className='container justify-content-center' >
                            <img src={forum} style={{ width: "70%", alignItems: "center", marginLeft: "20%" }} alt=''></img>



                            </div>

                        </div>
                    </Col>
                </Row>

                
                <Row className='row justify-content-around '>

                <h3><strong>Drag the correct answer and Drop it on the question area</strong></h3>
                    <Col className='col'>
                        <div className='container text-center question-container '>
                            {showScore ? (
                                <>
                                    {/* <div className='score-section p-3'>
                                        <h4 class="text-success bg-white rounded-4">+{score}xp</h4>
                                        <h4 class="text-warning bg-white rounded-4">A DAY AT THE UNIVERISTY<br></br>ENROLLING IN COURSES!!!</h4>
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
                                        <div className='py-1'>
                                            <button type='button' className='btn btn-outline-info w-50' onClick={() => { submitResult() }}>
                                                GO TO NEXT
                                            </button>
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div>
                                        {showFinalAnswer ? (
                                            <>


                                                <div className='question-section question-container '>
                                                    <div className='question-count  '>
                                                        <span className='text bg-light-info rounded-2 p-2'>Question {currentQuestion + 1}/{questions.length}</span>
                                                    </div>
                                                    {isHovered ? (
                                                        <>
                                                            <div className="hover-message"><strong>Drop Your Answers Here</strong></div>
                                                        </>

                                                    ) :
                                                        (<>
                                                            <div className='question-text  bg-white rounded-3'>{questions[currentQuestion].finalAnswer}</div></>)


                                                    }

                                                </div>

                                                <div className='answer-section '>
                                                    {questions[currentQuestion].answerOptions.map((answerOption, index) => (
                                                        <button draggable key={index} type="button" className={`btn btn-primary rounded-4  w-75 py-1 m-1 ${getColorBasedOnCondition(answerOption.isCorrect, index)} `}
                                                            onDrag={() => setIsHovered(true)}
                                                            onDragLeave={() => setIsHovered(false)} onDragEnd={(e) => handleAnswerOptionClick(answerOption.isCorrect, index)} >{answerOption.answerText}</button>
                                                    ))}
                                                </div>
                                                <div class="col-md-6 offset-md-3">
                                                    <button type='button' className='btn btn-outline-primary rounded-2 w-50 py-1 m-5' onClick={() => handleSubmitAnswer()} >NEXT</button>
                                                </div>
                                            </>
                                        ) : (
                                            <>


                                                <div className='question-section' >
                                                    <div className='question-count  '>
                                                        <span className='text bg-light-info rounded-2 p-2'>Question {currentQuestion + 1}/{questions.length}</span>
                                                    </div>
                                                    {isHovered ? (
                                                        <>
                                                            <div className="hover-message"><strong>Drop Your Answers Here</strong></div>
                                                        </>

                                                    ) :
                                                        (<>
                                                            <div className='question-text  bg-white rounded-3'>{questions[currentQuestion].questionText}</div></>)


                                                    }

                                                </div>

                                                <div className='answer-section '>
                                                    {questions[currentQuestion].answerOptions.map((answerOption, index) => (
                                                        <button draggable key={index} type="button" className={`btn btn-primary rounded-4  w-75 py-1 m-1 ${getColorBasedOnCondition(answerOption.isCorrect, index)} `}
                                                            onDrag={() => setIsHovered(true)}
                                                            onDragLeave={() => setIsHovered(false)} onDragEnd={(e) => handleAnswerOptionClick(answerOption.isCorrect, index)} >{answerOption.answerText}</button>
                                                    ))}
                                                </div>
                                                <div class="col-md-6 offset-md-3">
                                                    <button type='button' className='btn btn-outline-primary rounded-2 w-50 py-1 m-5' onClick={() => handleSubmitAnswer()} >NEXT</button>
                                                </div>
                                            </>
                                        )}
                                    </div>
                                </>
                            )}



                            {


                                showHint ? (
                                    <>
                                        {/* <div className='label-fail rounded-4'>
                                            <div className='question-text text-white rounded-5 p-3'><h5>{questions[currentQuestion].hint}</h5></div>
                                        </div> */}


                                    </>
                                ) : (<></>)}



                            {showSuccess ? (
                                <>

                                    {/* <div className='label-success rounded-4'>
                                        <div className='question-text text-white rounded-5 p-3'><strong>Awesome ! That's correct.</strong></div>
                                    </div> */}
                                </>
                            ) : (<></>)
                            }

                        </div>
                    </Col>

                </Row >
                {isProgressModalVisible && <ProgressTimeLine/>}   
            </div></>
        </>
    );
}


