import React from 'react';
import CachedOutlinedIcon from "@mui/icons-material/CachedOutlined";

const Footer = () => {
  return (
    <footer className="footer" style={{marginTop: '-2px', color: "#999", display: 'flex',
        alignItems: 'center', gap: '0.4rem', fontSize: '12px' }}>
        <CachedOutlinedIcon />
        Last Updated 22/08/2024 04:09:41 PM
    </footer>
  )
}

export default Footer