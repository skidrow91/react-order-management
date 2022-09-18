import LoginPage from '../../../../views/LoginPage/LoginPage';

import {Routes, Route, Link, NavLink} from 'react-router-dom';
import {UL, LI} from './Header.styles';
import NavBar from '../NavBar/NavBar';

function Header() {
	
  return (
    <div className='header flex justify-end'>
      <NavBar />
    </div>  
  );

}

export default Header;