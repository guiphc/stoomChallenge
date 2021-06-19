import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
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

export default function Index() {
  const state = useSelector((state) => state)
  const dispatch = useDispatch()
  const doughs = ['tradicional', 'integral']

  const handleChange = (event) => {
    dispatch({ type: 'UPDATE', dough: event.target.value })
  }

  return (
    <Container maxWidth="sm">
      <DailyPizza />

      <Divider style={{ margin: '48px 0 32px 0' }} />
      <Typography variant="h4" align="center">
        Ou monte sua pizza
      </Typography>

      <Steps active={0} />

      <Typography variant="h5" color="primary">
        Selecione sua massa <Chip label={`${state.dough ? 1 : 0}/1`} />
      </Typography>

      <RadioGroup name="dough" onChange={handleChange} value={state.dough}>
        {doughs.map((item) => (
          <FormControlLabel key={item} control={<Radio value={item} />} label={item} />
        ))}
      </RadioGroup>

      <Divider style={{ margin: '16px 0 ' }} />

      <Grid container justify="space-between">
        <div />

        <Link href="size">
          <Button variant="contained" disabled={!state.dough}>
            Selecionar o tamanho
          </Button>
        </Link>
      </Grid>
    </Container>
  )
}
