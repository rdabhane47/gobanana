
import { useEffect, useState } from 'react';
import UserData from './components/UserData';
import Table from '@mui/material/Table';
import { Paper, TableContainer, TableHead, TableRow, TableCell } from '@mui/material';
import SearchBar from './components/SearchBar';

const API = 'https://jsonplaceholder.typicode.com/users';

const App = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);

  const fetchUsers = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      if (data.length > 0) {
        setUsers(data);
        setFilteredUsers(data);
      }
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchUsers(API);
  }, []);

  return (
    <>
      <div className="search-bar-container w-25 h-25">
          <SearchBar users={users} setFilteredUsers={setFilteredUsers} />
                
          {/* <div>Search Bar Results</div> */}
        </div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650, bgcolor: 'ButtonShadow', border: 1 }} size="small" aria-label="a dense table">
          <TableHead >
            <TableRow  sx={{ '&:last-child td, &:last-child th': { border: 1 } }}>
              <TableCell  align="center"  >ID</TableCell>
              <TableCell  align="center">Name</TableCell>
              <TableCell  align="center">Email</TableCell>
              <TableCell  align="center">Address</TableCell>
            </TableRow>
          </TableHead>
          <UserData users={filteredUsers} />
        </Table>
      </TableContainer>
     
      
      
    </>
  );
};

export default App;
