import React, { useState } from 'react';
import { Grid, Button, TextField, InputAdornment, IconButton, Card } from '@material-ui/core';
import ClearIcon from '@material-ui/icons/Clear';
import './App.css';


interface State {
  First: string;
  Second: string;
  Third: string;
}

const mock = ["book one", "book two", "book three", "2iro2i3jr", "2lk3rj2lk3j", "2lkrjlk23jr", "2j3o2i3j4oi23j4", "23klj4oi23", "23ionojefe", "i3mciejr2", "foirkmv", "lskien", "oiemo", "o2ijroi", "j2oi3roisdf"]

const Nomination = () => {
  const [username, setUsername] = useState<string>('');
  const [roomKey, setRoomKey] = useState<string>('');
  const [usernameSaved, setSaved] = useState<boolean>(false) // TODO

  const [nominations, setNominations] = useState<State>({
    First: '',
    Second: '',
    Third: ''
  })
  const [nominationsSaved, setNomsSaved] = useState<boolean>(false); // TODO

  const [firstClick, setFirstClick] = useState<boolean>(true);
  const [votes, setVotes] = useState<string[]>(["", ""]);

  const handleChange = (n: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setNominations({ ...nominations, [n]: event.target.value })
  }
  const handleClearField = (n: string) => () => {
    setNominations({ ...nominations, [n]: '' })
  }
  console.log(votes)
  return (
    // USERNAME PHASE
    !usernameSaved ?
    <Grid className="UsernamePage">
      <Grid className="Username">
        <TextField
          label="Your Name"
          variant="outlined"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)}
          fullWidth
        />
        <TextField
          label="Room Key"
          variant="outlined"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setRoomKey(e.target.value)}
          fullWidth
        />
      </Grid>
      <Button onClick={() => setSaved(true)} variant="outlined" className="Button">
        Continue
      </Button>
    </Grid> :

    // NOMINATION PHASE
    (!nominationsSaved ?
      <Grid>
        { ['First','Second','Third'].map(n => (
          <Grid className="Nomination">
              { /*  <Autocomplete /> */ }
              <TextField
                label={`${n} Nomination`}
                onChange={handleChange(n)}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={handleClearField(n)}>
                        <ClearIcon />
                      </IconButton>
                    </InputAdornment>
                  )
                }}
                fullWidth
              />
          </Grid>
        ))}
        <Button
          onClick={() => setNomsSaved(true)}
          variant="outlined"
          className="Button"
        >Continue</Button>
      </Grid> :

      // VOTING PHASE
      <Grid>
        <Grid className="ChoiceContainer">
          {mock.map((n, i) => (
            <Card
              key={n}
              raised={votes.includes(n) ? true : false}
              className={"Choice"}
              onClick={() => {
                setFirstClick(b => votes.includes(n) ? true : !b);
                setVotes(v => v.includes(n) ? [v[1], v[0]] : firstClick ? [n, v[1]] : [v[0], n]);
              }}
            >
              <Grid style={{ display: "flex" }}>
              <Grid style={{ flexGrow: 10 }}>
                {n}
              </Grid>
              { votes.includes(n) ?
                <Grid style={{ flexGrow: 1  }}>
                  {votes.indexOf(n)+1}
                </Grid>
                : ''
              }
              </Grid>
          </Card>
          ))}
        </Grid>
        <Button
          onClick={() => console.log('unimplemented')}
          variant="outlined"
          className="Button"
        >Vote</Button>
      </Grid>
    )
  )
}

export default Nomination;
