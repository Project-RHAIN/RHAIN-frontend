import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Dashboard from './Pages/Dashboard/Dashboard';
// import Login from './Pages/Login/Login';
import Register from './Pages/Login/Register';
import { ThemeProvider } from '@mui/material';
import theme from './Theme/customTheme';
function App() {

  const [themeMode, setThemeMode] = useState('light')  

  return (
    <React.Fragment>
      <Router>
        <ThemeProvider theme={theme}>        
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/home" element={<Dashboard />} />          
          <Route path="*" element={<div>Oops no page found</div>} />
        </Routes>
        </ThemeProvider>
      </Router>
    </React.Fragment>
  );
}

export default App;
