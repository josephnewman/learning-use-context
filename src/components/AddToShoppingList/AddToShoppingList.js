import React, { useContext, useState } from 'react';

import { ShoppingListContext } from '../../context/ShoppingListContext';

function AddToShoppingList() {
  const [shoppingList, setShoppingList] = useContext(ShoppingListContext);
  const [newItem, setNewItem] = useState('');

  const handleSubmit = (e) => {
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
