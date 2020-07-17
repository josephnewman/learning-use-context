import React, { useContext } from 'react';

import { ShoppingListContext } from '../../context/ShoppingListContext';

function ShoppingList() {
  const [shoppingList] = useContext(ShoppingListContext);

  return (
    <div className="shopping-list">
      <ol>
        {shoppingList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ol>
    </div>
  );
}

export default ShoppingList;
