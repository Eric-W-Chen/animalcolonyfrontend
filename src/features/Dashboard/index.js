import React, { useEffect } from 'react';
import { useProfileProvider } from 'contexts/profile';
import Logout from 'components/Logout';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const { state, state: { name: { first } } } = useProfileProvider();

  return (
    <div className="dashboard">
      <h1>{`Welcome ${first}!`}</h1>
      <h2>{ JSON.stringify(state) }</h2>
      <Link to="/item"> Item </Link>
      <Link to="/cart"> Shopping Cart </Link>
      <Logout />
    </div>
  );
};

export default Dashboard;
