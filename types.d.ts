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
	handleAddToCart: (addItemToCart: CartItem) => void
	// handleMouseEnter: (e: React.MouseEvent<HTMLSpanElement>, hex: string) => void
	// handleMouseLeave: () => void
	// handleOnClickColor: () => void
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

interface CartItemProps extends CartFunctionsProps {
	item: CartItem
}

interface CartProps extends CartFunctionsProps {
	cartItems: CartItem[]
}

