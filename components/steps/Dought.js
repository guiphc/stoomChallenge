import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Button, Typography } from '@material-ui/core'
import { Check } from '@material-ui/icons'

export default function Dought({ classes, handleNext }) {
  return (
    <>
      <Typography className={classes.instructions}> </Typography>
      <Grid container justify="space-between">
        <Button disabled className={classes.button}>
          Voltar
        </Button>

        <Button variant="contained" onClick={handleNext} className={classes.button}>
          Selecionar sabor
        </Button>
      </Grid>
    </>
  )
}
