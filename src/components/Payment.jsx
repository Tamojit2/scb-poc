import React from 'react'
import Header from '../utils/Header'
import { Typography } from '@mui/material';

const Payment = () => {
    
  return (
    <>
        <Header text={'PAYMENT - PENDING APPROVAL'} />
      <div className='bill-text' style={{margin: '10px'}}>
            <Typography variant="body1" gutterBottom>
                <b>Q0022706</b> | Cut of time 2 hrs from now
            </Typography>
            <Typography variant="body1" gutterBottom>
                KRW 701
            </Typography>
            
        </div>
        
    </>
        
  )
}

export default Payment