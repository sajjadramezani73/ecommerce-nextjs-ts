/* eslint-disable @next/next/no-img-element */
import { IProduct } from '@/src/container/Home'
import useNumberSeprator from '@/src/hook/useNumberSeprator'
import { useCartActions } from '@/src/store/cartSlice'
import LoadSvgIcon from '@/src/utils/LoadSvgIcon'
import { FC } from 'react'

interface IProductProps {
    product: IProduct
}

const HorizontalProduct: FC<IProductProps> = ({ product }) => {

    const { increment, decrement, removeFromBasket, count } = useCartActions(product.id)

    return (
        <div className='flex'>
            <div className="w-[100px] min-w-[100px] h-[100px]">
                <img
                    src={product.image}
                    alt={product.title}
                    className='w-full h-full object-fill'
                />
            </div>
            <div className="flex-grow pt-2 pr-4">
                <p className='text-sm font-bold text-titr limit-text-1'>{product.title}</p>
                <p className='text-xs text-caption mt-2'>{product.category}</p>
                <div className="flex flex-col-reverse md:flex-row justify-between items-center mt-2">
                    <div className="w-full md:w-1/2 border border-primary rounded flex justify-between items-stretch">
                        <span
                            className='border-l border-primary w-10 flex justify-center items-center cursor-pointer'
                            onClick={() => increment(product.id)}>
                            <LoadSvgIcon name="plus" color='var(--color-primary)' />
                        </span>
                        <span className='py-1 text-sm text-captionDark'>{count}</span>
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
                    </div>
                    <p className='text-sm text-caption mb-1.5 md:mb-0'>{useNumberSeprator(product.price)} تومان</p>
                </div>
            </div>
        </div>
    )
}

export default HorizontalProduct