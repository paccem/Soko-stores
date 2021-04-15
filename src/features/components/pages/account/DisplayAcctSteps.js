import React from 'react'
import useStyles from './styles'
import { useSelector} from 'react-redux'
import { Paper, Stepper, Step, StepLabel, Typography, StepContent } from '@material-ui/core'
import {getStepContent, getStepsHeader } from './AcctStepContent'




// const steps = ['Accounts', 'Delivery Address', 'Payment']

const Account = () => {
    
    const classes = useStyles();
    const steps = getStepsHeader();
    const user = useSelector(state => state.users.isLoggedOn)
    const activeStep = useSelector(state => state.users.activeStep)

  return (
    <div className="container">
        <div className="col-md-8 border-end">
            <div className={classes.root}>
            <Stepper activeStep={activeStep} orientation="vertical">
                {steps.map((label, index) => (
                <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                    <StepContent className={classes.content}>
                    <Typography>{getStepContent(activeStep)}</Typography>
                    </StepContent>
                </Step>
                ))}
            </Stepper>
            {activeStep === steps.length && (
                <Paper square elevation={0} className={classes.resetContainer}>
                    <Typography>All steps completed - you&apos;re finished</Typography>
                </Paper>
            )}
            </div>
        </div>
    </div>
  );
}
export default Account







  

 