import LoadSvgIcon from '@/src/utils/LoadSvgIcon'

const MenuAccount = () => {
    return (
        <div className="flex">
            <span className="rounded-full p-3 hover:bg-primary/10 duration-300 cursor-pointer">
                <LoadSvgIcon name="user" weight={1.5} size={22} color="var(--color-titr)" />
            </span>
            <span className="rounded-full p-3 hover:bg-primary/10 duration-300 cursor-pointer">
                <LoadSvgIcon name="cart" weight={1.5} size={22} color="var(--color-titr)" />
            </span>
        </div>
    )
}

export default MenuAccount