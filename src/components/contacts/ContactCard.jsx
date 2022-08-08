import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { contactContext } from '../../ContactContext';
import { useNavigate } from 'react-router-dom';

const ContactCard = ({ contact }) => {

  const { deleteContact, editContact } = React.useContext(contactContext);
  const navigate = useNavigate()

  return (
    <Card sx={{ maxWidth: "20%", m: 3 }}>
      <CardMedia
        component="img"
        alt="Contact image"
        height="140"
        image={contact.image ? contact.image : 'https://www.instandngs4p.eu/wp-content/themes/fox/images/placeholder.jpg'}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {contact.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {contact.phone}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={()=>{
          editContact(contact.id);
          navigate('/edit');
        }}>Edit</Button>
        <Button size="small" onClick={()=>deleteContact(contact.id)}>Delete</Button>
      </CardActions>
    </Card>
  );
};

export default ContactCard;