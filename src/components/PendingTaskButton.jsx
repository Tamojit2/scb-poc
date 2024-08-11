import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import PendingTaskData from './PendingTaskData';



export default function PendingTaskButton() {
  const [value, setValue] = useState(0);

  
  return (
    <Box>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} >
          <Tab label="Cash" />
        </Tabs>
      </Box>
      <PendingTaskData />
    </Box>
  );
}
