import './App.css';
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import BasicHeader from './components/Header/Header.js';
import HomePage from './components/HomePage/HomePage.jsx';
function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <div className="customBackground"><BasicHeader /></div>
      <div className="box-border-main"><HomePage /></div>      
    </React.Fragment>
  );
}

export default App;
