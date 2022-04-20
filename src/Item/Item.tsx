import React, {FC} from 'react';
import {ItemContainer} from './Item.styles';
import Button from '@material-ui/core/Button'
import ReadMore from "../ReadMore/ReadMore";

const Item: FC<ItemProps> = ({item, handleAddToCart}) => {
	return (
		<ItemContainer>
			<img src={item.image_link} alt={item.name}/>
			<div>
				<h3>{item.name}</h3>
				<ReadMore>{item.description}</ReadMore>
				<h3>${item.price}</h3>
				<div>{item.product_colors?.map(p => <span key={p.hex_value}>{p.colour_name}</span>)}</div>
			</div>
			<Button onClick={() => handleAddToCart(item)}>Add to cart</Button>
		</ItemContainer>
	);
};

export default Item;
