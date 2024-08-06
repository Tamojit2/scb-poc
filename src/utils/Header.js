import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
//import MenuIcon from '@mui/icons-material/Menu';

const Header = ({text}) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{height: '45px', display: 'flex', justifyContent: 'center'}}>
      <Typography variant="body2" style={{marginLeft: '10px'}}>
            {text}
          </Typography>
        
        {/* <Toolbar> */}
          
          {/* <IconButton
            size="small"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: -2 }}
          >

          </IconButton>
           */}
          
          {/* <Button color="inherit">Login</Button> */}
        {/* </Toolbar> */}
      </AppBar>
    </Box>
  )
}

export default Header;