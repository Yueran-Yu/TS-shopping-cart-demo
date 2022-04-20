import React, {useEffect, useState} from 'react';
import {useQuery} from "react-query";
import Drawer from '@material-ui/core/Drawer'
import LinearProgress from '@material-ui/core/LinearProgress'
import Grid from '@material-ui/core/Grid'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'
import Badge from '@material-ui/core/Badge'
import {StyledButton, Wrapper} from './styles';
import Item from "./Item/Item";


const fetchProducts = async (): Promise<ProductProps[]> =>
	await (await fetch("https://makeup-api.herokuapp.com/api/v1/products.json?product_type=blush&price_greater_than=15")).json()

const App = () => {
	const [cartOpen, setCartOpen] = useState(false)
	const [cartItems, setCartItems] = useState<ProductProps[]>([])
	const {data, isLoading, error} = useQuery<ProductProps[]>("products", fetchProducts)

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

	const getTotalItems = (cartItems: ProductProps[]) => {}
	const handleAddToCart = (addItemToCart: ProductProps) => {}
	const handleRemoveFromCart = () => {}

	if (isLoading) return <LinearProgress/>
	if (error) return <div>Something went wrong...</div>

	return (
		<Wrapper>
			<Drawer anchor="right" open={cartOpen} onClose={() => setCartOpen(false)}>Cart Something Happening here
			</Drawer>
			<StyledButton onClick={() => setCartOpen(true)}>
				<Badge badgeContent={() => getTotalItems(cartItems)}>
					<AddShoppingCartIcon/>
				</Badge>
			</StyledButton>
			<Grid container spacing={3}>
				{data && data.slice(1, 39).map(item =>
					item.image_link && <Grid item key={item.id} xs={12} sm={4}>
            <Item item={item} handleAddToCart={handleAddToCart}/>
          </Grid>
				)}
			</Grid>
		</Wrapper>
	);
}

export default App;
