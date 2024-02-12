import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    value: ""
}

export const CategorySlice = createSlice({
    name: "category",
    initialState,

    reducers: {
        getCategory: ( state , action) => {
          state.value = action.payload;
        }
    }
})

export const { getCategory } = CategorySlice.actions;
export default CategorySlice.reducer;