import React from 'react';
import MenuBar from './Components/MenuBar/MenuBar';
import Dashboard from './Pages/Dashboard/Dashboard';
import { ThemeProvider } from '@mui/material';
import theme from './Theme/customTheme';
function App() {
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
      <MenuBar />
      <Dashboard />
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
