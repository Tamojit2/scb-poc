import React, { useState } from 'react';
import Header from '../utils/Header';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import WorkflowChart from './WorkflowChart';
import Footer from '../utils/Footer';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};


const Workflow = () => {

  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
        <Header text={'PAYMENT IN LAST 7 DAYS (MY VIEW) '} />
                
        <Box sx={{ width: '100%' }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={value} onChange={handleChange} >
              <Tab label="CLIENT WORKFLOW"  style={{width: '50%'}}/>
              <Tab label="BANK WORKFLOW" style={{width: '50%'}} />
            </Tabs>
          </Box>
          <CustomTabPanel value={value} index={0} >
            <WorkflowChart />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            Item Two
          </CustomTabPanel>
        </Box>
        <Footer />
    </>
  )
}

export default Workflow