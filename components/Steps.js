import React from 'react'
import { Step, StepLabel, Stepper } from '@material-ui/core'

export default function Steps({ active }) {
  return (
    <Stepper activeStep={active}>
      <Step>
        <StepLabel>Selecione sua massa</StepLabel>
      </Step>
      <Step>
        <StepLabel>Selecione o tamanho</StepLabel>
      </Step>
      <Step>
        <StepLabel>Selecione o recheio</StepLabel>
      </Step>
    </Stepper>
  )
}
