import React, {useState} from 'react';
import {CircleStyle, CloseBtn, StyledButton, Wrapper} from './styles';
import Product from "./Product/Product";
import Cart from "./Cart/Cart";
import Drawer from '@material-ui/core/Drawer'
import CircularProgress from '@material-ui/core/CircularProgress'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'
import CloseIcon from '@material-ui/icons/Close';
import Grid from '@material-ui/core/Grid'
import Badge from '@material-ui/core/Badge'
import {useProductContext} from "./Context/ContextProvider";

const App = () => {
	const [cartOpen, setCartOpen] = useState(false)
	const {cartItems, data, isLoading, error} = useProductContext()
	const dataIWillUse = data && data.slice(3, 36) as ProductProps[]


	const getTotalItems = (items: CartItem[]) =>
		items.reduce((prev: number, currentItem) => prev + currentItem.amount, 0)


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
						<Cart/>
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
                <Product item={item}/>
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

