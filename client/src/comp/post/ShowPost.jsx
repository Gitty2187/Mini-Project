import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import { blue } from '@mui/material/colors';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useState } from "react"
import axios from 'axios'
import UpdatePost from './UpdatePost';

const ShowPost = (props) => {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

const deletePost = async () => {
    const res = await axios.delete(`http://localhost:8000/post/${props.post._id}`)
    props.setPostsData(res.data)
  }

  
  return (
    <Card sx={{ maxWidth: '30%' , margin:'10px',marginLeft:'35%'}} >
      <CardHeader style={{textAlign:'left'}}
        avatar={
          <Avatar sx={{ bgcolor: blue[600],size:20 }} >
            {props.post.title[0]}
          </Avatar>
        }
        title={props.post.title}
        subheader={`Post body: ${props.post.body}`}
      />
      {/* <CardContent>
      </CardContent> */}
      <CardActions disableSpacing sx={{marginLeft:'80%'}}>
        <IconButton aria-label="delete" onClick={deletePost} >
          <DeleteIcon />
        </IconButton>
        <IconButton aria-label="update">
          <EditIcon onClick={() => { handleClickOpen(true) }}  />
        </IconButton>
      </CardActions>
      <UpdatePost setPostsData={props.setPostsData} post={props.post} open={open} setOpen={setOpen}/>
    </Card>

  );
}
export default ShowPost;