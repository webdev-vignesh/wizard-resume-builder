import Navlogo from '../assets/navlogo.jpg'
import '../styleSheets/NavBar.css';
import {AppBar, Toolbar, Stack, Button, Typography} from '@mui/material';

const NavBar = () => {
    return(
      <AppBar position='static' style={{ background: '#FFFFFF' }}>
        <Toolbar>
          <img src={Navlogo} alt='logo'/>
          <Typography sx={{flexGrow: 1}}></Typography>
          <Stack direction='row' spacing={2} style={{ color: '#111'}}>
            <Button color="inherit">Resume Templates</Button>
            <Button color="inherit">My Resume</Button>
            <Button color="inherit">About Us</Button>
          </Stack>
        </Toolbar>
      </AppBar>
    )
}

export default NavBar;
