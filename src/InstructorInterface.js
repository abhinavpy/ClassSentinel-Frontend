// src/InstructorInterface.js
import React, { useState, useEffect } from 'react';
import {
  TextField,
  Button,
  Typography,
  Container,
  Paper,
} from '@mui/material';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import config from './config'; // Import the backend URL
// Import CircularProgress at the top of your file
import { CircularProgress } from '@mui/material';


function InstructorInterface() {
  const [guardrails, setGuardrails] = useState('');
  const [file, setFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [currentGuardrails, setCurrentGuardrails] = useState('');

  useEffect(() => {
    const fetchGuardrails = async () => {
      try {
        const response = await fetch(`${config.backendUrl}/guardrails`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setCurrentGuardrails(data.guardrails);
      } catch (error) {
        console.error('Error fetching guardrails:', error);
      }
    };
  
    fetchGuardrails();
  }, []);
  


  const handleGuardrailsSubmit = async (e) => {
    e.preventDefault();
    // Send guardrails to backend
    try {
      const response = await fetch(`${config.backendUrl}/guardrails`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ settings: guardrails }),
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
      alert(data.message);

      // Update current guardrails
      setCurrentGuardrails(guardrails);
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while saving guardrails.');
    }
  };  

  const handleClearGuardrails = async () => {
    // Send request to backend to clear guardrails
    try {
      const response = await fetch(`${config.backendUrl}/guardrails/clear`, {
        method: 'POST',
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
      alert(data.message);
  
      // Update current guardrails
      setCurrentGuardrails('');
  
      // Optionally, clear the input field
      setGuardrails('');
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while clearing guardrails.');
    }
  };
  

  const handleFileUpload = async (e) => {
    e.preventDefault();
    if (!file) return;
  
    const formData = new FormData();
    formData.append('file', file);
  
    try {
      setIsLoading(true);
      const response = await fetch(`${config.backendUrl}/upload`, {
        method: 'POST',
        body: formData,
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
      alert(data.message);
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while uploading the file.');
    } finally {
      // Set loading to false when upload completes or fails
      setIsLoading(false);
    }
  };  

  return (
    <Container
      maxWidth="md"
      sx={{
        marginTop: '20px',
        padding: '20px',
        borderRadius: '15px',
        backgroundImage: `url(${process.env.PUBLIC_URL + '/images/instructor-background.jpg'})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Typography variant="h4" gutterBottom>
        Instructor Interface
      </Typography>

      <Paper sx={{ padding: '20px', marginBottom: '20px', backgroundColor: 'rgba(255, 255, 255, 0.8)' }} elevation={3}>
        <Typography variant="h6" gutterBottom>
          Set Guardrails
        </Typography>
        <form onSubmit={handleGuardrailsSubmit}>
          <TextField
            label="Define your guardrails here..."
            multiline
            rows={4}
            variant="outlined"
            fullWidth
            value={guardrails}
            onChange={(e) => setGuardrails(e.target.value)}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ marginTop: '10px' }}
          >
            Save Guardrails
          </Button>
          <br />
          <br />
          <Button
            variant="outlined"
            color="secondary"
            onClick={handleClearGuardrails}
          >
            Clear Guardrails
          </Button>
        </form>
      </Paper>

      <Paper sx={{ padding: '20px', backgroundColor: 'rgba(255, 255, 255, 0.8)' }} elevation={3}>
        <Typography variant="h6" gutterBottom>
          <UploadFileIcon sx={{ verticalAlign: 'middle', marginRight: '8px' }} />
          Upload Documents
        </Typography>
        <form onSubmit={handleFileUpload}>
          <Button
            variant="contained"
            component="label"
            color="secondary"
            sx={{ marginRight: '10px' }}
          >
            Choose File
            <input
              type="file"
              hidden
              onChange={(e) => setFile(e.target.files[0])}
            />
          </Button>
          {file && <Typography variant="body1">{file.name}</Typography>}
          <br />
          {isLoading ? (
            <CircularProgress sx={{ marginTop: '10px' }} />
          ) : (
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{ marginTop: '10px' }}
            >
              Upload File
            </Button>
          )}
        </form>
      </Paper>

      <Paper
        sx={{
          padding: '20px',
          marginTop: '20px',
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
        }}
        elevation={3}
      >
        <Typography variant="h6" gutterBottom>
          Current Guardrails
        </Typography>
        <Typography variant="body1" sx={{ whiteSpace: 'pre-line' }}>
          {currentGuardrails || 'No guardrails have been set yet.'}
        </Typography>
      </Paper>

    </Container>
  );
}

export default InstructorInterface;
