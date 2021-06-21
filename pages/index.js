import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  Button,
  Chip,
  Container,
  Divider,
  FormControlLabel,
  Grid,
  LinearProgress,
  Radio,
  RadioGroup,
  Typography,
} from '@material-ui/core'
import Link from 'next/link'
import DailyPizza from '../components/DailyPizza'
import Steps from '../components/Steps'

export async function getServerSideProps() {
  const doughs = await fetch(`https://my-json-server.typicode.com/guiphc/stoomChallenge/doughs`).then((res) =>
    res.json(),
  )
  const dailyPizza = await fetch(`https://my-json-server.typicode.com/guiphc/stoomChallenge/dailyPizza`).then(
    (res) => res.json(),
  )

  return { props: { doughs, dailyPizza } }
}

export default function Index({ doughs, dailyPizza }) {
  const state = useSelector((state) => state)
  const dispatch = useDispatch()

  const handleChange = (event) => {
    dispatch({ type: 'UPDATE', dough: event.target.value })
  }

  if (!doughs) {
    return <LinearProgress />
  }

  return (
    <Container maxWidth="sm">
      <DailyPizza dailyPizza={dailyPizza} />

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
      <br />
      <br />
    </Container>
  )
}
