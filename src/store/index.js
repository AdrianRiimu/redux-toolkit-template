import { configureStore } from '@reduxjs/toolkit'
import * as reducers from './reducers'

const store = configureStore({
	reducer: {
		cart: reducers.cartReducer,
		ui: reducers.uiReducer
	}
})

export default store
