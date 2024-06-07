// src/components/UserData.js
import React from 'react';
import { TableBody, TableRow, TableCell, styled } from '@mui/material';
import { tableCellClasses } from '@mui/material/TableCell';

const UserData = ({ users }) => {
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  return (
    <TableBody sx={{border:1}}>
      {users.map((curUser) => {
        const { id, name, email, address } = curUser;
        const { street, city, zipcode } = address;

        return (
          <StyledTableRow  key={id}>
            <StyledTableCell sx={{border:1}} align="center">{id}</StyledTableCell>
            <StyledTableCell  sx={{border:1}} align="center">{name}</StyledTableCell>
            <StyledTableCell sx={{border:1}} align="center">{email}</StyledTableCell>
            <StyledTableCell sx={{border:1}} align="center">
              {street}, {city}, {zipcode}
            </StyledTableCell>
          </StyledTableRow>
        );
      })}
    </TableBody>
  );
};

export default UserData;
