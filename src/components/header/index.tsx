import Image from "next/image"
import Link from "next/link"
import Logo from '../../../public/assets/images/logo.svg'
import MenuAccount from "./MenuAccount/MenuAccount"
import MenuHeader from "./MenuHeader/MenuHeader"

const Header = () => {
    return (
        <div className="h-20 border-b sticky top-0 bg-white">
            <div className="container h-full flex items-center justify-between">
                <Link href="/">
                    <Image src={Logo} alt="logo" className="w-28 md:w-auto" />
                </Link>
                <MenuHeader />
                <MenuAccount />
            </div>
        </div>
    )
}

export default Header