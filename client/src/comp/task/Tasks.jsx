import { Fragment, useEffect, useState } from "react"
import axios from 'axios'
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import ShowTask from "./ShowTask";
import AddTask from "./AddTask";
import VisibilityIcon from '@mui/icons-material/Visibility';
import Button from '@mui/material/Button';


const Tasks = () => {
    const [tasksData, setTasksData] = useState([])
    const [open, setOpen] = useState(false);

    const search = () => {
        setTasksData(tasksData.filter(t=>t.completed === false))
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const getTasks = async () => {
        try {
            const res = await axios.get('http://localhost:8000/todo')
            if (res.status === 200) {
                setTasksData(res.data)
            }
        } catch (e) {
            console.error(e)
        }
    }

    useEffect(() => {
        getTasks();
    }, [])


    return (<>
        {tasksData.map(task => <ShowTask task={task} setTasksData={setTasksData} />)}
        <Fragment>
            <SpeedDial
                ariaLabel="SpeedDial basic example"
                sx={{ position: 'fixed', bottom: 16, right: 16, color: 'purple' }}
                icon={<SpeedDialIcon />}
                onClick={() => { handleClickOpen(true) }}
            >
            </SpeedDial>
            <SpeedDial
                ariaLabel="SpeedDial basic example"
                sx={{ position: 'fixed', bottom: 16, right: 80 }}
                icon={<VisibilityIcon />}
                onClick={() => { getTasks() }}
            >
            </SpeedDial>
            <Button variant="outlined" color="error"
            sx={{ position: 'fixed', bottom: 20, right: 148 ,height:"6%"}} onClick={() => { search() }}>
                Uncompleted tasks
            </Button >

            <AddTask open={open} setTasksData={setTasksData} setOpen={setOpen} />
        </Fragment>
    </>)
}

export default Tasks