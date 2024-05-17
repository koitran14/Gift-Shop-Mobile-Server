const { getAll, addToCart, removeFromCart, updateCartItemQuantity } = require('../controllers/cart');

module.exports = function(app) {
  // GET
  app.get('/cart', getAll);
  // POST
  app.post('/cart/addToCart', addToCart);
  // DELETE
  app.delete('/cart/removeFromCart', removeFromCart);
  // PUT (Update)
  app.put('/cart/updateCartItemQuantity', updateCartItemQuantity);
};
