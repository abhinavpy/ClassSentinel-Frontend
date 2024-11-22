// src/ChatMessage.js
import React from 'react';
import { Box, Paper, Typography, Avatar } from '@mui/material';
import ReactMarkdown from 'react-markdown'; // Import ReactMarkdown
import remarkGfm from 'remark-gfm'; // For GitHub Flavored Markdown
import rehypeSanitize from 'rehype-sanitize'; // For sanitizing HTML


// src/ChatMessage.js
function ChatMessage({ sender, text }) {
  const isUser = sender === 'student';
  const avatarSrc = isUser
    ? process.env.PUBLIC_URL + '/images/student-avatar.png'
    : process.env.PUBLIC_URL + '/images/assistant-avatar.png';

  return (
    <Box
      display="flex"
      justifyContent={isUser ? 'flex-end' : 'flex-start'}
      mb={1}
      alignItems="flex-end"
    >
      {!isUser && (
        <Avatar
          src={avatarSrc}
          alt="Assistant"
          sx={{ marginRight: '10px', width: 40, height: 40 }}
        />
      )}
      <Paper
        elevation={1}
        sx={{
          maxWidth: '60%',
          padding: '10px',
          backgroundColor: isUser ? '#cfe9ba' : '#e0e0e0',
          borderRadius: '15px',
        }}
      >
        {/* Replace Typography with ReactMarkdown */}
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeSanitize]}
        >
          {text}
        </ReactMarkdown>
      </Paper>
      {isUser && (
        <Avatar
          src={avatarSrc}
          alt="You"
          sx={{ marginLeft: '10px', width: 40, height: 40 }}
        />
      )}
    </Box>
  );
}

export default ChatMessage;
