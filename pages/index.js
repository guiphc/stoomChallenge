import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import {
  Button,
  Chip,
  Container,
  Divider,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  Typography,
} from '@material-ui/core'
import Steps from '../components/Steps'
import Link from 'next/link'

import DailyPizza from '../components/DailyPizza'

const useStyles = makeStyles(() => ({}))

export default function Index() {
  const classes = useStyles()
  const state = useSelector((state) => state)
  const dispatch = useDispatch()
  const doughts = ['tradicional', 'integral']

  const handleNext = () => {
    dispatch({ type: 'NEXT' })
  }

  const handleBack = () => {
    dispatch({ type: 'PREV' })
  }

  const handleReset = () => {
    dispatch({ type: 'RESET' })
  }

  const handleChange = (event) => {
    dispatch({ type: 'UPDATE', dought: event.target.value })
  }

  return (
    <Container maxWidth="sm" className={classes.root}>
      <DailyPizza />

      <Divider style={{ margin: '48px 0 32px 0' }} />
      <Typography variant="h4" align="center">
        Ou monte sua pizza
      </Typography>

      <Steps active={0} />

      <Typography variant="h5" color="primary">
        Selecione sua massa <Chip label="0/1" />
      </Typography>

      <RadioGroup name="dought" onChange={handleChange} value={state.dought}>
        {doughts.map((item) => (
          <FormControlLabel key={item} control={<Radio value={item} />} label={item} />
        ))}
      </RadioGroup>

      <Divider style={{ margin: '16px 0 ' }} />

      <Grid container justify="space-between">
        <div />

        <Link href="size">
          <Button className={classes.button} variant="contained" disabled={!state.dought}>
            Selecionar o tamanho
          </Button>
        </Link>
      </Grid>
    </Container>
  )
}
