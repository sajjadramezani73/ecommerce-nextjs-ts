import { useCartActions } from '@/src/store/cartSlice'
import LoadSvgIcon from '@/src/utils/LoadSvgIcon'
import CartModal from '../../modal/CartModal'

const MenuAccount = () => {

    const { cartQty, openCart } = useCartActions()

    return (
        <>
            <div className="flex">
                <span className="rounded-full p-3 hover:bg-primary/10 duration-300 cursor-pointer">
                    <LoadSvgIcon name="user" weight={1.5} size={22} color="var(--color-titr)" />
                </span>
                <span className="rounded-full p-3 hover:bg-primary/10 duration-300 cursor-pointer relative"
                    onClick={() => openCart()}>
                    {
                        cartQty > 0 && <span className='absolute top-1.5 left-1.5 w-4 h-4 rounded-full flex justify-center items-center text-[10px] text-white bg-red-500'>
                            {cartQty}
                        </span>
                    }
                    <LoadSvgIcon name="cart" weight={1.5} size={22} color="var(--color-titr)" />
                </span>
            </div>
            <CartModal />
        </>
    )
}

export default MenuAccount