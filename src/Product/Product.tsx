import React, {FC, MouseEvent, useEffect, useMemo, useState} from 'react';
import {AddItemBtn, ColorBox, ColorContainer, ColorText, ItemContainer} from './Product.styles';
import ReadMore from "../ReadMore/ReadMore";
import {useProductContext} from "../Context/ContextProvider";

const Product: FC<ItemProps> = ({item}) => {
		const [hoverColor, setHoverColor] = useState<ProductColor>({hex_value: '', colour_name: ''})
		const [selectedColor, setSelectedColor] = useState<ProductColor>({hex_value: '', colour_name: ''})
		const [hasColor,] = useState(item.product_colors.length > 0)
		const [hovered, setHovered] = useState<boolean>(false)
		const {handleAddToCart} = useProductContext()


		const initCartItemMemo = useMemo(() => {
			const createCartItem = (prodColor: ProductColor) => {
				return {
					id: item.id,
					category: item.category,
					name: item.name,
					description: item.description,
					image_link: item.image_link,
					price: item.price,
					amount: item.amount,
					product_color: prodColor
				}
			}
			return createCartItem(selectedColor)
		}, [item.amount, item.category, item.description, item.id, item.image_link, item.name, item.price, selectedColor])


		useEffect(() => {
			if (item.product_colors && item.product_colors[0]) {
				setHoverColor(item.product_colors[0])
				setSelectedColor(item.product_colors[0])

			}
		}, [item.product_colors])

		const handleMouseEnter = (e: MouseEvent<HTMLSpanElement>, hex: string) => {
			if (e.currentTarget && e.currentTarget.getAttribute('name') === hex) {
				setHoverColor({
					hex_value: e.currentTarget.getAttribute('name')!,
					colour_name: e.currentTarget.getAttribute('value')!
				})
				setHovered(true)
			}
		}

		const handleMouseLeave = () => {
			setHoverColor({...hoverColor, hex_value: ''})
			setHovered(false)

		}

		const handleSelectedColor = (e: MouseEvent<HTMLSpanElement>, hex: string) => {
			if (e.currentTarget && e.currentTarget.getAttribute('name') === hex) {
				setSelectedColor({
					hex_value: e.currentTarget.getAttribute('name')!,
					colour_name: e.currentTarget.getAttribute('value')!
				})
			}
		}

		return (
			<ItemContainer>
				<img src={item.image_link} alt={item.name}/>
				<div>
					<h3>{item.name}</h3>
					<ReadMore>{item.description}</ReadMore>
					<ColorContainer hasColor={hasColor}>
						<ColorText hasColor={hasColor}>Color:{
							hovered ?
								hoverColor.colour_name :
								selectedColor.colour_name}
						</ColorText>
						{
							item.product_colors?.map(p =>
								<ColorBox key={p.hex_value}
													name={p.hex_value}
													selected={p.hex_value === selectedColor.hex_value}
													hovered={p.hex_value === hoverColor.hex_value}
													value={p.colour_name}
													onMouseEnter={(e) => handleMouseEnter(e, p.hex_value)}
													onMouseLeave={handleMouseLeave}
													onClick={(e) => handleSelectedColor(e, p.hex_value)}
								>
									<span> </span>
								</ColorBox>
							)
						}
					</ColorContainer>
					<h3>${item.price}</h3>
				</div>
				<AddItemBtn onClick={() => handleAddToCart(initCartItemMemo)}>Add to cart</AddItemBtn>
			</ItemContainer>
		);
	}
;

export default Product;
