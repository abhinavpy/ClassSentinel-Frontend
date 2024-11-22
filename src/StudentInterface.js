// src/StudentInterface.js
import React, { useState } from 'react';
import {
  TextField,
  IconButton,
  Paper,
  Typography,
  Container,
  Box,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import ChatMessage from './ChatMessage';
import config from './config'; // Import the backend URL

function StudentInterface() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const sendMessage = async () => {
    if (input.trim() === '') return;
  
    const userMessage = { sender: 'student', text: input };
    setMessages([...messages, userMessage]);
    setInput('');
  
    // Send message to backend
    try {
      const response = await fetch(`${config.backendUrl}/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input }),
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
      console.log(data);
      const botMessage = { sender: 'assistant', text: data.reply.content };
      setMessages((msgs) => [...msgs, botMessage]);
    } catch (error) {
      console.error('Error:', error);
      const errorMessage = { sender: 'assistant', text: 'Sorry, an error occurred.' };
      setMessages((msgs) => [...msgs, errorMessage]);
    }
  };  

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  return (
    <Container
      maxWidth="md"
      sx={{
        marginTop: '20px',
        padding: '20px',
        borderRadius: '15px',
        backgroundImage: `url(${process.env.PUBLIC_URL + '/images/student-background.jpg'})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Typography variant="h4" gutterBottom>
        Student Interface
      </Typography>
      <Paper
        elevation={4}
        sx={{
          height: '500px',
          overflowY: 'scroll',
          padding: '10px',
          backgroundColor: 'rgba(245, 245, 245, 0.8)',
          borderRadius: '15px',
        }}
      >
        {messages.map((msg, idx) => (
          <ChatMessage key={idx} sender={msg.sender} text={msg.text} />
        ))}
      </Paper>
      <Box display="flex" mt={2}>
        <TextField
          variant="outlined"
          label="Type your message..."
          fullWidth
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          sx={{
            '& .MuiOutlinedInput-root': {
              borderRadius: '25px',
              backgroundColor: '#fff',
            },
            '& .MuiInputLabel-root': {
              fontWeight: 'bold',
            },
          }}
        />
        <IconButton
          color="primary"
          onClick={sendMessage}
          sx={{
            ml: 1,
            backgroundColor: '#4a90e2',
            color: '#fff',
            '&:hover': {
              backgroundColor: '#357ab7',
            },
          }}
        >
          <SendIcon />
        </IconButton>
      </Box>
    </Container>
  );
}

export default StudentInterface;
