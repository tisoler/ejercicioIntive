import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { Typography, withStyles } from '@material-ui/core';
import PlayerList from './player';
import PlayerFilter from './player/playerFilter';
import { loadInitialPlayers } from './player/actions';
import playerStore from './player/store';

const style = () => ({
  root: {
    width: '70%',
    margin: '0 auto'
  }
});

function App(props) {
  const { players, classes, positions } = props;

  useEffect(() => {
    playerStore.dispatch(loadInitialPlayers());
  }, []);

  return (
    <div className={classes.root}>
      <Typography variant="h4" align="left">Football Player Finder</Typography>
      <PlayerFilter positions={positions} />
      <PlayerList players={players} />
    </div>
  );
}

const mapStateToProps = (state) => (
  {
    players: state.dataFiltered,
    positions: state.positions
  }
);

export default connect(mapStateToProps)(withStyles(style)(App));
