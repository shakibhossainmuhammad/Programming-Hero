const addProduct = () => {
  const productField = document.getElementById('product_name');
  const quantityField = document.getElementById('product_quantity');
  const product = productField.value;
  const quantity = quantityField.value;
  productField.value = '';
  quantityField.value = '';
  console.log(product, quantity);
  displayProduct(product, quantity);
  saveProductToLocalStorage(product, quantity);
};

const displayProduct = (product, quantity) => {
  const ul = document.getElementById('product_container');
  const li = document.createElement('li');
  li.innerText = `${product}: ${quantity}`;
  ul.appendChild(li);
};

const getStoredShoppingCart = () => {
  let cart = {};
  const storedCart = localStorage.getItem('cart');
  if (storedCart) {
    cart = JSON.parse(storedCart);
  }
  return cart;
};

const saveProductToLocalStorage = (product, quantity) => {
  const cart = getStoredShoppingCart();
  cart[product] = quantity;
  const cartStringfied = JSON.stringify(cart);
  localStorage.setItem('cart', cartStringfied);
};

const displayProductsFromLocalStorage = () => {
  const savedCart = getStoredShoppingCart();
  console.log(savedCart);
  for (const product in savedCart) {
    const quantity = savedCart[product];
    console.log(product, quantity);
    displayProduct(product, quantity);
  }
};
displayProductsFromLocalStorage();
