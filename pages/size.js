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
import Steps from '../components/Steps'
import Link from 'next/link'

export async function getServerSideProps() {
  const response = await fetch(`https://my-json-server.typicode.com/guiphc/stoomChallenge/sizes`).then(
    (res) => res.json(),
  )

  return { props: { sizes: response } }
}
export default function Index({ sizes }) {
  const state = useSelector((state) => state)
  const dispatch = useDispatch()

  const handleChange = (event) => {
    dispatch({ type: 'UPDATE', size: event.target.value })
  }

  if (!sizes) {
    return <LinearProgress />
  }

  return (
    <Container maxWidth="sm">
      <Steps active={1} />

      <Typography variant="h5" color="primary">
        Selecione o tamanho <Chip label={`${state.size ? 1 : 0}/1`} />
      </Typography>

      <RadioGroup name="size" onChange={handleChange} value={state.size}>
        {sizes.map((item) => (
          <FormControlLabel key={item} control={<Radio value={item} />} label={item} />
        ))}
      </RadioGroup>

      <Divider style={{ margin: '16px 0 ' }} />

      <Grid container justify="space-between">
        <Link href="/">
          <Button>Voltar</Button>
        </Link>

        <Link href="/flavors">
          <Button variant="contained" disabled={!state.size}>
            Selecionar sabor
          </Button>
        </Link>
      </Grid>
    </Container>
  )
}
