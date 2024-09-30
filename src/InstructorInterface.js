// src/InstructorInterface.js
import React, { useState } from 'react';
import {
  TextField,
  Button,
  Typography,
  Container,
  Paper,
} from '@mui/material';
import UploadFileIcon from '@mui/icons-material/UploadFile';

function InstructorInterface() {
  const [guardrails, setGuardrails] = useState('');
  const [file, setFile] = useState(null);

  const handleGuardrailsSubmit = async (e) => {
    e.preventDefault();
    // Send guardrails to backend
    try {
      const response = await fetch('http://localhost:8000/guardrails', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ settings: guardrails }),
      });
      const data = await response.json();
      alert(data.message);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleFileUpload = async (e) => {
    e.preventDefault();
    if (!file) return;

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch('http://localhost:8000/upload', {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();
      alert(data.message);
    } catch (error) {
      console.error('Error:', error);
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
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ marginTop: '10px' }}
          >
            Upload File
          </Button>
        </form>
      </Paper>
    </Container>
  );
}

export default InstructorInterface;
