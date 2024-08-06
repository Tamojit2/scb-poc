import React from 'react'
import Header from '../utils/Header'
import { Typography } from '@mui/material'

const Bill = () => {
  return (
    <>
        <Header text={'PRIORITY MESSAGE'} />
        <div className='bill-text' style={{margin: '10px', display: 'flex', justifyContent: 'space-between' }}>
            <Typography variant="subtitle1" gutterBottom>
                Bill Payments Report - Korea Bill
            </Typography>
            <a href="www.google.com">All messages</a> 
        </div>
        
    </>
  )
}

export default Bill