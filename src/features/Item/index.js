<<<<<<< HEAD
/* eslint-disable no-unused-vars */
=======
>>>>>>> ebca08d739be6d999bbf4b2eb0d16f2b0585f433
import React, { useState } from 'react';
import { useProfileProvider } from 'contexts/profile';
import Logout from 'components/Logout';

const Item = () => {
  const { state, item, state: { name: { first } } } = useProfileProvider();
  const [itemDetails, setItemDetails] = useState({ });

  const attemptSubmit = (event) => {
    event.preventDefault();
<<<<<<< HEAD
    // console.log('attempt submit', { itemDetails });
=======
    console.log('attempt submit', { itemDetails });
>>>>>>> ebca08d739be6d999bbf4b2eb0d16f2b0585f433
    item(itemDetails);
  };

  const updateInput = ({ target: { name, value } }) => {
    setItemDetails(prevState => ({ ...prevState, [name]: value }));
  };

  return (
    <div className="dashboard">
      <h1>{`Welcome ${first}!`}</h1>
<<<<<<< HEAD
      {/* <h2>{ JSON.stringify(state) }</h2> */}
=======
      <h2>{ JSON.stringify(state) }</h2>
>>>>>>> ebca08d739be6d999bbf4b2eb0d16f2b0585f433
      <Logout />

      <form className="Item">
        <p>
          <input name="name" placeholder="name" type="text" onChange={updateInput} />
        </p>
        <p>
          <input name="cost" placeholder="cost" type="number" onChange={updateInput} />
        </p>
        <button type="submit" onClick={attemptSubmit} onChange={updateInput}>
      Submit
        </button>
      </form>
    </div>
  );
};

export default Item;
