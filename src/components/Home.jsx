import { Box, Typography } from '@mui/material';
import React from 'react';
import { indigo } from '@mui/material/colors'
import AddContact from './contacts/AddContact';
import ContactList from './contacts/ContactList';

const Home = () => {

  const homePageStyles = {
    m:5,
    fontWeight: '600',
    color: indigo[400],
    fontSize: '4em',
    "&:hover": {
      color: indigo[300]
    }
  }

  return (
    <Box>
      <Box sx={{display: 'flex', position: 'relative', mt: 7}}>
        <Typography component="div" variant="h1" sx={homePageStyles}>Contacts</Typography>
        <AddContact />
      </Box>
      <ContactList />
    </Box>
  );
};

export default Home;