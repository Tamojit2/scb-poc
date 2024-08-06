import React from 'react'
import Header from '../utils/Header'
import PendingTaskButton from './PendingTaskButton'
import PendingTaskData from './PendingTaskData'
import CachedOutlinedIcon from "@mui/icons-material/CachedOutlined";

const PendingTask = () => {
  return (
    <>
        <Header text={'1555 - PENDING TASK'} />
        <div className='pending-task'>
                <PendingTaskButton />
                <footer className="footer" style={{marginTop: '-32px', color: "#999", display: 'flex',
                    alignItems: 'center', gap: '0.4rem', fontSize: '12px' }}>
                    <CachedOutlinedIcon />
                    Last Updated 04/08/2024 04:09:41 PM
                </footer>
        </div>

    </>
  )
}

export default PendingTask