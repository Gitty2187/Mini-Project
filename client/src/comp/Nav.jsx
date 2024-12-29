import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import PostAddIcon from '@mui/icons-material/PostAdd';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import Tasks from "./task/Tasks"
import Users from './user/users';
import { Link, Route, Routes } from "react-router-dom"
import Posts from "./post/Posts"

const Nav = () => {

  return (<Box sx={{ flexGrow: 1 }}>
    <AppBar position='sticky'>
      <Toolbar>
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{ display: { xs: 'none', sm: 'block' } }}
        >
          Our Mini Project🐧
        </Typography>

      
        <Box sx={{ flexGrow: 1 }} />
        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
        </Box>
        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
        </Box>

        <BottomNavigationAction label="Tasks" icon={<AssignmentTurnedInIcon fontSize={'large'} color={"secondary"} />} component={Link} to="/tasks" />
        <BottomNavigationAction label="Posts" icon={<PostAddIcon fontSize={'large'} color={"disabled"} />} component={Link} to="/posts" />
        <BottomNavigationAction label="Users" icon={<SupervisedUserCircleIcon fontSize={'large'} color={"warning"} />} component={Link} to="/users" />
      </Toolbar>
    </AppBar>
    <Routes>
      <Route path="/users" element={<Users />} />
      <Route path="/tasks" element={<Tasks />} />
      <Route path="/posts" element={<Posts />} />
    </Routes>
  </Box>
  );
}
export default Nav