import React, {FC} from 'react';
import {CartContainer} from './Cart.styles';
import CartItem from "../CartItem/CartItem";

const Cart: FC<CartProps> = ({cartItems, addToCart, removeFormCart}) => {
	return (
		<CartContainer>
			<h2>Your Shopping Cart</h2>
			{cartItems.length === 0 ? <p>No items in cart.</p> : ""}
			{cartItems.map(item =>
				<CartItem key={item.id}
									item={item}
									addToCart={addToCart}
									removeFormCart={removeFormCart}/>)}
		</CartContainer>
	)
}
export default Cart;
