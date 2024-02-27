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
import notice from "../assets/avatars/notice.jpg";
export default function EnorollingCourses() {
    const { 
        handleNext,
        isProgressModalVisible,
        handleProgressModalVisibility,
        setCurrentStep
       } = useProgress();

    const questions = [
        {
            questionText: "1. What is the main focus of the Software Engineering course?",
            answerOptions: [
                { answerText: 'Developing hardware systems', isCorrect: false },
                { answerText: 'Designing and developing large-scale software systems', isCorrect: true },
                { answerText: 'Introduction to database management', isCorrect: false },
                { answerText: 'Overview of programming languages', isCorrect: false },
            ],
            hint: "Hint: Look for the key terms that describe the content of the Software Engineering course.",
        },
        {
            questionText: "2. Which language is emphasized in the Database Management Systems course?",
            answerOptions: [
                { answerText: 'Java', isCorrect: false },
                { answerText: 'C++', isCorrect: false },
                { answerText: 'SQL', isCorrect: true },
                { answerText: 'Python', isCorrect: false },
            ],
            hint: 'Hint: Pay attention to the specific language mentioned for accessing and manipulating data in a relational database.',
        },
        {
            questionText: "3. What is the primary focus of the Database Management Systems course?",
            answerOptions: [
                { answerText: 'Developing software systems', isCorrect: false },
                { answerText: 'Relational model and SQL', isCorrect: true },
                { answerText: 'Hardware maintenance', isCorrect: false },
                { answerText: 'Overview of programming principles', isCorrect: false },
            ],
            hint: 'Hint: Identify the core topics mentioned in relation to database management systems.',
        },
        {
            questionText: "4. What does the Software Engineering course cover in terms of software systems?",
            answerOptions: [
                { answerText: 'Small-scale software development', isCorrect: false },
                { answerText: 'Developing only', isCorrect: false },
                { answerText: 'Designing, developing, and maintaining large-scale software systems', isCorrect: true },
                { answerText: 'Designing and maintaining large-scale hardware systems', isCorrect: false },
            ],
            hint: 'Hint: Focus on the range of activities related to software systems in the course description.',
        },
        {
            questionText: "5. Which of the following is NOT mentioned as a focus of the Database Management Systems course?",
            answerOptions: [
                { answerText: 'Relational model', isCorrect: false },
                { answerText: 'SQL', isCorrect: false },
                { answerText: 'Java programming', isCorrect: true },
                { answerText: 'Accessing and manipulating data', isCorrect: false },
            ],
            hint: "Hint: Consider a term that reflects the student's current academic activitHint: Eliminate the option that is not mentioned in the context of the course content.",
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


    const goToQuiz = () => {
        setShowVideo(false)
    }



    const handleAnswerOptionClick = (isCorrect) => {

        setSelectedAnswer(isCorrect);
        if (`Clicked: ${isCorrect ? setScore(score + 125) : setScore(score - 30)}`);
        if (isCorrect) {

            setShowHint(false)
            setShowSuccess(true)
        } else {
            setScore(score - 50);
            // setShowHint(true)
            showHintPopup()
        }

    };


    //Next Question
    const handleSubmitAnswer = () => {
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
            setSelectedAnswer(null);
            setShowHint(false)
            setShowSuccess(false)
        } else {
            setShowScore(true)
            showCustomAlert()
            setShowHint(false)
            setShowSuccess(false)
            //   levelSuccess()
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
                    navigate('/attendinglectures')

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
        setCurrentStep(6)
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
    localStorage.setItem("3", 1);
        Swal.fire({
            html: `
           
          <div className='score-section p-3'>
          <h4 class="text-success bg-white rounded-4"><strong>+${score}xp</strong></h4>
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
            background: '#fff', // Background color for the blurred overlay
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
                        <p class="text-uppercase fs-3">2. Enrolling in courses </p>
                    </div>
                    
                    <div className="col-md-6 d-flex justify-content-end">
                        {/* // <ShowPoints parentToChild={localStorage.getItem("inputValue")} /> */}
                        <ShowPoints childPoints={currentScore} parentToChild={localStorage.getItem("inputValue")} />
                    </div>
                    {/* //  <LocalStorage parentToChild={location.state.name} /> */}
                </div>

                <Row className='justify-content-center'>
                    <Col className='col-10'>

                        <div className='container justify-content-center' style={{ overflowY: 'auto', maxHeight: '300px' }}>
                            <div className='container' >
                                <img src={notice} style={{ width: "100%" }} alt=''></img>

                                


                            </div>

                        </div>
                    </Col>
                </Row>

                 {/* add a break here to separate the content section and the question section */}
                
                <Row className='row justify-content-around question-container  '>


                    <Col className='col'>
                        <div className='container text-center'>
                            {showScore ? (
                                <>
                                    {/* <div className='score-section p-3'>
                                        <h4 class="text-success bg-white rounded-4"><strong>+{score}xp</strong></h4>
                                        <h4 class="text-warning bg-white rounded-4">A DAY AT THE UNIVERISTY<br></br>ENROLLING IN COURSES!!!</h4>
                                    </div>
      
                                    <div className='col'>
                                    <img src={trophy_img} style={{ height: "50%" }} alt=''></img>
                                </div> */}


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

                                </>
                            ) : (
                                <>

                                    <div className='question-section'>
                                        <div className='question-count  '>
                                            <span className='text bg-light-info rounded-2 p-2'>Question {currentQuestion + 1}/{questions.length}</span>
                                        </div>
                                        <div className='question-text  bg-white rounded-3'>{questions[currentQuestion].questionText}</div>
                                    </div>
                                    <div className='answer-section '>
                                        {questions[currentQuestion].answerOptions.map((answerOption, index) => (
                                            <button key={index} type="button" className={`btn btn-primary rounded-4  w-75 py-1 m-1 ${getColorBasedOnCondition(answerOption.isCorrect, index)} `}
                                                onClick={() => handleAnswerOptionClick(answerOption.isCorrect, index)}>{answerOption.answerText}</button>
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
                                        <div className='label-fail rounded-4'>
                                            <div className='question-text text-white rounded-5 p-3'><h5>{questions[currentQuestion].hint}</h5></div>
                                        </div>


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


