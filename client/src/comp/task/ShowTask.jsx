import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import { deepPurple } from '@mui/material/colors';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useState } from "react"
import axios from 'axios'
import AddTaskIcon from '@mui/icons-material/AddTask';
import UpdateTask from './UpdateTask';

const ShowTask = (props) => {
  const [open, setOpen] = useState(false);
  const [color, setColor] = useState(
    props.task.completed ? 'success' : 'error'
  )

  const handleClickOpen = () => {
    setOpen(true);
};
   

  const deleteTask = async () => {
    const res = await axios.delete(`http://localhost:8000/todo/${props.task._id}`)
    props.setTasksData(res.data)
  }

  const isComp = async () => {
    props.task.completed ? setColor('error') : setColor('success')
    const res = await axios.put(`http://localhost:8000/todo/${props.task._id}`)
    props.setTasksData(res.data)
  }

 

  return (
    <Card sx={{ maxWidth: '30%' , margin:'10px',marginLeft:'35%'}}  >
      <CardHeader style={{ textAlign: 'left' }}
        avatar={
          <Avatar sx={{ bgcolor: deepPurple[400], size: 20 }} >
            {props.task.title[0]}
          </Avatar>
        }
        title={props.task.title}
        subheader={`Task tugs: ${props.task.tags}`}
      />
      {/* <CardContent>
      </CardContent> */}
      <CardActions disableSpacing sx={{marginLeft:'70%'}}>
        <IconButton aria-label="delete" onClick={deleteTask} >
          <DeleteIcon />
        </IconButton>
        <IconButton aria-label="update">
          <EditIcon onClick={() => { handleClickOpen(true) }} />
        </IconButton>
        <IconButton aria-label="complete" color={color}>
          <AddTaskIcon onClick={() => { isComp() }} />
        </IconButton>
      </CardActions>
      <UpdateTask  open={open}  setOpen={setOpen} task={props.task} setTasksData={props.setTasksData} /> 
    </Card>

  );
}
export default ShowTask
