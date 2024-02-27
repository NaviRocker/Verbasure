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
import avatar from '../assets/avatars/image 32.png'
import Swal from 'sweetalert2'
import { useDrag, useDrop } from 'react-dnd';
import {useProgress} from '../providers/progressContext'
import ProgressTimeLine from '../components/ProgressTimeLine';
export default function DayAtUniversity() {
    const { 
        handleNext,
        isProgressModalVisible,
        handleProgressModalVisibility,
        setCurrentStep
       } = useProgress();

    const questions = [
        {
            questionText: (<div>
                <p>Student 1: Hi, I'm Sahan. I'm from Galle. What about you?</p>
                <p>Student 2: Hi Sahan, I'm Shivani.,____________ It's nice to meet you!</p>
            </div>),
            answerOptions: [
                { answerText: 'a)	Glad to meet you', isCorrect: false },
                { answerText: 'b)	Good to know you', isCorrect: false },
                { answerText: 'c)	I’m from Vavuniya', isCorrect: true },
                { answerText: 'd)	I’m not from Colombo', isCorrect: false },
            ],
            hint: "Hint: It’s likely for Shivani to introduce herself in the same manner as Sahan.",
            finalAnswer: (<div>
                <p>Student 1: Hi, I'm Sahan. I'm from Galle. What about you?</p>
                <p>Student 2: Hi Sahan, I'm Shivani.<mark> I’m from Vavuniya</mark>. It's nice to meet you!</p>
            </div>)
        },
        {
            questionText: (<div>
                <p>Sahan : How was your first day at university?</p>
                <p>Shivani : Finding my way around was __________________ as it’s only the first day. But overall, it was exciting. How about you, Sahan?</p>
            </div>),
            answerOptions: [
                { answerText: 'a)	Easy as a piece of cake', isCorrect: false },
                { answerText: 'b)	Very exciting', isCorrect: false },
                { answerText: 'c)	Could not be more easier', isCorrect: false },
                { answerText: 'd)	A bit challenging ', isCorrect: true },
            ],
            hint: 'Hint: Since Shivani is new to the campus, it’s difficult for her to find her way around. Consider a phrase that indicates some difficulty.',
            finalAnswer: (<div>
                <p>Sahan : How was your first day at university?</p>
                <p>Shivani : Finding my way around was <mark> a bit challenging </mark>as it’s only the first day. But overall, it was exciting. How about you, Sahan?</p>
            </div>),
        },
        {
            questionText: "Student 1: Everyone seems _______________, and I'm looking forward to exploring more. What are you planning to study?",
            answerOptions: [
                { answerText: 'a)	Very distant', isCorrect: false },
                { answerText: 'b)	Friendly ', isCorrect: true },
                { answerText: 'c)	Cold and harsh', isCorrect: false },
                { answerText: 'd)	Good looking ', isCorrect: false },
            ],
            hint: 'Hint: Think of a positive word that describes the people you met on your first day',
            finalAnswer: (<div>
                <p>Sahan : Everyone seems <mark>Friendly</mark> and I'm looking forward to exploring more. What are you planning to study?</p>
            </div>),
        },
        {
            questionText: "Shivani : I'm ___________ in Computer Science. ",
            answerOptions: [
                { answerText: 'a)	Majoring', isCorrect: true },
                { answerText: 'b)	Thinking', isCorrect: false },
                { answerText: 'c)	Going ', isCorrect: false },
                { answerText: 'd)	Selecting ', isCorrect: false },
            ],
            hint: 'Hint: Shivani has selected Computer Science as her main field of study. Think of a verb that describes selecting a main course of study.',
            finalAnswer: (<div>
                <p>Shivani : I'm <mark>Majoring</mark> in Computer Science.</p>
            </div>),
        },
        {
            questionText: "Sahan : That's cool! I'm ______________ Business Administration. ",
            answerOptions: [
                { answerText: 'a)	Planning', isCorrect: false },
                { answerText: 'b)	Studying ', isCorrect: true },
                { answerText: 'c)	Taking', isCorrect: false },
                { answerText: 'd)	Giving ', isCorrect: false },
            ],
            hint: "Hint: Consider a term that reflects the student's current academic activity",
            finalAnswer: (<div>
                <p>Sahan : That's cool! I'm <mark>Studying</mark> Business Administration.</p>
            </div>),
        },
        {
            questionText: "Shivani : Nice choice! By the way, do you know of any good places to ____________  around here? A canteen maybe?",
            answerOptions: [
                { answerText: 'a)	Take a photo', isCorrect: false },
                { answerText: 'b)	Wash my hands', isCorrect: false },
                { answerText: 'c)	Grab a bite', isCorrect: true },
                { answerText: 'd)	Buy a book', isCorrect: false },
            ],
            hint: "Hint: Consider a phrase that suggests getting food together as Shivani is asking for a canteen.",
            finalAnswer: (<div>
                <p>Shivani : Nice choice! By the way, do you know of any good places to <mark>Grab a bite</mark> around here? A canteen maybe?</p>
            </div>),
        },
        {
            questionText: "Sahan : I heard there is a _____________. We could check that out together after our next class.",
            answerOptions: [
                { answerText: 'a)	Washroom', isCorrect: false },
                { answerText: 'b)	Bookshop', isCorrect: false },
                { answerText: 'c)	Computer lab', isCorrect: false },
                { answerText: 'd)	Cafeteria', isCorrect: true },
            ],
            hint: "Hint: As Shivani asked for a place to grab a bite, this place should be somewhere that provides food.",
            finalAnswer: (<div>
                <p>Sahan : I heard there is a <mark>Cafeteria</mark>. We could check that out together after our next class.</p>
            </div>),
        },
        {
            questionText: (<div>
                <p> Shivani :  Sahan! Let’s go to the cafeteria right now.</p>
                <p> Sahan  : ______________________________________</p>
            </div>),
            answerOptions: [
                { answerText: 'a)	That’s too bad', isCorrect: false },
                { answerText: 'b)	I don’t like it', isCorrect: false },
                { answerText: 'c)	Sounds like a plan', isCorrect: true },
                { answerText: 'd)	I have a better idea', isCorrect: false },
            ],
            hint: "Hint: Think of a positive and enthusiastic way to agree with the proposed plan",
            finalAnswer: (<div>
                <p> Shivani :  Sahan! Let’s go to the cafeteria right now.</p>
                <p> Sahan : <mark>Sounds like a plan</mark></p>
            </div>
            ),
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
            setShowFinalAnswer(true)
            setIsHovered(false)

        } else {
            setScore(score - 50);
            //  setShowHint(true)
            showHintPopup()
            setShowFinalAnswer(false)
            setIsHovered(false)
        }

    };
    const [dragAndDropQuest, setDragAndDropQuest] = useState(false)
    

    //Next Question
    const handleSubmitAnswer = () => {
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
            setSelectedAnswer(null);
            setShowHint(false)
            setShowSuccess(false)
            setShowFinalAnswer(false)
        } 
    
        else {
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
                    navigate('/enrollingincourses')
                }




            })
            .catch(err => console.log(err));
    }
    const handleDragOver = (e) => {
        e.preventDefault();
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
        setCurrentStep(5)
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

    const showCustomAlert = () => {
         //Update Local Storage for road Map
    localStorage.setItem("3", 0);
        Swal.fire({
            html: `
           
          <div className='score-section p-3'>
          <h4 class="text-success bg-white rounded-4"><strong>+${score}xp</strong></h4>
          <h4 class="text-warning bg-white rounded-4"><strong>A DAY AT THE UNIVERISTY<br></br>ARRIVAL AT UNIVERSITY!!!</strong></h4>
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
                        <p class="text-uppercase fs-3">1. Arrival at University </p>
                    </div>
                    
                    <div className="col-md-6 d-flex justify-content-end">
                        {/* // <ShowPoints parentToChild={localStorage.getItem("inputValue")} /> */}
                        <ShowPoints childPoints={currentScore} parentToChild={localStorage.getItem("inputValue")} />
                    </div>
                    {/* //  <LocalStorage parentToChild={location.state.name} /> */}
                </div>
                <Row className='row justify-content-around  '>

                    
                    <Col className='col'>
                   
                        <div className='container text-center'>
                            {showScore ? (
                                <>
                                    {/* <div className='score-section p-3'>
                                        <h4 class="text-success bg-white rounded-4"><strong>+{score}xp</strong></h4>
                                        <h4 class="text-warning bg-white rounded-4"><strong>A DAY AT THE UNIVERISTY<br></br>ARRIVAL AT UNIVERSITY!!!</strong></h4>
                                    </div>
  
                                    <div className='col'>
                                    <img src={trophy_img} style={{ height: "50%" }} alt=''></img>
                                </div>
 */}
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
                                <div>
                                     <h3><strong>Drag the correct answer and Drop it on the question area</strong></h3>
                                    {showFinalAnswer ? (
                                        <>


                                            <div className='question-section'>
                                                <div className='question-count  '>
                                                    <span className='text rounded-2 p-2'>Question {currentQuestion + 1}/{questions.length}</span>
                                                </div>
                                                {isHovered ?(
                                                    <>
                                                     <div className="hover-message"><strong>Drop Your Answers Here</strong></div>
                                                    </>

                                                ):
                                                (<>
                                                  <div className='text rounded-2 p-2'>{questions[currentQuestion].finalAnswer}</div></>)

                                                
                                            }
                                               
                                            </div>

                                            <div className='answer-section '>
                                                {questions[currentQuestion].answerOptions.map((answerOption, index) => (
                                                    <button draggable key={index} type="button" className={`btn btn-primary align-content-left rounded-4  w-50 py-1 m-1 ${getColorBasedOnCondition(answerOption.isCorrect, index)} `}
                                                    onDrag={() => setIsHovered(true)}
                                                    onDragLeave={() => setIsHovered(false)}   onDragEnd={(e) => handleAnswerOptionClick(answerOption.isCorrect, index)} >{answerOption.answerText}</button>
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
                                                    <span className='text rounded-2 p-2'>Question {currentQuestion + 1}/{questions.length}</span>
                                                </div>
                                                {isHovered ?(
                                                    <>
                                                    <div className="hover-message"><strong>Drop Your Answers Here</strong></div>
                                                    </>

                                                ):
                                                (<>
                                                  <div className='question-text  bg-white rounded-3'>{questions[currentQuestion].questionText}</div></>)

                                                
                                            }
                                               
                                            </div>

                                            <div className='answer-section '>
                                                {questions[currentQuestion].answerOptions.map((answerOption, index) => (
                                                    <button draggable key={index} type="button" className={`btn btn-primary rounded-4  w-50 py-1 m-1 ${getColorBasedOnCondition(answerOption.isCorrect, index)} `}
                                                    onDrag={() => setIsHovered(true)}
                                                    onDragLeave={() => setIsHovered(false)}   onDragEnd={(e) => handleAnswerOptionClick(answerOption.isCorrect, index)} >{answerOption.answerText}</button>
                                                ))}
                                            </div>
                                            <div class="col-md-6 offset-md-3">
                                                <button type='button' className='btn btn-outline-primary rounded-2 w-50 py-1 m-5' onClick={() => handleSubmitAnswer()} >NEXT</button>
                                            </div>
                                        </>
                                    )}
                                </div>
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
                                
                                    {/* 
                                    <div className='label-success rounded-4'>
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


