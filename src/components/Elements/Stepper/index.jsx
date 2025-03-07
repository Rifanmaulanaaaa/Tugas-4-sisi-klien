import { useState } from 'react';
import { useTheme } from '@mui/material/styles';

import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

const Stepper = (props) => {
    const { desc } = props;

    const theme = useTheme();
    const [activeStep, setActiveStep] = useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

const dataNum = desc.length;

    return (
        <>
        <div>{desc [activeStep]} </div>
        <MobileStepper
            variant="dots"
            steps={dataNum}
            position="static"
            activeStep={activeStep}
            sx={{ 
                maxWidth: "100%", flexGrow: 1,
                "& .MuiMobileStepper-dot" : {
                    backgroundColor : "darkgrey",
                },
                "& .MuiMobileStepper-dotActive" : {
                    backgroundColor : "#299D91",
                },
             }}
            nextButton={
                <Button size="small" onClick={handleNext} sx={{color: "black", fontWeight : "bold"}} disabled={activeStep === dataNum}>
                    Next
                    {theme.direction === 'rtl' ? (
                        <KeyboardArrowLeft />
                    ) : (
                        <KeyboardArrowRight />
                    )}
                </Button>
            }
            backButton={
                <Button size="small" onClick={handleBack} sx={{ color : "black", fontWeight : "bold"}} disabled={activeStep === 0}>
                    {theme.direction === 'rtl' ? (
                        <KeyboardArrowRight />
                    ) : (
                        <KeyboardArrowLeft />
                    )}
                    Previous
                </Button>
            }
        />
    </>
    );
}

export default Stepper