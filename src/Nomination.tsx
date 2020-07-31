import React from 'react';
import { Grid, Button } from '@material-ui/core';
import './App.css';

const Nomination = () => {
  return (
    <Grid>
      { ['first','second','third'].map(v => (
        <Grid className="Nomination" justify="center" container>
          <Grid item>
            Input
          </Grid>
          <Grid item>
            X
          </Grid>
        </Grid>
      ))}
      <Button
        onClick={() => console.log('unimplemented')}
        variant="outlined"
        className="Continue"
      >Continue</Button>
    </Grid>
  )
}

export default Nomination;
