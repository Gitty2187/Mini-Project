import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { orange } from '@mui/material/colors';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Box from '@mui/material/Box';
import { useState } from "react"
import axios from 'axios'
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
import Grid from '@mui/material/Grid';

const ShowUser = (props) => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState(null)
  const [adress, setAdress] = useState(null)
  const [phone, setPhone] = useState(null)
  const [email, setEmail] = useState(null)
  const [userName, setUsername] = useState(null)

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const update = async (name, userName, phone, email, adress) => {
    console.log(name+" "+userName);
    if (!name)
      return alert("must insert name")
    if (!userName)
      return alert("must insert user name")
    if(phone && (phone.length< 9 || phone.length > 10))
      return alert("phone not correct")
    const newUser = {
      _id: props.user._id,
      email: email,
      name: name,
      phone: phone,
      userName: userName,
      adress: adress,
    }
    const res = await axios.put('http://localhost:8000/user', newUser)
    props.setUsersData(res.data)
    handleClose()
  }

  const deleteUser = async () => {
    const res = await axios.delete(`http://localhost:8000/user/${props.user._id}`)
    props.setUsersData(res.data)
  }

  return (<>
    {/* <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justify="center"
      style={{ minHeight: '100vh' }}
    >
      <Grid item xs={8}> */}
    <Card sx={{ maxWidth: '30%', margin: '10px', marginLeft: '35%' }}  >
      <CardHeader style={{ textAlign: 'left' }}
        avatar={
          <Avatar sx={{ bgcolor: orange[700], size: 20 }} >
            {props.user.name[0]}
          </Avatar>
        }
        title={props.user.name}
        subheader={`User name: ${props.user.userName}`}
      />
      <CardContent >
        <Typography variant="body2" sx={{ color: 'text.secondary' }} style={{ textAlign: 'left' }}>
          {props.user.email && <>email: {props.user.email} {<br />}</>}
          {props.user.phone && <>phone: {props.user.phone} {<br />}</>}
          {props.user.adress && <>address: {props.user.adress} {<br />}</>}
        </Typography>
      </CardContent>
      <CardActions disableSpacing sx={{ marginLeft: '80%' }}>
        <IconButton aria-label="delete" onClick={deleteUser}>
          <DeleteIcon />
        </IconButton>
        <IconButton aria-label="update">
          <EditIcon onClick={() => { handleClickOpen(true) }} />
        </IconButton>
      </CardActions>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {`Update user ${name}`}
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
                <TextField id="input-name" label="Name" variant="standard" onChange={(e) => setName(e.target.value)} defaultValue={props.user.name} />
              </Box>
              <br />
              <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                <PersonIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                <TextField id="input-userName" label="User name" variant="standard" onChange={(e) => setUsername(e.target.value)} defaultValue={props.user.userName} />
              </Box>
              <br />
              <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                <AccountBalanceIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                <TextField id="input-adress" label="Adress" variant="standard" onChange={(e) => setAdress(e.target.value)} defaultValue={props.user.adress} />
              </Box>
              <br />
              <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                <PhoneIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                <TextField id="input-phone" label="Phone" variant="standard" onChange={(e) => setPhone(e.target.value)} defaultValue={props.user.phone} />
              </Box>
              <br />
              <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                <EmailIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                <TextField id="input-email" label="Email" variant="standard" onChange={(e) => setEmail(e.target.value)} defaultValue={props.user.email} />
              </Box>
            </Box>
          </Container>
        </DialogContent>
        <DialogActions >
          <Button size="small" onClick={handleClose}>
            Cancel
          </Button>
          <Button size="small" onClick={() => { update(name, userName, phone, email, adress) }} variant="contained">
            update
          </Button>
        </DialogActions>
      </Dialog>
    </Card>
    {/* </Grid>      
 </Grid > */}

  </>);
}
export default ShowUser;
