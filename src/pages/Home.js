import React from 'react';
import PortfolioDashboard from '../components/PortfolioDashboard';
import LiveStockChart from '../components/LiveStockChart';
import UserProfile from '../components/UserProfile';
import { useAuth } from '../context/AuthContext';

const Home = () => {
  const { user } = useAuth();

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {user ? (
        <>
          <UserProfile />
          <PortfolioDashboard />
          <LiveStockChart />
        </>
      ) : (
        <p className="text-center text-lg">Please sign in to access your portfolio.</p>
      )}
    </div>
  );
};

export default Home;
