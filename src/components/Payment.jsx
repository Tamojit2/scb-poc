import React from 'react'
import Header from '../utils/Header'
import { Typography } from '@mui/material';

const Payment = () => {
    
  return (
    <>
        <Header text={'PAYMENT - PENDING APPROVAL'} />
      <div className='bill-text' style={{margin: '10px', display: 'flex'}}>
            <Typography variant="body1" gutterBottom>
                Q0022706 | Cut of time 2 hrs from now
            </Typography>
            
        </div>
        
    </>
        
  )
}

export default Payment