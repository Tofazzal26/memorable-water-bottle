const cartStorage = () => {
  const findLocalStorage = localStorage.getItem("cart");
  if (findLocalStorage) {
    return JSON.parse(findLocalStorage);
  }
  return [];
};

const saveCartLS = (cart) => {
  const stringField = JSON.stringify(cart);
  localStorage.setItem("cart", stringField);
};

const addLocalStorage = (id) => {
  const cart = cartStorage();
  cart.push(id);
  saveCartLS(cart);
};

const removeFromLS = (id) => {
  const cart = cartStorage();
  const remaining = cart.filter((idx) => idx.id !== id);
  saveCartLS(remaining);
};

export { addLocalStorage, cartStorage, removeFromLS };
