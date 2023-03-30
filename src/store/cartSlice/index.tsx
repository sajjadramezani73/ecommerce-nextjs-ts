import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

interface cartItem {
    id: number
    count: number
}
interface cartProps {
    cart: cartItem[]
}

const initialState: cartProps = { cart: [] };

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
        },

        decrement: (state, action: PayloadAction<number>) => {
            const itemIndex = state.cart.findIndex(item => item.id === action.payload)
            if (itemIndex > -1) {
                const updateItem = { ...state.cart[itemIndex] }
                updateItem.count = updateItem.count - 1
                state.cart[itemIndex] = updateItem
            }
        },

        removeFromBasket: (state, action: PayloadAction<number>) => {
            console.log(action.payload)
            state.cart = state.cart.filter(item => item.id !== action.payload)
        }
    }
});


export const useCartActions = function () {
    const dispatch = useDispatch();

    return {
        increment: (id: number) => dispatch(actions.increment(id)),
        decrement: (id: number) => dispatch(actions.decrement(id)),
        removeFromBasket: (id: number) => dispatch(actions.removeFromBasket(id)),
    };
};
export default reducer;

