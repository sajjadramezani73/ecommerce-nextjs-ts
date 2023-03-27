import { FC } from "react"
import Header from "../header"

const Layout: FC<any> = ({ children }) => {
    return (
        <div>
            <Header />
            {children}
        </div>
    )
}

export default Layout