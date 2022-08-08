import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AddContact from './components/contacts/AddContact';
import Home from './components/Home';

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={ <Home /> }/>
      <Route path="/new" element={<AddContact />}/>
    </Routes>
  );
};

export default MainRoutes;