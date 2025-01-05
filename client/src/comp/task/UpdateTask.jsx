import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import StyleIcon from '@mui/icons-material/Style';
import TaskIcon from '@mui/icons-material/Task';
import axios from 'axios'
import { useState } from "react"

const UpdateTask = (props) => {
    const [title, setTitle] = useState(null)
    const [tags, setTags] = useState([])

    const update = async (title, tags) => {
        if (!title)
            return alert("must insert title")
        if (tags)
            setTags(tags.split(","))
        const newTask = {
            _id: props.task._id,
            title: title,
            tags: tags,
        }
        const res = await axios.put('http://localhost:8000/todo', newTask)
        props.setTasksData(res.data)
        handleClose()
    }
    const handleClose = () => {
        props.setOpen(false);
    }


    return (
        <Dialog
            open={props.open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
                {`Update task ${props.task.title}`}
            </DialogTitle>
            <DialogContent>
                <Container component="main" sx={{ pt: 3 }}>
                    <AppBar position="fixed" component="nav">
                        <Toolbar>
                        </Toolbar>
                    </AppBar>
                    <Box sx={{ '& > :not(style)': { m: 1 } }}>
                        <br />
                        <br />
                        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                            <TaskIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                            <TextField id="input-title" label="Title" variant="standard" defaultValue={props.task.title} onChange={(e) => setTitle(e.target.value)} />
                        </Box>
                        <br />
                        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                            <StyleIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                            <TextField id="input-Tags" label="Tags" variant="standard" onChange={(e) => setTags(e.target.value)} defaultValue={props.task.tags} />
                        </Box>
                        <br />
                    </Box>
                </Container>
            </DialogContent>
            <DialogActions>
                <Button size="small" onClick={handleClose}>
                    Cancel
                </Button>
                <Button size="small" onClick={() => { update(title, tags) }} variant="contained">
                    update
                </Button>
            </DialogActions>
        </Dialog>
    )
}
export default UpdateTask