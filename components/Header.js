import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from '../routes';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import Button from '@material-ui/core/Button';

export default () => {
  return (
    <MuiThemeProvider>
    <div>
    <AppBar  title="CrowdFunding Page" >
    <Menu style={{ marginTop: '10px', marginBottom: '10px' }}>
      

      <Menu.Menu position="right"  >
        <Link route="/" >
          <a className="item">Campaigns</a>
        </Link>

       
      </Menu.Menu>
    </Menu>
    
  </AppBar>
  
   </div><br/>
   </MuiThemeProvider>
   
  );
};

const style = {marginBottom:20}
