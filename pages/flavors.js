import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import {
  Button,
  Checkbox,
  Chip,
  Container,
  Divider,
  FormControlLabel,
  Grid,
  Typography,
} from '@material-ui/core'
import Steps from '../components/Steps'
import Link from 'next/link'

const useStyles = makeStyles(() => ({}))

export default function Flavors() {
  const classes = useStyles()
  const state = useSelector((state) => state)
  const dispatch = useDispatch()
  const flavors = ['pepperoni', 'abacate', '4 queijos', 'mexicana']

  const handleChange = ({ target: { checked, name } }) => {
    if (checked) {
      if (state.flavors.length >= 3) {
        return alert('Máximo 3 sabores')
      }

      return dispatch({ type: 'ADD_FLAVOR', flavor: name })
    }

    dispatch({ type: 'REMOVE_FLAVOR', flavor: name })
  }

  return (
    <Container maxWidth="sm" className={classes.root}>
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
          <Button className={classes.button}>Voltar</Button>
        </Link>

        <Link href="/feedback">
          <Button className={classes.button} variant="contained" disabled={state.flavors.length < 3}>
            Pedir
          </Button>
        </Link>
      </Grid>
    </Container>
  )
}
