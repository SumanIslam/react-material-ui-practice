import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import React from 'react';
import { Container } from '@material-ui/core';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';

export default function Create() {
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
