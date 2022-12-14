import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import firebaseConfig from '../FirebaseConfig';
import { getAuth, signInWithEmailAndPassword,onAuthStateChanged } from "firebase/auth";
export const Signin = () => {
  const auth = getAuth();
  const navigate = useNavigate();

  let [email, setEamil] = useState('');
  let [password, setPassword] = useState('');
  let [err, setErr] = useState('')

  let handleSubmit = () => {
    if (!email && !password){
      setErr('Fill the  all required fields !');
    } else if (!email){
      setErr('Enter Your Email!')
    } else if (!password){
      setErr('Enter Your Password!')
    } else if (password.length <7){
      setErr('password need minimum 8 characters!') }
      else {
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
        // Signed in 
        setErr('');
        navigate('/');
  })
  .catch((error) => {
    console.log(error.code);
    if(error.code == 'auth/wrong-password'){
      setErr('Your password is incorrect! please enter your password again!');
    } else if (error.code == 'auth/user-not-found'){
      setErr('please enter your right email address! ');
    } else{
      setErr('');
    }
  });
      
    }
  }
  onAuthStateChanged(auth, (user) => {
    if (user) {
      navigate('/');
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      // ...
    } 
  });
  return (
    <div id='signup'>
    <div className='signUp'>
    <h2>Login your account!</h2>
    <input onChange={(e) => setEamil(e.target.value)} type="email" placeholder='Enter Your Email' required  />
    <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder='Enter your Password' required />
    <p>{err}</p>
    <button onClick={handleSubmit}>Sign-in</button>
    <Link className='link' to='/signup'>You have don't an account?signup</Link>
    </div>
</div>
  )
}
