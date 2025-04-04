import React, { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';  // ✅ Import from firebase/auth
import { auth } from '../services/firebaseAuth';  // ✅ Import the configured auth instance

const UserProfile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      console.log('User signed out');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md">
      {user ? (
        <>
          <img src={user.photoURL} alt="Profile" className="w-16 h-16 rounded-full mb-2" />
          <h3 className="text-lg font-semibold">{user.displayName}</h3>
          <p className="text-sm text-gray-600">{user.email}</p>
          <button
            onClick={handleLogout}
            className="mt-3 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
          >
            Logout
          </button>
        </>
      ) : (
        <p>Please sign in</p>
      )}
    </div>
  );
};

export default UserProfile;
