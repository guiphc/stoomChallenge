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
  const sizes = ['broto', 'grande']

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
    dispatch({ type: 'UPDATE', size: event.target.value })
  }

  return (
    <Container maxWidth="sm" className={classes.root}>
      <Steps active={0} />

      <Divider style={{ margin: '16px 0' }} />

      <Typography variant="h5" color="primary">
        Selecione o tamanho <Chip label="0/1" />
      </Typography>

      <RadioGroup name="size" onChange={handleChange} value={state.size}>
        {sizes.map((item) => (
          <FormControlLabel key={item} control={<Radio value={item} />} label={item} />
        ))}
      </RadioGroup>

      <Divider style={{ margin: '16px 0 ' }} />

      <Grid container justify="space-between">
        <Link href="/">
          <Button className={classes.button}>Voltar</Button>
        </Link>

        <Link href="/flavors">
          <Button className={classes.button} variant="contained" disabled={!state.size}>
            Selecionar sabor
          </Button>
        </Link>
      </Grid>
    </Container>
  )
}
