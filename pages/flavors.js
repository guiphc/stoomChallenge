import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  Button,
  Checkbox,
  Chip,
  Container,
  Divider,
  Grid,
  InputLabel,
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

      {flavors.map(({ name, ingredients, price }) => (
        <Grid container key={name} style={{ marginBottom: 8 }} alignItems="center">
          <Grid item>
            <Checkbox checked={state.flavors.includes(name)} name={name} onChange={handleChange} id={name} />
          </Grid>
          <Grid item>
            <InputLabel htmlFor={name} style={{ cursor: 'pointer' }}>
              Sabor: {name}
            </InputLabel>
            <Typography variant="caption">Ingredientes: {ingredients.map((i) => `${i}, `)}</Typography>
            <Typography variant="h6">{price}</Typography>
          </Grid>
        </Grid>
      ))}

      <Divider style={{ margin: '16px 0 ' }} />

      <Grid container justify="space-between">
        <Link href="/size">
          <Button>Voltar</Button>
        </Link>

        <Link href="/payment">
          <Button variant="contained" disabled={state.flavors.length < 3}>
            Finalizar
          </Button>
        </Link>
      </Grid>
    </Container>
  )
}
