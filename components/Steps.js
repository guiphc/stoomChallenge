import React from 'react'
import { Divider, useMediaQuery, Step, StepLabel, Stepper } from '@material-ui/core'

export default function Steps({ active }) {
  const matches = useMediaQuery('(min-width:600px)')

  return (
    <>
      <Stepper
        activeStep={active}
        style={{ padding: !matches ? '24px 0' : 24, flexWrap: !matches ? 'wrap' : 'inherit' }}
      >
        <Step>
          <StepLabel>{matches && 'Selecione sua '}massa</StepLabel>
        </Step>
        <Step>
          <StepLabel>{matches && 'Selecione o '}tamanho</StepLabel>
        </Step>
        <Step>
          <StepLabel>{matches && 'Selecione o '}recheio</StepLabel>
        </Step>
        <Step>
          <StepLabel>pagamento</StepLabel>
        </Step>
      </Stepper>

      <Divider style={{ margin: '16px 0' }} />
    </>
  )
}
