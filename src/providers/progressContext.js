import React, { createContext, useState, useContext,useEffect } from 'react';

// Step 1: Create a context
const ProgressContext = createContext();

// Step 2: Create a provider component
const ProgressProvider = ({ children }) => {

    const mainSteps = [
        'Meeting up with friends',
        'Travel Sri Lanka',
        'A day at the university',
      ];
      
      const subSteps = [
        ['Reading module', 'Video module', 'Listening module'],
        ['Reading module'],
        [
          'Arrival at university',
          'Enrolling in courses',
          'Attending lectures',
          'Discussion group',
          'Joining extracurricular activities',
        ],
      ];

      const [currentStep, setCurrentStep] = useState(1);
      const [activeMainStep, setActiveMainStep] = useState(0);
      const [activeSubSteps, setActiveSubSteps] = useState(Array(mainSteps.length).fill(0));
      const [completedMainSteps, setCompletedMainSteps] = useState([]);
      const [completedSubSteps, setCompletedSubSteps] = useState([]);

      const handleNext = () => {
        if (completedSubSteps.includes(currentStep)) {
         return;
        }
        setCompletedSubSteps([...completedSubSteps, currentStep]);
        setCurrentStep(prevStep => prevStep + 1);
        // If all steps are completed, do nothing
        if (activeMainStep === mainSteps.length - 1 && activeSubSteps[activeMainStep] === subSteps[activeMainStep].length) {
          console.log('All steps completed');
          return;
        }
    
        // Get the current substep index
        const currentSubStep = activeSubSteps[activeMainStep];
    
        // Check if the current step is already completed
        if (currentSubStep === subSteps[activeMainStep].length - 1 && activeMainStep === completedMainSteps.length && currentSubStep === completedSubSteps[activeMainStep]) {
          console.log('Step already completed');
          return;
        }
    
        // Increment substep index for the current main step
        if (currentSubStep < subSteps[activeMainStep].length - 1) {
          const updatedSubSteps = [...activeSubSteps];
          updatedSubSteps[activeMainStep] = currentSubStep + 1;
          setActiveSubSteps(updatedSubSteps);
        } else if (activeMainStep < mainSteps.length - 1) {
          // Move to the next main step and mark all substeps of the previous main step as completed
          setActiveMainStep(activeMainStep + 1);
          setActiveSubSteps((prevSubSteps) => {
            const updatedSubSteps = [...prevSubSteps];
            updatedSubSteps[activeMainStep] = subSteps[activeMainStep].length;
            return updatedSubSteps;
          });
          // Store the completed step
          setCompletedMainSteps([...completedMainSteps, activeMainStep]);
          setCompletedSubSteps((prevCompletedSubSteps) => {
            const updatedCompletedSubSteps = [...prevCompletedSubSteps];
            updatedCompletedSubSteps[activeMainStep] = subSteps[activeMainStep].length;
            return updatedCompletedSubSteps;
          });
        } else {
          // Handle the final step
          setActiveMainStep(activeMainStep + 1);
          setActiveSubSteps((prevSubSteps) => {
            const updatedSubSteps = [...prevSubSteps];
            updatedSubSteps[activeMainStep] = subSteps[activeMainStep].length;
            return updatedSubSteps;
          });
          // Store the completed step
          setCompletedMainSteps([...completedMainSteps, activeMainStep]);
          setCompletedSubSteps((prevCompletedSubSteps) => {
            const updatedCompletedSubSteps = [...prevCompletedSubSteps];
            updatedCompletedSubSteps[activeMainStep] = subSteps[activeMainStep].length;
            return updatedCompletedSubSteps;
          });
        }
      };
      // const handleNext = () => {
      //   // Handle edge cases
      //   if (activeMainStep === mainSteps.length - 1 && activeSubSteps[activeMainStep] === subSteps[activeMainStep].length) {
      //     console.log('All steps completed');
      //     return;
      //   }
    
      //   const currentSubStep = activeSubSteps[activeMainStep];
      //   if (currentSubStep < subSteps[activeMainStep].length - 1) {
      //     // Increment substep index for the current main step
      //     const updatedSubSteps = [...activeSubSteps];
      //     updatedSubSteps[activeMainStep] = currentSubStep + 1;
      //     setActiveSubSteps(updatedSubSteps);
      //   } else if (activeMainStep < mainSteps.length - 1) {
      //     // Move to the next main step and mark all substeps of the previous main step as completed
      //     setActiveMainStep(activeMainStep + 1);
      //     setActiveSubSteps((prevSubSteps) => {
      //       const updatedSubSteps = [...prevSubSteps];
      //       updatedSubSteps[activeMainStep] = subSteps[activeMainStep].length;
      //       return updatedSubSteps;
      //     });
      //   } else {
      //     // Handle the final step
      //     setActiveMainStep(activeMainStep + 1);
      //     setActiveSubSteps((prevSubSteps) => {
      //       const updatedSubSteps = [...prevSubSteps];
      //       updatedSubSteps[activeMainStep] = subSteps[activeMainStep].length;
      //       return updatedSubSteps;
      //     });
      //   }
      // };
  const [isProgressModalVisible,setIsProgressModalVisible] = useState(false);

  const handleProgressModalVisibility = () => {
    setIsProgressModalVisible(!isProgressModalVisible)
  }
//   const CloseProgressModalVisibility = () => {
//     setIsProgressModalVisible(false)
//   }

  
  const value = {
    mainSteps,
    subSteps,
    activeMainStep,
    activeSubSteps,
    handleNext,
    isProgressModalVisible,
    handleProgressModalVisibility,
    setCurrentStep
  };

  return (
    <ProgressContext.Provider value={value}>
      {children}
    </ProgressContext.Provider>
  );
};

const useProgress = () => useContext(ProgressContext);

export { ProgressProvider, useProgress };
