import React, { useState } from 'react';

const ShoppingListContext = React.createContext([{}, {}]);

const ShoppingListProvider = (props) => {
  const [shoppingList, setShoppingList] = useState([
    'The most beautiful eggs',
    'Just a touch of oil',
    'A sprinkle of baking powder',
    'The smallest of dashes of beautiful react context',
  ]);

  return (
    <ShoppingListContext.Provider value={[shoppingList, setShoppingList]}>
      {props.children}
    </ShoppingListContext.Provider>
  );
};

export { ShoppingListContext, ShoppingListProvider };
