

import React from 'react';
import './Progress.css';
import WifiProtectedSetupTwoToneIcon from '@mui/icons-material/WifiProtectedSetupTwoTone';

export default function Progress() {
  return (
    <div className="header_progress">
      <div className="welcome">
        <h1> Proceed to checkout! <WifiProtectedSetupTwoToneIcon  style={{ color: 'green' ,  fontSize: 40  }} /> </h1>
      
      </div>
    </div>
  );
}
