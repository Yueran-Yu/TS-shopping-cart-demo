interface ProductColors {
	hex_value: string
	colour_name: string
}

interface CartItem extends ProductProps {
	product_color: ProductColors

}

interface ProductProps extends ProductsBaseProps {
	product_colors: ProductColors[]
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

type ItemProps = {
	item: ProductProps
	handleAddToCart: (addItemToCart: CartItem) => void
}

interface ItemColor {
	name: string
	value: string
	selected:boolean
}

interface HasColor {
	hasColor: boolean
}

interface CartItemProps{
	item: CartItem
	addToCart:(clickedItem:CartItem)=>void
	removeFormCart: (id:number)=>void
}

interface CartProps{
	cartItems: CartItem[]
	addToCart:(clickedItem:CartItem)=>void
	removeFormCart: (id:number)=>void
}