import { Row, Col } from "reactstrap";
import "./Starter.css";
import imageFriends from "../assets/images/bg/friends.png";
import React, { useEffect, useState } from "react";
import axios from "axios";
import ShowPoints from "./ShowPoints";
import { useNavigate } from "react-router-dom";
import cone_image from "../assets/medals/cone_left.png";
import trophy_img from "../assets/medals/trophy.png";
import avatar1 from "../assets/avatars/image 1.png";
import Swal from "sweetalert2";
import avatar from "../assets/avatars/image 55.png";
import avatar2 from "../assets/avatars/Group.png";
import avatar3 from "../assets/avatars/Group-41.png";
import sound from "../assets/avatars/sound.png";
import meetup1 from "../assets/avatars/meetup1.png";
import meetup2 from "../assets/avatars/meetup2.png";
import meetup3 from "../assets/avatars/meetup3.png";
import meetup4 from "../assets/avatars/meetup4.png";
import meetup5 from "../assets/avatars/meetup5.png";
import meetup6 from "../assets/avatars/meetup6.png";
import meetup7 from "../assets/avatars/meetup7.png";
import meetup8 from "../assets/avatars/meetup8.png";
import audio1 from "../assets/audios/1.mp3";
import audio2 from "../assets/audios/2.mp3";
import audio3 from "../assets/audios/3.mp3";
import audio4 from "../assets/audios/4.mp3";
import audio5 from "../assets/audios/5.wav";
import audio6 from "../assets/audios/6.wav";
import audio7 from "../assets/audios/7.wav";
import audio8 from "../assets/audios/8.wav";

import { useProgress } from "../providers/progressContext";
import ProgressTimeLine from "../components/ProgressTimeLine";
export default function ReadModule() {
  const {
    handleNext,
    isProgressModalVisible,
    handleProgressModalVisibility,
    setCurrentStep,
  } = useProgress();

  const playAudio1 = () => {
    const audio = new Audio(audio1);
    audio.play();
  };

  const playAudio2 = () => {
    const audio = new Audio(audio2);
    audio.play();
  };
  const playAudio3 = () => {
    const audio = new Audio(audio3);
    audio.play();
  };
  const playAudio4 = () => {
    const audio = new Audio(audio4);
    audio.play();
  };
  const playAudio5 = () => {
    const audio = new Audio(audio5);
    audio.play();
  };
  const playAudio6 = () => {
    const audio = new Audio(audio6);
    audio.play();
  };

  const playAudio7 = () => {
    const audio = new Audio(audio7);
    audio.play();
  };

  const playAudio8 = () => {
    const audio = new Audio(audio8);
    audio.play();
  };

  const questions = [
    {
      questionText:
        'What is the main theme of the paragraph titled "Reunion of Hearts: Embracing Friendship after a Long Hiatus?',
      answerOptions: [
        { answerText: "Exploring Cityscapes at Sunset", isCorrect: false },
        { answerText: "Reminiscing about the Past", isCorrect: false },
        { answerText: "Anticipating a Reunion with Friends", isCorrect: true },
        { answerText: "Creating New Memories", isCorrect: false },
      ],
      hint: "Hint: The main theme of the paragraph is centered around the eager anticipation and excitement of meeting up with friends after a prolonged period. The focus is on the joy of reconnecting, reminiscing, and building new memories together",
    },
    {
      questionText: "What was the chosen venue for the reunion?",
      answerOptions: [
        { answerText: "Park", isCorrect: false },
        { answerText: "Café", isCorrect: true },
        { answerText: "Beach", isCorrect: false },
        { answerText: "Library", isCorrect: false },
      ],
      hint: "Hint: The venue has a cozy ambiance with dim lights, creating a laid-back atmosphere—a perfect setting for friends to gather and reconnect.",
    },
    {
      questionText:
        "What filled the air as each friend walked through the café door?",
      answerOptions: [
        { answerText: "Sadness", isCorrect: false },
        { answerText: "Joy", isCorrect: true },
        { answerText: "Tension", isCorrect: false },
        { answerText: "Silence", isCorrect: false },
      ],
      hint: "Hint: As friends entered the café, the atmosphere was vibrant and positive, marked by smiles, laughter, and heartfelt greetings. The emotion that filled the air was the opposite of sadness.",
    },
    {
      questionText: "What was the theme of the toasts during the reunion?",
      answerOptions: [
        { answerText: "Success", isCorrect: false },
        { answerText: "Friendship", isCorrect: true },
        { answerText: "Challenges", isCorrect: false },
        { answerText: "Hardships", isCorrect: false },
      ],
      hint: "Hint: When raising their glasses in toasts, friends celebrated something enduring and resilient. It wasn't about victories or difficulties but rather focused on the strong bond they shared over time",
    },
    {
      questionText:
        "What transitioned seamlessly into a dinner setting during the reunion?",
      answerOptions: [
        { answerText: "Coffee break", isCorrect: false },
        { answerText: "Cocktail party", isCorrect: false },
        { answerText: "Café ambiance", isCorrect: true },
        { answerText: "Outdoor activities", isCorrect: false },
      ],
      hint: "Hint: The setting where friends enjoyed shared delights smoothly shifted from the initial cozy café ambiance, enhancing the continuity of their reunion experience.",
    },
    {
      questionText: "What did someone suggest capturing during the reunion?",
      answerOptions: [
        { answerText: "Old memories", isCorrect: false },
        { answerText: "The moment", isCorrect: true },
        { answerText: "Personal growth", isCorrect: false },
        { answerText: "Shared laughter", isCorrect: false },
      ],
      hint: "Hint: Amidst the joy and connection, a suggestion was made to freeze in time the essence of the reunion. It wasn't about capturing memories or specific events but rather about preserving the overall experience",
    },
    {
      questionText: "Select the Correct Spellings",
      answerOptions: [
        { answerText: "Reunionn", isCorrect: false },
        { answerText: "Reunion", isCorrect: true },
        { answerText: "Reunian", isCorrect: false },
        { answerText: "Reunyon", isCorrect: false },
      ],
      hint: "",
    },
    {
      questionText: "Select the Correct Spellings",
      answerOptions: [
        { answerText: "Resiliance", isCorrect: false },
        { answerText: "Resilience", isCorrect: true },
        { answerText: "Ressilience", isCorrect: false },
        { answerText: "Resilliance", isCorrect: false },
      ],
      hint: "",
    },
    {
      questionText: "Select the Correct Spellings",
      answerOptions: [
        { answerText: "Culinary", isCorrect: true },
        { answerText: "Culinery", isCorrect: false },
        { answerText: "Culinery", isCorrect: false },
        { answerText: "Culinaree", isCorrect: false },
      ],
      hint: "",
    },
    {
      questionText: "Select the Correct Spellings",
      answerOptions: [
        { answerText: "Acknowledgment", isCorrect: false },
        { answerText: "Acknowledgement", isCorrect: true },
        { answerText: "Acknolagement", isCorrect: false },
        { answerText: "Acnowledgment", isCorrect: false },
      ],
      hint: "",
    },
    //Drag and drop
    {
      questionText:
        "The ____________where we met was comfy and nice, with soft lights and a relaxed feel, making it just right for our long-awaited get-together.",
      answerOptions: [
        { answerText: "Melodies", isCorrect: false },
        { answerText: "Feelings", isCorrect: false },
        { answerText: "Place ", isCorrect: true },
        { answerText: "Thoughts", isCorrect: false },
      ],
      hint: "Hint: Think about the setting described in the reunion. It was a specific type of location that contributed to the comfortable and relaxed atmosphere of the gathering.",
      finalAnswer: (
        <div>
          <p>
            The <mark>Memories</mark> where we met was comfy and nice, with soft
            lights and a relaxed feel, making it just right for our long-awaited
            get-together.
          </p>
        </div>
      ),
    },
    {
      questionText:
        "Remembering the good times we had—adventures, jokes, and the moments we shared—a feeling of happy __________ surrounded us.",
      answerOptions: [
        { answerText: "Melodies", isCorrect: false },
        { answerText: "Feelings", isCorrect: false },
        { answerText: "Memories ", isCorrect: true },
        { answerText: "Thoughts", isCorrect: false },
      ],
      hint: "Hint: Reflect on the positive aspects of the reunion, particularly the shared adventures, jokes, and moments. The feeling that surrounded the friends was tied to these joyful and shared experiences.",
      finalAnswer: (
        <div>
          <p>
            Remembering the good times we had—adventures, jokes, and the moments
            we shared—a feeling of happy <mark>Memories</mark> surrounded us.
          </p>
        </div>
      ),
    },
    //3

    {
      questionText:
        "Raising our glasses to celebrate the strong friendships that lasted a long time, we cheered not just for our good friendships but for the _________ shared we've had together.",
      answerOptions: [
        { answerText: "Memories", isCorrect: false },
        { answerText: "Ideas", isCorrect: false },
        { answerText: "experiences ", isCorrect: true },
        { answerText: "Thoughts", isCorrect: false },
      ],
      hint: "Hint: The celebration involved toasting to enduring friendships and the things friends had been through together. The word you're looking for relates to the collective history and events that defined their relationship.",
      finalAnswer: (
        <div>
          <p>
            Raising our glasses to celebrate the strong friendships that lasted
            a long time, we cheered not just for our good friendships but for
            the <mark>experiences</mark> shared we've had together.
          </p>
        </div>
      ),
    },
    {
      questionText:
        "We talked about __________ stuff and how we've changed and learned since we last met.",
      answerOptions: [
        { answerText: "Funny", isCorrect: false },
        { answerText: "Sad", isCorrect: false },
        { answerText: "Personal ", isCorrect: true },
        { answerText: "old", isCorrect: false },
      ],
      hint: "Hint: The conversation took a reflective turn, focusing on individual growth and lessons learned. The missing word refers to aspects unique to each person's life and development.",
      finalAnswer: (
        <div>
          <p>
            We talked about <mark>personal</mark> stuff and how we've changed
            and learned since we last met.
          </p>
        </div>
      ),
    },

    {
      questionText:
        "The get-together was more than just a short meeting; it brought back a strong feeling of __________ among us, reminding us that good frienships last forever and can be brought back with shared memories ",
      answerOptions: [
        { answerText: "Hardships", isCorrect: false },
        { answerText: "Friendship", isCorrect: true },
        { answerText: "Companionship", isCorrect: false },
        { answerText: "Camaraderie", isCorrect: false },
      ],
      hint: "Hint: The reunion wasn't just a brief encounter but a rekindling of a certain emotion among the friends. The word you're looking for is closely tied to the enduring bond that was strengthened during the gathering",
      finalAnswer: (
        <div>
          <p>
            The get-together was more than just a short meeting; it brought back
            a strong feeling of <mark>Friendship</mark> among us, reminding us
            that good frienships last forever and can be brought back with
            shared memories{" "}
          </p>
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
  const [showFinalAnswer, setShowFinalAnswer] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [dragAndDropStarted, setDragAndDropStarted] = useState(false);

  const handleAnswerOptionClick = (isCorrect) => {
    setSelectedAnswer(isCorrect);
    if (`Clicked: ${isCorrect ? setScore(score + 100) : setScore(score - 25)}`);
    if (isCorrect) {
      setShowHint(false);

      setShowSuccess(true);
      setIsHovered(false);
      setShowFinalAnswer(true);
    } else {
      if (questions[currentQuestion].hint == "") {
        setShowSuccess(false);
      } else {
        setShowFinalAnswer(false);
        setShowHint(true);
        showHintPopup();
        setShowSuccess(false);
      }

      setIsHovered(false);
    }
  };

  //Submit Answer
  const handleSubmitAnswer = () => {
    setShowFinalAnswer(false);
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion === 10) {
      setDragAndDropStarted(true);
    }
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
      setSelectedAnswer(null);
      setShowHint(false);
      setShowSuccess(false);
    } else {
      setShowScore(true);

      setShowHint(false);
      setShowSuccess(false);
      showCustomAlert();
    }
  };

  const getColorBasedOnCondition = (isCorrect, index) => {
    // Your logic to determine the color based on the item value
    // For example, conditionally return 'red' or 'blue'

    if (selectedAnswer === null) {
      return ""; // Default color if no answer is selected
    } else {
      if (isCorrect) {
        return isCorrect === !selectedAnswer ? index === "red" : "green";
      } else {
        return isCorrect === selectedAnswer ? index === "green" : "red";
      }
    }
  };

  const isEven = (number) => {
    return Math.floor(number / 2) * 2 === number;
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
    };
    console.log("Score " + x);
    console.log("current Score" + y);
    console.log("Total Score" + z);
    await axios
      .post("http://localhost:3002/submit", values)
      .then((res) => {
        if (res.status === 200) {
          //console.log(res)
          navigate("/videomodule");
          // window.location.reload();
        }
      })
      .catch((err) => console.log(err));
  };

  //reset Quiz

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setSelectedAnswer(null);
    setShowScore(false);
  };

  //get current Points
  useEffect(() => {
    setCurrentStep(1);
    getLatesetPoints();
  });

  const [values] = useState({
    name: localStorage.getItem("inputValue"),
    CurrentPoints: localStorage.getItem("currentPointsValue"),
  });
  const [currentScore, setCurrentScore] = useState(0);
  const getLatesetPoints = async () => {
    await axios
      .post("http://localhost:3002/points", values)
      .then((res) => {
        // setImageData(res.data[0])
        setCurrentScore(res.data[0].points);
        //navigate('/videomodule')
        console.log(res.data[0].points);
      })
      .catch((err) => console.log(err));
  };
  const showCustomAlert = () => {
    localStorage.setItem("1", 0);
    Swal.fire({
      html: `
        <div class='score-section'>
          <h4 class='text-success bg-white rounded-4'><strong>+${score}xp</strong></h4>
          <h4 class='text-warning bg-white rounded-4'><strong>MEETUP WITH FRIENDS<br /> READING LEVEL COMPLETED!!!</strong></h4>
        </div>
  
        <div class='col'>
          <img src=${trophy_img} style='height: 30%' alt='' />
        </div>
  
       
      `,
    }).then((result) => {
      if (result.isConfirmed) {
        handleNext();
        // increaseCompletedSubStep()
        handleProgressModalVisibility();
        console.log("Modal is confirmed or closed");
      } else if (result.dismiss) {
        handleNext();
        handleProgressModalVisibility();
      }
    });
  };

  //Show level Success Message

  const showHintPopup = () => {
    Swal.fire({
      showCloseButton: true,
      showConfirmButton: false,
      background: "", // Background color for the blurred overlay
      customClass: {
        popup: "rounded-popup rounded-5",
        closeButton: "custom-close-button",
      },
      onOpen: (popup) => {
        // Add custom styling to the popup container
        const container = popup.querySelector(".rounded-popup");
        container.style.display = "flex";
        container.style.alignItems = "center";
        container.style.justifyContent = "center";

        // Add custom styling to the image
        const image = popup.querySelector(".swal2-image");
        image.style.borderRadius = "50%";
        image.style.marginRight = "20px";

        // Add custom styling to the content
        const content = popup.querySelector(".swal2-content");
        content.style.flexGrow = "1";
      },
      html: `
        <div style="display: flex; align-items: center;">
         
          <div>
            <h2>Let's make another attempt!</h2>
            <div>
              <img src="${avatar1}" alt="Custom image" style="border-radius: 25%; width: 100px; height: 100px; margin-bottom: 20px"/>
            </div>
           <p>${questions[currentQuestion].hint}</p>
          </div>
        </div>`,
    });
  };
  return (
    <>
      <div className="row ">
        <div className="col-md-12">
          <h2
            style={{ fontFamily: "Comic Sans MS, cursive" }}
            className="title-text text-center"
          >
            Meeting Up with Friends
          </h2>
        </div>
        <div className="col-md-12">
          <div className="row d-flex">
            <div className="col-md-6 p-3 d-flex align-items-center">
              <p class="text-uppercase fs-6">Reading Module </p>
            </div>

            <div className="col-md-6 d-flex justify-content-end">
              <ShowPoints
                childPoints={currentScore}
                parentToChild={localStorage.getItem("inputValue")}
              />
            </div>
          </div>
        </div>
        {/* //  <LocalStorage parentToChild={location.state.name} /> */}
      </div>

      <div className="container container-fluid ">
        <div>
          {/* <button primary onClick={() => parentToChild()}>Click Parent</button> */}
          {/* <img src={`http://localhost:3002/images/` + imageData.image} alt="" style={{ width: "150px", height: "150px" }}></img> */}
        </div>
      </div>

      <Row
        className="row justify-content-center"
        style={{ overflowY: "auto", maxHeight: "300px" }}
      >
        <Col className="col-10 ">
          <div className="container text-center rounded">
            <strong className="h5">
              "Reunion of Hearts: Embracing Friendship after a Long Hiatus"
            </strong>
            <div className="question-section pt-5">
              <div className="row py-4">
                <div className="col-9" style={{ marginLeft: "5%" }}>
                  <img src={meetup1} alt="" style={{ width: "100%" }}></img>
                </div>
                <div className="col-2" style={{ marginTop: "3%" }}>
                  <img src={sound} alt="" style={{ width: "30%" }} onClick={playAudio1}></img>
                </div>
              </div>

             

              <div className="row py-4">
                <div
                  className="col-2"
                  style={{ marginTop: "3%", marginLeft: "5%" }}
                >
                 <img
            src={sound}
            alt="Lol"
            style={{ width: "30%", transform: "scaleX(-1)", cursor: "pointer" }}
            onClick={playAudio2} // Add onClick event handler
          ></img>
                </div>
                <div className="col-9">
                  <img src={meetup2} alt="" style={{ width: "100%" }}></img>
                </div>
              </div>

              <div className="row py-4">
                <div className="col-9" style={{ marginLeft: "5%" }}>
                  <img src={meetup3} alt="" style={{ width: "100%" }}></img>
                </div>
                <div className="col-2" style={{ marginTop: "3%" }}>
                <img src={sound} alt="" style={{ width: "30%" }} onClick={playAudio3}></img>
                </div>
              </div>

              <div className="row py-4">
                <div
                  className="col-2"
                  style={{ marginTop: "3%", marginLeft: "5%" }}
                >
                 <img
            src={sound}
            alt="Lol"
            style={{ width: "30%", transform: "scaleX(-1)", cursor: "pointer" }}
            onClick={playAudio4} // Add onClick event handler
          ></img>
                </div>
                <div className="col-9">
                  <img src={meetup4} alt="" style={{ width: "100%" }}></img>
                </div>
              </div>

              <div className="row py-4">
                <div className="col-9" style={{ marginLeft: "5%" }}>
                  <img src={meetup5} alt="" style={{ width: "100%" }}></img>
                </div>
                <div className="col-2" style={{ marginTop: "3%" }}>
                <img src={sound} alt="" style={{ width: "30%" }} onClick={playAudio5}></img>
                </div>
              </div>

              <div className="row py-4">
                <div
                  className="col-2"
                  style={{ marginTop: "3%", marginLeft: "5%" }}
                >
                  <img
            src={sound}
            alt="Lol"
            style={{ width: "30%", transform: "scaleX(-1)", cursor: "pointer" }}
            onClick={playAudio6} // Add onClick event handler
          ></img>
                </div>
                <div className="col-9">
                  <img src={meetup6} alt="" style={{ width: "100%" }}></img>
                </div>
              </div>

              <div className="row py-4">
                <div className="col-9" style={{ marginLeft: "5%" }}>
                  <img src={meetup7} alt="" style={{ width: "100%" }}></img>
                </div>
                <div className="col-2" style={{ marginTop: "3%" }}>
                <img src={sound} alt="" style={{ width: "30%" }} onClick={playAudio7}></img>
                </div>
              </div>

              <div className="row py-4">
                <div
                  className="col-2"
                  style={{ marginTop: "3%", marginLeft: "5%" }}
                >
                  <img
            src={sound}
            alt="Lol"
            style={{ width: "30%", transform: "scaleX(-1)", cursor: "pointer" }}
            onClick={playAudio8} // Add onClick event handler
          ></img>
                </div>
                <div className="col-9">
                  <img src={meetup8} alt="" style={{ width: "100%" }}></img>
                </div>
              </div>
            </div>

            <div class="row justify-content-evenly py-2">
              {/* <div class="col">

                  <button type='button' className='btn btn-outline-secondary rounded-2 w-100' onClick={handlePrevClick} >PREVIOUS</button>
                </div>
                <div class="col">
                  <button type='button' className='btn btn-outline-primary rounded-2 w-100' onClick={handleNextClick} >NEXT</button>
                </div> */}
            </div>
          </div>
        </Col>
      </Row>

      {/* add a break here to separate the content section and the question section */}
      {/* <hr
        style={{
          height: "3px",
          border: "none",
          borderBottom: "16px solid #3699FF",
        }}
      /> */}
      <Row className="row justify-content-cc question-container" >
        <Col className="col">
          <div className="container text-center">
            {showScore ? (
              <>
                {/* <div className='score-section '>
                  <h4 class="text-success bg-white rounded-4"><strong>+{score}xp</strong></h4>
                  <h4 class="text-warning bg-white rounded-4"><strong>MEETUP WITH FRIENDS<br></br> READING LEVEL COMPLETED!!!</strong></h4>
                </div>


                <div className='col'>
                  <img src={trophy_img} style={{ height: "50%" }} alt=''></img>
                </div> */}

                <div className="py-3">
                  <button
                    type="button"
                    className="btn btn-outline-info w-50"
                    onClick={() => {
                      resetQuiz();
                    }}
                  >
                    RESET
                  </button>
                </div>
                <div>
                  <button
                    type="button"
                    className="btn btn-outline-info w-50"
                    onClick={() => {
                      submitResult();
                    }}
                  >
                    GO TO NEXT
                  </button>
                </div>
              </>
            ) : (
              <>
                {dragAndDropStarted ? (
                  <>
                    <h3 className="py-2">
                      <strong>
                        Drag the correct answer and Drop it on the question area
                      </strong>
                    </h3>
                    {showFinalAnswer ? (
                      <>
                        <div className="question-section pt-5">
                          <div className="question-count  ">
                            <span className="text bg-light-info rounded-2 p-2">
                              Question {currentQuestion + 1}/{questions.length}
                            </span>
                          </div>
                          {isHovered ? (
                            <>
                              <div className="hover-message">
                                <strong>Drop Your Answers Here</strong>
                              </div>
                            </>
                          ) : (
                            <>
                              <div className="question-text  bg-white rounded-3">
                                {questions[currentQuestion].finalAnswer}
                              </div>
                            </>
                          )}
                        </div>

                        <div className="answer-section ">
                          {questions[currentQuestion].answerOptions.map(
                            (answerOption, index) => (
                              <button
                                draggable
                                key={index}
                                type="button"
                                className={`btn btn-primary align-content-left rounded-4  w-50 py-1 m-1 ${getColorBasedOnCondition(
                                  answerOption.isCorrect,
                                  index
                                )} `}
                                onDrag={() => setIsHovered(true)}
                                onDragLeave={() => setIsHovered(false)}
                                onDragEnd={(e) =>
                                  handleAnswerOptionClick(
                                    answerOption.isCorrect,
                                    index
                                  )
                                }
                              >
                                {answerOption.answerText}
                              </button>
                            )
                          )}
                        </div>
                        <div class="col-md-6 offset-md-3">
                          <button
                            type="button"
                            className="btn btn-outline-primary rounded-2 w-50 py-1 m-5"
                            onClick={() => handleSubmitAnswer()}
                          >
                            NEXT
                          </button>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="question-section pt-5">
                          <div className="question-count  ">
                            <span className="text bg-light-info rounded-2 p-2">
                              Question {currentQuestion + 1}/{questions.length}
                            </span>
                          </div>
                          {isHovered ? (
                            <>
                              <div className="hover-message">
                                <strong>Drop Your Answers Here</strong>
                              </div>
                            </>
                          ) : (
                            <>
                              <div className="question-text  bg-white rounded-3">
                                {questions[currentQuestion].questionText}
                              </div>
                            </>
                          )}
                        </div>

                        <div className="answer-section ">
                          {questions[currentQuestion].answerOptions.map(
                            (answerOption, index) => (
                              <button
                                draggable
                                key={index}
                                type="button"
                                className={`btn btn-primary rounded-4  w-50 py-1 m-1 ${getColorBasedOnCondition(
                                  answerOption.isCorrect,
                                  index
                                )} `}
                                onDrag={() => setIsHovered(true)}
                                onDragLeave={() => setIsHovered(false)}
                                onDragEnd={(e) =>
                                  handleAnswerOptionClick(
                                    answerOption.isCorrect,
                                    index
                                  )
                                }
                              >
                                {answerOption.answerText}
                              </button>
                            )
                          )}
                        </div>
                        <div class="col-md-6 offset-md-3">
                          <button
                            type="button"
                            className="btn btn-outline-primary rounded-2 w-50 py-1 m-5"
                            onClick={() => handleSubmitAnswer()}
                          >
                            NEXT
                          </button>
                        </div>
                      </>
                    )}
                  </>
                ) : (
                  <>
                    <div className="question-section pt-5">
                      <div className="question-count  ">
                        <span className="text bg-light-info rounded-2 p-2">
                          Question {currentQuestion + 1}/{questions.length}
                        </span>
                      </div>

                      <div className="question-text  bg-white rounded-3">
                        {questions[currentQuestion].questionText}
                      </div>
                    </div>
                    <div className="answer-section ">
                      {questions[currentQuestion].answerOptions.map(
                        (answerOption, index) => (
                          <button
                            key={index}
                            type="button"
                            className={`btn btn-primary rounded-4  w-50 py-1 m-1 ${getColorBasedOnCondition(
                              answerOption.isCorrect,
                              index
                            )} `}
                            onClick={() =>
                              handleAnswerOptionClick(
                                answerOption.isCorrect,
                                index
                              )
                            }
                          >
                            {answerOption.answerText}
                          </button>
                        )
                      )}
                    </div>
                    <div class="col-md-6 offset-md-3">
                      <button
                        type="button"
                        className="btn btn-outline-primary rounded-2 w-50 py-1 m-5"
                        onClick={() => handleSubmitAnswer()}
                      >
                        NEXT
                      </button>
                    </div>
                  </>
                )}
              </>
            )}

            {showHint ? (
              <>
                {/* 
                  <div className='label-fail rounded-4'>
                    <div className='question-text text-white rounded-5 p-1'><h5>{questions[currentQuestion].hint}</h5></div>
                  </div> */}
              </>
            ) : (
              <></>
            )}

            {showSuccess ? (
              <>
                {/* <div className='label-success rounded-4'>
                  <div className='question-text text-white rounded-5 p-1'><h5>Awesome ! That's correct.</h5></div>
                </div> */}
              </>
            ) : (
              <></>
            )}
          </div>
        </Col>
      </Row>
      {isProgressModalVisible && <ProgressTimeLine />}
    </>
  );
}
