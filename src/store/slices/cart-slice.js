import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	items: [],
	totalQuantity: 0
}

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addItem(state, action) {
			const item = action.payload
			const existingItem = state.items.find(i => i.id === item.id)

			if (existingItem) {
				existingItem.quantity++
				existingItem.totalPrice =
					existingItem.price * existingItem.quantity
			} else {
				state.items = [
					...state.items,
					{
						id: item.id,
						price: item.price,
						quantity: 1,
						totalPrice: item.price,
						name: item.title
					}
				]
			}

			state.totalQuantity++
		},
		removeItem(state, action) {
			const id = action.payload
			const existingItem = state.items.find(i => i.id === id)

			existingItem.quantity--
			existingItem.quantity === 0
				? (state.items = state.items.filter(i => i.id !== id))
				: (existingItem.totalPrice =
						existingItem.quantity * existingItem.price)

			state.totalQuantity--
		}
	}
})

// Async actions
const fetchDummyJSON = () => {
	return async dispatch => {
		// Code...

		// dispatch(someAction...)

		const response = await fetch(
			'https://jsonplaceholder.typicode.com/posts/1'
		)
		const data = await response.json()
		console.log(data)

		// dispatch(someAction...)

		// Even more code...
	}
}

export const cartReducer = cartSlice.reducer
export const cartActions = cartSlice.actions
export const cartAsyncActions = { fetchDummyJSON }
