import { FC } from "react"
import Header from "../header"

const Layout: FC<any> = ({ children }) => {
    return (
        <div>
            <Header />
            <div className="container py-8 px-2 xxs:px-0">
                {children}
            </div>
        </div>
    )
}

export default Layout