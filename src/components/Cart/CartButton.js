import classes from './CartButton.module.css'

import { useDispatch, useSelector } from 'react-redux'
import * as actions from '../../store/actions'

const CartButton = props => {
	const dispatch = useDispatch()
	const totalItems = useSelector(state => state.cart.totalQuantity)

	const toggleCartHandler = () => {
		dispatch(actions.uiActions.toggle())
	}

	return (
		<>
			<button className={classes.button} onClick={toggleCartHandler}>
				<span>My Cart</span>
				<span className={classes.badge}>{totalItems}</span>
			</button>
		</>
	)
}

export default CartButton
