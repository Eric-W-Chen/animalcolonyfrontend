<<<<<<< HEAD
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
=======
>>>>>>> ebca08d739be6d999bbf4b2eb0d16f2b0585f433
import React, { useEffect } from 'react';
import { useProfileProvider } from 'contexts/profile';
import Logout from 'components/Logout';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const { state, state: { name: { first } } } = useProfileProvider();

  return (
    <div className="dashboard">
      <h1>{`Welcome ${first}!`}</h1>
<<<<<<< HEAD
      {/* <h2>{ JSON.stringify(state) }</h2> */}
      <Link to="/item"> Item </Link>
      &nbsp;
      <Link to="/cart"> Shopping Cart </Link>
      &nbsp;
=======
      <h2>{ JSON.stringify(state) }</h2>
      <Link to="/item"> Item </Link>
      <Link to="/cart"> Shopping Cart </Link>
>>>>>>> ebca08d739be6d999bbf4b2eb0d16f2b0585f433
      <Logout />
    </div>
  );
};

export default Dashboard;
