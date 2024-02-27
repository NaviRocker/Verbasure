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

function ProgressTimeLine() {
    const { 
            mainSteps,
            subSteps,
            activeMainStep,
            activeSubSteps,
            handleNext,
        handleProgressModalVisibility 
    } = useProgress();

    

    return (
        <div className='progress-timeline  overflow-x-hidden'
            style={{
                position:"absolute",
                top:0,
                left:0,
                backgroundColor:"rgba(0, 0, 0, .4)",
                display:"flex",
                justifyContent:"center",
                alignItems:"center",
                width:"100vw",
                height:"110vh",
                
            }}
        >
            <div 
            className='overflow-x-hidden shadow-lg position-absolute d-flex flex-column gap-3 bg-white justify-content-center align-items-center rounded-4 p-3'
                style={{
                    height:"500px",
                    width:"800px",                    
            }}  
            >
                    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div style={{
                    paddingTop:"32em",
                }}  >
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
        {/* <Button
          variant="contained"
          color="primary"
          onClick={handleNext}
          disabled={activeMainStep === mainSteps.length - 1 && activeSubSteps[activeMainStep] === subSteps[activeMainStep].length}
        >
          Next
        </Button> */}
      </div>
    </ThemeProvider>
                
                <div>
                    <button type='button' className='btn btn-primary rounded-2 w-100' onClick={handleProgressModalVisibility} >CONTINUE</button>

                </div>
            </div>
        </div>
    );
}

export default ProgressTimeLine;
