
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';

const SearchBar = ({ users, setFilteredUsers }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = users.filter((user) =>
      user.name.toLowerCase().includes(term) ||
      user.email.toLowerCase().includes(term) ||
      user.address.street.toLowerCase().includes(term) ||
      user.address.city.toLowerCase().includes(term) ||
      user.address.zipcode.toLowerCase().includes(term)
    );
    setFilteredUsers(filtered);
  };

  return (
    <>
    <h1>Search Table Record</h1>
    <TextField
      variant="outlined"
      fullWidth
      placeholder="Item to Filter"
      value={searchTerm}
      onChange={handleSearchChange}
      margin="dense"
      
    />
    </>
  );
};

export default SearchBar;
