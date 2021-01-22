import React from 'react';

import { useShoppingListContext } from '../../context/ShoppingListContext';

function ShoppingList() {
  const { shoppingList } = useShoppingListContext();

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
