import { Fragment, useEffect, useState } from "react"
import axios from 'axios'
import ShowUser from "./ShowUser"
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import AddUser from "./AddUser"
import SearchUser from "./Search";
import SearchIcon from '@mui/icons-material/Search';
import VisibilityIcon from '@mui/icons-material/Visibility';

const Users = () => {
    const [usersData, setUsersData] = useState([])
    const [open, setOpen] = useState(false);
    const [search,setSearch]=useState(false)
  

    const handleClickOpen = () => {
        setOpen(true);
    };

    

    const getUsers = async () => {
        setSearch(false)
        try {
            const res = await axios.get('http://localhost:8000/user')
            if (res.status === 200) {
                setUsersData(res.data)
            }
        } catch (e) {
            console.error(e)
        }
    }
        
    useEffect(() => {
        getUsers()
    }, [])

    return (<>
    
        {usersData.map(user => <ShowUser user={user} setUsersData={setUsersData} />)}
        <Fragment>
            <SpeedDial
                ariaLabel="SpeedDial basic example"
                sx={{ position: 'fixed', bottom: 16, right: 16 }}
                icon={<SpeedDialIcon />}
                onClick={() => { handleClickOpen(true) }}
            >
            </SpeedDial>
            <SpeedDial
                ariaLabel="SpeedDial basic example"
                sx={{ position: 'fixed', bottom: 16, right: 80 }}
                icon={<VisibilityIcon />}
                onClick={() => { getUsers() }}
            >
            </SpeedDial>
            <SpeedDial
                ariaLabel="SpeedDial basic example"
                sx={{ position: 'fixed', bottom: 16, right: 145 }}
                icon={<SearchIcon />}
                onClick={() => { setSearch(true) }}
            >
            </SpeedDial>
            {search && <SearchUser/>}
            <AddUser open={open} setOpen={setOpen} setUsersData={setUsersData}/>
           
        </Fragment>
    </>)
}

export default Users