import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 0,
  }
  

export const DetailIdSlice = createSlice({
    name: "DetailID",
    initialState,

    reducers: {
        getDetailID: (state , action) => {
            state.value = action.payload;
        },
    }
})

export const { getDetailID } = DetailIdSlice.actions
export default DetailIdSlice.reducer