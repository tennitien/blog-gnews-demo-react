import React from 'react';
import { useSelector } from 'react-redux';
import Blogs from './Components/Blogs';
import Homepage from './Components/Homepage';
import Navbar from './Components/Navbar';
import { selectSignedIn } from './features/userSlice';
import './styling/app.css';

const App = () => {
  const isSignedIn = useSelector(selectSignedIn);

  return (
    <div className='app'>
      <Navbar />
      <Homepage />
      {isSignedIn && <Blogs />}
    </div>
  );
};

export default App;
// todo
// import React from 'react';

// import { GoogleOAuthProvider } from '@react-oauth/google';
// import { GoogleLogin } from '@react-oauth/google';
// const App = () => {
//   return (
//     <div>
//       <GoogleOAuthProvider clientId='706735807293-0ltl2vqokd2jmtnlg2lr894renodmko9.apps.googleusercontent.com'>
//         <GoogleLogin
//           onSuccess={credentialResponse => {
//             console.log(credentialResponse);
//           }}
//           onError={() => {
//             console.log('Login Failed');
//           }}
//         />
//         ;
//       </GoogleOAuthProvider>
//       ;
//     </div>
//   );
// };

// export default App;
