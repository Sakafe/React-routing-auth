import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import firebaseConfig from '../FirebaseConfig';
import { getAuth, createUserWithEmailAndPassword,updateProfile,onAuthStateChanged } from "firebase/auth";
export const SignUp = () => {
  const auth = getAuth();
  const navigate = useNavigate();

  let [name, setName] = useState('');
  let [email, setEamil] = useState('');
  let [password, setPassword] = useState('');
  let [err, setErr] = useState('')

  let handleSubmit = () => {
    if (!name && !email && !password){
      setErr('Fill the  all required fields !');
    } else if (!name){
      setErr('Enter Your Name!')
    } else if (!email){
      setErr('Enter Your Email!')
    } else if (!password){
      setErr('Enter Your Password!')
    } else if (password.length <7){
      setErr('password need minimum 8 characters!') }
      else {
        createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: "https://www.w3schools.com/w3images/avatar2.png",
    }).then(() => {
      // Profile updated!
      setErr("");
      navigate("/");
    });
  })
  .catch((error) => {
    console.log(error.code)
    if(error.code == 'auth/email-already-in-use'){
      setErr('This email is already in use. please try again later.');
    } else {
      setErr('');
    }
  });
      
   }
  };
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
        <h2>Create a account!</h2>
        <input onChange={(e) => setName(e.target.value)} type="text" placeholder='Enter Your name' required />
        <input onChange={(e) => setEamil(e.target.value)} type="email" placeholder='Enter Your Email' required  />
        <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder='Enter your Password' required />
        <p>{err}</p>
        <button onClick={handleSubmit}>signup</button>
        {/* <button className='facebook'><Link className='link' to='/signin'>Login with Facebook</Link></button> */}
        <Link className='link' to='/signin'>You have an account?signin.</Link>
        </div>
    </div>
  )
}
