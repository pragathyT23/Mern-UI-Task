import * as React from 'react';
import Box from '@mui/material/Box';
import SettingsIcon from '@mui/icons-material/Settings';
export default (thisComponent) => {
    return (
        <>
            <Box className="head-section" sx={ { width: '100%', display: 'flex', alignItems: 'center', textAlign: 'center' } }>
                <div className='userleft'>
                    <div className='breadcrum'>User Dashboard / Attendance</div>
                    <div className='attend'>Attendance</div>
                </div>
                <div className='userright'>
                    <span className='setpass'>Set Password</span>
                    <span className='logout'>LOGOUT</span>
                    <span className='hyp'>|</span>
                    <span className='cname'>Hi, Mark</span>
                    <span className='setting'><SettingsIcon style={ { fontWeight: 'bold', color: 'white' } } /></span>
                </div>
            </Box>
        </>
    );
}
