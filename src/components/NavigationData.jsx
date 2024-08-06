import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Icon from '@mui/material/Icon';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
const style = {
  p: 0,
  width: '100%',
  maxWidth: 'fit',
  borderColor: 'divider',
  backgroundColor: 'background.paper',
};

export default function NavigationData() {
  return (
    <List sx={style} aria-label="mailbox folders">
      <ListItem>
        <ListItemText primary="Create Payments" secondary="Make a new domestic or international payment" />
        <ErrorOutlineIcon />
      </ListItem>
      <Divider component="li" />
      <ListItem>
        <ListItemText primary="Create Payee" secondary="Create a new beneficiary with details to received payment" />
        <ErrorOutlineIcon />
      </ListItem>
      <Divider component="li" />
      <ListItem>
        <ListItemText primary="View Account Balance" secondary="View balance and details of your account"/>
        <ErrorOutlineIcon />
      </ListItem>
      <Divider component="li" />
      <ListItem>
        <ListItemText primary="Manage Reports" secondary="View schedule and run reports"/>
        <ErrorOutlineIcon />
      </ListItem>
    </List>
  );
}
