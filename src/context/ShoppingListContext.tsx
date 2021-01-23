import React, { useState, useContext, Dispatch, SetStateAction } from 'react';

interface ShoppingListContext {
  shoppingList: string[];
  setShoppingList: Dispatch<SetStateAction<string[]>>;
}

const ShoppingListContext = React.createContext<ShoppingListContext>({} as ShoppingListContext);

const ShoppingListProvider: React.FC = ({ children }) => {
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

const useShoppingListContext = (): ShoppingListContext => useContext(ShoppingListContext);

export { useShoppingListContext, ShoppingListProvider };
