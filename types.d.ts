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
	price_sign: string
	amount: number
	brand: string
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

interface ItemColor {
	name: string
	value: string
	selected: boolean
}

interface HasColor {
	hasColor: boolean
}

interface CartItemProps {
	item: CartItem
	addToCart: (clickedItem: CartItem) => void
	removeFormCart: (id: number) => void
}

interface CartProps {
	cartItems: CartItem[]
	addToCart: (clickedItem: CartItem) => void
	removeFormCart: (id: number) => void
}