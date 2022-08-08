import { Alert, Box, Button, createTheme, TextField } from '@mui/material';
import React from 'react';
import { indigo } from '@mui/material/colors'
import { useContext } from 'react';
import { contactContext } from '../../ContactContext';
import { useState } from 'react';


const AddContact = () => {

  const indigoTheme = createTheme({
    palette: {
      primary: {
        main: indigo[400]
      },
      secondary: {
        main: indigo[600]
      }
    }
  });

  const { top, addContact } = useContext(contactContext)

  const [contact, setContact] = useState({
    name: '',
    phone: '',
    image: '',
  })

  const handleInput = (e) => {
    let obj = {
      ...contact,
      [e.target.name]: e.target.value
    }
    setContact(obj)
    setAlert(false)
  }

  let [alert, setAlert] = useState(false);

  const handleSave = (newContact) => {
    if(!newContact.name || !newContact.phone){
      setAlert(true)
      return
    }
    addContact(newContact)
    setContact({
      name: '',
      phone: '',
      image: '',
    })
  }

  const alertStyle = {
    mx: 2,
    position: 'absolute',
    width: '50%',
    bottom: '-120%',
    left: 0
  }

  const inpsStyles = {
    display: 'flex',
    justifyContent: 'space-between',
    maxWidth: '60%',
    mt: 5,
    position: 'absolute',
    right: '5%',
    transition: '200ms',
    top: top
  }
  return (
    <Box>
      <Box sx={inpsStyles}>
        <TextField name="name" onChange={handleInput} sx={{mx: 2}} value={contact.name} id="outlined-basic" label="Name" variant="outlined" />
        <TextField name="phone" onChange={handleInput} sx={{mx: 2}} value={contact.phone} id="outlined-basic" label="Phone" variant="outlined" />
        <TextField name="image" onChange={handleInput} sx={{mx: 2}} value={contact.image} id="outlined-basic" label="Image" variant="outlined" />
        <Button variant="contained"  theme={indigoTheme} sx={{mx: 2}} onClick={()=>handleSave(contact)}>Create</Button>
      {alert ? (<Alert severity="warning" sx={alertStyle}>Name and Phone are required</Alert>) : ''} 
      </Box>
    </Box>
  );
};

export default AddContact;