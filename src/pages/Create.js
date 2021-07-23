import { Container, TextField, Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import { makeStyles } from '@material-ui/core/styles';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import React, { useState } from "react";

const useStyles = makeStyles({
  field: {
    marginTop: '20px',
    marginBottom: '20px',
    display: 'block',
  },
})

export default function Create() {
  const classes = useStyles();
  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');
  const [titleError, setTitleError] = useState(false);
  const [detailsError, setDetailsError] = useState(false);
  const [category, setCategory]= useState('todos');

  const handleSubmit = (e) => {
    e.preventDefault();
    setTitleError(false);
    setDetailsError(false);

    if(title == '') {
      setTitleError(true);
    }
    if(details == '') {
      setDetailsError(true);
    }
    if(title && details) {
      console.log(title, details, category);
    }
  }
  return (
    <Container>
      <Typography 
        variant="h5"
        color="textSecondary"
        gutterBottom
      >
        Create a new note
      </Typography>

      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          className={classes.field}
          label="Note Title"
          variant="outlined"
          color="secondary"
          onChange={(e) => setTitle(e.target.value)}
          fullWidth
          required
          error={titleError}
        />

        <TextField
          className={classes.field}
          label="Details"
          variant="outlined"
          color="secondary"
          onChange={(e) => setDetails(e.target.value)}
          fullWidth
          required
          multiline
          rows={3}
          error={detailsError}
        />

        <FormControl component="fieldset" className={classes.field}>
          <FormLabel component="legend">Note Category</FormLabel>
          <RadioGroup value={category} onChange={(e) => setCategory(e.target.value)}>
            <FormControlLabel
              control={<Radio value="money"/>}
              label="Money"
            />
            <FormControlLabel
              control={<Radio value="todos" />}
              label="Todos"
            />
            <FormControlLabel
              control={<Radio value="reminder" />}
              label="Reminder"
            />
          </RadioGroup>
        </FormControl>
        
        <Button
        className={classes.btn}
        color="secondary" 
        variant="contained" 
        type="submit"
        endIcon={<KeyboardArrowRightIcon />}
      >
        Submit
      </Button>
      </form>
    </Container>
  )
}
