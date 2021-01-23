import React from 'react';
import { ShoppingList, AddToShoppingList } from '..';
import { ShoppingListProvider } from '../../context/ShoppingListContext';

const Page = (): JSX.Element => {
  return (
    <div className="page">
      <ShoppingListProvider>
        <ShoppingList />
        <AddToShoppingList />
      </ShoppingListProvider>
    </div>
  );
}

export default Page;
