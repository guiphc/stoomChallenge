import React from 'react'
import { Divider, useMediaQuery, Step, StepLabel, Stepper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  stepper: {
    [theme.breakpoints.down('sm')]: {
      padding: '24px 0',
      flexWrap: 'wrap',
    },
  },
  step: {
    [theme.breakpoints.down('sm')]: {
      padding: 8,
    },
  },
}))

export default function Steps({ active }) {
  const classes = useStyles()
  const matches = useMediaQuery('(min-width:600px)')

  return (
    <>
      <Stepper activeStep={active} className={classes.stepper} style={{}}>
        <Step className={classes.step}>
          <StepLabel>{matches && 'Selecione sua '}massa</StepLabel>
        </Step>
        <Step className={classes.step}>
          <StepLabel>{matches && 'Selecione o '}tamanho</StepLabel>
        </Step>
        <Step className={classes.step}>
          <StepLabel>{matches && 'Selecione o '}recheio</StepLabel>
        </Step>
        <Step className={classes.step}>
          <StepLabel>pagamento</StepLabel>
        </Step>
      </Stepper>

      <Divider style={{ margin: '16px 0' }} />
    </>
  )
}
