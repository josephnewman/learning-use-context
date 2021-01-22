import React, { useState, useContext } from 'react';

const ShoppingListContext = React.createContext({});

const ShoppingListProvider = ({ children }) => {
  const [shoppingList, setShoppingList] = useState([
    'The most beautiful eggs',
    'Just a touch of oil',
    'A sprinkle of baking powder',
    'The smallest of dashes of beautiful react context',
  ]);

  return (
    <ShoppingListContext.Provider value={{ shoppingList, setShoppingList }}>{children}</ShoppingListContext.Provider>
  );
};

const useShoppingListContext = () => useContext(ShoppingListContext);

export { useShoppingListContext, ShoppingListProvider };
