import { Typography } from '@material-ui/core';
import React from 'react';

export default function Create() {
  return (
    <div>
      <Typography 
        variant="h1"
        component="h2"
        color="textSecondary"
        align="center"
        gutterBottom
      >
        Create a new note
      </Typography>
    </div>
  )
}
