import {useState } from "react"
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
import AccountCircle from '@mui/icons-material/AccountCircle';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import PersonIcon from '@mui/icons-material/Person';
import { Alert } from "@mui/material";



const AddUser = (props) => {
    const [name, setName] = useState(null)
    const [adress, setAdress] = useState(null)
    const [phone, setPhone] = useState(null)
    const [email, setEmail] = useState(null)
    const [userName, setUsername] = useState(null)
    // const [conti,setConti]=useState(false)

    const save = async (name, userName, phone, email, adress) => {
    // {!name ? <><Alert variant="outlined" severity="error">
    //     This is an outlined error Alert.
    // </Alert></> : setConti(true)} 
    // if(conti){ 
        const newUser = {
            email: email,
            name: name,
            phone: phone,
            userName: userName,
            adress: adress,
        }
        const res = await axios.post('http://localhost:8000/user', newUser)
        props.setUsersData(res.data)
         handleClose()
    // }
   }

    const handleClose = () => {
        props.setOpen(false);
    };

    return (<>
        <Dialog
            open={props.open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
                {"Create a new user"}
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
                            <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                            <TextField id="input-name" label="Name" variant="standard" onChange={(e) => setName(e.target.value)} />
                        </Box>
                        <br />
                        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                            <PersonIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                            <TextField id="input-userName" label="User name" variant="standard" onChange={(e) => setUsername(e.target.value)} />
                        </Box>
                        <br />
                        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                            <AccountBalanceIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                            <TextField id="input-adress" label="Adress" variant="standard" onChange={(e) => setAdress(e.target.value)} />
                        </Box>
                        <br />
                        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                            <PhoneIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                            <TextField id="input-phone" label="Phone" variant="standard" onChange={(e) => setPhone(e.target.value)} />
                        </Box>
                        <br />
                        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                            <EmailIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                            <TextField id="input-email" label="Email" variant="standard" onChange={(e) => setEmail(e.target.value)} />
                        </Box>
                    </Box>
                </Container>
            </DialogContent>
            <DialogActions>
                <Button size="small" onClick={handleClose}>
                    Cancel
                </Button>
                <Button size="small" onClick={() => { save(name, userName, phone, email, adress) }} variant="contained">
                    Save
                </Button>
            </DialogActions>
        </Dialog>
    </>
    )
}
export default AddUser