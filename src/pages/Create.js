import { Container, Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import React from 'react';

const useStyles = makeStyles({
  
})

export default function Create() {
  const classes = useStyles();
  return (
    <Container>
      {/* typography practice goes here*/}
      <Typography 
        variant="h5"
        color="textSecondary"
        gutterBottom
      >
        Create a new note
      </Typography>

      <Button
        className={classes.btn}
        onClick={() => console.log('you clicked me')}
        color="secondary" 
        variant="contained" 
        type="submit"
        endIcon={<KeyboardArrowRightIcon />}
      >
        Submit
      </Button>

      {/* icons */}
      {/* <br />
      <AcUnitOutlinedIcon />
      <AcUnitOutlinedIcon color="secondary" fontSize="large" />
      <AcUnitOutlinedIcon color="primary" fontSize="small" />
      <AcUnitOutlinedIcon color="action" />
      <AcUnitOutlinedIcon color="error" fontSize="large" />
      <AcUnitOutlinedIcon color="disabled" /> */}
    </Container>
  )
}
