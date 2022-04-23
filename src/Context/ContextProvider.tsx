import React, {createContext, FC, ReactNode, useContext, useState} from 'react';
import {useQuery} from "react-query";


const fetchProducts = async (): Promise<ProductProps[]> =>
	await (await fetch("https://makeup-api.herokuapp.com/api/v1/products.json?product_type=blush&price_greater_than=15")).json()

const ProductContext = createContext<ContextProps>({
	cartItems: [] as CartItem[],
	setCartItems: () => {},
	data: [],
	isLoading: false,
	error: false,
	handleAddToCart: (selectedItem) => {},
	handleRemoveFromCart: (id, productColor) => {}
})


const ContextProvider:FC<ReactNode> = ({children}) => {
	const [cartItems, setCartItems] = useState<CartItem[]>([])
	const {data, isLoading, error} = useQuery<ProductProps[]>("products", fetchProducts)

	const handleAddToCart = (itemToCart: CartItem) => {
		setCartItems(cartItems => {
				const isItemExistInCart = cartItems.find(item =>
					item.id === itemToCart.id &&
					item.product_color.hex_value === itemToCart.product_color.hex_value)

				if (isItemExistInCart) {
					return cartItems.map(item => (
						item.id === itemToCart.id &&
						item.product_color.hex_value === itemToCart.product_color.hex_value ?
							{
								...item,
								amount: item.amount + 1
							} : item))
				}
				return [...cartItems, {...itemToCart, amount: 1}]
			}
		)
	}

	const handleRemoveFromCart = (id: number, productColor: ProductColor) => {
		setCartItems(cartItems => (
				cartItems.reduce((prev: CartItem[], current: CartItem) => {
					if (current.id === id && current.product_color.hex_value === productColor.hex_value) {
						if (current.amount === 1) {
							return prev
						}
						return [...prev, {...current, amount: current.amount - 1}]
					} else {
						return [...prev, current]
					}
				}, [] as CartItem[])
			)
		)
	}
	return (
		<ProductContext.Provider
			value={{cartItems, setCartItems, data, isLoading, error, handleAddToCart, handleRemoveFromCart}}>
			{children}
		</ProductContext.Provider>
	);
};

export default ContextProvider;

export const useProductContext= ()=>{
	return useContext(ProductContext)
}
