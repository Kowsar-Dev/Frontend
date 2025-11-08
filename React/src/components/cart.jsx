import React from 'react';

const CartButton = ({ cart_icon }) => {
  return (
    <button className="flex items-center p-2 border rounded">
      <img src={cart_icon} alt="Cart" className="h-5 mr-1" />
      Add to Cart
    </button>
  );
};

export default CartButton;
