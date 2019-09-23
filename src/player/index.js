import React from 'react';
import {
  Paper,
  Table,
  TableBody,
  TableHead,
  withStyles
} from '@material-ui/core';
import StyledTableRow from '../common/components/styledTableRow';
import StyledTableCell from '../common/components/styledTableCell';
import Player from './player';

const style = (theme) => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto'
  }
});

const playerList = (props) => {
  const { classes, players } = props;
  return (
    <Paper className={classes.root}>
      <Table>
        <TableHead>
          <StyledTableRow>
            <StyledTableCell>Player</StyledTableCell>
            <StyledTableCell>Position</StyledTableCell>
            <StyledTableCell>Nacionality</StyledTableCell>
            <StyledTableCell>Age</StyledTableCell>
          </StyledTableRow>
        </TableHead>
        <TableBody>
          {players.map((playerData) => (
            <Player playerData={playerData} key={playerData.jerseyNumber} />
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};

export default withStyles(style)(playerList);
