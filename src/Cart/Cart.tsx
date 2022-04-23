import React, {FC} from 'react';
import {CartContainer, TotalPayment} from './Cart.styles';
import CartItem from "../CartItem/CartItem";
import {useProductContext} from "../Context/ContextProvider";

const Cart: FC = () => {
	const {cartItems} = useProductContext()

	const totalPayment = cartItems.reduce(
		(prev: number, currentItem: CartItem) => {
			return prev + currentItem.amount * currentItem.price
		}, 0)
	return (
		<CartContainer>
			<h2 className="cartTitle">Your Shopping Cart</h2>
			{cartItems.length === 0 ? <p>No items in cart.</p> : ""}
			{cartItems.map(item =>
				<CartItem key={item.id + item.product_color.hex_value} item={item}/>)}
			{
				<TotalPayment>Total: ${totalPayment.toFixed(2)}</TotalPayment>
			}
		</CartContainer>
	)
}
export default Cart;
