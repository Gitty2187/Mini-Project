import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
//import { useRef,useEffect } from 'react';



const SearchUser = (props) => {
  //const inputRef = useRef(null);
  const Search = styled('div')(({ theme }) => ({
    position: 'fixed',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.black, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.black, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));

  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'fixed',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));

 

  // useEffect(() => {
  //     if (inputRef.current) {
  //         inputRef.current.focus(); // החזרת הפוקוס לשדה החיפוש
  //     }
  // }, []);

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width: '100%',

    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
          // position: 'fixed',
          // bottom:18,
          // right: 145,
        },
      },
    },
  }));

  return (<>
    <Search sx={{ position: 'absolute', bottom: 25, right: 210, height: '40px' }} >
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
      //inputRef={inputRef}
        placeholder="Search…"
        inputProps={{ 'aria-label': 'search' }}
        value={props.searchValue}
        onChange={props.handleSearchChange}
      />
    </Search>
    {/* <div style={{ marginTop: '50px' }}>
        <h3>Filtered Users:</h3>
        {filteredUsers.length > 0 ? (
          <ul>
            {filteredUsers.map((user, index) => (
              <li key={index}>{user}</li>
            ))}
          </ul>
        ) : (
          <p>No users found</p>
        )}
      </div> */}
  </>)
}

export default SearchUser