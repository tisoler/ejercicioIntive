import React from 'react';
import { TextField } from '@material-ui/core';

const MakedTextField = (props) => {
  const {
    className,
    pattern,
    onChangedFunc,
    placeHolder,
    value
  } = props;

  const onChanged = (e) => {
    if (e.target.value.trim() === '' || e.target.value.match(pattern)) {
      onChangedFunc(e);
    }
  };

  return (
    <TextField
      placeholder={placeHolder}
      onChange={onChanged}
      className={className}
      value={value}
    />
  );
};

export default MakedTextField;
