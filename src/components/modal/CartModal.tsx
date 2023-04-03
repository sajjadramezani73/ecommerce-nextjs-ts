/* eslint-disable react-hooks/rules-of-hooks */
import useNumberSeprator from '@/src/hook/useNumberSeprator'
import { useCartActions } from '@/src/store/cartSlice'
import { RootState } from '@/src/store/store'
import LoadSvgIcon from '@/src/utils/LoadSvgIcon'
import React from 'react'
import { useSelector } from 'react-redux'
import ModalRoot from './Modal-root'
import products from '../../data/products.json'
import HorizontalProduct from '../propduct/horizontalProduct/HorizontalProduct'


const CartModal = () => {

    const { cart, showCart } = useSelector((store: RootState) => store.cart)
    const { closeCart } = useCartActions()

    return (
        <>
            {showCart && <ModalRoot show={showCart} onClick={() => closeCart()} >
                <div className={`bg-white h-full w-4/5 min-w-[450px] max-w-[450px]  duration-300 sidebar
                ${showCart ? 'active' : ''}`}
                >
                    <div className="h-full flex flex-col justify-between rtl">
                        <div className="flex justify-between items-center p-4 border-b">
                            <span className='cursor-pointer' onClick={() => closeCart()}>
                                <LoadSvgIcon name="close" color="var(--color-captionDark)" />
                            </span>
                            <p className='text-sm text-captionDark'>سبد خرید</p>
                        </div>
                        <div className="flex-grow p-4 flex flex-col gap-y-4 overflow-hidden overflow-y-auto no-scroll">
                            {cart.length > 0 ? (
                                cart.map(item => {
                                    const product = products.find(product => product.id == item.id)!
                                    return <HorizontalProduct key={product.id} product={product} />
                                })
                            ) : (
                                <div className="h-full flex justify-center items-center">
                                    <p className='text-sm text-caption'>محصولی به سبد خرید اضافه نشده است</p>
                                </div>
                            )}
                        </div>
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