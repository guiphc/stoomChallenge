import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Button, Grid, LinearProgress, Paper, Typography } from '@material-ui/core'
import { Check } from '@material-ui/icons'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'

const useStyles = makeStyles(() => ({
  dailyPizza: {
    position: 'relative',
    padding: '8px 16px',
    background: '#E6E7EF',
    marginTop: '-40px',
  },
  stamp: {
    position: 'absolute',
    top: -24,
    right: -8,
    padding: 16,
    borderRadius: '50%',
    background: '#0099D0',
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center',
    color: '#fff',
    '& small': {
      display: 'block',
      fontSize: 16,
      fontWeight: '400',
    },
  },

  image: {
    overflow: 'hidden',
    borderTopLeftRadius: '16px',
    borderBottomLeftRadius: '16px',
    width: 160,
    height: 240,
    '& img': {
      maxHeight: '100%',
    },
  },
  smallText: {
    position: 'absolute',
    bottom: -24,
    right: 0,
  },
}))

export default function DailyPizza({ dailyPizza }) {
  const classes = useStyles()
  const router = useRouter()
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch({ type: 'BUY_DAILYPIZZA', dailyPizza })
    router.push('/feedback')
  }

  if (!dailyPizza) {
    return <LinearProgress />
  }

  return (
    <Paper elevation={0} className={classes.dailyPizza}>
      <div className={classes.stamp}>
        {dailyPizza.points}
        <small>pontos</small>
      </div>
      <Typography variant="h6" style={{ marginBottom: 24 }}>
        Pizza do dia:
      </Typography>
      <Grid container>
        <Grid item xs={4}>
          <div className={classes.image}>
            <img
              src="https://camo.githubusercontent.com/6ac5ba8b6460638681d4882bb0cf74188c97f60c80117afee7c318d2259509ff/68747470733a2f2f696d672e70697a7a612f3430302f343030"
              alt={`Pizza do dia, sabor ${dailyPizza.flavors.join(', ')}`}
            />
          </div>
        </Grid>
        <Grid item xs={8}>
          <Typography variant="h5">Pizza do dia:</Typography>
          <Typography variant="subtitle2">Massa:</Typography>
          <Typography variant="body1">{dailyPizza.dough}</Typography>
          <Typography variant="subtitle2">Ingredientes:</Typography>
          <Typography variant="body1">{dailyPizza.flavors.join(', ')}</Typography>
          <Typography variant="subtitle2">Tamanho:</Typography>
          <Typography variant="body1">{dailyPizza.size}</Typography>

          <Grid container justify="space-between" alignItems="center" style={{ marginTop: 16 }}>
            <h3>
              R$ <strong>{dailyPizza.price}</strong>
            </h3>
            <Button variant="contained" endIcon={<Check />} onClick={handleClick}>
              quero!
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Typography variant="caption" className={classes.smallText}>
        ganhe pontos ao concluir o seu pedido *
      </Typography>
    </Paper>
  )
}
