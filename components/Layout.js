import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Button, Grid, Typography } from '@material-ui/core'
import { LocalPizza } from '@material-ui/icons'

const useStyles = makeStyles((theme) => ({
  header: {
    padding: 32,
    paddingBottom: 80,
    background: theme.palette.primary.main,
    color: '#fff',
  },
}))

export default function Layout({ children }) {
  const classes = useStyles()

  return (
    <>
      <div className={classes.header}>
        <Grid container>
          <Grid item container xs={8}>
            <Grid item>
              <LocalPizza color="secondary" style={{ fontSize: '64px' }} />
            </Grid>
            <Grid item>
              <Typography component="h1" variant="h3">
                PizzaStoom
              </Typography>

              <Typography variant="h6" color="secondary">
                é pizza, sim.
              </Typography>
            </Grid>
          </Grid>

          <Grid item align="right" xs={4}>
            <Typography variant="h6" color="secondary">
              StoomPoints
            </Typography>
            <Typography variant="body1" color="secondary">
              0 pontos.
            </Typography>
          </Grid>
        </Grid>
      </div>

      {children}
    </>
  )
}
