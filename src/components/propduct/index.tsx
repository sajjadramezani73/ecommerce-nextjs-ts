/* eslint-disable @next/next/no-img-element */
import { IProduct } from '@/src/container/Home'
import useCountProduct from '@/src/hook/useCountProduct'
import { useCartActions } from '@/src/store/cartSlice'
import LoadSvgIcon from '@/src/utils/LoadSvgIcon'
import React, { FC, useEffect, useState } from 'react'

export interface IProductProps {
    product: IProduct
}

const ProductItem: FC<IProductProps> = ({ product }) => {

    const { increment, decrement, removeFromBasket } = useCartActions()
    const { count } = useCountProduct(product.id)

    return (
        <div className='border rounded p-4 flex flex-col justify-between'>
            <div>
                <img
                    src={product?.image}
                    alt={product?.title}
                    className="aspect-[3/4]"
                />
                <p className='limit-text-2 overflow-hidden mt-4 text-sm font-bold text-titr'>{product?.title}</p>
            </div>
            <div className="flex items-center">
                <p className='mr-1 text-sm text-caption'>price:</p>
                <p className='text-base text-captionDark'>{product?.price}</p>
            </div>
            <div className="mt-4">
                {count > 0 ? (
                    <div className="border border-primary rounded flex justify-between items-stretch">
                        <div className='border-r border-primary w-10 flex justify-center items-center cursor-pointer'>
                            {count > 1 && (
                                <span className='' onClick={() => decrement(product.id)}>
                                    <LoadSvgIcon name="minus" size={15} color='var(--color-primary)' />
                                </span>
                            )}
                            {count == 1 && (
                                <span className='' onClick={() => removeFromBasket(product.id)}>
                                    <LoadSvgIcon name="trash" size={20} color='var(--color-primary)' />
                                </span>
                            )}
                        </div>
                        <span className='py-1 text-sm text-captionDark'>{count}</span>
                        <span
                            className='border-l border-primary w-10 flex justify-center items-center cursor-pointer'
                            onClick={() => increment(product.id)}>
                            <LoadSvgIcon name="plus" color='var(--color-primary)' />
                        </span>
                    </div>
                ) : (
                    <button
                        className='w-full bg-primary rounded text-sm font-bold text-white pt-1.5 pb-1'
                        onClick={() => increment(product.id)}>
                        add to cart
                    </button>
                )}
            </div>
        </div>
    )
}

export default ProductItem