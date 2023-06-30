import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import jwtDecode from 'jwt-decode';

import {
  selectSignedIn,
  setSignedIn,
  setUserData,
} from '../features/userSlice';

import '../styling/home.css';
const clientId =
  '706735807293-0ltl2vqokd2jmtnlg2lr894renodmko9.apps.googleusercontent.com';
const Homepage = () => {
  const isSignedIn = useSelector(selectSignedIn);
  const dispatch = useDispatch();

  return (
    <div className='home__page' style={{ display: isSignedIn ? 'none' : '' }}>
      {!isSignedIn ? (
        <div className='login__message'>
          <h2>📗</h2>
          <h1>A Readers favorite place!</h1>
          <p>
            We provide high quality online resource for reading blogs. Just sign
            up and start reading some quality blogs.
          </p>
          <div className='login__button'>
            <GoogleOAuthProvider clientId={`${clientId}`}>
              <GoogleLogin
                onSuccess={credentialResponse => {
                  dispatch(setSignedIn(true));
                  let user = jwtDecode(credentialResponse.credential);
                  console.log(user);
                  dispatch(setUserData(user));
                }}
                onError={() => {
                  alert('Login Failed');
                }}
              />
            </GoogleOAuthProvider>
          </div>
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

export default Homepage;
