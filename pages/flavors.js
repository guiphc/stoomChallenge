import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  Button,
  Checkbox,
  Chip,
  Container,
  Divider,
  FormControlLabel,
  Grid,
  LinearProgress,
  Typography,
} from '@material-ui/core'
import Steps from '../components/Steps'
import Link from 'next/link'

export async function getServerSideProps() {
  const response = await fetch(`https://my-json-server.typicode.com/guiphc/stoomChallenge/flavors`).then(
    (res) => res.json(),
  )

  return { props: { flavors: response } }
}

export default function Flavors({ flavors }) {
  const state = useSelector((state) => state)
  const dispatch = useDispatch()

  const handleChange = ({ target: { checked, name } }) => {
    if (checked) {
      if (state.flavors.length >= 3) {
        return alert('Máximo 3 sabores')
      }

      return dispatch({ type: 'ADD_FLAVOR', flavor: name })
    }

    dispatch({ type: 'REMOVE_FLAVOR', flavor: name })
  }

  if (!flavors) {
    return <LinearProgress />
  }

  return (
    <Container maxWidth="sm">
      <Steps active={2} />

      <Typography variant="h5" color="primary">
        Selecione os sabores <Chip label={`${state.flavors.length}/3`} />
      </Typography>

      {flavors.map((flavor) => (
        <FormControlLabel
          key={flavor}
          label={flavor}
          control={
            <Checkbox checked={state.flavors.includes(flavor)} name={flavor} onChange={handleChange} />
          }
        />
      ))}

      <Divider style={{ margin: '16px 0 ' }} />

      <Grid container justify="space-between">
        <Link href="/size">
          <Button>Voltar</Button>
        </Link>

        <Link href="/feedback">
          <Button variant="contained" disabled={state.flavors.length < 3}>
            Pedir
          </Button>
        </Link>
      </Grid>
    </Container>
  )
}
