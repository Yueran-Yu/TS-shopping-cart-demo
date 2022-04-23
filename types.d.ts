interface ProductColor {
	hex_value: string
	colour_name: string
}

interface ProductsBaseProps {
	id: number
	category: string
	name: string
	description: string
	image_link: string
	price: number
	amount: number
}

interface CartItem extends ProductsBaseProps {
	product_color: ProductColor
}

interface ProductProps extends ProductsBaseProps {
	product_colors: ProductColor[]
}

type ItemProps = {
	item: ProductProps
}

interface StyledProductColor {
	name: string
	value: string
	hovered: boolean
	selected: boolean
}

interface StyledHasColor {
	hasColor: boolean
}

interface CartFunctionsProps {
	addToCart: (selectedItem: CartItem) => void
	removeFormCart: (id: number, productColor: ProductColor) => void
}

interface CartItemProps {
	item: CartItem
}


interface ContextProps {
	cartItems: CartItem[]
	setCartItems: React.Dispatch<CartItem[]>
	data: ProductProps[] | undefined
	isLoading: boolean
	error:unknown
	handleAddToCart: (selectedItem: CartItem) => void
	handleRemoveFromCart: (id: number, productColor: ProductColor) => void
}
