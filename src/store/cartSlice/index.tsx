import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { useEffect, useState } from "react";
import { getItem } from "@/src/utils/LocalStorage";


interface cartItem {
    id: number
    count: number
}
interface cartProps {
    cart: cartItem[],
    showCart: boolean
}

const initialState: cartProps = { cart: getItem('basket') || [], showCart: false };

const { actions, reducer } = createSlice({
    name: 'cart',
    initialState,
    reducers: {

        increment: (state, action: PayloadAction<number>) => {
            const itemIndex = state.cart.findIndex(item => item.id === action.payload)
            if (itemIndex > -1) {
                const updateItem = { ...state.cart[itemIndex] }
                updateItem.count = updateItem.count + 1
                state.cart[itemIndex] = updateItem
            } else {
                state.cart.push({ id: action.payload, count: 1 })
            }
            localStorage.setItem('basket', JSON.stringify(state.cart))
        },

        decrement: (state, action: PayloadAction<number>) => {
            const itemIndex = state.cart.findIndex(item => item.id === action.payload)
            if (itemIndex > -1) {
                const updateItem = { ...state.cart[itemIndex] }
                updateItem.count = updateItem.count - 1
                state.cart[itemIndex] = updateItem
            }
            localStorage.setItem('basket', JSON.stringify(state.cart))
        },

        removeFromBasket: (state, action: PayloadAction<number>) => {
            state.cart = state.cart.filter(item => item.id !== action.payload)
            localStorage.setItem('basket', JSON.stringify(state.cart))
        },

        openCart: (state) => {
            state.showCart = true
        },

        closeCart: (state) => {
            state.showCart = false
        }
    }
});


export const useCartActions = function (productId?: number) {
    const dispatch = useDispatch();
    const { cart } = useSelector((store: RootState) => store.cart)

    const [cartItemLocalStorage, setCartItemLocalStorage] = useState<cartItem[]>([]);

    useEffect(() => {
        setCartItemLocalStorage(localStorage.getItem('basket') ? JSON.parse(localStorage.getItem('basket')!) : [])
    }, [cart]);

    const count = cartItemLocalStorage?.find(item => item.id === productId)?.count || 0

    const cartQty = cartItemLocalStorage?.reduce((count, item) => item.count + count, 0)

    return {
        increment: (id: number) => dispatch(actions.increment(id)),
        decrement: (id: number) => dispatch(actions.decrement(id)),
        removeFromBasket: (id: number) => dispatch(actions.removeFromBasket(id)),
        count,
        cartQty,
        openCart: () => dispatch(actions.openCart()),
        closeCart: () => dispatch(actions.closeCart())
    };
};
export default reducer;

