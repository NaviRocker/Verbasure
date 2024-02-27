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
import avatar from '../assets/avatars/avatar1.png'
import Swal from 'sweetalert2'
import avatar3 from '../assets/avatars/avatar1.png'
import avatar2 from '../assets/avatars/avatar girl.png'
import sound from '../assets/avatars/sound.png'
import travel1 from '../assets/avatars/travel1.png'
import travel2 from '../assets/avatars/travel2.png'
import travel3 from '../assets/avatars/travel3.png'
import travel4 from '../assets/avatars/travel4.png'
import travel5 from '../assets/avatars/travel5.png'
import travel6 from '../assets/avatars/travel6.png'
import travel7 from '../assets/avatars/travel7.png'
import travel8 from '../assets/avatars/travel8.png'
import travel9 from '../assets/avatars/travel9.png'
import travel10 from '../assets/avatars/travel10.png'
import travel11 from '../assets/avatars/travel11.png'
import travel12 from '../assets/avatars/travel12.png'
import {useProgress} from '../providers/progressContext'
import ProgressTimeLine from '../components/ProgressTimeLine';
export default function VideoModule() {
    const { 
        handleNext,
        isProgressModalVisible,
        handleProgressModalVisibility,
        setCurrentStep
       } = useProgress();
    const questions = [
        {
            questionText: 'What motivated Mia to undertake a culinary journey in Sri Lanka?',
            answerOptions: [
                { answerText: 'Adventure', isCorrect: false },
                { answerText: 'Cultural exploration', isCorrect: true },
                { answerText: 'A desire for relaxation', isCorrect: false },
                { answerText: 'Business opportunities', isCorrect: false },
            ],
            hint: 'Hint: Mia was driven by a specific interest related to the local values and traditions',
        },
        {
            questionText: 'Which city offered Mia vibrant markets and the enticing fragrance of spices?',
            answerOptions: [
                { answerText: 'Kandy', isCorrect: false },
                { answerText: 'Nuwara Eliya', isCorrect: false },
                { answerText: 'Colombo', isCorrect: true },
                { answerText: 'Jaffna ', isCorrect: false },
            ],
            hint: 'Hint: This is the commercial city of Sri Lanka',
        },
        {
            questionText: 'What type of street food did Mia sample in Pettah?',
            answerOptions: [
                { answerText: 'Sushi rolls', isCorrect: false },
                { answerText: 'Crispy egg hoppers', isCorrect: true },
                { answerText: 'Tacos', isCorrect: false },
                { answerText: 'Pizza slices', isCorrect: false },
            ],
            hint: 'Hint: A small question for you, does the hen come first or the egg comes first?',
        },
        {
            questionText: 'Where did Mia learn to craft traditional Sri Lankan curries?',
            answerOptions: [
                { answerText: 'Colombo', isCorrect: false },
                { answerText: 'Jaffna', isCorrect: false },
                { answerText: 'Kandy ', isCorrect: true },
                { answerText: 'Ella', isCorrect: false },
            ],
            hint: 'Hint: Famous for the sacred tooth of Lord Buddha',
        },
        {
            questionText: 'In which region did Mia witness the tea-making process in Sri Lanka?',
            answerOptions: [
                { answerText: 'Pettah', isCorrect: false },
                { answerText: 'Galle', isCorrect: false },
                { answerText: 'Nuwara Eliya  ', isCorrect: true },
                { answerText: 'Sigiriya', isCorrect: false },
            ],
            hint: 'Hint: Filled with mountain mist and greenery',
        },
        //spell check

        {
            questionText: 'Identify the correctly spelled term',
            answerOptions: [
                { answerText: 'Ambianc', isCorrect: false },
                { answerText: 'Ambience', isCorrect: false },
                { answerText: 'Ambiance', isCorrect: true },
                { answerText: 'Ambianze', isCorrect: false },
            ],
            hint: '',
        }, {
            questionText: 'Identify the correctly spelled term',
            answerOptions: [
                { answerText: 'Saphire', isCorrect: false },
                { answerText: 'Sapphire', isCorrect: true },
                { answerText: 'Saphyre', isCorrect: false },
                { answerText: 'Saffire', isCorrect: false },
            ],
            hint: '',
        }, {
            questionText: "In which coastal town did Mia showcase Sri Lanka's seafood prowess?",
            answerOptions: [
                { answerText: 'Present', isCorrect: false },
                { answerText: 'Display', isCorrect: true },
                { answerText: 'Expose', isCorrect: false },
                { answerText: 'Show', isCorrect: false },
            ],
            hint: 'Hint: Think about how items are shown in shops',
        }, {
            questionText: "What did Mia discover in the spice gardens of Matale, and how did it contribute to her understanding of Sri Lanka's heritage?",
            answerOptions: [
                { answerText: 'Stumble upon', isCorrect: false },
                { answerText: 'Realize', isCorrect: false },
                { answerText: 'Find out', isCorrect: false },
                { answerText: 'Uncover', isCorrect: true },
            ],
            hint: 'Hint: Sherlock Holmes is known to do this with his mysteries',
        },



        {
            questionText: 'How many hours does it take for you go from sunkissed to mountain mist?',
            answerOptions: [
                { answerText: '1 Hours', isCorrect: false },
                { answerText: '4 Hours', isCorrect: true },
                { answerText: '3 Hours', isCorrect: false },
                { answerText: '8 Hours', isCorrect: false },
            ],
            hint: 'Hint: 9-5 = ?',
        },
        {
            questionText: 'What type of friends will you meet at the roadside? ',
            answerOptions: [
                { answerText: 'curious', isCorrect: false },
                { answerText: 'quirky', isCorrect: true },
                { answerText: 'Fun', isCorrect: false },
                { answerText: 'boring ', isCorrect: false },
            ],
            hint: 'Hint: Synonym for Unique',
        },
        {
            questionText: 'When time slows down, it urges you to do what?',
            answerOptions: [
                { answerText: 'swim with the dolphins and whales', isCorrect: false },
                { answerText: 'drink toddy', isCorrect: true },
                { answerText: 'soak up the cultural treasures', isCorrect: false },
                { answerText: 'meet with your friends', isCorrect: false },
            ],
            hint: 'Hint: It brings you central to multi-religions and races',
        },
        {
            questionText: 'What is the correct spelt word:',
            answerOptions: [
                { answerText: 'milenia', isCorrect: false },
                { answerText: 'millienia', isCorrect: false },
                { answerText: 'millenie ', isCorrect: false },
                { answerText: 'millennia', isCorrect: true },
            ],
            hint: 'Hint: It doesn’t always have to be single. It can be in pairs!',
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

    const [showVideoForQuiz, setShowVideoForQuiz] = useState(false)

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
            //setShowHint(true)
            showHintPopup()
        }

    };


    //Next Question
    const handleSubmitAnswer = () => {

        if (currentQuestion == 8) {
            setShowVideoForQuiz(true)
        }
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
            setSelectedAnswer(null);
            setShowHint(false)
            setShowHint(false)
            setShowSuccess(false)


        } else {
            setShowScore(true)
            setShowHint(false)
            setShowSuccess(false)
            showCustomAlert()
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
                    navigate('/dayatuni')

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
    const isEven = (number) => {
        return Math.floor(number / 2) * 2 === number;
    }
    //get current Points
    useEffect(() => {
        setCurrentStep(4)
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
        localStorage.setItem("2", 0);
        Swal.fire({
            showCloseButton: true,
            showConfirmButton: true,
            background: '', // Background color for the blurred overlay
            customClass: {
                popup: 'rounded-popup rounded-5',
                closeButton: 'custom-close-button',
            },




            html: `
          <div className='score-section p-3'>
          <h4 class="text-success bg-white rounded-4"><strong>+${score}xp</strong></h4>
          <h4 class="text-warning bg-white rounded-4">TRAVEL SRI LANKA<br></br> VIDEO MODULE COMPLETED!!!</h4>
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
          </div>`
            ,
        });
    }


    return (
        <> {showVideo ? (<>


            <div className="row ">

                <div className="col p-3">



                </div>
                <div className="col">
                    <h2 style={{fontFamily: 'Comic Sans MS, cursive'}} className='title-text text-center'>Travel Sri Lanka</h2>


                </div>
                <div className="col">
                    {/* // <ShowPoints parentToChild={localStorage.getItem("inputValue")} /> */}
                    <ShowPoints childPoints={currentScore} parentToChild={localStorage.getItem("inputValue")} />
                </div>
                {/* //  <LocalStorage parentToChild={location.state.name} /> */}
            </div>
            <div className='row'>
                <div class="d-flex justify-content-center" className='container-fluid justify-content-center' style={{ width: "85%" }}>
                    <YoutubeEmbed embedId="sprotb7pjOE" />
                </div>
            </div>
            <div className='d-flex justify-content-center py-3'>
                <button type="button" class="btn btn-outline-primary" onClick={() => { goToQuiz() }}><strong>GO TO QUIZ</strong></button>
            </div>*





        </>) : (<>


            <Row className='row justify-content-around' >
                <Col className='col'>
                    {showVideoForQuiz ? (
                        <>
                            <Col className='col'>

                                <div>
                                    <div className="row ">

                                        <div className="col p-3">
                                            <p class="text-uppercase ">Video Module </p>
                                        </div>
                                        <div className="col">
                                            <h2 style={{fontFamily: 'Comic Sans MS, cursive'}} className='title-text text-center'>Travel Sri Lanka</h2>


                                        </div>
                                        <div className="col">
                                            {/* // <ShowPoints parentToChild={localStorage.getItem("inputValue")} /> */}
                                            <ShowPoints childPoints={currentScore} parentToChild={localStorage.getItem("inputValue")} />
                                        </div>
                                        {/* //  <LocalStorage parentToChild={location.state.name} /> */}
                                    </div>
                                </div>
                                <div class="d-flex justify-content-center" className='container-fluid justify-content-center' style={{ width: "100%", height: "100%" }}>
                                    <YoutubeEmbed embedId="sChXehSYd4k" />
                                </div>
                            </Col>
                        </>
                    ) : (
                        <>
                            <div className="row ">
        <div className="col-md-12">
          <h2
            style={{ fontFamily: "Comic Sans MS, cursive" }}
            className="title-text text-center"
          >
            Travel Sri Lanka
          </h2>
        </div>
        <div className="col-md-12">
          <div className="row d-flex">
            <div className="col-md-6 p-3 d-flex align-items-center">
              <p class="text-uppercase fs-6">Reading Module </p>
            </div>

            <div className="col-md-6 d-flex justify-content-end">
                                        {/* // <ShowPoints parentToChild={localStorage.getItem("inputValue")} /> */}
                                        <ShowPoints childPoints={currentScore} parentToChild={localStorage.getItem("inputValue")} />
                                    </div>
                                    {/* //  <LocalStorage parentToChild={location.state.name} /> */}
                                </div>
                            </div>

                           
                            <div className='col-10 container text-center rounded' style={{ overflowY: 'auto', maxHeight: '300px' }}>

                            
                                <>
                                    <div className='question-section'>

                                        <div className='row py-4'>
                                            <div className='col-9' style={{marginLeft:"5%"}}>
                                                <img src={travel1} alt='' style={{ width: "100%" }}></img>
                                            </div>
                                            <div className='col-2' style={{marginTop:"3%"}}>
                                                <img src={sound} alt='' style={{ width: "30%" }}></img>
                                            </div>
                                        </div>

                                        <div className='row py-4'>
                                            <div className='col-2' style={{marginTop:"3%",marginLeft:"5%"}}>
                                                <img src={sound} alt='' style={{ width: "30%",transform: 'scaleX(-1)'}}></img>
                                            </div>
                                            <div className='col-9'>
                                                <img src={travel2} alt='' style={{ width: "100%" }}></img>
                                            </div>
                                        </div>

                                        <div className='row py-4'>
                                            <div className='col-9' style={{marginLeft:"5%"}}>
                                                <img src={travel3} alt='' style={{ width: "100%" }}></img>
                                            </div>
                                            <div className='col-2' style={{marginTop:"3%"}}>
                                                <img src={sound} alt='' style={{ width: "30%" }}></img>
                                            </div>
                                        </div>

                                        <div className='row py-4'>
                                            <div className='col-9' style={{marginLeft:"5%"}}>
                                                <img src={travel4} alt='' style={{ width: "100%" }}></img>
                                            </div>
                                            <div className='col-2' style={{marginTop:"3%"}}>
                                                <img src={sound} alt='' style={{ width: "30%" }}></img>
                                            </div>
                                        </div>

                                        <div className='row py-4'>
                                            <div className='col-2' style={{marginTop:"3%",marginLeft:"5%"}}>
                                                <img src={sound} alt='' style={{ width: "30%",transform: 'scaleX(-1)'}}></img>
                                            </div>
                                            <div className='col-9'>
                                                <img src={travel5} alt='' style={{ width: "100%" }}></img>
                                            </div>
                                        </div>

                                        <div className='row py-4'>
                                            <div className='col-9' style={{marginLeft:"5%"}}>
                                                <img src={travel6} alt='' style={{ width: "100%" }}></img>
                                            </div>
                                            <div className='col-2' style={{marginTop:"3%"}}>
                                                <img src={sound} alt='' style={{ width: "30%" }}></img>
                                            </div>
                                        </div>
                                        
                                        <div className='row py-4'>
                                            <div className='col-9' style={{marginLeft:"5%"}}>
                                                <img src={travel7} alt='' style={{ width: "100%" }}></img>
                                            </div>
                                            <div className='col-2' style={{marginTop:"3%"}}>
                                                <img src={sound} alt='' style={{ width: "30%" }}></img>
                                            </div>
                                        </div>

                                        <div className='row py-4'>
                                            <div className='col-2' style={{marginTop:"3%",marginLeft:"5%"}}>
                                                <img src={sound} alt='' style={{ width: "30%",transform: 'scaleX(-1)'}}></img>
                                            </div>
                                            <div className='col-9'>
                                                <img src={travel8} alt='' style={{ width: "100%" }}></img>
                                            </div>
                                        </div>

                                        <div className='row py-4'>
                                            <div className='col-9' style={{marginLeft:"5%"}}>
                                                <img src={travel9} alt='' style={{ width: "100%" }}></img>
                                            </div>
                                            <div className='col-2' style={{marginTop:"3%"}}>
                                                <img src={sound} alt='' style={{ width: "30%" }}></img>
                                            </div>
                                        </div>

                                        <div className='row py-4'>
                                            <div className='col-9' style={{marginLeft:"5%"}}>
                                                <img src={travel10} alt='' style={{ width: "100%" }}></img>
                                            </div>
                                            <div className='col-2' style={{marginTop:"3%"}}>
                                                <img src={sound} alt='' style={{ width: "30%" }}></img>
                                            </div>
                                        </div>

                                        <div className='row py-4'>
                                            <div className='col-2' style={{marginTop:"3%",marginLeft:"5%"}}>
                                                <img src={sound} alt='' style={{ width: "30%",transform: 'scaleX(-1)'}}></img>
                                            </div>
                                            <div className='col-9'>
                                                <img src={travel11} alt='' style={{ width: "100%" }}></img>
                                            </div>
                                        </div>

                                        <div className='row py-4'>
                                            <div className='col-9' style={{marginLeft:"5%"}}>
                                                <img src={travel12} alt='' style={{ width: "100%" }}></img>
                                            </div>
                                            <div className='col-2' style={{marginTop:"3%"}}>
                                                <img src={sound} alt='' style={{ width: "30%" }}></img>
                                            </div>
                                        </div>

                                        
                                        
                                    </div>


                                    {/*<div class="row justify-content-evenly py-3">
                                        <div class="col">

                                            <button type='button' className='btn btn-outline-secondary rounded-2 w-100' onClick={handlePrevClick} >PREVIOUS</button>
                                        </div>
                                        <div class="col">
                                            <button type='button' className='btn btn-outline-primary rounded-2 w-100' onClick={handleNextClick} >NEXT</button>
                                        </div>
                    </div>*/}

                                </>
                            </div>
                            
                            </div>
                            
                        </>
                    )}

                </Col>


            </Row>

               
            <Row>

                <Col className='col'>
                    <div className='container text-center question-container' >
                        {showScore ? (
                            <>
                                {/* <div className='score-section p-3'>
                                        <h4 class="text-success bg-white rounded-4"><strong>+{score}xp</strong></h4>
                                        <h4 class="text-warning bg-white rounded-4">TRAVEL SRI LANKA<br></br> VIDEO MODULE COMPLETED!!!</h4>
                                    </div>


                                    <div className='col'>
                                        <img src={trophy_img} style={{ height: "50%" }} alt=''></img>
                                    </div> */}


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
                            </>
                        ) : (
                            <>

                                <div className='question-section '>
                                    <div className='question-count  '>
                                        <span className='text bg-light-info rounded-2 p-2'>Question {currentQuestion + 1}/{questions.length}</span>
                                    </div>
                                    <div className='question-text rounded-3'>{questions[currentQuestion].questionText}</div>
                                </div>
                                <div className='answer-section '>
                                    {questions[currentQuestion].answerOptions.map((answerOption, index) => (
                                        <button key={index} type="button" className={`btn btn-primary rounded-4  w-50 py-1 m-1 ${getColorBasedOnCondition(answerOption.isCorrect, index)} `}
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
            </Row>
            {isProgressModalVisible && <ProgressTimeLine/>}    

        </>)
        }
        </>
    );
}


