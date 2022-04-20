interface ProductColors {
	hex_value: string
	colour_name: string
}

interface CartItemsWithColor extends ProductProps{
	product_colors: ProductColors

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
	handleAddToCart: (addItemToCart: ProductProps) => void
}
