import { Box, Button, TextField } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { contactContext } from "../../ContactContext";
import AddContact from "./AddContact";

const EditContact = () => {

  const { contactToEdit, saveContact } = useContext(contactContext);
  const [editContact, setEditContact] = useState(contactToEdit);

  useEffect(() => {
    setEditContact(contactToEdit);
  }, [contactToEdit]);

  console.log(editContact);

  const handleInp = (e) => {
    let obj = {
      ...editContact,
      [e.target.name]: e.target.value,
    };
    setEditContact(obj);
  };

  const navigate = useNavigate();

  return (
    <>
      {editContact ? (
        <Box sx={{ display: "flex", margin: '15vmin auto', justifyContent: 'center' }}>
          <TextField
            sx={{m: 2}}
            id="outlined-basic"
            label="name"
            variant="outlined"
            name="name"
            onChange={handleInp}
            value={editContact.name}
          />
          <TextField
            sx={{m: 2}}
            id="outlined-basic"
            label="phone"
            variant="outlined"
            name="phone"
            onChange={handleInp}
            value={editContact.phone}
          />
          <TextField
            sx={{m: 2}}
            id="outlined-basic"
            label="image"
            variant="outlined"
            name="image"
            onChange={handleInp}
            value={editContact.image}
          />
          <Button
            sx={{m: 2}}
            variant="outlined"
            size="large"
            onClick={() => {
              saveContact(editContact);
              navigate("/");
            }}
          >
            SAVE
          </Button>
        </Box>
      ) : (
        <h3>Loading...</h3>
      )}
    </>
  );
};

export default EditContact;