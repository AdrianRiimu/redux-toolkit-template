import ProductItem from './ProductItem'
import classes from './Products.module.css'

const AVAILABLE_PRODUCTS = [
	{
		id: '1',
		price: 44.95,
		name: 'Cursed books',
		description:
			'Found in the archives of some Brittish horror writer obsessed with fish.'
	},
	{
		id: '2',
		price: 0,
		name: 'Drawings that when on sale lose all value',
		description: 'It just works like that.'
	},
	{
		id: '3',
		price: 995.95,
		name: 'NFTs',
		description: "Just because it's a meme now."
	}
]

const Products = props => {
	const itemsList = AVAILABLE_PRODUCTS.map(i => (
		<ProductItem
			id={i.id}
			key={i.id}
			title={i.name}
			price={i.price}
			description={i.description}
		/>
	))

	return (
		<section className={classes.products}>
			<h2>Buy your favorite products</h2>
			<ul>{itemsList}</ul>
		</section>
	)
}

export default Products
