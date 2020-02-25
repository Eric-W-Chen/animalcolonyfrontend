<<<<<<< HEAD
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-array-index-key */
=======
>>>>>>> ebca08d739be6d999bbf4b2eb0d16f2b0585f433
import React, { useState } from 'react';
import { useProfileProvider } from 'contexts/profile';
import Logout from 'components/Logout';

const Cart = () => {
  const { state, item, state: { item: itemsList, name: { first } } } = useProfileProvider();
  const [itemDetails, setItemDetails] = useState({ });

  // console.log("State item", JSON.stringify(itemsList.items));

<<<<<<< HEAD
  const listOfList = itemsList.items.map((object, i) => (
    <tr key={i}>
      <td>{object.name}</td>
      <td>{object.cost}</td>
    </tr>
  ));
=======
  let listOfList = itemsList.items.map((object,i)=>{   
    return(      
    <tr key = {i}>   
      <td>{object.name}</td>       
      <td>{object.cost}</td>       
      </tr>     
      )   
    })  
>>>>>>> ebca08d739be6d999bbf4b2eb0d16f2b0585f433

  return (
    <div className="Cart">
      <h1>Shopping Cart</h1>
<<<<<<< HEAD
      <table style={{
 width: '100%', backgroundColor: 'darkgrey', color: 'white', textAlign: 'center',
}}
      >
        <tbody>
          <tr
            key="header"
            style={{
 width: '100%', backgroundColor: 'darkblue', color: 'white', textAlign: 'center',
}}
          >
            <th>Item</th>
            <th>Cost</th>
          </tr>
          {listOfList}
        </tbody>
      </table>
      <h2>Total Cost: {itemsList.totalCost}</h2>
    </div>
  );
};

export default Cart;
=======
        <table style={{ width: '100%' , backgroundColor: 'darkgrey', color: 'white', textAlign: 'center' }}>
          <tbody>
              <tr key = "header" style={{ width: '100%' , backgroundColor: 'darkblue', color: 'white', textAlign: 'center' }}>
                <th>Item</th>
                <th>Cost</th>
              </tr>
    {listOfList}
    </tbody>
  </table>
    <h2>Total Cost: {itemsList.totalCost}</h2>
  </div>
  );
};

export default Cart;
>>>>>>> ebca08d739be6d999bbf4b2eb0d16f2b0585f433
