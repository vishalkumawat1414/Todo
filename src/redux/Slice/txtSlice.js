import { createSlice } from "@reduxjs/toolkit";

const txtSlice = createSlice({
	name: "Todo",
	initialState:[],
	reducers: {
		addTxt: (state, action) => {
			// console.log(action.payload);
			const { id, task, desc } = action.payload;
			state.push({ id, task, desc, complete: false });
		},
		dltTxt: (state, action) => {
			return state.filter((item) =>( item.id !== action.payload));
		},
		cmpltTxt: (state, action) => {
			var todo = state.find((todo) => (todo.id == action.payload));
			if (todo) {
				todo.complete = !todo.complete;
			}
		},
	},
});
export default txtSlice.reducer;
export const { addTxt, dltTxt, cmpltTxt } = txtSlice.actions;
