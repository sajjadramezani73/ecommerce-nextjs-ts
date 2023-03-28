import { FC } from "react"
import Header from "../header"

const Layout: FC<any> = ({ children }) => {
    return (
        <div>
            <Header />
            <div className="container">
                {children}
            </div>
        </div>
    )
}

export default Layout