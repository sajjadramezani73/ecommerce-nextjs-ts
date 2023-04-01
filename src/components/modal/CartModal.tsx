/* eslint-disable react-hooks/rules-of-hooks */
import useNumberSeprator from '@/src/hook/useNumberSeprator'
import { useCartActions } from '@/src/store/cartSlice'
import { RootState } from '@/src/store/store'
import LoadSvgIcon from '@/src/utils/LoadSvgIcon'
import React from 'react'
import { useSelector } from 'react-redux'
import ModalRoot from './Modal-root'
import products from '../../data/products.json'


const CartModal = () => {

    const { cart, showCart } = useSelector((store: RootState) => store.cart)
    const { closeCart } = useCartActions()

    return (
        <>
            {showCart && <ModalRoot show={showCart} onClick={() => closeCart()} >
                <div className={`bg-white h-full w-4/5 min-w-[320px] max-w-[320px]  duration-300 sidebar
                ${showCart ? 'active' : ''}`}
                >
                    <div className="h-full flex flex-col justify-between rtl">
                        <div className="flex justify-between items-center p-4 border-b">
                            <span className='cursor-pointer' onClick={() => closeCart()}>
                                <LoadSvgIcon name="close" color="var(--color-captionDark)" />
                            </span>
                            <p className='text-sm text-captionDark'>سبد خرید</p>
                        </div>
                        <div className="flex-grow">product</div>
                        <div className="flex items-center border-t p-4">
                            <button className='bg-primary rounded h-10 w-1/3 text-xs text-white'>ادامه</button>
                            <div className="w-2/3 text-left">
                                <p className='text-sm text-titr font-bold'>{useNumberSeprator(
                                    cart.reduce((total, currentItem) => {
                                        const product = products.find(
                                            (item) => item.id === currentItem.id
                                        )

                                        return total + (product?.price || 0) * currentItem.count
                                    }, 0))} تومان</p>
                            </div>
                        </div>
                    </div>
                </div>
            </ModalRoot>}
        </>
    )
}

export default CartModal