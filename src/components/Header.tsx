import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link as RouterLink } from 'react-router-dom';
const Header = () => {
  return (
      <AppBar position="fixed" sx={{ width: '100vw' }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          
          <Button color="inherit" component={RouterLink} to ="/">Home</Button>
          <Button color="inherit" component={RouterLink} to ="/saved">Saved</Button>
        </Toolbar>
      </AppBar>
  );
}

export default Header