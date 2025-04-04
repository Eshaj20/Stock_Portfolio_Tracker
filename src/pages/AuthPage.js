import React from 'react';
import Login from '../components/Login';
import { useAuth } from '../context/AuthContext';
import Home from './Home';

const AuthPage = () => {
  const { user, loading } = useAuth(); // Get loading state

  if (loading) return <p className="text-center text-lg">Loading...</p>;  // Prevent flickering

  return user ? <Home /> : <Login />;
};

export default AuthPage;
