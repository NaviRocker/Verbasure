// import React, { useState } from 'react';
// import PropTypes from "prop-types";
// import { styled } from "@mui/material/styles";
// import Stack from "@mui/material/Stack";
// import Stepper from "@mui/material/Stepper";
// import Step from "@mui/material/Step";
// import StepLabel from "@mui/material/StepLabel";
// import Check from "@mui/icons-material/Check";
// import Button from '@mui/material/Button';
// import SettingsIcon from "@mui/icons-material/Settings";
// import GroupAddIcon from "@mui/icons-material/GroupAdd";
// import VideoLabelIcon from "@mui/icons-material/VideoLabel";
// import StepConnector, {
//   stepConnectorClasses,
// } from "@mui/material/StepConnector";
// import { Fragment } from "react";
// import {
//   BookOnline,
//   BookOnlineTwoTone,
//   ClassOutlined,
//   Group,
//   Headphones,
//   School,
//   Sports,
// } from "@mui/icons-material";

// const QontoConnector = styled(StepConnector)(({ theme }) => ({
//   [`&.${stepConnectorClasses.alternativeLabel}`]: {
//     top: 10,
//     left: "calc(-50% + 16px)",
//     right: "calc(50% + 16px)",
//   },
//   [`&.${stepConnectorClasses.active}`]: {
//     [`& .${stepConnectorClasses.line}`]: {
//       borderColor: "#784af4",
//     },
//   },
//   [`&.${stepConnectorClasses.completed}`]: {
//     [`& .${stepConnectorClasses.line}`]: {
//       borderColor: "#784af4",
//     },
//   },
//   [`& .${stepConnectorClasses.line}`]: {
//     borderColor:
//       theme.palette.mode === "dark" ? theme.palette.grey[800] : "#eaeaf0",
//     borderTopWidth: 3,
//     borderRadius: 1,
//   },
// }));

// const QontoStepIconRoot = styled("div")(({ theme, ownerState }) => ({
//   color: theme.palette.mode === "dark" ? theme.palette.grey[700] : "#FFFFFF",
//   display: "flex",
//   height: 22,
//   alignItems: "center",
//   ...(ownerState.active && {
//     color: "#FFFFFF",
//   }),
//   "& .QontoStepIcon-completedIcon": {
//     color: "#FFFFFF",
//     zIndex: 1,
//     fontSize: 18,
//   },
//   "& .QontoStepIcon-circle": {
//     width: 8,
//     height: 8,
//     borderRadius: "50%",
//     backgroundColor: "currentColor",
//   },
// }));

// function QontoStepIcon(props) {
//   const { active, completed, className } = props;

//   return (
//     <QontoStepIconRoot ownerState={{ active }} className={className}>
//       {completed ? (
//         <Check className="QontoStepIcon-completedIcon" />
//       ) : (
//         <div className="QontoStepIcon-circle" />
//       )}
//     </QontoStepIconRoot>
//   );
// }

// QontoStepIcon.propTypes = {
//   /**
//    * Whether this step is active.
//    * @default false
//    */
//   active: PropTypes.bool,
//   className: PropTypes.string,
//   /**
//    * Mark the step as completed. Is passed to child components.
//    * @default false
//    */
//   completed: PropTypes.bool,
// };

// const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
//   [`&.${stepConnectorClasses.alternativeLabel}`]: {
//     top: 22,
//   },
//   [`&.${stepConnectorClasses.active}`]: {
//     [`& .${stepConnectorClasses.line}`]: {
//       backgroundImage:
//         "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)",
//     },
//   },
//   [`&.${stepConnectorClasses.completed}`]: {
//     [`& .${stepConnectorClasses.line}`]: {
//       backgroundImage:
//         "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)",
//     },
//   },
//   [`& .${stepConnectorClasses.line}`]: {
//     height: 3,
//     border: 0,
//     backgroundColor:
//       theme.palette.mode === "dark" ? theme.palette.grey[800] : "#eaeaf0",
//     borderRadius: 1,
//   },
// }));

// const ColorlibStepIconRoot = styled("div")(({ theme, ownerState }) => ({
//   backgroundColor:
//     theme.palette.mode === "dark" ? theme.palette.grey[700] : "#ccc",
//   zIndex: 1,
//   color: "#fff",
//   width: 50,
//   height: 50,
//   display: "flex",
//   borderRadius: "50%",
//   justifyContent: "center",
//   alignItems: "center",
//   ...(ownerState.active && {
//     backgroundImage:
//       "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
//     boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
//   }),
//   ...(ownerState.completed && {
//     backgroundImage:
//       "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
//   }),
// }));

// function ColorlibStepIcon(props) {
//   const { active, completed, className } = props;

//   const icons = {
//     1: <BookOnline />,
//     2: <VideoLabelIcon />,
//     3: <Headphones />,
//   };

//   return (
//     <ColorlibStepIconRoot
//       ownerState={{ completed, active }}
//       className={className}
//     >
//       {icons[String(props.icon)]}
//     </ColorlibStepIconRoot>
//   );
// }
// function ColorlibStepIcon1(props) {
//   const { active, completed, className } = props;

//   const icons = {
//     1: <BookOnline />,
//     //   2: <VideoLabelIcon />,
//     //   3: <Headphones />,
//   };

//   return (
//     <ColorlibStepIconRoot
//       ownerState={{ completed, active }}
//       className={className}
//     >
//       {icons[String(props.icon)]}
//     </ColorlibStepIconRoot>
//   );
// }
// function ColorlibStepIcon2(props) {
//   const { active, completed, className } = props;

//   const icons = {
//     1: <School />,
//     2: <BookOnlineTwoTone />,
//     3: <ClassOutlined />,
//     4: <Group />,
//     5: <Sports />,
//   };

//   return (
//     <ColorlibStepIconRoot
//       ownerState={{ completed, active }}
//       className={className}
//     >
//       {icons[String(props.icon)]}
//     </ColorlibStepIconRoot>
//   );
// }

// ColorlibStepIcon.propTypes = {
//   /**
//    * Whether this step is active.
//    * @default false
//    */
//   active: PropTypes.bool,
//   className: PropTypes.string,
//   /**
//    * Mark the step as completed. Is passed to child components.
//    * @default false
//    */
//   completed: PropTypes.bool,
//   /**
//    * The label displayed in the step icon.
//    */
//   icon: PropTypes.node,
// };

// const steps = ["READING MODULE", "VIDEO MODULE", "LISTENING MODULE"];
// const steps1 = ["ALL-IN-ONE MODULE"];
// const steps2 = [
//   "ARRIVAL AT UNIVERSITY",
//   "ENROLLING IN COURSES",
//   "ATTENDING LECTURES",
//   "DISCUSSION GROUP",
//   "JOINING EXTRACURRICULAR ACTIVITIES",
// ];

// export default function RoadMap() {
//   const meet = localStorage.getItem("1")
//     ? JSON.parse(localStorage.getItem("1"))
//     : -1;
//   const srilanka = localStorage.getItem("2")
//     ? JSON.parse(localStorage.getItem("2"))
//     : -1;
//   const university = localStorage.getItem("3")
//     ? JSON.parse(localStorage.getItem("3"))
//     : -1;
//   return (
//     <Fragment>
//       <div style={{ backgroundColor: "white", background: "white" }}>
//         <div className="row">
//           <div className="col-md-6">
//             <h1>MEETING UP WITH FRIENDS</h1>
//           </div>
//         </div>
//         <br></br>
//         <div className="row">
//           <div className="col-md-2"></div>
//           <div className="col-md-6">
//             <Stack sx={{ width: "100%" }} spacing={4}>
//               {/* <Stepper alternativeLabel activeStep={1} connector={<QontoConnector />}>
//         {steps.map((label) => (
//           <Step key={label}>
//             <StepLabel StepIconComponent={QontoStepIcon}>{label}</StepLabel>
//           </Step>
//         ))}
//       </Stepper> */}
//               <Stepper
//                 alternativeLabel
//                 activeStep={meet}
//                 connector={<ColorlibConnector />}
//               >
//                 {steps.map((label) => (
//                   <Step key={label}>
//                     <StepLabel StepIconComponent={ColorlibStepIcon}>
//                       {label}
//                     </StepLabel>
//                   </Step>
//                 ))}
//               </Stepper>
//             </Stack>
//           </div>
//           <div className="col-md-4"></div>
//         </div>
//         <br></br>
//         <div className="row">
//           <div className="col-md-6">
//             <h1>TRAVEL SRI LANKA</h1>
//           </div>
//         </div>
//         <br></br>
//         <div className="row">
//           <div className="col-md-2"></div>
//           <div className="col-md-6">
//             <Stack sx={{ width: "100%" }} spacing={4}>
//               {/* <Stepper alternativeLabel activeStep={1} connector={<QontoConnector />}>
//         {steps.map((label) => (
//           <Step key={label}>
//             <StepLabel StepIconComponent={QontoStepIcon}>{label}</StepLabel>
//           </Step>
//         ))}
//       </Stepper> */}
//               <Stepper
//                 alternativeLabel
//                 activeStep={srilanka}
//                 connector={<ColorlibConnector />}
//               >
//                 {steps1.map((label) => (
//                   <Step key={label}>
//                     <StepLabel StepIconComponent={ColorlibStepIcon1}>
//                       {label}
//                     </StepLabel>
//                   </Step>
//                 ))}
//               </Stepper>
//             </Stack>
//           </div>
//           <div className="col-md-4"></div>
//         </div>
//         <br></br>
//         <div className="row">
//           <div className="col-md-6">
//             <h1>A DAY AT THE UNIVERSITY</h1>
//           </div>
//         </div>
//         <br></br>
//         <div className="row">
//           <div className="col-md-2"></div>
//           <div className="col-md-6">
//             <Stack sx={{ width: "100%" }} spacing={4}>
//               {/* <Stepper alternativeLabel activeStep={1} connector={<QontoConnector />}>
//         {steps.map((label) => (
//           <Step key={label}>
//             <StepLabel StepIconComponent={QontoStepIcon}>{label}</StepLabel>
//           </Step>
//         ))}
//       </Stepper> */}
//               <Stepper
//                 alternativeLabel
//                 activeStep={university}
//                 connector={<ColorlibConnector />}
//               >
//                 {steps2.map((label) => (
//                   <Step key={label}>
//                     <StepLabel StepIconComponent={ColorlibStepIcon2}>
//                       {label}
//                     </StepLabel>
//                   </Step>
//                 ))}
//               </Stepper>
//             </Stack>
//           </div>
//           <div className="col-md-4"></div>
//         </div>{" "}
//       </div>
//     </Fragment>
//   );
// }


// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Stepper from '@mui/material/Stepper';
// import Step from '@mui/material/Step';
// import StepLabel from '@mui/material/StepLabel';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';

// const steps = [
//   'Meeting up with friends',
//   'Travel Sri Lanka',
//   'A day at the university'
// ];

// const subSteps = {
//   'Meeting up with friends': [
//     'Reading module',
//     'Video module',
//     'Listening module'
//   ], 
//   'Travel Sri Lanka': [
//     'Reading module'
//   ],
//   'A day at the university': [
//     'ARRIVAL AT UNIVERSITY', 
//     'ENROLLING IN COURSES', 
//     'ATTENDING LECTURES', 
//     'DISCUSSION GROUP', 
//     'JOINING EXTRACURRICULAR ACTIVITIES'
//   ]
// };

// export default function DynamicStepper() {
//   const [activeMainStep, setActiveMainStep] = React.useState(0);
//   const [activeSubStep, setActiveSubStep] = React.useState(0);
//   const [completed, setCompleted] = React.useState({});

//   const currentSubSteps = subSteps[steps[activeMainStep]];

//   const totalSteps = steps.length + currentSubSteps.length;
//   const isLastStep = activeMainStep === steps.length - 1 && activeSubStep === currentSubSteps.length - 1;

//   const handleNext = () => {
//     const newActiveMainStep = isLastStep 
//       ? // It's the last step, reset everything
//         0 
//       : activeMainStep + 1;

//     const newActiveSubStep = isLastStep ? 0 : activeSubStep + 1;

//     setActiveMainStep(newActiveMainStep);
//     setActiveSubStep(newActiveSubStep);
//     setCompleted({ ...completed, [getCurrentStep()]: true });
//   };

//   const handleBack = () => {
//     let newActiveSubStep = activeSubStep - 1;
//     let newActiveMainStep = activeMainStep;
//     if (newActiveSubStep < 0) {
//       newActiveMainStep = activeMainStep - 1;
//       newActiveSubStep = subSteps[steps[newActiveMainStep]].length - 1;
//     }
//     setActiveMainStep(newActiveMainStep);
//     setActiveSubStep(newActiveSubStep);
//   };

//   const handleReset = () => {
//     setActiveMainStep(0);
//     setActiveSubStep(0);
//     setCompleted({});
//   };

//   const getCurrentStep = () => activeMainStep * (currentSubSteps.length + 1) + activeSubStep ;

//   return (
//     <Box sx={{ width: '100%' }}>
//       <Stepper nonLinear activeStep={getCurrentStep()} completed={completed}>
//         {steps.map((mainLabel, mainIndex) => (
//           <Step key={mainLabel} >
//             <StepLabel>{mainLabel}</StepLabel>
//             {subSteps[mainLabel].map((subLabel, subIndex) => (
//               <Step key={subLabel}>
//                 <StepLabel>{subLabel}</StepLabel>
//               </Step>
//             ))}
//           </Step>
//         ))}
//       </Stepper>
//       <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
//         <Button
//           color="inherit"
//           disabled={getCurrentStep() === 0}
//           onClick={handleBack}
//           sx={{ mr: 1 }}
//         >
//           Back
//         </Button>
//         <Box sx={{ flex: '1 1 auto' }} />
//         <Button onClick={handleNext}>
//           {isLastStep ? 'Finish' : 'Next'}
//         </Button>
//         {isLastStep && ( 
//           <Button onClick={handleReset} sx={{ ml: 1 }}>Reset</Button>
//         )}
//       </Box>
//     </Box>
//   );
// }


import React, { useState } from 'react';
import {
  createTheme,
  ThemeProvider,
  Stepper,
  Step,
  StepLabel,
  Button,
  CssBaseline, // For basic styling
} from '@mui/material';
import {useProgress} from '../providers/progressContext'


const theme = createTheme({
  overrides: {
    MuiStepIcon: {
      root: {
        '&.Mui-completed': {
          color: 'green',
          backgroundColor:'green', // Change to your desired green color
        },
        '&.Mui-active': {
          color: '#007bff', // Your desired active step color
        },
      },
    },
    MuiStepLabel: {
      root: {
        '&.Mui-completed': {
          color: '#253140', // Adjust completed label color
          '& .MuiStepLabel-icon': {
            color: 'green', // Apply color to completed icon
          },
        },
        '&.Mui-active': {
          color: '#007bff', // Adjust active label color (optional)
          '& .MuiStepLabel-icon': {
            color: '#007bff', // Apply color to active icon (optional)
          },
        },
      },
    },
  },
});

function NestedStepperWithButton() {

  const { 
    mainSteps,
    subSteps,
    activeMainStep,
    activeSubSteps,
    handleNext,
   } = useProgress();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div>
        <Stepper activeStep={activeMainStep} orientation="vertical">
          {mainSteps.map((mainStep, index) => (
            <Step key={mainStep}
            sx={{
              '& .MuiStepLabel-root .Mui-completed': {
                color: '#388e3c', // circle color (COMPLETED)
              },
              '& .MuiStepLabel-label.Mui-completed.MuiStepLabel-alternativeLabel':
                {
                  color: 'grey.500', // Just text label (COMPLETED)
                },
              '& .MuiStepLabel-root .Mui-active': {
                color: '#0288d1', // circle color (ACTIVE)
              },
              '& .MuiStepLabel-label.Mui-active.MuiStepLabel-alternativeLabel':
                {
                  color: 'common.white', // Just text label (ACTIVE)
                },
              '& .MuiStepLabel-root .Mui-active .MuiStepIcon-text': {
                fill: 'white', // circle's number (ACTIVE)
              },
            }}
            >
              <StepLabel >
                <div className="h5 font-weight-bold">
                {mainStep}
                </div>
                
              </StepLabel>
              <Stepper
                activeStep={activeMainStep >= index ? activeSubSteps[index] : -1}
                orientation="vertical"
                className="ms-3"
              >
                {subSteps[index].map((subStep) => (
                  <Step key={subStep}
                  sx={{
                    '& .MuiStepLabel-root .Mui-completed': {
                      color: '#388e3c', // circle color (COMPLETED)
                    },
                    '& .MuiStepLabel-label.Mui-completed.MuiStepLabel-alternativeLabel':
                      {
                        color: 'grey.500', // Just text label (COMPLETED)
                      },
                    '& .MuiStepLabel-root .Mui-active': {
                      color: '#0288d1', // circle color (ACTIVE)
                    },
                    '& .MuiStepLabel-label.Mui-active.MuiStepLabel-alternativeLabel':
                      {
                        color: 'common.white', // Just text label (ACTIVE)
                      },
                    '& .MuiStepLabel-root .Mui-active .MuiStepIcon-text': {
                      fill: 'white', // circle's number (ACTIVE)
                    },
                  }}>
                    <StepLabel>
                    <div
                        className="rounded-3 px-3"
                        style={{
                          backgroundColor: subStep === activeSubSteps.indexOf(activeSubSteps[index]) ? 'green' : '#eee', // Set background color
                          padding: '10px', // Adjust padding as needed
                          borderRadius: '5px', // Adjust border radius as needed
                          width:'fit-content'
                        }}
                      >
                        {subStep}
                      </div>
                    </StepLabel>
                  </Step>
                ))}
              </Stepper>
            </Step>
          ))}
        </Stepper>
        <Button
          variant="contained"
          color="primary"
          onClick={handleNext}
          disabled={activeMainStep === mainSteps.length - 1 && activeSubSteps[activeMainStep] === subSteps[activeMainStep].length}
        >
          Next
        </Button>
      </div>
    </ThemeProvider>
  );
}

export default NestedStepperWithButton;
