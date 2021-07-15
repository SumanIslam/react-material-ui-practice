import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import React from 'react';
import { Container } from '@material-ui/core';

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
      >
        Submit
      </Button>

      {/* buttons practice goes here
      <Button variant="contained">Default</Button>
      <Button variant="contained" color='primary'>Primary</Button>
      <Button variant="contained" color = 'secondary'>secondary</Button>
      <Button color="primary">submit</Button>
      <Button color="secondary" variant="outlined">submit</Button>

      <ButtonGroup color="primary" variant="text">
        <Button>1</Button>
        <Button>2</Button>
        <Button>3</Button>
      </ButtonGroup> */}
    </Container>
  )
}
