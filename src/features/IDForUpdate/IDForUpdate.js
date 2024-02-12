import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: "",
  }
  
export const DetailIdSlice = createSlice({
    name: "UpdateID",
    initialState,

    reducers: {
        getUpdateID: (state , action) => {
            state.value = action.payload;
        },
    }
})

export const { getUpdateID } = DetailIdSlice.actions
export default DetailIdSlice.reducer