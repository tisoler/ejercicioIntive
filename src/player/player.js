import React from 'react';
import StyledTableRow from '../common/components/styledTableRow';
import calculateAge from '../common/calculateAge';
import StyledTableCell from '../common/components/styledTableCell';
import withErrorBoundary from '../common/enhancers/withErrorBoundary';

const player = (props) => {
  const { playerData } = props;
  return (
    <StyledTableRow>
      <StyledTableCell component="th" scope="row">
        {playerData.name}
      </StyledTableCell>
      <StyledTableCell>{playerData.position}</StyledTableCell>
      <StyledTableCell>{playerData.nationality}</StyledTableCell>
      <StyledTableCell>{calculateAge(playerData.dateOfBirth)}</StyledTableCell>
    </StyledTableRow>
  );
};

export default withErrorBoundary('Some player data is not good.', player);
