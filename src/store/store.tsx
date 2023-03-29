import { configureStore } from '@reduxjs/toolkit'
import usersReducer from './userSlice';
import cartReducer from './cartSlice'

export const store = configureStore({
    reducer: {
        user: usersReducer,
        cart: cartReducer
    },
})

export type RootState = ReturnType<typeof store.getState>