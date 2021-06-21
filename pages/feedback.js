import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Button, Container, Grid, Typography } from '@material-ui/core'
import { useRouter } from 'next/router'
import Link from 'next/link'

export default function Index() {
  const state = useSelector((state) => state)
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

  return (
    <Container maxWidth="sm" style={{ padding: '32px 8px' }}>
      <Typography variant="h4" gutterBottom>
        Obrigado por pedir com a gente!
      </Typography>
      <Typography variant="h6">Seu pedido foi:</Typography>
      <Typography variant="body1">Massa: {state.dough}</Typography>
      <Typography variant="body1">Tamanho: {state.size}</Typography>
      <Typography variant="body1">Sabores: {state.flavors.map((i) => `${i}, `)}</Typography>
      <br />
      <Typography variant="body1">Pagamento: {state.payment}</Typography>
      <br />
      {state.promoPoints && (
        <Typography variant="body1">Pontos que você ganhou: {state.promoPoints}</Typography>
      )}

      <Grid container justify="space-between">
        <div />

        <Link href="/">
          <Button variant="contained">Pedir mais</Button>
        </Link>
      </Grid>
    </Container>
  )
}
