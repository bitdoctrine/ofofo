import { useState } from 'react';
import { useAuthContext } from '../hooks/useAuthContext';

//firebase import
import { auth } from '../firebase/config';
import {
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
} from 'firebase/auth';

export const useAuthentication = () => {
  const [error, setError] = useState(null);
  const { dispatch } = useAuthContext();

  const signup = (email, password) => {
    setError(null);
    createUserWithEmailAndPassword(auth, email, password)
      .then((response) => {
        dispatch({ type: 'SIGNIN', payload: response.user });
        console.log('new user created', response.user);
      })
      .catch((err) => setError(err.message));
  };

  const signin = async (email, password) => {
    setError(null);
    await signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        dispatch({ type: 'SIGNIN', payload: res.user });
        console.log(res.user);
      })
      .catch((err) => {
        setError(err.message);
        console.log(error);
      });
  };

  const signout = () => {
    setError(null);
    signOut(auth)
      .then(() => {
        dispatch({ type: 'SIGNOUT' });
        console.log('User Signed Out');
      })
      .catch((err) => {
        setError(err.message);
        console.log(error);
      });
  };

  return { error, signup, signout, signin };
};
