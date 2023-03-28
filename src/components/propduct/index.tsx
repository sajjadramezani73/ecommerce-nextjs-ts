/* eslint-disable @next/next/no-img-element */
import { IProduct } from '@/src/container/Home'
import Image from 'next/image'
import React, { FC } from 'react'

export interface IProductProps {
    product: IProduct
}

const ProductItem: FC<IProductProps> = ({ product }) => {
    console.log(product)
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

        </div>
    )
}

export default ProductItem