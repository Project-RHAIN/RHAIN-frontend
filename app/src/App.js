import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Dashboard from './Pages/Dashboard/Dashboard';
import Login from './Pages/Login/Login';
import Profile from './Pages/Profile/Profile';
import { ThemeProvider } from '@mui/material';
import ProtectedRoute from './Utils/ProtectedRoute';
import theme from './Theme/customTheme';
function App() {

  const [themeMode, setThemeMode] = useState('light')  

  return (
    <React.Fragment>
      <Router>
        <ThemeProvider theme={theme}>        
        <Routes>
          <Route path="/" element={<Login />} />

          <Route path="/home" element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } />          

          <Route path="/profile" element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          } />  

          <Route path="*" element={<div>Oops no page found</div>} />
        </Routes>
        </ThemeProvider>
      </Router>
    </React.Fragment>
  );
}

export default App;
