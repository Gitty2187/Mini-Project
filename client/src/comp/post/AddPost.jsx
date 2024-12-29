import {  useState } from "react"
import axios from 'axios'
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
import TitleIcon from '@mui/icons-material/Title';
import ListAltIcon from '@mui/icons-material/ListAlt';

const AddPost = (props) => {
    const [title, setTitle] = useState(null)
    const [body, setBody] = useState([])

    const save = async (title, body) => {
        const newPost = {
            title: title,
            body: body,
        }
        const res = await axios.post('http://localhost:8000/post', newPost)
        props.setPostsData(res.data)
        handleClose()
    }

    const handleClose = () => {
        props.setOpen(false);
    };

    return (
        <Dialog
            open={props.open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
                {"Add a new post"}
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
                            <TitleIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                            <TextField id="input-title" label="Title" variant="standard" onChange={(e) => setTitle(e.target.value)} />
                        </Box>
                        <br />
                        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                            <ListAltIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                            <TextField id="input-Body" label="Body" variant="standard" onChange={(e) => setBody(e.target.value)} />
                        </Box>
                    </Box>
                </Container>
            </DialogContent>
            <DialogActions>
                <Button size="small" onClick={handleClose}>
                    Cancel
                </Button>
                <Button size="small" onClick={() => { save(title, body) }} variant="contained">
                    Save
                </Button>
            </DialogActions>
        </Dialog>
    )
}
export default AddPost