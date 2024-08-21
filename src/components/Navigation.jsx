import React, { Fragment, useState } from 'react';
import Header from '../utils/Header';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { navigationData } from '../data/SampleData';

const style = {
  p: 0,
  width: '100%',
  maxWidth: 'fit',
  borderColor: 'divider',
  backgroundColor: 'background.paper',
};

const Navigation = () => {

  const [data, setData] = useState(navigationData);

  return (
    <>
        <Header text={'QUICK NAVIGATION'}/>
        <div className='navigation-class' >
            <List sx={style} aria-label="mailbox folders">
              {data?.map((dt, k)=>(
                <Fragment key={dt.id}>
                  <ListItem key={dt.id}>
                  <ListItemText primary={dt.title} secondary={dt.description} />
                  <ErrorOutlineIcon />
                  </ListItem>
                  {data.length !== dt.id && <Divider component="li" />}
                </Fragment>
              ))}

              
            </List>
        </div>
    </>
  )
}

export default Navigation