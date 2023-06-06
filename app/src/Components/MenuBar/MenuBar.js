import * as React from 'react';
import './MenuBar.scss';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import { useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import logo from '../../Images/logo_white.png'
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';

const pages = ['Data', 'About'];
const settings = ['Profile', 'Dashboard', 'Logout'];

const MenuBar = (props) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const user = JSON.parse(localStorage.getItem('user'));

  let navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = (setting) => {
    // console.log("CLICK", setting)
    setAnchorElUser(null);
    if(setting === 'Logout') {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      navigate('/');
    }
  };
  // console.log("IMAGE", user.picture)
  return (
    <AppBar position="static" elevation={0}>
      <Container style={{maxWidth: '100%'}}>
        <Toolbar disableGutters className='mainToolbar'>
          {/* <HealthAndSafetyIcon sx={{ display: { md: 'flex' }, mr: 1 }} /> */}
          <img src={logo} alt="Logo" height="30px" style={{marginRight: '8px'}} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
            //   mr: 2,
            //   display: { xs: 'none', md: 'flex' },
            //   fontFamily: 'monospace',
            //   fontWeight: 700,
            //   letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Regional Healthcare Analysis and Improvement Network
          </Typography>

          <Box justifyContent="flex-end" sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box justifyContent="flex-end" sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block', textDecoration: 'none' }}                
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0, marginLeft: '8px' }}>
          <Typography className='menuName'>{user.first_name}</Typography>
            <Tooltip title="Open menu">            
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt={user.first_name} imgProps={{ referrerPolicy: "no-referrer" }} src={user.picture}/>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={() => handleCloseUserMenu(setting)}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default MenuBar;