import * as ShoppingListContext from '../src/context/ShoppingListContext';

interface MockShoppingList {
  setShoppingListMock: () => {}
}

const mockShoppingListContext = (value: string[]): MockShoppingList => {
  const setShoppingListMock = jest.fn();

  jest.spyOn(ShoppingListContext, 'useShoppingListContext').mockImplementation(() => ({
    shoppingList: value,
    setShoppingList: setShoppingListMock,
  }));

  return { setShoppingListMock };
};

export { mockShoppingListContext };
