'use client';

import Link from "next/link";
import { usePathname } from 'next/navigation'

const NavLinks = () => {
    const pathname = usePathname();

    return(
        <>
            {
                dashboardMenu.map((link) => {
                    return (
                        <Link 
                            key={link.name}
                            href={link.href}
                            className={`link ${pathname === link.href ? 'active' : ''}`}
                        >
                            <p>{link.name}</p>
                        </Link>
                    )
                })
            }
        </>
    )
}

const dashboardMenu = [
     {name: "user", href:"/dashboard/user"},
     {name: "about", href:"/dashboard/about"}
]

export default NavLinks