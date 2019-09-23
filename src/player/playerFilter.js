import React, { useState } from 'react';
import {
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  withStyles,
  Paper
} from '@material-ui/core';
import playerStore from './store';
import { filterPlayers } from './actions';
import MaskedTextField from '../common/components/maskedTextField';
import withErrorBoundary from '../common/enhancers/withErrorBoundary';

const PlayerFilter = (props) => {
  const { classes, positions } = props;
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [position, setPosition] = useState('');
  const [error, setError] = useState('');

  const onNameChanged = (e) => {
    setName(e.target.value);
  };

  const onAgeChanged = (e) => {
    setAge(e.target.value);
  };

  const onPositionChanged = (e) => {
    setPosition(e.target.value);
  };

  const validateAgeRange = () => {
    const p = /^(1[8-9]|[23]\d|4[0])$/;
    if (age.trim() === '' || p.test(age)) {
      setError('');
      return true;
    }
    setError('Only numbers from 18 to 40.');
    return false;
  };

  const onSearch = () => {
    if (validateAgeRange()) {
      playerStore.dispatch(filterPlayers({ name, position, age }));
    }
  };

  const onClean = () => {
    setName('');
    setAge('');
    setPosition('');
    playerStore.dispatch(filterPlayers({ name: '', position: '', age: '' }));
  };

  return (
    <Paper className={classes.filterPaper}>
      <MaskedTextField
        placeHolder="Player Name"
        onChangedFunc={onNameChanged}
        className={classes.filterFields}
        value={name}
        pattern={/^[A-Za-z]+$/}
      />
      <FormControl variant="filled" className={classes.formControl}>
        <InputLabel htmlFor="id">Position</InputLabel>
        <Select
          value={position}
          onChange={onPositionChanged}
          labelWidth={150}
          className={classes.selectEmpty}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {positions.map((pos) => (
            <MenuItem key={pos.id} value={pos.name}>{pos.name}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <TextField
        placeholder="Age"
        onChange={onAgeChanged}
        className={classes.filterFields}
        value={age}
        type="number"
        error={error !== ''}
        helperText={error}
      />
      <Button onClick={onSearch} className={classes.filterFields}>Search</Button>
      <Button onClick={onClean} className={classes.filterFields}>Clean</Button>
    </Paper>
  );
};

const style = ((theme) => ({
  filterPaper: {
    textAlign: 'center'
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    verticalAlign: 'bottom'
  },
  filterFields: {
    margin: theme.spacing(1),
    verticalAlign: 'bottom'
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));

export default withStyles(style)(withErrorBoundary('There was a filter.', PlayerFilter));
