
import { TableRow, withStyles } from '@material-ui/core';

const style = (theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default
    }
  }
});

const styledTableRow = withStyles(style)(TableRow);

export default styledTableRow;
