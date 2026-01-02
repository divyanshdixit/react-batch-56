import React from 'react'
import { useContext } from 'react';
import {ThemeContext} from '../App';

const Profile = () => {
    const theme = useContext(ThemeContext);

  return (
    <div> Profile -  {theme} </div>
  )
}

export default Profile