import React, { useState } from 'react';

import { useShoppingListContext } from '../../context/ShoppingListContext';

function AddToShoppingList() {
  const { shoppingList, setShoppingList } = useShoppingListContext();
  const [newItem, setNewItem] = useState('');

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (newItem) {
      const newShoppingList = [...shoppingList, newItem];
      setShoppingList(newShoppingList);
      setNewItem('');
    }
  };

  return (
    <div className="add-to-shopping-list">
      <form className="add-to-shopping-list-form" onSubmit={handleSubmit}>
        <input className="item-input" type="text" value={newItem} onChange={(e) => setNewItem(e.target.value)} />
        <button>Add</button>
      </form>
    </div>
  );
}

export default AddToShoppingList;
