import React from "react"

// MUI
import {AppBar, Container, Typography} from '@material-ui/core';

// Custom
import ClickGrid from './components/ClickGrid'

export default function App() {
  return (
    <Container>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Typography
              variant="h6"
              noWrap
              component="a"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'white',
                textDecoration: 'none',
              }}
            >
              CLICK A BOX
          </Typography>
        </Container>
      </AppBar>
      <ClickGrid />
    </Container>
  );
}
