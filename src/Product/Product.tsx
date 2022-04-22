import React, {FC, MouseEvent, useEffect, useState} from 'react';
import {AddItemBtn, ColorBox, ColorContainer, ColorText, ItemContainer} from './Product.styles';
import ReadMore from "../ReadMore/ReadMore";

const Product: FC<ItemProps> = ({item, handleAddToCart}) => {
		const [color, setColor] = useState<ProductColor>({hex_value: '', colour_name: ''})
		const [hasColor,] = useState(item.product_colors.length > 0)

		useEffect(() => {
			if (item.product_colors && item.product_colors[0]) {
				setColor(item.product_colors[0])
			}
		}, [])

		const handleMouseEnter = (e: MouseEvent<HTMLSpanElement>, hex: string) => {
			if (e.currentTarget && e.currentTarget.getAttribute('name') === hex) {
				setColor({
					hex_value: e.currentTarget.getAttribute('name')!,
					colour_name: e.currentTarget.getAttribute('value')!
				})
			}
		}
		const handleMouseLeave = () => {
		}

		return (
			<ItemContainer>
				<img src={item.image_link} alt={item.name}/>
				<div>
					<h3>{item.name}</h3>
					<ReadMore>{item.description}</ReadMore>
					<ColorContainer hasColor={hasColor}>
						<ColorText hasColor={hasColor}>Color: {color.colour_name}</ColorText>
						{
							item.product_colors?.map(p =>
								<ColorBox key={p.hex_value}
													name={p.hex_value}
													selected={p.hex_value === color.hex_value}
													value={p.colour_name}
													onMouseEnter={(e) => handleMouseEnter(e, p.hex_value)}
													onMouseLeave={handleMouseLeave}
								>
									<span> </span>
								</ColorBox>
							)
						}
					</ColorContainer>
					<h3>${item.price}</h3>
				</div>
				<AddItemBtn>Add to cart</AddItemBtn>
			</ItemContainer>
		);
	}
;

export default Product;
