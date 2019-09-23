import { TableCell, withStyles } from '@material-ui/core';

const style = (theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    width: '25%',
    textAlign: 'center'
  },
  body: {
    fontSize: 14,
    width: '25%',
    textAlign: 'center'
  }
});

const styledTableCell = withStyles(style)(TableCell);

export default styledTableCell;
