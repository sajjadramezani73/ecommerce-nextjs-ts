import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { stat } from "fs";
import { FC } from "react";
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

        addItem: (state, action: PayloadAction<number>) => {
            const itemIndex = state.cart.findIndex(item => item.id === action.payload)
            if (itemIndex > -1) {
                const updateItem = { ...state.cart[itemIndex] }
                updateItem.count = updateItem.count + 1
                state.cart[itemIndex] = updateItem
            } else {
                state.cart.push({ id: action.payload, count: 1 })
            }
        },

        getItemCount: (state, action: PayloadAction<number>) => {
            const ss = state.cart.find(item => item.id === action.payload)?.count || 0
            console.log(ss)
            // state.cart = [{ id: 5, count: 5 }]
            return { ...state, ss: 5 }
        }
    }
});

export const useCartActions = function () {
    const dispatch = useDispatch();

    return {
        addItem: (id: number) => dispatch(actions.addItem(id)),
        getItemCount: (id: number) => dispatch(actions.getItemCount(id)),
    };
};
export default reducer;