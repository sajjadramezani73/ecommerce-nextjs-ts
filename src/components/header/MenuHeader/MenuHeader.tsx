import Link from "next/link";
import { useState } from "react";

interface IMenuItem {
    title: string;
    href: string;
}

const MenuHeader = () => {

    const [menuItems, setMenuItems] = useState<IMenuItem[]>([
        { title: 'صفحه اصلی', href: '/' },
        { title: 'مردانه', href: '/men' },
        { title: 'زنانه', href: '/women' },
        { title: 'درباره ما', href: '/about-us' },
        { title: 'تماس با ما', href: '/contact-us' },
    ]);

    return (
        <nav className="flex">
            {menuItems.map(item => (
                <Link href={item.href} key={item.href}>
                    <p className="px-4 py-2 rounded-full text-xs font-bold text-titr hover:bg-primary/10 duration-300">
                        {item.title}
                    </p>
                </Link>
            ))}
        </nav>
    )
}

export default MenuHeader