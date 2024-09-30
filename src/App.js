// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppBar, Toolbar, Typography } from '@mui/material';
import StudentInterface from './StudentInterface';
import InstructorInterface from './InstructorInterface';
import HomePage from './HomePage';
import Logo from './images/logo.png'; // Ensure the correct path to your logo image

function App() {
  return (
    <Router>
      <AppBar position="static" color="primary" elevation={0}>
        <Toolbar>
          <img src={Logo} alt="Logo" style={{ height: '40px', marginRight: '10px' }} />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Learning Assistant
          </Typography>
        </Toolbar>
      </AppBar>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/student" element={<StudentInterface />} />
        <Route path="/instructor" element={<InstructorInterface />} />
      </Routes>
    </Router>
  );
}

export default App;
