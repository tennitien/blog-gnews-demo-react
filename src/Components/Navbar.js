import React, { useState } from 'react';
import { googleLogout } from '@react-oauth/google';
import { FaUserCircle } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectSignedIn,
  selectUserData,
  setInput,
  setSignedIn,
  setUserData,
} from '../features/userSlice';

import '../styling/navbar.css';

const Navbar = () => {
  const [inputValue, setInputValue] = useState('tech');
  const isSignedIn = useSelector(selectSignedIn);
  const userData = useSelector(selectUserData);
  console.log(userData);
  const dispatch = useDispatch();

  // const logout = response => {
  //   dispatch(setSignedIn(false));
  //   dispatch(setUserData(null));
  // };

  const handleClick = e => {
    e.preventDefault();
    dispatch(setInput(inputValue));
  };
  const logout = () => {
    googleLogout();
    dispatch(setSignedIn(false));
    dispatch(setUserData({}));
  };
  return (
    <div className='navbar'>
      <h1 className='navbar__header'>BlogGnew 💬</h1>
      {isSignedIn && (
        <div className='blog__search'>
          <input
            className='search'
            placeholder='Search for a blog'
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}
          />
          <button className='btn submit' onClick={handleClick}>
            Search
          </button>
        </div>
      )}

      {isSignedIn ? (
        <div className='navbar__user__data'>
          <FaUserCircle />
          <h1 className='signedIn'>{userData?.name}</h1>
          <button onClick={logout} className='btn btn__logout'>
            Logout
          </button>
        </div>
      ) : (
        <h1 className='notSignedIn'>User not available 😞</h1>
      )}
    </div>
  );
};

export default Navbar;
