import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import LoginPage from '../../../views/LoginPage/LoginPage';

import {Routes, Route, Link} from 'react-router-dom';

function Header() {
	
	return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
				<ul>
					<li>
            <Link to="/">Homepage</Link>
          </li>
					<li>
            <Link to="/login">Login</Link>
          </li>
				</ul>
      </AppBar>
    </Box>
  );

}

export default Header;