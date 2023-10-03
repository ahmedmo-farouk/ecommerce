export function getCarttotalInvoice(cart) {
  let { totalAmount, totalCount } = cart?.carts?.reduce(
    (cartTotal, cartItem) => {
      const { price, quantity } = cartItem;
      const itemTotal = price * quantity;
      cartTotal.totalAmount += itemTotal;
      cartTotal.totalCount += quantity;
      return cartTotal;
    },
    { totalAmount: 0, totalCount: 0 }
  );
  cart.totalAmount = parseInt(totalAmount.toFixed(2));
  cart.totalCount = totalCount;

  localStorage.setItem("localCart", JSON.stringify(cart));

  return cart;
}
