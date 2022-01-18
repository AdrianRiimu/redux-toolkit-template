import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	isCartVisible: false
}

const uiSlice = createSlice({
	name: 'ui',
	initialState,
	reducers: {
		toggle(state) {
			// State can now be mutated directly thanks to immerjs
			//  (included by default in redux tookit)
			state.isCartVisible = !state.isCartVisible
		}
	}
})

export const uiReducer = uiSlice.reducer
export const uiActions = uiSlice.actions
