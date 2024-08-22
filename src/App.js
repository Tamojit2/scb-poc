import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Button } from '@mui/material'
import React from 'react'
import './App.css';
import Bill from './components/Bill';
import Workflow from './components/Workflow';
import Navigation from './components/Navigation';
import Payment from './components/Payment';
import PendingTask from './components/PendingTask';
import HeaderMain from './utils/HeaderMain';
import CampaignOutlinedIcon from "@mui/icons-material/CampaignOutlined";


function App() {
  return (
    <div className='main-container'>
      <HeaderMain />
      <div className='home-button-top' style={{ margin: '10px', marginLeft: '14px' }}>
        <Button variant="contained" size="large" style={{ width: '110px' }} >Home</Button>
      </div>

      <div style={{ backgroundColor: '#4287f5', color: 'white', position: 'absolute', right: '-41px', top: 550, transform: 'rotate(-90deg)', padding: '5px' }}>
        <CampaignOutlinedIcon
          style={{
            transform: "rotate(-90deg)",
          }}
        />

        Give Feedback
      </div>

      <div className='parent'>

        <div className='container'>
          <div className='sub-container-1'>
            <div className='sub-container-1-child-A1'>
              <Payment />
            </div>
            <div className='sub-container-1-child-A2'>
              <PendingTask />
            </div>
          </div>
          <div className='sub-container-2'>
            <div className='sub-container-2-child-B1'>
              <Bill />
            </div>
            <div className='sub-container-2-child-B2'>
              <Workflow />
            </div>
          </div>
          <div className='sub-container-3'>
            <Navigation />
          </div>
        </div>

      </div>

    </div>
  );
}

export default App;
