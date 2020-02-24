import React from 'react';
import { useProfileProvider } from 'contexts/profile';
import Logout from 'components/Logout';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const { state: { name: { first } } } = useProfileProvider();

  return (
    <div className="dashboard">
      <h1>{`Welcome ${first}!`}</h1>
      <Link to="/item"> Item </Link>
      
      <Logout />
    </div>
  );
};

export default Dashboard;
