import React, {useState} from 'react';
import {useQuery} from "react-query";
import {CircleStyle, CloseBtn, StyledButton, Wrapper} from './styles';
import Product from "./Product/Product";
import Cart from "./Cart/Cart";
import Drawer from '@material-ui/core/Drawer'
import CircularProgress from '@material-ui/core/CircularProgress'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'
import CloseIcon from '@material-ui/icons/Close';
import Grid from '@material-ui/core/Grid'
import Badge from '@material-ui/core/Badge'

const fetchProducts = async (): Promise<ProductProps[]> =>
	await (await fetch("https://makeup-api.herokuapp.com/api/v1/products.json?product_type=blush&price_greater_than=15")).json()

const App = () => {
	const [cartOpen, setCartOpen] = useState(false)
	const [cartItems, setCartItems] = useState<CartItem[]>([])
	const {data, isLoading, error} = useQuery<ProductProps[]>("products", fetchProducts)
	const dataIWillUse = data && data.slice(3, 36) as ProductProps[]


	const getTotalItems = (items: CartItem[]) =>
		items.reduce((prev: number, currentItem) => prev + currentItem.amount, 0)


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


	if (error) return <div>Something went wrong...</div>
	return (
		<div>
			{isLoading ?
				<CircularProgress style={CircleStyle}/>
				:
				<Wrapper>
					<Drawer anchor="right" open={cartOpen} onClose={() => setCartOpen(false)}>
						<CloseBtn aria-label="close" onClick={() => setCartOpen(false)}>
							<CloseIcon/>
						</CloseBtn>
						<Cart
							cartItems={cartItems}
							addToCart={handleAddToCart}
							removeFormCart={handleRemoveFromCart}/>
					</Drawer>
					<StyledButton onClick={() => setCartOpen(true)}>
						<Badge badgeContent={getTotalItems(cartItems)} color="error">
							<AddShoppingCartIcon/>
						</Badge>
					</StyledButton>
					<Grid container spacing={3}>

						{dataIWillUse!.map(item =>
							item.image_link &&
              <Grid item key={item.id} xs={12} sm={4}>
                <Product item={item}
                         handleAddToCart={handleAddToCart}/>
              </Grid>
						)}
					</Grid>
				</Wrapper>
			}
		</div>
	)
}

export default App;


// const [loading, setLoading] = useState(false)
// const [_data, setData] = useState<ProductProps[]>([])
// const [_error, setError] = useState(false)
// useEffect(() => {
// 	setLoading(true)
// 	axios
// 		.get<ProductProps[]>("https://makeup-api.herokuapp.com/api/v1/products.json?product_type=blush&price_greater_than=15")
// 		.then(resp => {setData(resp.data)})
// 		.catch(err => {
// 			console.dir(err)
// 			setError(true)
// 		})
// 		.finally(() => setLoading(false))
// }, [])

