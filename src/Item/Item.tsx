import React, {FC, MouseEvent, useEffect, useState} from 'react';
import {AddItemBtn, ColorBox, ColorContainer, ColorText, ItemContainer} from './Item.styles';
import ReadMore from "../ReadMore/ReadMore";

const Item: FC<ItemProps> = ({item, handleAddToCart}) => {
		const [colorName, setColorName] = useState<string | null>(null)
		const [hex, setHex] = useState<string | null>(null)
		const [hasColor,] = useState(item.product_colors.length > 0)
		useEffect(() => {
			if (item.product_colors && item.product_colors[0]) {
				setColorName(item.product_colors[0].colour_name)
			}
		}, [])

		const handleMouseEnter = (e: MouseEvent<HTMLSpanElement>, hex: string) => {
			e.preventDefault()
			if (e.currentTarget && e.currentTarget.getAttribute('name') === hex) {
				setColorName(e.currentTarget.getAttribute('value'))
				setHex(e.currentTarget.getAttribute('name'))
			}
		}
		const handleMouseLeave = () => {
			setHex('')
		}

		return (
			<ItemContainer>
				<img src={item.image_link} alt={item.name}/>
				<div>
					<h3>{item.name}</h3>
					<ReadMore>{item.description}</ReadMore>
					<ColorContainer hasColor={hasColor}>
						<ColorText hasColor={hasColor}>Color: {colorName}</ColorText>
						{
							item.product_colors?.map(p =>
								<ColorBox key={p.hex_value}
													name={p.hex_value}
													selected={p.hex_value === hex}
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

export default Item;
