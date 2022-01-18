import Card from '../UI/Card'
import classes from './ProductItem.module.css'

import { useDispatch } from 'react-redux'
import * as actions from '../../store/actions'

const ProductItem = ({ id, title, price, description }) => {
	const dispatch = useDispatch()

	const handleAddItem = () => {
		dispatch(
			actions.cartActions.addItem({
				id,
				price,
				title,
				description
			})
		)
	}

	return (
		<li className={classes.item}>
			<Card>
				<header>
					<h3>{title}</h3>
					<div className={classes.price}>${price.toFixed(2)}</div>
				</header>
				<p>{description}</p>
				<div className={classes.actions}>
					<button onClick={handleAddItem}>Add to Cart</button>
				</div>
			</Card>
		</li>
	)
}

export default ProductItem
