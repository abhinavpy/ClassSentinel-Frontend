// src/HomePage.js
import React from 'react';
import {
  Button,
  Typography,
  Container,
  Box,
  Grid,
  Avatar,
  Link as MuiLink,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { IconButton } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import SchoolIcon from '@mui/icons-material/School';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <Box
        sx={{
          minHeight: '80vh',
          backgroundImage: `url(${process.env.PUBLIC_URL + '/images/landing-background.jpg'})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: '#fff',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h2" component="h1" gutterBottom>
            ClassSentinel: The Learning Assistant
          </Typography>
          <Typography variant="h5" component="p" gutterBottom>
            Your personalized AI teaching assistant to master challenging course concepts.
          </Typography>
          <Box mt={4}>
            <Button
              component={Link}
              to="/student"
              variant="contained"
              color="primary"
              size="large"
              startIcon={<PersonIcon />}
              sx={{
                marginRight: '20px',
                borderRadius: '25px',
                fontWeight: 'bold',
                textTransform: 'none',
              }}
            >
              Student
            </Button>
            <Button
              component={Link}
              to="/instructor"
              variant="contained"
              color="secondary"
              size="large"
              startIcon={<SchoolIcon />}
              sx={{
                borderRadius: '25px',
                fontWeight: 'bold',
                textTransform: 'none',
              }}
            >
              Instructor
            </Button>
          </Box>
        </Container>
      </Box>

      {/* About Section */}
      <Box py={5}>
        <Container maxWidth="md">
          <Typography variant="h4" gutterBottom>
            About the Learning Assistant
          </Typography>
          <Typography variant="body1" paragraph>
            We propose an LLM-based framework designed to serve as a personalized teaching assistant
            for students, facilitating the clarification of doubts and the mastery of course
            concepts that may be challenging without the aid of such a tool.
          </Typography>
          <Typography variant="body1" paragraph>
            The framework incorporates customizable guardrails, enabling instructors to control the
            extent of information revealed to students. While prior research has explored the use of
            LLMs in classroom assistance, our approach introduces a novel framework based on
            Retrieval-Augmented Generation (RAG) with adaptable guardrails.
          </Typography>
          <Typography variant="body1" paragraph>
            By integrating RAG, the framework ensures that responses are not only contextually
            appropriate but also grounded in the specific educational materials provided by the
            instructor.
          </Typography>
        </Container>
      </Box>

      {/* Features Section */}
      <Box py={5} bgcolor="#f9f9f9">
        <Container maxWidth="md">
          <Typography variant="h4" gutterBottom>
            Features
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6}>
              <Typography variant="h6">Personalized Assistance</Typography>
              <Typography variant="body1">
                Tailored support for students to clarify doubts and master challenging concepts.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="h6">Customizable Guardrails</Typography>
              <Typography variant="body1">
                Instructors control the extent of information revealed, aligning with their teaching
                preferences.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="h6">Retrieval-Augmented Generation</Typography>
              <Typography variant="body1">
                Ensures responses are grounded in educational materials provided by instructors.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="h6">Easy Integration</Typography>
              <Typography variant="body1">
                Seamlessly integrates into existing educational workflows for both universities and
                high schools.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* How It Works Section */}
      <Box py={5}>
        <Container maxWidth="md">
          <Typography variant="h4" gutterBottom>
            How It Works
          </Typography>
          <Typography variant="body1" paragraph>
            Students interact with the Learning Assistant through a chat interface, similar to
            popular messaging apps. The assistant provides contextually appropriate and accurate
            answers, leveraging the materials uploaded by instructors.
          </Typography>
          <Typography variant="body1" paragraph>
            Instructors upload course materials and set guardrails through their dedicated interface,
            ensuring that the assistant's responses align with their teaching objectives and
            policies.
          </Typography>
        </Container>
      </Box>

      {/* Get In Touch Section */}
      <Box py={5} bgcolor="#f9f9f9">
        <Container maxWidth="md">
          <Typography variant="h4" gutterBottom align="center">
            Meet the Team
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {/* Developer 1 */}
            <Grid item xs={12} sm={4}>
              <Box textAlign="center">
                <Avatar
                  src={process.env.PUBLIC_URL + '/images/developer1.jpg'}
                  alt="Developer 1"
                  sx={{ width: 150, height: 150, margin: '0 auto', mb: 2 }}
                />
                <Typography variant="h6">Developer One</Typography>
                <Typography variant="body2">Full Stack Developer</Typography>
                <IconButton href="https://linkedin.com/in/developer1" target="_blank" color="primary">
                    <LinkedInIcon />
                </IconButton>
                <IconButton href="https://github.com/developer1" target="_blank" color="inherit">
                    <GitHubIcon />
                </IconButton>
                <MuiLink
                  href="mailto:developer1@example.com"
                  color="inherit"
                  underline="none"
                >
                  developer1@example.com
                </MuiLink>
                
              </Box>
            </Grid>
            {/* Developer 2 */}
            <Grid item xs={12} sm={4}>
              <Box textAlign="center">
                <Avatar
                  src={process.env.PUBLIC_URL + '/images/developer2.jpg'}
                  alt="Developer 2"
                  sx={{ width: 150, height: 150, margin: '0 auto', mb: 2 }}
                />
                
                <Typography variant="h6">Developer Two</Typography>
                
                <Typography variant="body2">Machine Learning Engineer</Typography>

                <IconButton href="https://linkedin.com/in/developer1" target="_blank" color="primary">
                    <LinkedInIcon />
                </IconButton>
                <IconButton href="https://github.com/developer1" target="_blank" color="inherit">
                    <GitHubIcon />
                </IconButton>
                <MuiLink
                  href="mailto:developer2@example.com"
                  color="inherit"
                  underline="none"
                >
                  developer2@example.com
                </MuiLink>
                
              </Box>
            </Grid>
            {/* Developer 3 */}
            <Grid item xs={12} sm={4}>
              <Box textAlign="center">
                <Avatar
                  src={process.env.PUBLIC_URL + '/images/developer3.jpg'}
                  alt="Developer 3"
                  sx={{ width: 150, height: 150, margin: '0 auto', mb: 2 }}
                />
                <Typography variant="h6">Developer Three</Typography>
                <Typography variant="body2">UI/UX Designer</Typography>
                <IconButton href="https://linkedin.com/in/developer1" target="_blank" color="primary">
                    <LinkedInIcon />
                </IconButton>
                <IconButton href="https://github.com/developer1" target="_blank" color="inherit">
                    <GitHubIcon />
                </IconButton>
                <MuiLink
                  href="mailto:developer3@example.com"
                  color="inherit"
                  underline="none"
                >
                  developer3@example.com
                </MuiLink>
                
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
}

export default HomePage;
