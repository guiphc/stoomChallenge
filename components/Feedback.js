import React from 'react'
// import { makeStyles } from '@material-ui/core/styles'
import { Button, Typography } from '@material-ui/core'

export default function Feedback() {
  return (
    <div>
      <Typography className={classes.instructions}>All steps completed - you&apos;re finished</Typography>
      <Button onClick={handleReset} className={classes.button}>
        Reset
      </Button>
    </div>
  )
}
