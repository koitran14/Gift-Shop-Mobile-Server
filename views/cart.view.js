const { getAll, addToCart, removeFromCart, updateQuantity, getAllByUserID } = require('../controllers/cart');

module.exports = function(app) {
  // GET
  app.get('/cart', getAll);
  app.get('/cart/:userId', getAllByUserID);

  // POST
  app.post('/cart/addToCart', addToCart);

   // PUT (Update)
   app.put('/updateQuantity/:userId/:productId', updateQuantity);

  // DELETE
  app.delete('/cart/remove/:id', removeFromCart);
 
};
