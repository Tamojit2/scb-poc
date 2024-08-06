import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MenuIcon from '@mui/icons-material/Menu';
import SvgIcon from '@mui/material/SvgIcon';
import Standard from '../image/standard.svg';
import { Badge } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';


function HomeIcon(props) {
    return (
      <SvgIcon {...props}>
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </SvgIcon>
    );
  }

const HeaderMain = () => {

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{height: '50px', display: 'flex', flexDirection: 'row'}}>
        <MenuIcon style={{margin: '10px'}} />
        <Typography variant="h6" style={{margin: '7px'}} >
            Menu
        </Typography>
        <HomeIcon color="#ffffff" fontSize="large" style={{margin: '4px'}} />
        <Typography variant="h6" style={{margin: '9px'}} >
            Straight2Bank
        </Typography>
        <img
            srcSet={`${Standard}?w=164&h=124&fit=crop&auto=format&dpr=2 2x`}
            src={`${Standard}?w=164&h=124&fit=crop&auto=format`}
            alt={'Bank Logo'}
          />
          <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
              >
                <AccountCircle />
          </IconButton>
          <Typography variant="body2" style={{margin: '9px'}} sx={{ flexGrow: 1 }}>
            Group Id: 690603
        </Typography>
        <Badge badgeContent={17} color="error" style={{margin: '10px', marginLeft: '75px' }}>
            <NotificationsIcon />
        </Badge>
        <Button color="inherit" style={{margin: '10px' }} >Logout</Button>
      </AppBar>
    </Box>
  )
}

export default HeaderMain