import { configureStore } from '@reduxjs/toolkit'
import IDReducer from './IDSliceForDetailBlog/id'
import UpdateReducer from './IDForUpdate/IDForUpdate'
import CategoryReducer from './Category/Category'

export const store = configureStore({
    reducer: {
        DetailID: IDReducer,
        UpdateID: UpdateReducer,
        category: CategoryReducer
    }
})

