import * as ShoppingListContext from '../src/context/ShoppingListContext';

const mockShoppingListContext = (value) => {
  const setShoppingListMock = jest.fn();

  jest.spyOn(ShoppingListContext, 'useShoppingListContext').mockImplementation(() => ({
    shoppingList: value,
    setShoppingList: setShoppingListMock,
  }));

  return { setShoppingListMock };
};

export { mockShoppingListContext };
