import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  Button,
  Container,
  Divider,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  Typography,
} from '@material-ui/core'
import { useRouter } from 'next/router'
import Steps from '../components/Steps'

export async function getServerSideProps() {
  const payment = await fetch(`https://my-json-server.typicode.com/guiphc/stoomChallenge/payment`).then(
    (res) => res.json(),
  )

  return { props: { payment } }
}

export default function Index({ payment = [] }) {
  const state = useSelector((state) => state)
  const dispatch = useDispatch()
  const router = useRouter()

  useEffect(() => {
    if (!state.dough) {
      return router.push('/')
    }

    if (!state.size) {
      return router.push('/size')
    }

    if (state.flavors.length < 3) {
      return router.push('/flavors')
    }
  }, [state])

  const handleChange = (event) => {
    dispatch({ type: 'CHANGE_PAYMENT', payment: event.target.value })
  }

  const handleClick = () => {
    dispatch({ type: 'INCREASE_POINTS', points: state.promoPoints })
    router.push('feedback')
  }

  return (
    <Container maxWidth="sm" style={{ padding: '32px 8px' }}>
      <Steps active={3} />
      <Typography variant="h4" gutterBottom>
        Confirmar pedido
      </Typography>
      <Typography variant="h6">Sua pizza é:</Typography>
      <Typography variant="body1">Massa: {state.dough}</Typography>
      <Typography variant="body1">Tamanho: {state.size}</Typography>
      <Typography variant="body1">Sabores: {state.flavors.map((i) => `${i}, `)}</Typography>

      <Divider style={{ margin: '32px 0' }} />

      {state.promoPoints && (
        <Typography variant="body1">Pontos que você vai ganhar: {state.promoPoints}</Typography>
      )}

      <Typography variant="h6">Pagamento:</Typography>
      <RadioGroup name="payment" onChange={handleChange} value={state.payment}>
        {payment.map((item) => (
          <FormControlLabel key={item} control={<Radio value={item} />} label={item} />
        ))}
      </RadioGroup>

      <Grid container justify="space-between">
        <div />

        <Button variant="contained" onClick={handleClick}>
          Comprar
        </Button>
      </Grid>
    </Container>
  )
}
