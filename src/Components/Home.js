import React from 'react'
import { getAuth,signOut,onAuthStateChanged} from "firebase/auth";
import { useNavigate } from 'react-router-dom';
export const Home = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  
  const handleLogOut = () =>{
    signOut(auth).then(() => {
      // Sign-out successful.
        navigate('/signin');
    }).catch((error) => {
      // An error happened.
      console.log(error.code);
    });
  }
  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log(auth.currentUser);
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      // ...
    } else {
      // User is signed out
      navigate('/signin');
    }
  });
  return (
    <div>
        <h1>Welcome to Home page!</h1>
        {/* <h2>{auth.currentUser.displayName}</h2> */}
        <button onClick={handleLogOut}>Log-out</button>
    </div>
  )
}
