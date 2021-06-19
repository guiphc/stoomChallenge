import React from 'react'
import { useMediaQuery, Step, StepLabel, Stepper } from '@material-ui/core'

export default function Steps({ active }) {
  const matches = useMediaQuery('(min-width:600px)')

  return (
    <Stepper activeStep={active} style={{ padding: !matches ? '24px 0' : 24 }}>
      <Step>
        <StepLabel>{matches && 'Selecione sua '}massa</StepLabel>
      </Step>
      <Step>
        <StepLabel>{matches && 'Selecione o '}tamanho</StepLabel>
      </Step>
      <Step>
        <StepLabel>{matches && 'Selecione o '}recheio</StepLabel>
      </Step>
    </Stepper>
  )
}
