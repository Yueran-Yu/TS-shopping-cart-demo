import React, {FC} from 'react';
import Button from "@material-ui/core/Button"
import {CartItemContainer} from './CartItem.styles';

const CartItem: FC<CartItemProps> = ({item, addToCart, removeFormCart}) => {
	return (
		<CartItemContainer>
			<div>
				<h3>{item.name}</h3>
				<p>Color: {item.product_color.colour_name}</p>
				<div className="information">
					<p>Price: ${item.price}</p>
					<p>Total: ${(item.amount * item.price).toFixed(2)}</p>
				</div>
				<div className="buttons">
					<Button
						size="small"
						disableElevation
						variant="contained"
						onClick={() => removeFormCart(item.id)}>-
					</Button>
					<p>{item.amount}</p>
					<Button
						size="small"
						disableElevation
						variant="contained"
						onClick={() => addToCart(item,item.product_color)}>+
					</Button>
				</div>
			</div>
			<img src={item.image_link} alt={item.name}/>
		</CartItemContainer>
	)
}

export default CartItem;
