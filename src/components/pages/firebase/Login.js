import React, {useState} from 'react';
import {Form} from "./Form";
import {useDispatch} from "react-redux";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";



const Login = () => {
  const dispatch = useDispatch()

  const handleLogin = (email,password) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth,email,password)
      .then(console.log)
      .catch(console.error)

  }
  return (
    <Form
      title="Login"
      handleClick={handleLogin}
    />
  );
};

export {Login};