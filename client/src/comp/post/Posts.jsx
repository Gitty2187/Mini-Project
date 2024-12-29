import { Fragment, useEffect, useState } from "react"
import axios from 'axios'
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import ShowPost from "./ShowPost";
import AddPost from "./AddPost";
import VisibilityIcon from '@mui/icons-material/Visibility';
import SearchPost from "./Search";
import SearchIcon from '@mui/icons-material/Search';

const Posts = () => {
    const [postsData, setPostsData] = useState([])
    const [open, setOpen] = useState(false);
    const [search,setSearch]=useState(false)
   

    const handleClickOpen = () => {
        setOpen(true);
    };

    const getPosts = async () => {
        setSearch(false)
        try {
            const res = await axios.get('http://localhost:8000/post')
            if (res.status === 200) {
                setPostsData(res.data)
            }
        } catch (e) {
            console.error(e)
        }
    }



    useEffect(() => {
        getPosts()
    }, [])

    return (<>
        {postsData.map(post => <ShowPost post={post} setPostsData={setPostsData} />)}
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
                onClick={() => { getPosts() }}
            >
            </SpeedDial>
            <SpeedDial
                ariaLabel="SpeedDial basic example"
                sx={{ position: 'fixed', bottom: 16, right: 145}}
                icon={<SearchIcon />}
                onClick={() => { setSearch(true) }}
            >
            </SpeedDial>
            <AddPost open={open} setPostsData={setPostsData} setOpen={setOpen} />
            {search && <SearchPost/>}
            
        </Fragment>
    </>)
}

export default Posts