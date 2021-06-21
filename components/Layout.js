import React from 'react'
import { useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Typography } from '@material-ui/core'
import { LocalPizza } from '@material-ui/icons'
import Link from 'next/link'

const useStyles = makeStyles((theme) => ({
  header: {
    padding: 32,
    paddingBottom: 80,
    background: theme.palette.primary.main,
    color: '#fff',
  },
  logo: {
    '& div': { cursor: 'pointer' },
  },
  stoomPoints: {
    [theme.breakpoints.up('sm')]: {
      textAlign: 'right',
    },
  },
}))

export default function Layout({ children }) {
  const classes = useStyles()
  const state = useSelector((state) => state)

  return (
    <>
      <div className={classes.header}>
        <Grid container>
          <Link href="/">
            <Grid item container xs={12} sm={8} className={classes.logo}>
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
          </Link>

          <Grid item xs={12} sm={4} className={classes.stoomPoints}>
            <Typography variant="h6" color="secondary">
              StoomPoints
            </Typography>
            <Typography variant="body1" color="secondary">
              {state.points} pontos.
            </Typography>
          </Grid>
        </Grid>
      </div>

      {children}
    </>
  )
}
