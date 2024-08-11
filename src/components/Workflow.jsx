import React from 'react'
import Header from '../utils/Header'
import WorkflowBarChart from './WorkflowBarChart'
import CachedOutlinedIcon from "@mui/icons-material/CachedOutlined";

const Workflow = () => {
  return (
    <>
        <Header text={'PAYMENT IN LAST 7 DAYS (MY VIEW) '} />
        <div className='workflow-class'>
                <WorkflowBarChart />
                <footer className="footer" style={{marginTop: '-2px', color: "#999", display: 'flex',
                    alignItems: 'center', gap: '0.4rem', fontSize: '12px' }}>
                    <CachedOutlinedIcon />
                    Last Updated 04/08/2024 04:09:41 PM
                </footer>
        </div>

    </>
  )
}

export default Workflow